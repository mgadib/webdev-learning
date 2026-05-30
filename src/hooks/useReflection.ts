import { useCallback, useEffect, useRef, useState } from "react";

function getKey(moduleId: number, chapterId: string) {
  return `awl_reflection_${moduleId}_${chapterId}`;
}

export function useReflection(moduleId: number, chapterId: string) {
  const [value, setValue] = useState<string>("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const saved = localStorage.getItem(getKey(moduleId, chapterId));
    if (saved) setValue(saved);
  }, [moduleId, chapterId]);

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        localStorage.setItem(getKey(moduleId, chapterId), newValue);
      }, 300);
    },
    [moduleId, chapterId]
  );

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return { value, setValue: handleChange };
}
