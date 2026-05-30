import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-aw-black dark:border-white/20 bg-white dark:bg-[#121212] mt-auto transition-colors">
      <div className="max-w-content mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-body text-[13px] text-aw-border-mid dark:text-gray-400 flex items-center gap-1">
            Dikembangkan dengan
            <Heart size={14} className="text-red-500 fill-red-500" />
            oleh
            <a
              href="https://x.com/gusadib"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] font-semibold text-aw-blue hover:underline"
            >
              @gusadib
            </a>
          </span>
          <span className="font-body text-[12px] text-aw-border-dim dark:text-gray-500">
            &copy; 2026 Webdev Learning
          </span>
        </div>
      </div>
    </footer>
  );
}
