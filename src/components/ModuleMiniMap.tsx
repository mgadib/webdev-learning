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
      <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-1 sm:px-1 scrollbar-hide">
        <div className="flex items-center gap-0 justify-start sm:justify-center min-w-max sm:min-w-min px-1 sm:px-2">
          {chapterIds.map((cid, i) => {
            const isCompleted = completedChapters[`${moduleId}_${cid}`];
            const isCurrent = cid === currentChapterId;

            return (
              <div key={cid} className="flex items-center shrink-0">
                <Link
                  to={`/modul/${moduleId}/chapter/${cid}`}
                  className={`
                    w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-bold
                    border transition-normal hover:scale-110
                    ${
                      isCurrent
                        ? "bg-app-accent border-app-accent text-app-on-accent shadow-md shadow-app-accent/20"
                      : isCompleted
                        ? "bg-app-success border-app-success text-app-on-success"
                        : "bg-transparent border-app-default text-app-muted hover:border-app-strong hover:text-app-heading"
                    }
                  `}
                  title={`Chapter ${cid}`}
                >
                  {isCompleted && !isCurrent ? (
                    <Check size={14} strokeWidth={2} />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </Link>
                {i < chapterIds.length - 1 && (
                  <div className="w-3 sm:w-4 h-px border-t border-dashed border-app-default shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
