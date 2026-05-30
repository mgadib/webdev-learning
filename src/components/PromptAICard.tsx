import { Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

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
    <div
      className="mt-6 p-4 sm:p-6 rounded-2xl border-2 border-dashed border-aw-blue"
      style={{
        background:
          "linear-gradient(135deg, rgba(79,70,229,0.05), rgba(236,72,153,0.05))",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={20} strokeWidth={2} className="text-aw-blue shrink-0" />
        <h3 className="font-body font-bold text-[15px] sm:text-[16px] text-aw-blue">
          Eksplorasi dengan AI
        </h3>
      </div>

      <blockquote className="font-body text-[14px] sm:text-[15px] text-aw-black dark:text-gray-200 italic border-l-4 border-aw-blue pl-4 py-1 mb-4 bg-white/50 dark:bg-white/5 rounded-r-lg">
        &ldquo;{prompt}&rdquo;
      </blockquote>

      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <a
          href={chatgptUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-aw-border-dim text-aw-border-mid rounded-full font-body font-medium text-[13px] sm:text-[14px] transition-all duration-200 hover:border-aw-black hover:text-aw-black dark:hover:border-white dark:hover:text-white dark:text-gray-400 min-h-[44px]"
        >
          <Sparkles size={14} />
          Tanya ke ChatGPT
        </a>
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-aw-border-dim text-aw-border-mid rounded-full font-body font-medium text-[13px] sm:text-[14px] transition-all duration-200 hover:border-aw-black hover:text-aw-black dark:hover:border-white dark:hover:text-white dark:text-gray-400 min-h-[44px]"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Tersalin!" : "Copy Prompt"}
        </button>
      </div>

      <p className="mt-3 text-[11px] sm:text-[12px] text-aw-border-mid font-body">
        Tips: Copy prompt di atas dan tanyakan ke ChatGPT, Claude, atau AI
        lainnya.
      </p>
    </div>
  );
}
