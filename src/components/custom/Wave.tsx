'use client';

import { useRef, useEffect } from 'react';

export default function Wave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const lines = [
      { offset: 0, color: '#3B82F6' },    // blue-500
      { offset: 0.2, color: '#60A5FA' },  // blue-400
      { offset: 0.4, color: '#22D3EE' },  // cyan-400
      { offset: 0.6, color: '#67E8F9' },  // cyan-300
      { offset: 0.8, color: '#A5F3FC' }   // cyan-200
    ];

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 2;

      lines.forEach((line, i) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;

        for (let x = 0; x < width; x++) {
          const scale = 0.004;
          const freq = 2;
          const centerY = height / 2;
          const amplitude = 40;

          const y =
            centerY +
            Math.sin(x * scale + t * 0.03 + i) * amplitude * Math.sin((x / width) * Math.PI);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      });

      t += 1;
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
    />
  );
}
