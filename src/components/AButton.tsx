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
    "inline-flex items-center gap-2 px-6 py-3 border rounded-full font-body font-semibold text-[15px] cursor-pointer transition-normal";

  const variants = {
    primary:
      "bg-app-primary border-app-primary text-app-on-primary hover:bg-app-primary-hover hover:border-app-primary-hover shadow-sm",
    secondary:
      "bg-transparent border-app-strong text-app-heading hover:bg-app-primary hover:text-app-on-primary hover:border-app-primary",
    ghost:
      "bg-transparent border-app-default text-app-muted hover:border-app-strong hover:text-app-heading",
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