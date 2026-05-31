import { MessageCircleQuestion } from "lucide-react";
import { useReflection } from "@/hooks/useReflection";
import MarkdownContent from "@/components/MarkdownContent";

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
    <div className="mt-6 p-4 sm:p-6 rounded-xl bg-app-surface-card border-l-4 border-app-success transition-normal">
      <div className="flex items-start sm:items-center gap-2 mb-3">
        <MessageCircleQuestion size={20} strokeWidth={1.75} className="text-app-success shrink-0" />
        <h3 className="font-display text-[20px] sm:text-[24px] text-app-heading leading-tight">
          Pertanyaan Reflektif
        </h3>
      </div>

       <MarkdownContent className="font-body text-[15px] sm:text-[17px] text-app-body italic leading-relaxed" content={question} />

      <p className="mt-2 text-[12px] sm:text-[13px] text-app-muted font-body">
        Tidak ada jawaban mutlak. Tulis pemikiranmu atau diskusikan dengan AI.
      </p>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tulis refleksimu di sini..."
        rows={4}
        className="w-full min-h-[120px] sm:min-h-[100px] mt-4 p-3 sm:p-4 border border-app-default rounded-xl font-body text-[15px] sm:text-[16px] text-app-heading bg-app-elevated resize-y focus:border-app-accent focus:ring-1 focus:ring-app-accent transition-normal placeholder:text-app-subtle"
      />
    </div>
  );
}
