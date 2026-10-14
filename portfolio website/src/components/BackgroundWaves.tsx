import React, { useEffect, useRef } from 'react';

export const BackgroundWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let step = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / (window.innerWidth || 1) - 0.4) * 40;
      mouseY = (e.clientY / (window.innerHeight || 1) - 0.4) * 20;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      const displayW = window.innerWidth;
      const displayH = window.innerHeight;
      ctx.clearRect(0, 0, displayW, displayH);

      const lines = 55;
      const baseHeight = displayH * 0.6;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const lineOffset = i * 14;
        const alpha = (i / lines) * 0.35 + 0.2;
        ctx.strokeStyle = `rgba(255, 48, 48, ${alpha})`;
        ctx.lineWidth = i % 5 === 0 ? 2.2 : 1.4;

        for (let x = 0; x <= displayW; x += 24) {
          // Five-component sine superposition for organic ridges
          const wave1 = Math.sin(x * 0.0022 + step * 0.006 + i * 0.18) * 55;
          const wave2 = Math.cos(x * 0.0045 - step * 0.004 + i * 0.25) * 28;
          const wave3 = Math.sin(x * 0.001 + i * 0.08 + mouseX * 0.025) * 40;
          const wave4 = Math.cos(x * 0.007 + step * 0.009 - i * 0.12) * 16;
          const wave5 = Math.sin(x * 0.0015 - step * 0.003 + i * 0.35) * 22;
          const y = baseHeight + lineOffset + wave1 + wave2 + wave3 + wave4 + wave5 + mouseY * 0.6;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      step += 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" data-purpose="wave-landscape-container">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  );
};
