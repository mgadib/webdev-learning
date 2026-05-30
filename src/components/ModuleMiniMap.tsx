import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ModuleMiniMapProps {
  moduleId: number;
  currentChapterId: string;
  completedChapters: Record<string, boolean>;
  chapterIds: string[];
}

export default function ModuleMiniMap({
  moduleId,
  currentChapterId,
  completedChapters,
  chapterIds,
}: ModuleMiniMapProps) {
  return (
    <div className="relative mb-6">
      {/* Scrollable container for many chapters */}
      <div className="overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
        <div className="flex items-center gap-0 justify-center min-w-min px-2">
          {chapterIds.map((cid, i) => {
            const isCompleted = completedChapters[`${moduleId}_${cid}`];
            const isCurrent = cid === currentChapterId;

            return (
              <div key={cid} className="flex items-center shrink-0">
                <Link
                  to={`/modul/${moduleId}/chapter/${cid}`}
                  className={`
                    w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-bold
                    border-2 transition-all duration-200 hover:scale-110
                    ${
                      isCurrent
                        ? "bg-aw-blue border-aw-blue text-white shadow-md shadow-aw-blue/30"
                        : isCompleted
                        ? "bg-aw-green border-aw-green text-white"
                        : "bg-transparent border-aw-border-dim text-aw-border-mid hover:border-aw-black hover:text-aw-black dark:hover:border-white dark:hover:text-white dark:text-gray-500 dark:border-gray-600"
                    }
                  `}
                  title={`Chapter ${cid}`}
                >
                  {isCompleted && !isCurrent ? (
                    <Check size={14} strokeWidth={3} />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </Link>
                {i < chapterIds.length - 1 && (
                  <div className="w-3 sm:w-4 h-px border-t border-dashed border-aw-border-dim shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
