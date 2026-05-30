import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface AButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

export default function AButton({
  children,
  variant = "primary",
  href,
  onClick,
  icon: Icon,
  iconPosition = "right",
  className = "",
  fullWidth = false,
  type = "button",
}: AButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 border-2 rounded-full font-body font-semibold text-[15px] transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-aw-blue border-aw-blue text-white hover:bg-aw-black hover:border-aw-black",
    secondary:
      "bg-transparent border-aw-black text-aw-black hover:bg-aw-black hover:text-white",
    ghost:
      "bg-transparent border-aw-border-dim text-aw-border-mid hover:border-aw-black hover:text-aw-black",
  };

  const classes = cn(base, variants[variant], fullWidth && "w-full justify-center", className);

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
