import { useEffect, useRef } from "react";

interface TrailPaintCanvasProps {
  variant?: "hero" | "chapter-bg";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
}

export default function TrailPaintCanvas({
  variant = "hero",
}: TrailPaintCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    particles: Particle[];
    isMoving: boolean;
    lastX: number;
    lastY: number;
    lastTime: number;
    brushColor: string;
    mouse: { x: number; y: number };
    width: number;
    height: number;
    dpr: number;
    rAF: number;
    isInteractive: boolean;
    autoPlayTimer: number;
  }>({
    particles: [],
    isMoving: false,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    brushColor: "",
    mouse: { x: -1000, y: -1000 },
    width: 0,
    height: 0,
    dpr: 1,
    rAF: 0,
    isInteractive: false,
    autoPlayTimer: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const s = stateRef.current;
    const isHero = variant === "hero";
    const isMobile = window.innerWidth < 768;
    s.isInteractive = isHero && !isMobile;

    const rootStyles = getComputedStyle(document.documentElement);
    const colors = [
      "--app-accent",
      "--app-text-body",
      "--app-text-muted",
      "--app-text-subtle",
      "--app-border-strong",
      "--app-border-default",
    ].map((token) => rootStyles.getPropertyValue(token).trim()).filter(Boolean);

    function getBrushColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      s.width = parent.clientWidth;
      s.height = parent.clientHeight;
      s.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = s.width * s.dpr;
      canvas!.height = s.height * s.dpr;
      canvas!.style.width = s.width + "px";
      canvas!.style.height = s.height + "px";
      ctx!.setTransform(s.dpr, 0, 0, s.dpr, 0, 0);
    }

    function addParticle(x: number, y: number, vx: number, vy: number, radius: number, color: string, life: number) {
      s.particles.push({ x, y, vx, vy, radius, color, life });
    }

    function updateParticles() {
      if (s.particles.length === 0) return false;

      const imageData = ctx!.getImageData(0, 0, canvas!.width, canvas!.height);
      const data = imageData.data;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] > 0) {
          data[i] = (data[i] * 0.98) | 0;
        }
      }
      ctx!.putImageData(imageData, 0, 0);

      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.life -= 0.015;
        if (p.life <= 0) {
          s.particles.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.vy += 0.04;
        const alpha = Math.max(0, p.life);
        ctx!.globalAlpha = alpha;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      return true;
    }

    function drawTrailSegment(x1: number, y1: number, x2: number, y2: number, radius: number, color: string) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.hypot(dx, dy);
      if (dist < 1) return;
      const steps = Math.ceil(dist / 2);
      const sx = dx / steps;
      const sy = dy / steps;
      ctx!.fillStyle = color;
      ctx!.globalAlpha = 0.95;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const r = radius * (1 - t);
        ctx!.beginPath();
        ctx!.arc(x1 + sx * i, y1 + sy * i, Math.max(0.5, r), 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function getMousePos(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function startStroke(e: MouseEvent) {
      s.isMoving = true;
      const pos = getMousePos(e);
      s.lastX = pos.x;
      s.lastY = pos.y;
      s.mouse.x = pos.x;
      s.mouse.y = pos.y;
      s.lastTime = Date.now();
      s.brushColor = getBrushColor();
    }

    function moveStroke(e: MouseEvent) {
      if (!s.isMoving) return;
      const pos = getMousePos(e);
      s.mouse.x = pos.x;
      s.mouse.y = pos.y;
      const dt = (Date.now() - s.lastTime) / 1000;
      s.lastTime = Date.now();
      const dist = Math.hypot(s.mouse.x - s.lastX, s.mouse.y - s.lastY);
      if (dist < 2) return;
      const v = dt > 0 ? dist / dt : 0;
      let r = 24 - (v / 1200) * 20;
      r = Math.max(4, Math.min(24, r));
      drawTrailSegment(s.lastX, s.lastY, s.mouse.x, s.mouse.y, r, s.brushColor);
      addParticle(s.mouse.x, s.mouse.y, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, r * 0.3, s.brushColor, 1.0);
      s.lastX = s.mouse.x;
      s.lastY = s.mouse.y;
    }

    function endStroke() {
      s.isMoving = false;
    }

    // Auto-play for non-interactive modes
    function autoPlayStep() {
      if (s.isInteractive) return;
      const now = Date.now();
      if (now - s.autoPlayTimer > 200 + Math.random() * 300) {
        s.autoPlayTimer = now;
        const targetX = Math.random() * s.width;
        const targetY = Math.random() * s.height;
        s.brushColor = getBrushColor();
        const speed = variant === "chapter-bg" ? 50 : 200;
        const steps = Math.ceil(Math.hypot(targetX - s.mouse.x, targetY - s.mouse.y) / speed * 60);
        if (steps > 0) {
          const dx = (targetX - s.mouse.x) / steps;
          const dy = (targetY - s.mouse.y) / steps;
          for (let i = 0; i < steps; i++) {
            s.mouse.x += dx;
            s.mouse.y += dy;
            drawTrailSegment(s.mouse.x - dx, s.mouse.y - dy, s.mouse.x, s.mouse.y, 8, s.brushColor);
          }
        }
        s.mouse.x = targetX;
        s.mouse.y = targetY;
        s.lastX = targetX;
        s.lastY = targetY;
      }
    }

    function animate() {
      updateParticles();

      if (!s.isInteractive) {
        autoPlayStep();
      }

      if (!s.isMoving && s.particles.length === 0 && s.isInteractive) {
        s.rAF = requestAnimationFrame(animate);
        return;
      }

      if (s.isMoving) {
        const idle = (Date.now() - s.lastTime) / 1000;
        if (idle > 0.05 && Math.random() < 0.3) {
          addParticle(s.mouse.x, s.mouse.y, (Math.random() - 0.5) * 0.5, Math.random() * 2, 3, s.brushColor, 0.8);
        }
      }

      s.rAF = requestAnimationFrame(animate);
    }

    // Init
    resize();
    window.addEventListener("resize", resize);

    if (s.isInteractive) {
      canvas.addEventListener("mousedown", startStroke);
      canvas.addEventListener("mousemove", moveStroke);
      canvas.addEventListener("mouseup", endStroke);
      canvas.addEventListener("mouseleave", endStroke);
    }

    s.autoPlayTimer = Date.now();
    s.rAF = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(s.rAF);
      window.removeEventListener("resize", resize);
      if (s.isInteractive) {
        canvas.removeEventListener("mousedown", startStroke);
        canvas.removeEventListener("mousemove", moveStroke);
        canvas.removeEventListener("mouseup", endStroke);
        canvas.removeEventListener("mouseleave", endStroke);
      }
    };
  }, [variant]);

  const isHero = variant === "hero";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <canvas
      ref={canvasRef}
      className={`${isHero ? "absolute inset-0" : "fixed inset-0"}`}
      style={{
        zIndex: 0,
        pointerEvents: isHero && !isMobile ? "auto" : "none",
        opacity: isHero ? 0.15 : 0.03,
      }}
    />
  );
}
