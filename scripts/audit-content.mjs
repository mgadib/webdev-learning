import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const root = process.cwd();
const require = createRequire(import.meta.url);
const allowedLevels = new Set(["Pemula", "Menengah", "Lanjutan", "Spesialisasi"]);
const levelRank = new Map([
  ["Pemula", 1],
  ["Menengah", 2],
  ["Lanjutan", 3],
  ["Spesialisasi", 4],
]);
const allowedTracks = new Set([
  "Frontend Engineer",
  "Backend Engineer",
  "Full-Stack Developer",
  "DevOps & Cloud Engineer",
  "Web Specialist",
]);
const allowedTopics = new Set([
  "Fundamental Web",
  "JavaScript",
  "Data & Storage",
  "API & Auth",
  "Architecture",
  "Security",
  "Performance",
  "DevOps",
  "Frontend",
  "Backend",
  "Database",
  "Testing",
  "AI",
  "Accessibility",
  "System Design",
]);

function loadTsModule(relativePath) {
  const filename = path.join(root, relativePath);
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filename,
  }).outputText;

  const commonExports = {};
  const context = {
    exports: commonExports,
    module: { exports: commonExports },
    require,
    console,
  };

  vm.runInNewContext(output, context, { filename });
  return context.module.exports;
}

const { modules } = loadTsModule("src/data/modules.ts");
const { chapters } = loadTsModule("src/data/chapters.ts");

const issues = [];
const warnings = [];
const chapterIds = new Map();
const chapterCounts = new Map();
const moduleById = new Map(modules.map((mod) => [mod.id, mod]));
const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));

function validateTracks(owner, tracks) {
  if (!Array.isArray(tracks) || tracks.length === 0) {
    issues.push(`${owner} must declare at least one track`);
    return;
  }

  for (const track of tracks) {
    if (!allowedTracks.has(track)) {
      issues.push(`${owner} has invalid track: ${track}`);
    }
  }
}

function validateTopic(owner, topic) {
  if (!allowedTopics.has(topic)) {
    issues.push(`${owner} has invalid topic: ${topic}`);
  }
}

function validateRecommendedAfter(owner, references) {
  if (!Array.isArray(references)) {
    issues.push(`${owner} recommendedAfter must be an array`);
    return;
  }

  for (const reference of references) {
    const moduleMatch = /^module:(\d+)$/.exec(reference);
    const chapterMatch = /^chapter:(.+)$/.exec(reference);

    if (moduleMatch) {
      const moduleId = Number(moduleMatch[1]);
      if (!moduleById.has(moduleId)) {
        issues.push(`${owner} recommendedAfter references missing module: ${reference}`);
      }
      continue;
    }

    if (chapterMatch) {
      if (!chapterById.has(chapterMatch[1])) {
        issues.push(`${owner} recommendedAfter references missing chapter: ${reference}`);
      }
      continue;
    }

    issues.push(`${owner} recommendedAfter has invalid reference format: ${reference}`);
  }
}

function validateLevelAgainstPrerequisites(chapter) {
  if (chapter.allowLowerThanPrerequisite) {
    return;
  }

  const chapterRank = levelRank.get(chapter.level) ?? 0;

  for (const reference of chapter.recommendedAfter ?? []) {
    const moduleMatch = /^module:(\d+)$/.exec(reference);
    const chapterMatch = /^chapter:(.+)$/.exec(reference);
    const prerequisite = moduleMatch
      ? moduleById.get(Number(moduleMatch[1]))
      : chapterMatch
        ? chapterById.get(chapterMatch[1])
        : null;

    if (!prerequisite) {
      continue;
    }

    const prerequisiteRank = levelRank.get(prerequisite.level) ?? 0;
    if (chapterRank < prerequisiteRank) {
      issues.push(
        `Chapter ${chapter.moduleId}:${chapter.id} level ${chapter.level} is lower than prerequisite ${reference} (${prerequisite.level}) without allowLowerThanPrerequisite`
      );
    }
  }
}

function isMarkdownListItem(line) {
  return /^[-*+]\s+/.test(line) || /^\d+\.\s+/.test(line);
}

function auditMarkdownListQuality(owner, markdown) {
  const lines = String(markdown ?? "").split("\n");
  let inCodeFence = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();

    if (line.startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }

    if (inCodeFence || !line) {
      continue;
    }

    if (/^\d+\.$/.test(line)) {
      issues.push(`${owner} has standalone numbered item at line ${i + 1}: ${line}`);
    }

    if (/^[-*+]\s*$/.test(line)) {
      issues.push(`${owner} has empty bullet item at line ${i + 1}`);
    }

    if (/^\d+\.\s*$/.test(line) && !lines[i + 1]?.trim()) {
      issues.push(`${owner} has numbered item separated from its text at line ${i + 1}: ${line}`);
    }

    if (isMarkdownListItem(line)) {
      const previous = lines[i - 1]?.trim() ?? "";
      const previousIsStructural =
        !previous ||
        isMarkdownListItem(previous) ||
        /^#{1,6}\s+/.test(previous) ||
        /^>/.test(previous);

      if (!previousIsStructural) {
        issues.push(`${owner} starts a list without a blank line after paragraph at line ${i + 1}: ${line}`);
      }
    }
  }
}

