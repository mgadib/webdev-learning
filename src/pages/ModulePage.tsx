import { useParams, Navigate, useLocation, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, BookOpen, Lightbulb, FilterX, Leaf, TreePine, Rocket, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import GlowBorder from "@/components/GlowBorder";
import { modules, phases, learningPaths } from "@/data/modules";
import { getModuleChapters, chapters as allChapters } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { useSEO } from "@/hooks/useSEO";
import { SchemaOrgBreadcrumb } from "@/components/SchemaOrg";
import { learningPathIcons } from "@/lib/learningPathIcons";

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const location = useLocation();
  
  // Handle /modul without ID - redirect to home or show module list
  if (!moduleId || moduleId === "" || location.pathname === "/modul") {
    return <ModuleListPage />;
  }
  
  const id = Number(moduleId);
  const moduleData = modules.find((m) => m.id === id);
  const chapters = getModuleChapters(id);
  const { isCompleted, getModuleProgress } = useProgress();

  if (!moduleData || chapters.length === 0) {
    return <Navigate to="/" replace />;
  }

  const progress = getModuleProgress(id, chapters.length);

  useSEO({
    title: `${moduleData.title} — ${moduleData.subtitle}`,
    description: moduleData.description,
    ogType: "article",
    canonicalPath: `/modul/${id}`,
  });

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <SchemaOrgBreadcrumb
        items={[
          { name: "Beranda", url: "/" },
          { name: `Modul ${id}: ${moduleData.title}` },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Beranda", path: "/" },
          { label: `Modul ${id}` },
        ]}
      />

      <ScrollReveal>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-[12px] font-body font-semibold text-app-success">
            {moduleData.phase}
          </span>
          <span className="text-app-subtle">·</span>
          <span className="inline-block px-3 py-1 border border-app-accent text-app-accent rounded-full text-[12px] font-body font-semibold bg-transparent">
            {moduleData.level}
          </span>
          <span className="inline-block px-3 py-1 border border-app-default text-app-muted rounded-full text-[12px] font-body font-semibold bg-app-surface-card">
            {moduleData.topic}
          </span>
          <span className="text-app-subtle">·</span>
          <span className="text-[13px] text-app-muted font-body">
            {chapters.length} chapter
          </span>
        </div>
        <h1 className="font-display text-[28px] sm:text-[40px] text-app-heading leading-[1.2] mobile-break">
          {moduleData.title}
        </h1>
        <p className="font-subtitle text-[16px] sm:text-[18px] text-app-heading mt-2 italic">
          {moduleData.subtitle}
        </p>
        <p className="font-body text-[15px] sm:text-[16px] text-app-muted mt-3 leading-relaxed">
          {moduleData.description}
        </p>
      </ScrollReveal>

      {/* Prerequisites & Why */}
      <ScrollReveal stagger={1}>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 bg-app-surface-card border border-app-default rounded-[14px] p-4">
            <BookOpen size={18} strokeWidth={1.75} className="text-app-accent shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="font-body text-[12px] font-semibold text-app-muted uppercase tracking-wide">Prasyarat</p>
              <p className="font-body text-[14px] text-app-heading mt-1">{moduleData.prerequisites}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-app-surface-card border border-app-default rounded-[14px] p-4">
            <Lightbulb size={18} strokeWidth={1.75} className="text-app-accent shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="font-body text-[12px] font-semibold text-app-muted uppercase tracking-wide">Kenapa Ini Penting</p>
              <p className="font-body text-[14px] text-app-heading mt-1">{moduleData.why}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Progress Bar */}
      <ScrollReveal stagger={1}>
        <div className="mt-6">
          <div className="w-full h-2 bg-app-inset rounded-full overflow-hidden">
          <div
            className="h-full bg-app-success rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress.percentage}%` }}
          />
          </div>
          <p className="text-[13px] text-app-muted font-body mt-2">
            {progress.completed} dari {progress.total} chapter selesai
          </p>
        </div>
      </ScrollReveal>

      {/* Chapter List */}
      <div className="flex flex-col gap-4 mt-8">
        {chapters.map((chapter, i) => {
          const completed = isCompleted(id, chapter.id);
          const isFirst = i === 0;
          return (
            <ScrollReveal key={chapter.id} stagger={Math.min(i + 1, 6)}>
              {isFirst ? (
                <GlowBorder active={true}>
                  <Link
                    to={`/modul/${id}/chapter/${chapter.id}`}
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-app-surface-card border border-app-strong rounded-[20px] transition-all duration-200 hover:translate-x-1 hover:border-app-accent"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-app-accent text-app-on-accent flex items-center justify-center font-body text-[16px] sm:text-[18px] font-bold shrink-0">
                      {completed ? (
                        <CheckCircle2 size={22} strokeWidth={1.75} />
                      ) : (
                        <span>{i + 1}</span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-body text-[16px] sm:text-[18px] font-semibold text-app-heading leading-snug line-clamp-2">
                        {chapter.title}
                      </h3>
                      <p className="font-body text-[13px] sm:text-[14px] text-app-muted line-clamp-2">
                        {chapter.subtitle}
                      </p>
                      <span className="mt-2 inline-flex w-fit rounded-full border border-app-default px-2 py-0.5 font-body text-[11px] font-semibold text-app-muted">
                        {chapter.topic}
                      </span>
                    </div>
                    <ArrowRight
                      size={20}
                      strokeWidth={1.75}
                      className="text-app-subtle shrink-0"
                    />
                  </Link>
                </GlowBorder>
              ) : (
                <Link
                  to={`/modul/${id}/chapter/${chapter.id}`}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-app-surface-card border border-app-strong rounded-[20px] transition-all duration-200 hover:translate-x-1 hover:border-app-accent"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-body text-[16px] sm:text-[18px] font-bold shrink-0 ${
                      completed
                        ? "bg-app-success text-app-on-success"
                        : "bg-app-accent text-app-on-accent"
                    }`}
                  >
                    {completed ? <CheckCircle2 size={22} strokeWidth={1.75} /> : <span>{i + 1}</span>}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-body text-[16px] sm:text-[18px] font-semibold text-app-heading leading-snug line-clamp-2">
                      {chapter.title}
                    </h3>
                    <p className="font-body text-[13px] sm:text-[14px] text-app-muted line-clamp-2">
                      {chapter.subtitle}
                    </p>
                    <span className="mt-2 inline-flex w-fit rounded-full border border-app-default px-2 py-0.5 font-body text-[11px] font-semibold text-app-muted">
                      {chapter.topic}
                    </span>
                  </div>
                  <ArrowRight
                    size={20}
                    strokeWidth={1.75}
                    className="text-app-subtle shrink-0"
                  />
                </Link>
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

// Module List Page - shown at /modul
function ModuleListPage() {
  useSEO({
    title: "Daftar Modul Pembelajaran",
    description:
      "27 modul pembelajaran web development terorganisir dalam 6 fase — dari Fondasi Web, Membangun Aplikasi, Spesialisasi, Ekosistem Modern, Skill Professional, hingga Advanced Engineering.",
    canonicalPath: "/modul",
  });

  const { getModuleProgress } = useProgress();
  const [searchParams, setSearchParams] = useSearchParams();

  const levelFilter = searchParams.get("level")?.toLowerCase() || null;
  const jalurFilter = searchParams.get("jalur") || null;

  // Resolve filter info
  const filterInfo = useMemo(() => {
    if (levelFilter) {
      const map: Record<string, { label: string; desc: string; icon: LucideIcon; color: string }> = {
        pemula: { label: "Pemula", desc: "Fondasi web untuk pemula", icon: Leaf, color: "var(--app-accent)" },
        menengah: { label: "Menengah", desc: "Membangun aplikasi nyata", icon: TreePine, color: "var(--phase-2)" },
        lanjutan: { label: "Lanjutan", desc: "Production-ready dan engineering practice", icon: Rocket, color: "var(--app-primary)" },
        lanjut: { label: "Lanjutan", desc: "Production-ready dan engineering practice", icon: Rocket, color: "var(--app-primary)" },
        spesialisasi: { label: "Spesialisasi", desc: "Deep-dive sesuai jalur karier", icon: Sparkles, color: "var(--phase-3)" },
      };
      return map[levelFilter] || null;
    }
    if (jalurFilter) {
      const path = learningPaths.find(
        (p) => p.name.toLowerCase() === jalurFilter.toLowerCase()
      );
      if (path) {
        return { label: path.name, desc: path.description, icon: learningPathIcons[path.icon], color: "var(--app-accent)" };
      }
    }
    return null;
  }, [levelFilter, jalurFilter]);

  // Filter modules
  const filteredModules = useMemo(() => {
    if (!levelFilter && !jalurFilter) return null; // Show all by phase

    if (levelFilter) {
      const levelMap: Record<string, string[]> = {
        pemula: ["Pemula"],
        menengah: ["Menengah"],
        lanjutan: ["Lanjutan"],
        lanjut: ["Lanjutan"],
        spesialisasi: ["Spesialisasi"],
      };
      const levels = levelMap[levelFilter] || [];
      return modules.filter((m) => levels.includes(m.level));
    }

    if (jalurFilter) {
      const path = learningPaths.find(
        (p) => p.name.toLowerCase() === jalurFilter.toLowerCase()
      );
      if (path) {
        return modules.filter((m) => path.modules.includes(m.id));
      }
    }

    return null;
  }, [levelFilter, jalurFilter]);

  const clearFilter = () => {
    setSearchParams({});
  };

  const getPhaseForModule = (modId: number) => {
    return phases.find((p) => p.modules.includes(modId));
  };

  // ===== FILTERED VIEW =====
  if (filteredModules) {
    return (
      <div className="max-w-content mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: "Beranda", path: "/" },
            { label: "Daftar Modul", path: "/modul" },
            { label: filterInfo?.label || "Filter" },
          ]}
        />

        <ScrollReveal>
          <div className="flex items-start gap-3 mb-2">
            {filterInfo?.icon && (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-app-on-accent"
                style={{ backgroundColor: filterInfo.color }}
              >
                <filterInfo.icon size={20} />
              </div>
            )}
            <div className="min-w-0">
              <h1 className="font-display text-[28px] sm:text-[40px] text-app-heading leading-[1.2] mobile-break">
                {filterInfo?.label}
              </h1>
              <p className="font-body text-[15px] text-app-muted">
                {filterInfo?.desc}
              </p>
            </div>
          </div>
          <p className="font-body text-[14px] text-app-muted mt-1">
            Menampilkan {filteredModules.length} dari {modules.length} modul
          </p>
        </ScrollReveal>

        {/* Clear filter */}
        <div className="mt-4">
          <button
            onClick={clearFilter}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-2 border border-app-strong rounded-full font-body text-[13px] font-medium text-app-heading hover:bg-app-primary hover:text-app-on-primary hover:border-app-primary transition-colors touch-target"
          >
            <FilterX size={14} strokeWidth={1.75} />
            Tampilkan semua modul
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {filteredModules.map((mod, modIdx) => {
            const phase = getPhaseForModule(mod.id);
            const progress = getModuleProgress(mod.id, mod.chapterCount);
            return (
              <ScrollReveal key={mod.id} stagger={Math.min(modIdx + 1, 4)}>
                <Link
                  to={`/modul/${mod.id}`}
                  className="block bg-app-surface-card border border-app-strong rounded-[20px] p-4 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-body text-[13px] font-bold text-app-heading">
                      {String(mod.id).padStart(2, "0")}.
                    </span>
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold border-2 bg-transparent"
                      style={{
                        borderColor: phase?.color || "var(--app-accent)",
                        color: phase?.color || "var(--app-accent)",
                      }}
                    >
                      {mod.level}
                    </span>
                    <span className="text-[12px] text-app-muted font-body">
                      {mod.chapterCount} chapter
                    </span>
                    <span className="text-[12px] text-app-muted font-body">
                      {mod.topic}
                    </span>
                    {progress.completed > 0 && (
                      <span className="text-[12px] font-body font-semibold text-app-success ml-0 sm:ml-auto">
                        {progress.completed}/{progress.total} selesai
                      </span>
                    )}
                  </div>
                  <h3 className="font-body text-[17px] sm:text-[20px] font-bold text-app-heading leading-snug mobile-break">
                    {mod.title}
                  </h3>
                  <p className="font-subtitle text-[13px] sm:text-[14px] text-app-heading italic mt-0.5">
                    {mod.subtitle}
                  </p>
                  <div className="mt-3 flex items-center gap-4 min-w-0">
                    <span className="inline-flex items-start gap-1 font-body text-[12px] text-app-muted min-w-0">
                      <BookOpen size={12} strokeWidth={1.75} /> {mod.prerequisites.split(".")[0]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="inline-flex items-center gap-1 font-body text-[13px] font-medium text-app-accent">
                      Lihat Chapter <ArrowRight size={13} strokeWidth={1.75} />
                    </span>
                  </div>
                  {progress.total > 0 && progress.completed > 0 && (
                    <div className="mt-3">
                        <div className="w-full h-1.5 bg-app-inset rounded-full overflow-hidden">
                        <div
                          className="h-full bg-app-success rounded-full transition-all duration-500"
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                    </div>
                  )}
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    );
  }

  // ===== DEFAULT VIEW (all modules by phase) =====
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <Breadcrumb
        items={[
          { label: "Beranda", path: "/" },
          { label: "Daftar Modul" },
        ]}
      />

      <ScrollReveal>
        <h1 className="font-display text-[28px] sm:text-[40px] text-app-heading leading-[1.2]">
          Daftar Modul
        </h1>
        <p className="font-body text-[15px] sm:text-[16px] text-app-muted mt-2">
          {modules.length} modul dengan {allChapters.length} chapter — terorganisir dalam {phases.length} fase pembelajaran
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-10 mt-8">
        {phases.map((phase, phaseIdx) => (
          <div key={phase.name}>
            {/* Phase Header */}
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: phase.color }}
              />
              <h2 className="font-display text-[20px] sm:text-[24px] text-app-heading leading-tight mobile-break">
                {phase.name}
              </h2>
              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold border-2 bg-transparent"
                style={{ borderColor: phase.color, color: phase.color }}
              >
                {phase.level}
              </span>
            </div>
            <p className="font-body text-[14px] text-app-muted sm:ml-6 mb-4">
              {phase.description}
            </p>

            {/* Module Cards */}
            <div className="flex flex-col gap-4">
              {phase.modules.map((modId, modIdx) => {
                const mod = modules.find((m) => m.id === modId);
                if (!mod) return null;
                const progress = getModuleProgress(mod.id, mod.chapterCount);
                return (
                  <ScrollReveal key={mod.id} stagger={Math.min(modIdx + 1, 4)}>
                    <Link
                      to={`/modul/${mod.id}`}
                      className="block bg-app-surface-card border border-app-strong rounded-[20px] p-4 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                    >
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-body text-[13px] font-bold text-app-heading">
                          {String(mod.id).padStart(2, "0")}.
                        </span>
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold border-2 bg-transparent"
                          style={{ borderColor: phase.color, color: phase.color }}
                        >
                          {mod.level}
                        </span>
                        <span className="text-[12px] text-app-muted font-body">
                          {mod.chapterCount} chapter
                        </span>
                        <span className="text-[12px] text-app-muted font-body">
                          {mod.topic}
                        </span>
                        {progress.completed > 0 && (
                          <span className="text-[12px] font-body font-semibold text-app-success ml-0 sm:ml-auto">
                            {progress.completed}/{progress.total} selesai
                          </span>
                        )}
                      </div>
                      <h3 className="font-body text-[17px] sm:text-[20px] font-bold text-app-heading leading-snug mobile-break">
                        {mod.title}
                      </h3>
                      <p className="font-subtitle text-[13px] sm:text-[14px] text-app-heading italic mt-0.5">
                        {mod.subtitle}
                      </p>
                      <div className="mt-3 flex items-center gap-4 min-w-0">
                        <span className="inline-flex items-start gap-1 font-body text-[12px] text-app-muted min-w-0">
                          <BookOpen size={12} strokeWidth={1.75} /> {mod.prerequisites.split(".")[0]}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="inline-flex items-center gap-1 font-body text-[13px] font-medium text-app-accent">
                          Lihat Chapter <ArrowRight size={13} strokeWidth={1.75} />
                        </span>
                      </div>

                      {/* Mini progress bar */}
                      {progress.total > 0 && progress.completed > 0 && (
                        <div className="mt-3">
                        <div className="w-full h-1.5 bg-app-inset rounded-full overflow-hidden">
                        <div
                          className="h-full bg-app-success rounded-full transition-all duration-500"
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                        </div>
                      )}
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Phase Connector */}
            {phaseIdx < phases.length - 1 && (
              <div className="flex justify-center mt-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-4 bg-app-default" />
                  <ArrowRight size={14} strokeWidth={1.75} className="text-app-subtle rotate-90" />
                  <div className="w-0.5 h-4 bg-app-default" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
