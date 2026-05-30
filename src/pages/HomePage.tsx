import { ArrowRight, BookOpen, Code2, Lightbulb, MessageCircleQuestion, Layers, Shield, Cloud, Monitor, Server } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import GlowBorder from "@/components/GlowBorder";
import TrailPaintCanvas from "@/components/TrailPaintCanvas";
import { modules, phases, learningPaths } from "@/data/modules";
import { chapters } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { useSEO } from "@/hooks/useSEO";
import { SchemaOrgWebsite } from "@/components/SchemaOrg";

export default function HomePage() {
  useSEO({
    title: "Belajar Web Development dari Fundamental hingga Spesialisasi",
    description:
      "Platform pembelajaran web development gratis dengan 27 modul dan 170+ chapter. Dari HTML, CSS, JavaScript, React, Backend, Database, sampai System Design.",
    canonicalPath: "/",
  });

  const { getModuleProgress } = useProgress();

  return (
    <div className="dark:bg-[#121212] transition-colors">
      <SchemaOrgWebsite />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        <TrailPaintCanvas variant="hero" />
        <div className="relative z-10 text-center max-w-[560px]">
          <h1 className="font-display text-[32px] sm:text-[56px] text-aw-black dark:text-white leading-[1.1]">
            Webdev Learning
          </h1>
          <p className="font-body text-[16px] sm:text-[20px] italic text-aw-border-mid dark:text-gray-400 mt-3">
            Belajar Web di Era AI
          </p>
          <p className="font-body text-[15px] sm:text-[17px] text-aw-black dark:text-gray-200 mt-4 leading-relaxed">
            Platform pembelajaran web development yang mengajarkan cara kerja web
            dari fundamental hingga spesialisasi — melalui analogi, kode praktis,
            dan refleksi mandiri. <strong className="dark:text-white">{modules.length} modul, {chapters.length} chapter.</strong>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link
              to="/modul"
              className="inline-flex items-center gap-2 px-6 py-3 bg-aw-blue border-2 border-aw-blue text-white rounded-full font-body font-semibold text-[15px] transition-all duration-200 hover:bg-aw-black hover:border-aw-black dark:hover:bg-white dark:hover:text-aw-black dark:hover:border-white"
            >
              Mulai Belajar
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/tentang"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-aw-black dark:border-white/40 text-aw-black dark:text-white rounded-full font-body font-semibold text-[15px] transition-all duration-200 hover:bg-aw-black hover:text-white dark:hover:bg-white dark:hover:text-aw-black"
            >
              Tentang Metode
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="max-w-content mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <ScrollReveal>
          <h2 className="font-display text-[24px] sm:text-[32px] text-aw-black dark:text-white">
            Jalur Pembelajaran
          </h2>
          <p className="font-body text-[14px] sm:text-[15px] text-aw-border-mid dark:text-gray-400 mt-2">
            Pilih jalur sesuai tujuan karirmu — atau ikuti semua untuk jadi full-stack
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {learningPaths.map((path, i) => {
            const pathIcons: Record<string, React.ReactNode> = {
              monitor: <Monitor size={20} />,
              server: <Server size={20} />,
              layers: <Layers size={20} />,
              cloud: <Cloud size={20} />,
              shield: <Shield size={20} />,
            };
            return (
              <ScrollReveal key={path.name} stagger={i + 1}>
                <Link
                  to="/modul"
                  className="flex items-start gap-3 p-4 bg-aw-card-bg dark:bg-[#1a1a2e] border-2 border-aw-black dark:border-white/15 rounded-[16px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div className="w-10 h-10 rounded-full bg-aw-blue text-white flex items-center justify-center shrink-0">
                    {pathIcons[path.icon]}
                  </div>
                  <div>
                    <h3 className="font-body text-[14px] font-bold text-aw-black dark:text-white">
                      {path.name}
                    </h3>
                    <p className="font-body text-[12px] text-aw-border-mid dark:text-gray-400 mt-0.5">
                      {path.description}
                    </p>
                    <p className="font-body text-[11px] text-aw-blue mt-1">
                      {path.modules.length} modul
                    </p>
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
          <h2 className="font-display text-[28px] sm:text-[40px] text-aw-black dark:text-white">
            Kurikulum Lengkap
          </h2>
          <p className="font-body text-[15px] sm:text-[16px] text-aw-border-mid dark:text-gray-400 mt-2">
            Tiga fase pembelajaran dari fundamental hingga spesialisasi
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-12 mt-8">
          {phases.map((phase, phaseIdx) => (
            <ScrollReveal key={phase.name} stagger={phaseIdx + 1}>
              {/* Phase Header */}
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: phase.color }}
                />
                <h3 className="font-display text-[20px] sm:text-[26px] text-aw-black dark:text-white">
                  {phase.name}
                </h3>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold text-white"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.level}
                </span>
              </div>
              <p className="font-body text-[14px] text-aw-border-mid dark:text-gray-400 ml-6 mb-4">
                {phase.description}
              </p>

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
                          <Link
                            to={`/modul/${mod.id}`}
                            className="block p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-card-hover rounded-[20px]"
                          >
                            <ModuleCardContent
                              mod={mod}
                              progress={progress}
                              phaseColor={phase.color}
                            />
                          </Link>
                        </GlowBorder>
                      ) : (
                        <Link
                          to={`/modul/${mod.id}`}
                          className="block p-5 sm:p-6 bg-aw-card-bg dark:bg-[#1a1a2e] border-2 border-aw-black dark:border-white/15 rounded-[20px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                        >
                          <ModuleCardContent
                            mod={mod}
                            progress={progress}
                            phaseColor={phase.color}
                          />
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
                    <div className="w-0.5 h-6 bg-aw-border-dim" />
                    <ArrowRight
                      size={16}
                      className="text-aw-border-dim rotate-90"
                    />
                    <div className="w-0.5 h-6 bg-aw-border-dim" />
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
          <h2 className="font-display text-[28px] sm:text-[40px] text-aw-black dark:text-white mb-8">
            Tentang Metode Pembelajaran
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger={1}>
          <div className="bg-aw-card-chapter dark:bg-[#162022] border-2 border-aw-black dark:border-white/15 rounded-[20px] p-6 sm:p-10">
            <p className="font-body text-[16px] sm:text-[17px] text-aw-black dark:text-gray-200 leading-[1.7]">
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
                { icon: Code2, label: "Kode Praktis" },
                { icon: MessageCircleQuestion, label: "Refleksi Mandiri" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <Icon size={32} className="text-aw-blue" />
                  <span className="font-body text-[14px] font-semibold text-aw-black dark:text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={2}>
          <div className="mt-12 flex items-start gap-4 bg-white dark:bg-[#1a1a2e] border-2 border-aw-black dark:border-white/15 rounded-[20px] p-6">
            <BookOpen size={28} className="text-aw-blue shrink-0 mt-1" />
            <div>
              <h3 className="font-body text-[18px] font-bold text-aw-black dark:text-white mb-2">
                Tips Memulai
              </h3>
              <p className="font-body text-[15px] text-aw-border-mid dark:text-gray-400 leading-relaxed">
                Mulai dari <strong className="dark:text-gray-200">Fase 1: Fondasi Web</strong> dan kerjakan chapter
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
        <span className="font-body text-[13px] font-bold text-aw-black dark:text-white">
          {String(mod.id).padStart(2, "0")}.
        </span>
        <span
          className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold text-white"
          style={{ backgroundColor: phaseColor }}
        >
          {mod.level}
        </span>
        <span className="text-[12px] text-aw-border-mid dark:text-gray-400 font-body">
          {mod.chapterCount} chapter
        </span>
        {progress.completed > 0 && (
          <span className="text-[12px] font-body font-semibold text-aw-green ml-auto">
            {Math.round(progress.percentage)}%
          </span>
        )}
      </div>
      <h4 className="font-body text-[17px] sm:text-[20px] font-bold text-aw-black dark:text-white leading-snug">
        {mod.title}
      </h4>
      <p className="font-subtitle text-[13px] sm:text-[14px] text-aw-black dark:text-gray-300 italic mt-1">
        {mod.subtitle}
      </p>
      <p className="font-body text-[13px] sm:text-[14px] text-aw-border-mid dark:text-gray-400 mt-2 leading-relaxed">
        {mod.description}
      </p>
      <div className="flex items-center justify-between mt-3">
        <span className="inline-flex items-center gap-1 font-body text-[13px] font-medium text-aw-blue">
          Lihat Chapter <ArrowRight size={13} />
        </span>
      </div>
    </>
  );
}
