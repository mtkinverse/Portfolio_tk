import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

// Ambient "distributed system" wallpaper: drifting nodes with proximity edges.
// The RAF loop lives entirely outside React — the component renders once.
// To swap in an edited workstation photo later: place it in /public and layer
// it under this canvas (or replace the gradient below) at low opacity.
export default function Wallpaper() {
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let running = true;
    let nodes = [];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const init = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.round((w * h) / 26000));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: (i * 997) % w,
        y: (i * 613) % h,
        vx: (((i * 7) % 10) - 5) * 0.016,
        vy: (((i * 13) % 10) - 5) * 0.016,
        r: 1.2 + ((i * 31) % 10) / 6,
      }));
    };

    const draw = () => {
      const { innerWidth: w, innerHeight: h } = window;
      const rgb = getComputedStyle(document.documentElement)
        .getPropertyValue('--os-wallpaper-node')
        .trim() || '76, 141, 255';
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
      }
      // Proximity edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 150 * 150) {
            const alpha = 0.10 * (1 - Math.sqrt(d2) / 150);
            ctx.strokeStyle = `rgba(${rgb}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${rgb}, 0.35)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    };

    init();
    if (reduced) {
      draw(); // single static frame
    } else {
      loop();
    }

    const onResize = () => {
      init();
      if (reduced) draw();
    };
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced && !running) {
        running = true;
        loop();
      }
    };
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced]);

  return (
    <>
      {/* Depth gradient behind the graph */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(1200px 700px at 30% 20%, var(--os-wallpaper-bg-a), var(--os-wallpaper-bg-b) 75%)',
        }}
      />
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 pointer-events-none" />
    </>
  );
}
