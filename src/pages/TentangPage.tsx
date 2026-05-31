import {
  BookOpen,
  Compass,
  Lightbulb,
  MessageCircleQuestion,
  Sparkles,
  Terminal,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const methodItems = [
  { icon: Compass, title: "Tujuan Pembelajaran", desc: "2 butir tujuan yang jelas di awal setiap chapter" },
  { icon: Lightbulb, title: "Analogi & Big Picture", desc: "Visualisasi konsep melalui perumpamaan sederhana" },
  { icon: BookOpen, title: "Penjelasan Konsep", desc: "Maksimal 300 kata, fokus pada pemahaman" },
  { icon: Terminal, title: "Contoh Kode", desc: "5-10 baris kode dengan penjelasan baris-per-baris" },
  { icon: Sparkles, title: "Prompt AI", desc: "Ajakan eksplorasi mandiri menggunakan AI" },
  { icon: MessageCircleQuestion, title: "Refleksi", desc: "Pertanyaan terbuka tanpa jawaban mutlak" },
];

export default function TentangPage() {
  useSEO({
    title: "Tentang Webdev Learning — Metode Pembelajaran",
    description:
      "Filosofi dan metode di balik Webdev Learning — pembelajaran berbasis analogi, visualisasi, kode praktis, dan refleksi mandiri untuk memahami web development.",
    canonicalPath: "/tentang",
  });

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 pt-24 pb-16 min-h-screen transition-colors">
      <Breadcrumb
        items={[
          { label: "Beranda", path: "/" },
          { label: "Tentang" },
        ]}
      />

      <ScrollReveal>
        <h1 className="font-display text-[32px] sm:text-[48px] text-app-heading transition-colors">
          Tentang
        </h1>
        <p className="font-body text-[15px] sm:text-[18px] italic text-app-muted mt-2 transition-colors">
          Filosofi di balik platform pembelajaran ini
        </p>
      </ScrollReveal>

      <ScrollReveal stagger={1}>
        <div className="mt-8 bg-app-surface-card border border-app-strong rounded-[20px] p-5 sm:p-10 transition-colors">
          <p className="font-body text-[15px] sm:text-[17px] text-app-body leading-[1.7] transition-colors">
            Webdev Learning dibangun dengan keyakinan bahwa memahami
            konsep fundamental lebih penting daripada menghafal sintaks. Dunia
            web development berubah sangat cepat — framework datang dan pergi,
            bahasa baru muncul setiap tahun — tapi prinsip dasar seperti
            client-server, HTTP, dan logika pemrograman tetap relevan selama
            puluhan tahun.
          </p>
          <p className="font-body text-[15px] sm:text-[17px] text-app-body leading-[1.7] mt-4 transition-colors">
            Platform ini menggunakan metode pedagogi berbasis analogi dan
            visualisasi. Setiap konsep teknis dijelaskan melalui perumpamaan
            dari kehidupan sehari-hari: restoran, buku telepon, kartu anggota.
            Tujuannya agar kamu membangun intuisi yang kuat sebelum menyentuh
            kode.
          </p>
          <p className="font-body text-[15px] sm:text-[17px] text-app-body leading-[1.7] mt-4 transition-colors">
            Konten dirancang untuk bisa dipelajari dalam 15-20 menit per
            chapter. Setiap chapter mengikuti template konsisten: tujuan,
            analogi, penjelasan, contoh, eksplorasi AI, dan refleksi.
          </p>
          <p className="font-display text-[15px] sm:text-[18px] text-app-muted mt-6 text-right italic transition-colors">
            Memahami, bukan menghafal.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal stagger={1}>
        <h2 className="font-display text-[22px] sm:text-[32px] text-app-heading mt-10 sm:mt-12 mb-6 transition-colors">
          Struktur Chapter
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {methodItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.title} stagger={Math.min(i + 1, 6)}>
              <div className="bg-app-elevated border border-app-strong rounded-[12px] p-5 sm:p-6 h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
                <Icon size={32} strokeWidth={1.75} className="text-app-accent mb-3" />
                <h3 className="font-body text-[15px] sm:text-[16px] font-bold text-app-heading transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] sm:text-[14px] text-app-muted mt-1 transition-colors">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
