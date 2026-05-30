import { useEffect, useRef } from "react";

interface GlowBorderProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  active?: boolean;
}

export default function GlowBorder({
  children,
  className = "",
  innerClassName = "",
  active = true,
}: GlowBorderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const glow = glowRef.current;
    if (!wrapper || !glow || !active) return;

    let x = 50;
    let y = 50;
    let angle = 0;
    let dx = 0.5;
    let dy = 0.35;
    const dAngle = 0.7;

    function step() {
      x += dx;
      y += dy;
      if (x <= 10 || x >= 90) dx *= -1;
      if (y <= 10 || y >= 90) dy *= -1;
      angle = (angle + dAngle) % 360;
      glow!.style.setProperty("--x", x + "%");
      glow!.style.setProperty("--y", y + "%");
      glow!.style.setProperty("--glow-angle", angle + "deg");
      rafRef.current = requestAnimationFrame(step);
    }

    function startGlow() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(step);
    }

    function stopGlow() {
      cancelAnimationFrame(rafRef.current);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startGlow();
          else stopGlow();
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(wrapper);
    return () => {
      stopGlow();
      observer.disconnect();
    };
  }, [active]);

  if (!active) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={wrapperRef} className={`glow-wrapper ${className}`}>
      <div ref={glowRef} className="glow" />
      <div className={`glow-inner ${innerClassName}`}>{children}</div>
    </div>
  );
}
