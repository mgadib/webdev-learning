import { useParams, Navigate } from "react-router-dom";
import {
  CheckCircle2,
  Compass,
  Lightbulb,
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
import MarkdownContent from "@/components/MarkdownContent";

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

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: "Beranda", path: "/" },
            { label: `Modul ${modId}`, path: `/modul/${modId}` },
            { label: chapter.title },
          ]}
        />

        {/* ── Section 1: Chapter Header ── */}
        <ScrollReveal>
          <span className="inline-block px-4 py-1 bg-app-accent text-app-on-accent rounded-full text-[13px] font-body font-semibold">
            Chapter {chapter.chapterNum}
          </span>
          <span className="ml-2 inline-block px-3 py-1 border border-app-default bg-app-surface-card text-app-muted rounded-full text-[12px] font-body font-semibold">
            {chapter.topic}
          </span>
          <h1 className="font-display text-[28px] sm:text-[40px] text-app-heading mt-3 leading-[1.2] mobile-break">
            {chapter.title}
          </h1>
          <div className="w-[60px] h-[2px] bg-app-accent mt-4" />
        </ScrollReveal>

        {/* ── Section 2: Tujuan Pembelajaran ── */}
        <ScrollReveal stagger={1}>
          <div className="mt-8 bg-app-surface-chapter border border-app-default rounded-2xl p-5 sm:p-6">
            <div className="flex items-start sm:items-center gap-2 mb-4">
              <Compass size={20} strokeWidth={1.75} className="text-app-accent" />
              <h2 className="font-body text-[16px] font-semibold text-app-heading">
                Tujuan Pembelajaran
              </h2>
            </div>
            <ul className="space-y-3">
              {chapter.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    strokeWidth={1.75}
                    className="text-app-success shrink-0 mt-0.5"
                  />
                  <span className="font-body text-[14px] sm:text-[15px] text-app-body leading-relaxed">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* ── Section 3: Analogi ── */}
        <ScrollReveal stagger={1}>
          <div className="mt-8 bg-app-surface-card border border-app-default rounded-2xl p-5 sm:p-8">
            <div className="flex items-start sm:items-center gap-2 mb-4">
              <Lightbulb size={20} strokeWidth={1.75} className="text-app-success" />
              <h2 className="font-display text-[24px] sm:text-[28px] text-app-heading leading-tight">
                Analogi
              </h2>
            </div>

            <div className="bg-app-elevated border border-dashed border-app-default rounded-xl p-3 sm:p-5 overflow-x-auto -mx-1 max-w-full">
              <pre className="font-mono text-[10px] sm:text-[14px] text-app-body leading-relaxed whitespace-pre min-w-max p-1">
                {chapter.analogy.diagram}
              </pre>
            </div>

             <MarkdownContent className="font-body text-[13px] sm:text-[14px] italic text-app-muted mt-3" content={chapter.analogy.caption} />
          </div>
        </ScrollReveal>

        {/* ── Section 4: Penjelasan Konsep ── */}
        <ScrollReveal stagger={1}>
          <div className="mt-8 bg-app-elevated/50 rounded-2xl p-4 sm:p-6 border border-app-subtle">
            <h2 className="font-body text-[17px] sm:text-[19px] font-semibold text-app-heading mb-5 flex items-start sm:items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-app-accent" />
              Penjelasan Konsep
            </h2>
            <div className="space-y-1">
               {chapter.explanation && (
                 <MarkdownContent content={chapter.explanation} />
               )}
             </div>
          </div>
        </ScrollReveal>

        {/* ── Section 5: Contoh Kode + Explain-Along ── */}
        {chapter.codeExample && (
          <ScrollReveal stagger={1}>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={20} strokeWidth={1.75} className="text-app-accent" />
                <h2 className="font-body text-[17px] sm:text-[19px] font-semibold text-app-heading">
                  Contoh Kode
                </h2>
              </div>
              <CodeBlock
                code={chapter.codeExample.code}
                language={chapter.codeExample.language}
              />

               {chapter.explainAlong && (
                 <div className="mt-4 bg-app-surface-chapter border-l-4 border-app-success rounded-r-xl p-4 sm:p-5">
                   <h3 className="font-body text-[15px] font-semibold text-app-heading mb-2">
                     Penjelasan Kode
                   </h3>
                   <MarkdownContent className="font-body text-[14px] sm:text-[15px] text-app-body leading-relaxed" content={chapter.explainAlong} />
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
