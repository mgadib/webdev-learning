import { useCallback, useState } from "react";

const STORAGE_KEY = "awl_progress";

function readProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeProgress(data: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, boolean>>(readProgress);

  const markComplete = useCallback((moduleId: number, chapterId: string) => {
    const key = `${moduleId}_${chapterId}`;
    setProgress((prev) => {
      if (prev[key]) return prev;
      const next = { ...prev, [key]: true };
      writeProgress(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (moduleId: number, chapterId: string) => {
      return !!progress[`${moduleId}_${chapterId}`];
    },
    [progress]
  );

  const getModuleProgress = useCallback(
    (moduleId: number, totalChapters: number) => {
      const completed = Object.keys(progress).filter(
        (k) => k.startsWith(`${moduleId}_`) && progress[k]
      ).length;
      return {
        completed,
        total: totalChapters,
        percentage: totalChapters > 0 ? (completed / totalChapters) * 100 : 0,
      };
    },
    [progress]
  );

  return { progress, markComplete, isCompleted, getModuleProgress };
}
