import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  stagger = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={`scroll-reveal stagger-${stagger} ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
