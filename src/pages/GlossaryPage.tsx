import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  Tag,
  ArrowRight,
  X,
} from "lucide-react";
import { glossaryTerms, glossaryCategories } from "@/data/glossary";
import { useSEO } from "@/hooks/useSEO";

const TERMS_PER_PAGE = 12;

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Dasar Web": { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  Frontend: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  Backend: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  Database: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  DevOps: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  Security: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  Performance: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  Tools: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  "System Design": { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  AI: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
  General: { bg: "bg-app-surface-card", text: "text-app-heading", border: "border-app-default" },
};

export default function GlossaryPage() {
  useSEO({
    title: "Glosarium Istilah Web Development",
    description:
      "Kumpulan 100+ istilah teknis web development dari A sampai Z — mulai dari API, DOM, React, hingga System Design. Dengan penjelasan lengkap dan contoh kode.",
    canonicalPath: "/glosarium",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    let terms = [...glossaryTerms];

    if (selectedCategory !== "Semua") {
      terms = terms.filter((t) => t.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      terms = terms.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.shortDefinition.toLowerCase().includes(q) ||
          t.relatedTerms.some((r) => r.toLowerCase().includes(q))
      );
    }

    return terms;
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredTerms.length / TERMS_PER_PAGE);
  const paginatedTerms = useMemo(() => {
    const start = (currentPage - 1) * TERMS_PER_PAGE;
    return filteredTerms.slice(start, start + TERMS_PER_PAGE);
  }, [filteredTerms, currentPage]);

  // Reset page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setExpandedTerm(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentTerm = expandedTerm
    ? glossaryTerms.find((t) => t.slug === expandedTerm)
    : null;

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-app-accent-subtle text-app-accent mb-5">
          <BookOpen size={28} strokeWidth={1.75} />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-app-heading mb-3 transition-colors">
          Glosarium Web Development
        </h1>
        <p className="font-body text-base sm:text-lg text-app-muted max-w-2xl mx-auto leading-relaxed transition-colors">
          Kumpulan istilah teknis yang digunakan di seluruh pembelajaran.
          Pahami setiap konsep dari fondasi web hingga system design.
        </p>
        <p className="font-body text-sm text-app-subtle mt-2 transition-colors">
          {glossaryTerms.length} istilah &middot; {glossaryCategories.length} kategori
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-6">
        <Search
          size={18}
          strokeWidth={1.75}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-app-muted"
        />
        <input
          type="text"
          placeholder="Cari istilah, definisi, atau topik..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-app-default bg-app-surface font-body text-[14px] text-app-heading placeholder:text-app-muted focus:border-app-accent focus:outline-none transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-heading transition-colors"
          >
            <X size={16} strokeWidth={1.75} />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        <button
          onClick={() => setSelectedCategory("Semua")}
          className={`font-body text-[12px] font-medium px-3 py-1.5 rounded-full border transition-all shrink-0 ${
            selectedCategory === "Semua"
              ? "bg-app-accent text-app-on-accent border-app-accent"
              : "bg-app-surface text-app-muted border-app-default hover:border-app-accent/50"
          }`}
        >
          Semua ({glossaryTerms.length})
        </button>
        {glossaryCategories.map((cat) => {
          const count = glossaryTerms.filter((t) => t.category === cat).length;
          const colors = categoryColors[cat] || categoryColors.General;
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-body text-[12px] font-medium px-3 py-1.5 rounded-full border transition-all flex items-center gap-1 shrink-0 ${
                isActive
                  ? `${colors.bg} ${colors.text} ${colors.border}`
                  : "bg-app-surface text-app-muted border-app-default hover:border-app-accent/50"
              }`}
            >
              <Tag size={11} strokeWidth={1.75} />
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Results count */}
      {searchQuery && (
        <p className="font-body text-sm text-app-muted text-center mb-4">
          Menampilkan {filteredTerms.length} hasil untuk &ldquo;{searchQuery}&rdquo;
        </p>
      )}

      {/* Detail View */}
      {currentTerm && (
        <div className="mb-8 bg-app-surface rounded-2xl border border-app-default overflow-hidden transition-colors">
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`font-body text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                      categoryColors[currentTerm.category]?.bg || ""
                    } ${categoryColors[currentTerm.category]?.text || ""}`}
                  >
                    {currentTerm.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-app-heading transition-colors">
                  {currentTerm.term}
                </h2>
              </div>
              <button
                onClick={() => setExpandedTerm(null)}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-app-muted hover:bg-app-surface-card-hover transition-colors"
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>

            <p className="font-body text-lg text-app-heading mb-6 leading-relaxed transition-colors">
              {currentTerm.shortDefinition}
            </p>

            <div className="prose dark:prose-invert max-w-none mb-6">
              <div
                className="font-body text-[15px] text-app-muted leading-[1.8] whitespace-pre-line transition-colors"
                dangerouslySetInnerHTML={{
                  __html: currentTerm.fullExplanation
                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                    .replace(/`(.+?)`/g, "<code>$1</code>"),
                }}
              />
            </div>

            {currentTerm.codeExample && (
              <div className="mb-6">
                <p className="font-body text-[12px] font-semibold text-app-subtle uppercase tracking-wide mb-2">
                  Contoh Kode
                </p>
                <pre className="bg-app-code rounded-xl p-4 overflow-x-auto">
                  <code className="font-mono text-[13px] text-app-code">
                    {currentTerm.codeExample}
                  </code>
                </pre>
              </div>
            )}

            {currentTerm.relatedTerms.length > 0 && (
              <div>
                <p className="font-body text-[12px] font-semibold text-app-subtle uppercase tracking-wide mb-2">
                  Istilah Terkait
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentTerm.relatedTerms.map((rt) => {
                    const related = glossaryTerms.find(
                      (t) => t.term.toLowerCase() === rt.toLowerCase()
                    );
                    return related ? (
                      <button
                        key={rt}
                        onClick={() => {
                          setExpandedTerm(related.slug);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="font-body text-[13px] px-3 py-1 rounded-lg bg-app-accent-subtle text-app-accent hover:bg-app-accent-subtle transition-colors"
                      >
                        {rt} <ArrowRight size={12} strokeWidth={1.75} className="inline ml-1" />
                      </button>
                    ) : (
                      <span
                        key={rt}
                        className="font-body text-[13px] px-3 py-1 rounded-lg bg-app-inset text-app-muted transition-colors"
                      >
                        {rt}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Terms Grid */}
      {paginatedTerms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {paginatedTerms.map((term) => {
            const colors = categoryColors[term.category] || categoryColors.General;
            return (
              <button
                key={term.slug}
                onClick={() =>
                  setExpandedTerm(
                    expandedTerm === term.slug ? null : term.slug
                  )
                }
                className={`text-left bg-app-surface rounded-xl border p-5 transition-all hover:shadow-md group ${
                  expandedTerm === term.slug
                    ? "border-app-accent"
                    : "border-app-default hover:border-app-accent/40"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`font-body text-[11px] font-medium px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}
                  >
                    {term.category}
                  </span>
                </div>
                <h3 className="font-display text-lg text-app-heading mb-2 group-hover:text-app-accent transition-colors">
                  {term.term}
                </h3>
                <p className="font-body text-[13px] text-app-muted leading-relaxed line-clamp-3 transition-colors">
                  {term.shortDefinition}
                </p>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <Search size={48} strokeWidth={1.75} className="mx-auto text-app-muted mb-4" />
          <h3 className="font-display text-xl text-app-heading mb-2 transition-colors">
            Tidak ditemukan
          </h3>
          <p className="font-body text-app-muted transition-colors">
            Coba kata kunci lain atau ubah filter kategori.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 font-body text-[13px] font-medium px-3 py-2 rounded-lg border border-app-default bg-app-surface text-app-heading disabled:opacity-40 disabled:cursor-not-allowed hover:border-app-accent transition-colors"
          >
            <ChevronLeft size={16} strokeWidth={1.75} />
            Prev
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`font-body text-[13px] font-medium w-9 h-9 rounded-lg border-2 transition-all ${
                  currentPage === page
                    ? "bg-app-accent text-app-on-accent border-app-accent"
                    : "bg-app-surface text-app-heading border-app-default hover:border-app-accent/50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 font-body text-[13px] font-medium px-3 py-2 rounded-lg border border-app-default bg-app-surface text-app-heading disabled:opacity-40 disabled:cursor-not-allowed hover:border-app-accent transition-colors"
          >
            Next
            <ChevronRight size={16} strokeWidth={1.75} />
          </button>
        </div>
      )}

      {/* Page info */}
      {filteredTerms.length > 0 && (
        <p className="text-center font-body text-[12px] text-app-subtle mt-4 transition-colors">
          Halaman {currentPage} dari {totalPages} &middot; Menampilkan{" "}
          {paginatedTerms.length} dari {filteredTerms.length} istilah
        </p>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-app-accent-subtle rounded-2xl p-8 border border-app-accent/40">
        <h3 className="font-display text-xl text-app-heading mb-2 transition-colors">
          Mau belajar lebih dalam?
        </h3>
        <p className="font-body text-sm text-app-muted mb-5 transition-colors">
          Setiap istilah di atas dipelajari secara detail di modul-modul
          pembelajaran kami.
        </p>
        <Link
          to="/modul"
          className="inline-flex items-center gap-2 font-body text-[14px] font-semibold bg-app-accent text-app-on-accent px-6 py-3 rounded-xl hover:bg-app-accent/90 transition-colors"
        >
          Jelajahi Modul <ArrowRight size={16} strokeWidth={1.75} />
        </Link>
      </div>
    </div>
  );
}