for (const chapter of chapters) {
  const key = `${chapter.moduleId}:${chapter.id}`;
  chapterIds.set(key, (chapterIds.get(key) ?? 0) + 1);
  chapterCounts.set(chapter.moduleId, (chapterCounts.get(chapter.moduleId) ?? 0) + 1);

  for (const field of ["id", "moduleId", "chapterNum", "title", "subtitle", "level", "objectives", "analogy", "explanation", "aiPrompt", "reflection"]) {
    if (chapter[field] == null || chapter[field] === "") {
      issues.push(`Chapter ${key} missing required field: ${field}`);
    }
  }

  if (!allowedLevels.has(chapter.level)) {
    issues.push(`Chapter ${key} has invalid level: ${chapter.level}`);
  }

  validateTracks(`Chapter ${key}`, chapter.track);
  validateTopic(`Chapter ${key}`, chapter.topic);
  validateRecommendedAfter(`Chapter ${key}`, chapter.recommendedAfter);
  validateLevelAgainstPrerequisites(chapter);

  const coreVitalsHeading = `${chapter.title} ${chapter.subtitle} ${chapter.analogy?.diagram ?? ""}`;
  if (/Core Web Vitals/i.test(coreVitalsHeading) && /\bFID\b/.test(coreVitalsHeading)) {
    issues.push(`Chapter ${key} still presents FID as a primary Core Web Vital`);
  }

  const chapterText = JSON.stringify(chapter);
  if (/(getServerSideProps|getStaticProps|API Routes)/.test(chapterText) && !/(Pages Router|legacy|project lama)/i.test(chapterText)) {
    warnings.push(`Chapter ${key} references Pages Router APIs without an explicit label`);
  }

  auditMarkdownListQuality(`Chapter ${key} explanation`, chapter.explanation);
  auditMarkdownListQuality(`Chapter ${key} analogy caption`, chapter.analogy?.caption);
  auditMarkdownListQuality(`Chapter ${key} explainAlong`, chapter.explainAlong);
  auditMarkdownListQuality(`Chapter ${key} aiPrompt`, chapter.aiPrompt);
  auditMarkdownListQuality(`Chapter ${key} reflection`, chapter.reflection);
}

for (const [key, count] of chapterIds.entries()) {
  if (count > 1) {
    issues.push(`Duplicate chapter id: ${key} appears ${count} times`);
  }
}

for (const mod of modules) {
  const actual = chapterCounts.get(mod.id) ?? 0;

  if (actual !== mod.chapterCount) {
    issues.push(`Module ${mod.id} chapterCount mismatch: declared ${mod.chapterCount}, actual ${actual}`);
  }

  if (!allowedLevels.has(mod.level)) {
    issues.push(`Module ${mod.id} has invalid level: ${mod.level}`);
  }

  validateTracks(`Module ${mod.id}`, mod.track);
  validateTopic(`Module ${mod.id}`, mod.topic);
  validateRecommendedAfter(`Module ${mod.id}`, mod.recommendedAfter);
}

const phaseOrders = modules.map((mod) => mod.phaseOrder);
const duplicatePhaseOrders = phaseOrders.filter((order, index) => phaseOrders.indexOf(order) !== index);
if (duplicatePhaseOrders.length > 0) {
  issues.push(`Duplicate module phaseOrder value(s): ${[...new Set(duplicatePhaseOrders)].join(", ")}`);
}

for (let i = 1; i < modules.length; i += 1) {
  if (modules[i].phaseOrder <= modules[i - 1].phaseOrder) {
    issues.push(`Module ${modules[i].id} phaseOrder must increase from previous module`);
  }
}

const runtimeContent = JSON.stringify(chapters, null, 2);

const errorPatterns = [
  {
    label: "HttpOnly cookie set via document.cookie",
    pattern: /document\.cookie\s*=\s*(?:`|"|')[\s\S]{0,160}HttpOnly/g,
  },
  {
    label: "Sensitive token read from localStorage",
    pattern: /localStorage\.getItem\((?:'|"|`)token(?:'|"|`)\)/g,
  },
  {
    label: "Legacy Chat Completions model in executable examples",
    pattern: /chat\.completions|gpt-4o-mini/g,
  },
];

for (const { label, pattern } of errorPatterns) {
  const matches = runtimeContent.match(pattern) ?? [];
  if (matches.length > 0) {
    issues.push(`${label}: ${matches.length} occurrence(s)`);
  }
}

const summary = {
  modules: modules.length,
  chapters: chapters.length,
  levels: [...allowedLevels],
  tracks: [...allowedTracks],
  topics: [...allowedTopics],
  warnings,
  issues,
};

console.log(JSON.stringify(summary, null, 2));

if (issues.length > 0) {
  process.exitCode = 1;
}
