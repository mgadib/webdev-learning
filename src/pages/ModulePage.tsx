import { useParams, Navigate, useLocation, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lock, Target, FilterX, Leaf, TreePine, Rocket } from "lucide-react";
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
    <div className="max-w-content mx-auto px-4 sm:px-6 pt-24 pb-16">
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
          <span className="text-[12px] font-body font-semibold text-aw-green">
            {moduleData.phase}
          </span>
          <span className="text-aw-border-dim">·</span>
          <span className="inline-block px-3 py-1 bg-aw-blue text-white rounded-full text-[12px] font-body font-semibold">
            {moduleData.level}
          </span>
          <span className="text-aw-border-dim">·</span>
          <span className="text-[13px] text-aw-border-mid font-body">
            {chapters.length} chapter
          </span>
        </div>
        <h1 className="font-display text-[28px] sm:text-[40px] text-aw-black leading-[1.2]">
          {moduleData.title}
        </h1>
        <p className="font-subtitle text-[16px] sm:text-[18px] text-aw-black mt-2 italic">
          {moduleData.subtitle}
        </p>
        <p className="font-body text-[15px] sm:text-[16px] text-aw-border-mid mt-3 leading-relaxed">
          {moduleData.description}
        </p>
      </ScrollReveal>

      {/* Prerequisites & Why */}
      <ScrollReveal stagger={1}>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-[14px] p-4">
            <Lock size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-[12px] font-semibold text-amber-700 uppercase tracking-wide">Prasyarat</p>
              <p className="font-body text-[14px] text-amber-800 mt-1">{moduleData.prerequisites}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-[14px] p-4">
            <Target size={18} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-[12px] font-semibold text-blue-700 uppercase tracking-wide">Kenapa Ini Penting</p>
              <p className="font-body text-[14px] text-blue-800 mt-1">{moduleData.why}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Progress Bar */}
      <ScrollReveal stagger={1}>
        <div className="mt-6">
          <div className="w-full h-2 bg-aw-border-dim rounded-full overflow-hidden">
            <div
              className="h-full bg-aw-green rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <p className="text-[13px] text-aw-border-mid font-body mt-2">
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
                    className="flex items-center gap-4 p-4 sm:p-6 bg-aw-card-bg border-2 border-aw-black rounded-[20px] transition-all duration-200 hover:translate-x-1 hover:border-aw-blue"
                  >
                    <div className="w-12 h-12 rounded-full bg-aw-blue text-white flex items-center justify-center font-body text-[18px] font-bold shrink-0">
                      {completed ? (
                        <CheckCircle2 size={22} />
                      ) : (
                        <span>{i + 1}</span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-body text-[16px] sm:text-[18px] font-semibold text-aw-black truncate">
                        {chapter.title}
                      </h3>
                      <p className="font-body text-[13px] sm:text-[14px] text-aw-border-mid truncate">
                        {chapter.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-aw-border-dim shrink-0"
                    />
                  </Link>
                </GlowBorder>
              ) : (
                <Link
                  to={`/modul/${id}/chapter/${chapter.id}`}
                  className="flex items-center gap-4 p-4 sm:p-6 bg-aw-card-bg border-2 border-aw-black rounded-[20px] transition-all duration-200 hover:translate-x-1 hover:border-aw-blue"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-body text-[18px] font-bold shrink-0 ${
                      completed
                        ? "bg-aw-green text-white"
                        : "bg-aw-blue text-white"
                    }`}
                  >
                    {completed ? <CheckCircle2 size={22} /> : <span>{i + 1}</span>}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-body text-[16px] sm:text-[18px] font-semibold text-aw-black truncate">
                      {chapter.title}
                    </h3>
                    <p className="font-body text-[13px] sm:text-[14px] text-aw-border-mid truncate">
                      {chapter.subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-aw-border-dim shrink-0"
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
      const map: Record<string, { label: string; desc: string; icon: typeof Leaf; color: string }> = {
        pemula: { label: "Pemula", desc: "Fondasi web untuk pemula", icon: Leaf, color: "#10b981" },
        menengah: { label: "Menengah", desc: "Membangun aplikasi nyata", icon: TreePine, color: "#3b82f6" },
        lanjut: { label: "Lanjut", desc: "Spesialisasi deep-dive", icon: Rocket, color: "#8b5cf6" },
      };
      return map[levelFilter] || null;
    }
    if (jalurFilter) {
      const path = learningPaths.find(
        (p) => p.name.toLowerCase() === jalurFilter.toLowerCase()
      );
      if (path) {
        return { label: path.name, desc: path.description, icon: null as unknown as typeof Leaf, color: "#2563eb" };
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
        menengah: ["Menengah", "Pemula-Menengah", "Menengah-Lanjut"],
        lanjut: ["Lanjut", "Menengah-Lanjut"],
      };
      const levels = levelMap[levelFilter] || [];
      return modules.filter((m) => levels.some((l) => m.level.includes(l)));
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
      <div className="max-w-content mx-auto px-4 sm:px-6 pt-24 pb-16">
        <Breadcrumb
          items={[
            { label: "Beranda", path: "/" },
            { label: "Daftar Modul", path: "/modul" },
            { label: filterInfo?.label || "Filter" },
          ]}
        />

        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            {filterInfo?.icon && (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: filterInfo.color }}
              >
                <filterInfo.icon size={20} />
              </div>
            )}
            <div>
              <h1 className="font-display text-[28px] sm:text-[40px] text-aw-black leading-[1.2]">
                {filterInfo?.label}
              </h1>
              <p className="font-body text-[15px] text-aw-border-mid">
                {filterInfo?.desc}
              </p>
            </div>
          </div>
          <p className="font-body text-[14px] text-aw-border-mid mt-1">
            Menampilkan {filteredModules.length} dari {modules.length} modul
          </p>
        </ScrollReveal>

        {/* Clear filter */}
        <div className="mt-4">
          <button
            onClick={clearFilter}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-aw-black rounded-full font-body text-[13px] font-medium text-aw-black hover:bg-aw-black hover:text-white transition-colors"
          >
            <FilterX size={14} />
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
                  className="block bg-aw-card-bg border-2 border-aw-black rounded-[20px] p-4 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-body text-[13px] font-bold text-aw-black">
                      {String(mod.id).padStart(2, "0")}.
                    </span>
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold text-white"
                      style={{
                        backgroundColor: phase?.color || "#2563eb",
                      }}
                    >
                      {mod.level}
                    </span>
                    <span className="text-[12px] text-aw-border-mid font-body">
                      {mod.chapterCount} chapter
                    </span>
                    {progress.completed > 0 && (
                      <span className="text-[12px] font-body font-semibold text-aw-green ml-auto">
                        {progress.completed}/{progress.total} selesai
                      </span>
                    )}
                  </div>
                  <h3 className="font-body text-[17px] sm:text-[20px] font-bold text-aw-black leading-snug">
                    {mod.title}
                  </h3>
                  <p className="font-subtitle text-[13px] sm:text-[14px] text-aw-black italic mt-0.5">
                    {mod.subtitle}
                  </p>
                  <p className="font-body text-[13px] sm:text-[14px] text-aw-border-mid mt-2 leading-relaxed">
                    {mod.description}
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <span className="inline-flex items-center gap-1 font-body text-[12px] text-aw-border-mid">
                      <Lock size={12} /> {mod.prerequisites.split(".")[0]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="inline-flex items-center gap-1 font-body text-[13px] font-medium text-aw-blue">
                      Lihat Chapter <ArrowRight size={13} />
                    </span>
                  </div>
                  {progress.total > 0 && progress.completed > 0 && (
                    <div className="mt-3">
                      <div className="w-full h-1.5 bg-aw-border-dim rounded-full overflow-hidden">
                        <div
                          className="h-full bg-aw-green rounded-full transition-all duration-500"
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
    <div className="max-w-content mx-auto px-4 sm:px-6 pt-24 pb-16">
      <Breadcrumb
        items={[
          { label: "Beranda", path: "/" },
          { label: "Daftar Modul" },
        ]}
      />

      <ScrollReveal>
        <h1 className="font-display text-[28px] sm:text-[40px] text-aw-black leading-[1.2]">
          Daftar Modul
        </h1>
        <p className="font-body text-[15px] sm:text-[16px] text-aw-border-mid mt-2">
          {modules.length} modul dengan {allChapters.length} chapter — terorganisir dalam {phases.length} fase pembelajaran
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-10 mt-8">
        {phases.map((phase, phaseIdx) => (
          <div key={phase.name}>
            {/* Phase Header */}
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: phase.color }}
              />
              <h2 className="font-display text-[20px] sm:text-[24px] text-aw-black">
                {phase.name}
              </h2>
              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold text-white"
                style={{ backgroundColor: phase.color }}
              >
                {phase.level}
              </span>
            </div>
            <p className="font-body text-[14px] text-aw-border-mid ml-6 mb-4">
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
                      className="block bg-aw-card-bg border-2 border-aw-black rounded-[20px] p-4 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                    >
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-body text-[13px] font-bold text-aw-black">
                          {String(mod.id).padStart(2, "0")}.
                        </span>
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold text-white"
                          style={{ backgroundColor: phase.color }}
                        >
                          {mod.level}
                        </span>
                        <span className="text-[12px] text-aw-border-mid font-body">
                          {mod.chapterCount} chapter
                        </span>
                        {progress.completed > 0 && (
                          <span className="text-[12px] font-body font-semibold text-aw-green ml-auto">
                            {progress.completed}/{progress.total} selesai
                          </span>
                        )}
                      </div>
                      <h3 className="font-body text-[17px] sm:text-[20px] font-bold text-aw-black leading-snug">
                        {mod.title}
                      </h3>
                      <p className="font-subtitle text-[13px] sm:text-[14px] text-aw-black italic mt-0.5">
                        {mod.subtitle}
                      </p>
                      <p className="font-body text-[13px] sm:text-[14px] text-aw-border-mid mt-2 leading-relaxed">
                        {mod.description}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="inline-flex items-center gap-1 font-body text-[12px] text-aw-border-mid">
                          <Lock size={12} /> {mod.prerequisites.split(".")[0]}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="inline-flex items-center gap-1 font-body text-[13px] font-medium text-aw-blue">
                          Lihat Chapter <ArrowRight size={13} />
                        </span>
                      </div>

                      {/* Mini progress bar */}
                      {progress.total > 0 && progress.completed > 0 && (
                        <div className="mt-3">
                          <div className="w-full h-1.5 bg-aw-border-dim rounded-full overflow-hidden">
                            <div
                              className="h-full bg-aw-green rounded-full transition-all duration-500"
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
                  <div className="w-0.5 h-4 bg-aw-border-dim" />
                  <ArrowRight size={14} className="text-aw-border-dim rotate-90" />
                  <div className="w-0.5 h-4 bg-aw-border-dim" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
