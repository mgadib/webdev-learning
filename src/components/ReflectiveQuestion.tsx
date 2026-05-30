import { MessageCircleQuestion } from "lucide-react";
import { useReflection } from "@/hooks/useReflection";

interface ReflectiveQuestionProps {
  question: string;
  moduleId: number;
  chapterId: string;
}

export default function ReflectiveQuestion({
  question,
  moduleId,
  chapterId,
}: ReflectiveQuestionProps) {
  const { value, setValue } = useReflection(moduleId, chapterId);

  return (
    <div className="mt-6 p-4 sm:p-6 rounded-xl bg-aw-card-bg border-l-4 border-aw-orange dark:bg-[#1a1a2e] dark:border-aw-orange transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <MessageCircleQuestion size={20} strokeWidth={2} className="text-aw-orange shrink-0" />
        <h3 className="font-display text-[20px] sm:text-[24px] text-aw-black dark:text-white">
          Pertanyaan Reflektif
        </h3>
      </div>

      <p className="font-body text-[15px] sm:text-[17px] text-aw-black dark:text-gray-200 italic leading-relaxed">
        {question}
      </p>

      <p className="mt-2 text-[12px] sm:text-[13px] text-aw-border-mid font-body">
        Tidak ada jawaban mutlak. Tulis pemikiranmu atau diskusikan dengan AI.
      </p>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tulis refleksimu di sini..."
        rows={4}
        className="w-full min-h-[120px] sm:min-h-[100px] mt-4 p-3 sm:p-4 border border-aw-border-dim rounded-xl font-body text-[15px] sm:text-[16px] text-aw-black dark:text-white bg-white dark:bg-[#121212] resize-y focus:border-aw-blue focus:ring-1 focus:ring-aw-blue transition-colors dark:border-white/20 dark:placeholder:text-gray-500"
      />
    </div>
  );
}
