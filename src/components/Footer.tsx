import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-app-default bg-app-surface mt-auto transition-normal">
      <div className="max-w-content mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-body text-[13px] text-app-muted flex items-center gap-1">
            Dikembangkan dengan
            <Heart size={14} strokeWidth={1.75} className="text-app-success fill-app-success" />
            oleh
            <a href="https://x.com/gusadib" target="_blank" rel="noopener noreferrer"
              className="font-body text-[13px] font-semibold text-app-accent hover:underline"
            >
              @gusadib
            </a>
          </span>
          <span className="font-body text-[12px] text-app-subtle">
            &copy; 2026 Webdev Learning
          </span>
        </div>
      </div>
    </footer>
  );
}
