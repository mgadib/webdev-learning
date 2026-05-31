import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ModuleMiniMap from "./ModuleMiniMap";

interface ChapterNavProps {
  moduleId: number;
  currentChapterId: string;
  chapterIds: string[];
  chapterTitles: Record<string, string>;
  completedChapters: Record<string, boolean>;
}

export default function ChapterNav({
  moduleId,
  currentChapterId,
  chapterIds,
  chapterTitles,
  completedChapters,
}: ChapterNavProps) {
  const currentIndex = chapterIds.indexOf(currentChapterId);
  const prevId = currentIndex > 0 ? chapterIds[currentIndex - 1] : null;
  const nextId = currentIndex < chapterIds.length - 1 ? chapterIds[currentIndex + 1] : null;

  return (
    <div className="mt-12 pt-6 border-t border-dashed border-app-default">
      <ModuleMiniMap
        moduleId={moduleId}
        currentChapterId={currentChapterId}
        completedChapters={completedChapters}
        chapterIds={chapterIds}
      />

      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
        {prevId ? (
          <Link to={`/modul/${moduleId}/chapter/${prevId}`}
            className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 border border-app-strong text-app-heading rounded-full font-body font-semibold text-[14px] sm:text-[15px] transition-normal hover:bg-app-primary hover:text-app-on-primary hover:border-app-primary min-h-[48px]"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
            <span className="truncate max-w-[180px] sm:max-w-[200px]">{chapterTitles[prevId]}</span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextId ? (
          <Link to={`/modul/${moduleId}/chapter/${nextId}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 border border-app-primary bg-app-primary text-app-on-primary rounded-full font-body font-semibold text-[14px] sm:text-[15px] transition-normal hover:bg-app-primary-hover hover:border-app-primary-hover shadow-sm min-h-[48px] order-first sm:order-last"
          >
            <span className="truncate max-w-[180px] sm:max-w-[200px]">{chapterTitles[nextId]}</span>
            <ChevronRight size={18} strokeWidth={1.75} />
          </Link>
        ) : (
          <Link to="/modul"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 border border-app-primary bg-app-primary text-app-on-primary rounded-full font-body font-semibold text-[14px] sm:text-[15px] transition-normal hover:bg-app-primary-hover hover:border-app-primary-hover shadow-sm min-h-[48px] order-first sm:order-last"
          >
            Kembali ke Daftar Modul
            <ChevronRight size={18} strokeWidth={1.75} />
          </Link>
        )}
      </div>
    </div>
  );
}
