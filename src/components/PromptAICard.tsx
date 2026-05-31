import { Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import MarkdownContent from "@/components/MarkdownContent";

interface PromptAICardProps {
  prompt: string;
}

export default function PromptAICard({ prompt }: PromptAICardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const chatgptUrl = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;

  return (
    <div className="mt-6 p-4 sm:p-6 rounded-2xl border border-dashed border-app-accent bg-app-surface-card transition-normal">
      <div className="flex items-start sm:items-center gap-2 mb-3">
        <Sparkles size={20} strokeWidth={1.75} className="text-app-accent shrink-0" />
        <h3 className="font-body font-bold text-[15px] sm:text-[16px] text-app-accent leading-snug">
          Eksplorasi dengan AI
        </h3>
      </div>

       <blockquote className="font-body text-[14px] sm:text-[15px] text-app-body italic border-l-4 border-app-accent pl-4 py-1 mb-4 bg-app-elevated/50 rounded-r-lg mobile-break">
         <MarkdownContent content={prompt} className="inline-block" />
       </blockquote>

      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <a href={chatgptUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 border border-app-default text-app-muted rounded-full font-body font-medium text-[13px] sm:text-[14px] transition-normal hover:border-app-strong hover:text-app-heading min-h-[44px]"
        >
          <Sparkles size={14} strokeWidth={1.75} /> Tanya ke ChatGPT
        </a>
        <button onClick={handleCopy}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 border border-app-default text-app-muted rounded-full font-body font-medium text-[13px] sm:text-[14px] transition-normal hover:border-app-strong hover:text-app-heading min-h-[44px]"
        >
          {copied ? <Check size={14} strokeWidth={1.75} /> : <Copy size={14} strokeWidth={1.75} />}
          {copied ? "Tersalin!" : "Copy Prompt"}
        </button>
      </div>

      <p className="mt-3 text-[11px] sm:text-[12px] text-app-muted font-body">
        Tips: Copy prompt di atas dan tanyakan ke ChatGPT, Claude, atau AI lainnya.
      </p>
    </div>
  );
}
