import { useParams, Navigate } from "react-router-dom";
import {
  CheckCircle2,
  Lightbulb,
  Target,
  Terminal,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import CodeBlock from "@/components/CodeBlock";
import PromptAICard from "@/components/PromptAICard";
import ReflectiveQuestion from "@/components/ReflectiveQuestion";
import ChapterNav from "@/components/ChapterNav";
import { modules } from "@/data/modules";
import { getModuleChapters, getChapter } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";
import { SchemaOrgArticle, SchemaOrgBreadcrumb } from "@/components/SchemaOrg";
import TrailPaintCanvas from "@/components/TrailPaintCanvas";

/* ──────────────────────────────────────────────
   Parse a single paragraph: handles **bold** and `inline code`
   ────────────────────────────────────────────── */
function parseInline(text: string, baseKey: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const codeMatch = remaining.match(/`([^`]+)`/);

    let nextIdx = Infinity;
    let nextType: "bold" | "code" | null = null;
    let nextContent = "";
    let nextFull = "";

    if (boldMatch && boldMatch.index !== undefined) {
      nextIdx = boldMatch.index;
      nextType = "bold";
      nextContent = boldMatch[1];
      nextFull = boldMatch[0];
    }
    if (codeMatch && codeMatch.index !== undefined && codeMatch.index < nextIdx) {
      nextIdx = codeMatch.index;
      nextType = "code";
      nextContent = codeMatch[1];
      nextFull = codeMatch[0];
    }

    if (nextType && nextIdx < Infinity) {
      if (nextIdx > 0) {
        parts.push(<span key={`${baseKey}-s${key++}`}>{remaining.slice(0, nextIdx)}</span>);
      }
      if (nextType === "bold") {
        parts.push(
          <strong key={`${baseKey}-b${key++}`} className="font-semibold text-aw-black dark:text-[#f0f0f0]">
            {nextContent}
          </strong>
        );
      } else {
        parts.push(
          <code
            key={`${baseKey}-c${key++}`}
            className="
              inline-code
              font-mono text-[0.88em] font-medium
              px-[5px] py-[1px]
              rounded-[5px]
              bg-[#eef0f4] dark:bg-[#1e2030]
              text-[#3d3d5c] dark:text-[#c5c8e0]
              border border-[#d8dbe6] dark:border-[#2e3048]
              whitespace-pre-wrap break-words
              align-baseline
            "
          >
            {nextContent}
          </code>
        );
      }
      remaining = remaining.slice(nextIdx + nextFull.length);
    } else {
      parts.push(<span key={`${baseKey}-s${key++}`}>{remaining}</span>);
      break;
    }
  }
  return parts;
}

/* ──────────────────────────────────────────────
   Render explanation text – splits on double newlines,
   handles ```fenced code blocks```, inline styles, headings, lists
   ────────────────────────────────────────────── */
function renderExplanation(text: string): React.ReactNode[] {
  const blocks = text.split("\n\n");
  const result: React.ReactNode[] = [];
  let blockIdx = 0;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const key = `blk-${blockIdx++}`;

    /* ── Fenced code block ── */
    const fenceMatch = block.match(/^```(\w*)\n?([\s\S]*?)```$/);
    if (fenceMatch) {
      const lang = fenceMatch[1] || "text";
      const code = fenceMatch[2].trimEnd();
      result.push(
        <CodeBlock key={key} code={code} language={lang} />
      );
      continue;
    }

    /* ── Horizontal rule ── */
    if (block.trim() === "---") {
      result.push(
        <hr key={key} className="my-7 border-t border-dashed border-aw-border-dim dark:border-white/10" />
      );
      continue;
    }

    /* ── Heading level 2 ── */
    const h2Match = block.match(/^##\s+(.+)$/m);
    if (h2Match && block.startsWith("##")) {
      result.push(
        <h3
          key={key}
          className="font-display text-[19px] sm:text-[22px] font-semibold text-aw-black dark:text-white mt-7 mb-3 leading-snug"
        >
          {parseInline(h2Match[1], key)}
        </h3>
      );
      continue;
    }

    /* ── Heading level 3 ── */
    const h3Match = block.match(/^###\s+(.+)$/m);
    if (h3Match && block.startsWith("###")) {
      result.push(
        <h4
          key={key}
          className="font-display text-[16px] sm:text-[18px] font-semibold text-aw-black dark:text-white mt-5 mb-2 leading-snug"
        >
          {parseInline(h3Match[1], key)}
        </h4>
      );
      continue;
    }

    /* ── Bullet list ── */
    if (block.trim().startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.trim().startsWith("- "));
      result.push(
        <ul key={key} className="my-4 space-y-2.5 ml-0.5">
          {items.map((item, idx) => (
            <li
              key={`${key}-li-${idx}`}
              className="flex items-start gap-3 text-[15px] sm:text-[16px] text-aw-black dark:text-[#e0e0e0] leading-[1.8]"
            >
              <span className="mt-[9px] w-[6px] h-[6px] rounded-full bg-aw-blue/80 shrink-0" />
              <span className="flex-1">{parseInline(item.replace(/^- \s*/, ""), `${key}-li-${idx}`)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    /* ── Numbered list ── */
    if (/^\d+\.\s/.test(block.trim())) {
      const items = block.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
      result.push(
        <ol key={key} className="my-4 space-y-2.5 ml-0.5 list-none">
          {items.map((item, idx) => {
            const numMatch = item.match(/^(\d+)\.\s*(.*)$/);
            return (
              <li
                key={`${key}-li-${idx}`}
                className="flex items-start gap-3 text-[15px] sm:text-[16px] text-aw-black dark:text-[#e0e0e0] leading-[1.8]"
              >
                <span className="font-mono font-semibold text-aw-blue/90 text-[13px] mt-[7px] shrink-0 min-w-[1.8em]">
                  {numMatch?.[1] || idx + 1}.
                </span>
                <span className="flex-1">{parseInline(numMatch?.[2] || item, `${key}-li-${idx}`)}</span>
              </li>
            );
          })}
        </ol>
      );
      continue;
    }

    /* ── Regular paragraph ── */
    // Split kalimat dengan hati-hati (hindari pecah abbreviation)
    const sentenceRegex = /(?<=[.!?])\s+(?=[A-Z\*\`\-])/g;
    const sentences = block.split(sentenceRegex).filter((s) => s.trim());

    // Pecah mega-paragraf (>5 kalimat) jadi chunk 3-4 kalimat
    if (sentences.length > 5) {
      const MAX_SENTENCES = 4;
      for (let s = 0; s < sentences.length; s += MAX_SENTENCES) {
        const chunk = sentences.slice(s, s + MAX_SENTENCES).join(" ");
        const chunkKey = `${key}-s${s}`;
        result.push(
          <p
            key={chunkKey}
            className="font-body text-[15px] sm:text-[16px] text-aw-black dark:text-[#e0e0e0] leading-[1.85] mb-5 max-w-[72ch]"
          >
            {parseInline(chunk, chunkKey)}
          </p>
        );
      }
    } else {
      result.push(
        <p
          key={key}
          className="font-body text-[15px] sm:text-[16px] text-aw-black dark:text-[#e0e0e0] leading-[1.85] mb-5 max-w-[72ch]"
        >
          {parseInline(block, key)}
        </p>
      );
    }
  }

  return result;
}

/* ═══════════════════════════════════════════════
   Chapter Page
   ═══════════════════════════════════════════════ */
export default function ChapterPage() {
  const { moduleId, chapterId } = useParams<{
    moduleId: string;
    chapterId: string;
  }>();
  const modId = Number(moduleId);
  const mod = modules.find((m) => m.id === modId);
  const chapter = getChapter(modId, chapterId || "");
  const allChapters = getModuleChapters(modId);
  const { progress, markComplete } = useProgress();

  useEffect(() => {
    if (chapter) {
      markComplete(modId, chapter.id);
    }
  }, [chapter, modId, markComplete]);

  /* smooth-scroll to top on chapter change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [chapterId]);

  if (!mod || !chapter) {
    return <Navigate to="/" replace />;
  }

  useSEO({
    title: `${chapter.title} (Ch. ${chapter.chapterNum}) — ${mod.title}`,
    description: chapter.subtitle,
    ogType: "article",
    canonicalPath: `/modul/${modId}/chapter/${chapterId}`,
  });

  const chapterIds = allChapters.map((c) => c.id);
  const chapterTitles: Record<string, string> = {};
  allChapters.forEach((c) => {
    chapterTitles[c.id] = c.title;
  });

  return (
    <div className="relative">
      <SchemaOrgArticle
        title={chapter.title}
        description={chapter.subtitle}
        moduleTitle={mod.title}
        chapterNum={chapter.chapterNum}
      />
      <SchemaOrgBreadcrumb
        items={[
          { name: "Beranda", url: "/" },
          { name: mod.title, url: `/modul/${modId}` },
          { name: chapter.title },
        ]}
      />
      <TrailPaintCanvas variant="chapter-bg" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 pt-24 pb-16">
        <Breadcrumb
          items={[
            { label: "Beranda", path: "/" },
            { label: `Modul ${modId}`, path: `/modul/${modId}` },
            { label: chapter.title },
          ]}
        />

        {/* ── Section 1: Chapter Header ── */}
        <ScrollReveal>
          <span className="inline-block px-4 py-1 bg-aw-blue text-white rounded-full text-[13px] font-body font-semibold">
            Chapter {chapter.chapterNum}
          </span>
          <h1 className="font-display text-[28px] sm:text-[40px] text-aw-black dark:text-white mt-3 leading-[1.2]">
            {chapter.title}
          </h1>
          <div className="w-[60px] h-[2px] bg-aw-black dark:bg-white mt-4" />
        </ScrollReveal>

        {/* ── Section 2: Tujuan Pembelajaran ── */}
        <ScrollReveal stagger={1}>
          <div className="mt-8 bg-aw-card-chapter border-2 border-aw-black dark:border-[var(--aw-border-mid)] rounded-[20px] p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target size={20} strokeWidth={2} className="text-aw-blue" />
              <h2 className="font-body text-[16px] font-semibold text-aw-black dark:text-white">
                Tujuan Pembelajaran
              </h2>
            </div>
            <ul className="space-y-3">
              {chapter.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-aw-green shrink-0 mt-0.5"
                  />
                  <span className="font-body text-[14px] sm:text-[15px] text-aw-black dark:text-[#e0e0e0] leading-relaxed">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* ── Section 3: Analogi ── */}
        <ScrollReveal stagger={1}>
          <div className="mt-8 bg-aw-card-bg border-2 border-aw-black dark:border-[var(--aw-border-mid)] rounded-[20px] p-5 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={20} strokeWidth={2} className="text-aw-orange" />
              <h2 className="font-display text-[24px] sm:text-[28px] text-aw-black dark:text-white">
                Analogi
              </h2>
            </div>

            <div className="bg-white dark:bg-[#1a1a2e] border border-dashed border-aw-border-mid rounded-xl p-3 sm:p-5 overflow-x-auto -mx-1">
              <pre className="font-mono text-[11px] sm:text-[14px] text-aw-black dark:text-[#e0e0e0] leading-relaxed whitespace-pre min-w-max p-1">
                {chapter.analogy.diagram}
              </pre>
            </div>

            <p className="font-body text-[13px] sm:text-[14px] italic text-aw-border-mid mt-3">
              {chapter.analogy.caption}
            </p>
          </div>
        </ScrollReveal>

        {/* ── Section 4: Penjelasan Konsep ── */}
        <ScrollReveal stagger={1}>
          <div className="mt-8 bg-white/50 dark:bg-white/[0.03] rounded-2xl p-4 sm:p-6 border border-aw-border-dim/50 dark:border-white/10">
            <h2 className="font-body text-[17px] sm:text-[19px] font-semibold text-aw-black dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-aw-blue" />
              Penjelasan Konsep
            </h2>
            <div className="space-y-1">
              {renderExplanation(chapter.explanation)}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Section 5: Contoh Kode + Explain-Along ── */}
        {chapter.codeExample && (
          <ScrollReveal stagger={1}>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={20} strokeWidth={2} className="text-aw-blue" />
                <h2 className="font-body text-[17px] sm:text-[19px] font-semibold text-aw-black dark:text-white">
                  Contoh Kode
                </h2>
              </div>
              <CodeBlock
                code={chapter.codeExample.code}
                language={chapter.codeExample.language}
              />

              {chapter.explainAlong && (
                <div className="mt-4 bg-aw-card-chapter dark:bg-[#162022] border-l-4 border-aw-orange rounded-r-xl p-4 sm:p-5">
                  <h3 className="font-body text-[15px] font-semibold text-aw-black dark:text-white mb-2">
                    Penjelasan Kode
                  </h3>
                  <p className="font-body text-[14px] sm:text-[15px] text-aw-black dark:text-[#e0e0e0] leading-relaxed">
                    {chapter.explainAlong}
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

        {/* ── Section 6: Prompt AI ── */}
        <ScrollReveal stagger={1}>
          <PromptAICard prompt={chapter.aiPrompt} />
        </ScrollReveal>

        {/* ── Section 7: Pertanyaan Reflektif ── */}
        <ScrollReveal stagger={1}>
          <ReflectiveQuestion
            question={chapter.reflection}
            moduleId={modId}
            chapterId={chapter.id}
          />
        </ScrollReveal>

        {/* ── Section 8: Navigasi ── */}
        <ChapterNav
          moduleId={modId}
          currentChapterId={chapter.id}
          chapterIds={chapterIds}
          chapterTitles={chapterTitles}
          completedChapters={progress}
        />
      </div>
    </div>
  );
}
