import { ArrowRight, BookOpen, Lightbulb, MessageCircleQuestion, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import GlowBorder from "@/components/GlowBorder";
import TrailPaintCanvas from "@/components/TrailPaintCanvas";
import { modules, phases, learningPaths } from "@/data/modules";
import { chapters } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { useSEO } from "@/hooks/useSEO";
import { SchemaOrgWebsite } from "@/components/SchemaOrg";
import { learningPathIcons } from "@/lib/learningPathIcons";

export default function HomePage() {
  useSEO({
    title: "Belajar Web Development dari Fundamental hingga Spesialisasi",
    description:
      "Platform pembelajaran web development gratis dengan 27 modul dan 170+ chapter. Dari HTML, CSS, JavaScript, React, Backend, Database, sampai System Design.",
    canonicalPath: "/",
  });

  const { getModuleProgress } = useProgress();

  return (
    <div className="transition-normal">
      <SchemaOrgWebsite />
      {/* Hero Section */}
      <section className="relative min-h-[52svh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-28 pb-10 sm:pb-16 overflow-hidden">
        <TrailPaintCanvas variant="hero" />
        <div className="relative z-10 text-center w-full max-w-[600px] px-3 sm:px-6 py-6 sm:py-8 rounded-3xl">
          <h1 className="font-display text-[32px] sm:text-[56px] text-app-heading leading-[1.1] drop-shadow-sm mobile-break">
            Webdev Learning
          </h1>
          <p className="font-body text-[16px] sm:text-[20px] italic text-app-muted mt-3">
            Belajar Web di Era AI
          </p>
          <p className="font-body text-[15px] sm:text-[17px] text-app-body mt-4 leading-relaxed">
            Platform pembelajaran web development yang mengajarkan cara kerja web
            dari fundamental hingga spesialisasi — melalui analogi, kode praktis,
            dan refleksi mandiri. <strong className="text-app-heading">{modules.length} modul, {chapters.length} chapter.</strong>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link to="/modul"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-app-primary border-2 border-app-primary text-app-on-primary rounded-full font-body font-semibold text-[15px] transition-normal hover:bg-app-primary-hover hover:border-app-primary-hover shadow-md touch-target"
            >
              Mulai Belajar
              <ArrowRight size={18} strokeWidth={1.75} />
            </Link>
            <Link to="/tentang"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 border-2 border-app-strong text-app-heading rounded-full font-body font-semibold text-[15px] transition-normal hover:bg-app-primary hover:text-app-on-primary hover:border-app-primary bg-app-elevated/80 backdrop-blur-sm touch-target"
            >
              Tentang Metode
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="max-w-content mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <ScrollReveal>
          <h2 className="font-display text-[24px] sm:text-[32px] text-app-heading">
            Jalur Pembelajaran
          </h2>
          <p className="font-body text-[14px] sm:text-[15px] text-app-muted mt-2">
            Pilih jalur sesuai tujuan karirmu — atau ikuti semua untuk jadi full-stack
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {learningPaths.map((path, i) => {
            const PathIcon = learningPathIcons[path.icon];

            return (
              <ScrollReveal key={path.name} stagger={i + 1}>
                <Link to="/modul"
                  className="flex items-start gap-3 p-4 bg-app-surface-card border border-app-default rounded-2xl transition-normal hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div className="w-10 h-10 rounded-full bg-app-accent text-app-on-accent flex items-center justify-center shrink-0">
                    {PathIcon && <PathIcon size={20} strokeWidth={1.75} />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-body text-[14px] font-bold text-app-heading leading-snug mobile-break">{path.name}</h3>
                    <p className="font-body text-[12px] text-app-muted mt-0.5">{path.description}</p>
                    <p className="font-body text-[11px] text-app-accent mt-1">{path.modules.length} modul</p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Module Grid by Phase */}
      <section className="max-w-content mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <ScrollReveal>
          <h2 className="font-display text-[28px] sm:text-[40px] text-app-heading">Kurikulum Lengkap</h2>
          <p className="font-body text-[15px] sm:text-[16px] text-app-muted mt-2">
            Tiga fase pembelajaran dari fundamental hingga spesialisasi
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-12 mt-8">
          {phases.map((phase, phaseIdx) => (
            <ScrollReveal key={phase.name} stagger={phaseIdx + 1}>
              {/* Phase Header */}
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: phase.color }} />
                <h3 className="font-display text-[20px] sm:text-[26px] text-app-heading leading-tight mobile-break">{phase.name}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold border"
                  style={{ borderColor: phase.color, color: phase.color }}
                >
                  {phase.level}
                </span>
              </div>
              <p className="font-body text-[14px] text-app-muted sm:ml-6 mb-4">{phase.description}</p>

              {/* Module Cards */}
              <div className="flex flex-col gap-4">
                {phase.modules.map((modId, modIdx) => {
                  const mod = modules.find((m) => m.id === modId);
                  if (!mod) return null;
                  const progress = getModuleProgress(mod.id, mod.chapterCount);
                  const isFirst = phaseIdx === 0 && modIdx === 0;
                  return (
                    <ScrollReveal key={mod.id} stagger={Math.min(modIdx + 1, 4)}>
                      {isFirst ? (
                        <GlowBorder active={true}>
                          <Link to={`/modul/${mod.id}`}
                            className="block p-5 sm:p-6 transition-normal hover:-translate-y-0.5 hover:shadow-card-hover rounded-2xl"
                          >
                            <ModuleCardContent mod={mod} progress={progress} phaseColor={phase.color} />
                          </Link>
                        </GlowBorder>
                      ) : (
                        <Link to={`/modul/${mod.id}`}
                          className="block p-5 sm:p-6 bg-app-surface-card border border-app-default rounded-2xl transition-normal hover:-translate-y-0.5 hover:shadow-card-hover"
                        >
                          <ModuleCardContent mod={mod} progress={progress} phaseColor={phase.color} />
                        </Link>
                      )}
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Connector */}
              {phaseIdx < phases.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-0.5 h-6 bg-app-default" />
                    <ArrowRight size={16} strokeWidth={1.75} className="text-app-muted rotate-90" />
                    <div className="w-0.5 h-6 bg-app-default" />
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Method Section */}
      <section className="max-w-content mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <ScrollReveal>
          <h2 className="font-display text-[28px] sm:text-[40px] text-app-heading mb-8">Tentang Metode Pembelajaran</h2>
        </ScrollReveal>

        <ScrollReveal stagger={1}>
          <div className="bg-app-surface-chapter border border-app-default rounded-2xl p-6 sm:p-10">
            <p className="font-body text-[16px] sm:text-[17px] text-app-body leading-[1.7]">
              Setiap chapter mengikuti template pembelajaran yang terstruktur:
              tujuan pembelajaran, analogi untuk memvisualisasikan konsep,
              penjelasan konsep dengan bahasa santai (gaya Petani Kode), contoh kode
              minimal dengan penjelasan baris-per-baris, prompt AI untuk eksplorasi
              mandiri, dan pertanyaan reflektif tanpa jawaban mutlak. Metode ini
              dirancang agar kamu memahami &lsquo;mengapa&rsquo; sebelum
              &lsquo;bagaimana&rsquo;.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-8">
              {[
                { icon: Lightbulb, label: "Analogi & Visualisasi" },
                { icon: Terminal, label: "Kode Praktis" },
                { icon: MessageCircleQuestion, label: "Refleksi Mandiri" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon size={32} strokeWidth={1.75} className="text-app-accent" />
                  <span className="font-body text-[14px] font-semibold text-app-heading">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={2}>
          <div className="mt-12 flex items-start gap-4 bg-app-elevated border border-app-default rounded-2xl p-5 sm:p-6">
            <BookOpen size={28} strokeWidth={1.75} className="text-app-accent shrink-0 mt-1" />
            <div className="min-w-0">
              <h3 className="font-body text-[18px] font-bold text-app-heading mb-2">Tips Memulai</h3>
              <p className="font-body text-[15px] text-app-muted leading-relaxed">
                Mulai dari <strong>Fase 1: Fondasi Web</strong> dan kerjakan chapter
                secara berurutan. Setiap modul di Fase 1 membangun pemahaman untuk
                modul berikutnya. Tidak perlu buru-buru — fokus pada pemahaman,
                bukan kecepatan. Setelah Fase 1 selesai, lanjut ke Fase 2, lalu
                pilih spesialisasi di Fase 3 sesuai minatmu.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

function ModuleCardContent({
  mod,
  progress,
  phaseColor,
}: {
  mod: (typeof modules)[0];
  progress: { completed: number; total: number; percentage: number };
  phaseColor: string;
}) {
  return (
    <>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="font-body text-[13px] font-bold text-app-heading">{String(mod.id).padStart(2, "0")}.</span>
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold border"
          style={{ borderColor: phaseColor, color: phaseColor }}
        >
          {mod.level}
        </span>
        <span className="text-[12px] text-app-muted font-body">{mod.chapterCount} chapter</span>
        <span className="text-[12px] text-app-muted font-body">{mod.topic}</span>
        {progress.completed > 0 && (
          <span className="text-[12px] font-body font-semibold text-app-success ml-0 sm:ml-auto">{Math.round(progress.percentage)}%</span>
        )}
      </div>
      <h4 className="font-body text-[17px] sm:text-[20px] font-bold text-app-heading leading-snug mobile-break">{mod.title}</h4>
      <p className="font-subtitle text-[13px] sm:text-[14px] text-app-body italic mt-1">{mod.subtitle}</p>
      <p className="font-body text-[13px] sm:text-[14px] text-app-muted mt-2 leading-relaxed">{mod.description}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="inline-flex items-center gap-1 font-body text-[13px] font-medium text-app-accent">
          Lihat Chapter <ArrowRight size={13} strokeWidth={1.75} />
        </span>
      </div>
    </>
  );
}
