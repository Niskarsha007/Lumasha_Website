import { useEffect, useRef, useState } from 'react';

const TracingGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [penDown, setPenDown] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#ff7a7a';
    ctx.fillStyle = '#fef3f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '120px "Baloo 2"';
    ctx.fillStyle = '#fcd34d';
    ctx.fillText('क', 40, 150);
    ctx.fillText('A', 160, 240);
  }, []);

  const startDraw = (event: React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    setPenDown(true);
  };

  const draw = (event: React.PointerEvent) => {
    if (!penDown) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const rect = canvas?.getBoundingClientRect();
    if (!canvas || !ctx || !rect) return;
    ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    ctx.stroke();
  };

  const stopDraw = () => setPenDown(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fef3f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fcd34d';
    ctx.font = '120px "Baloo 2"';
    ctx.fillText('क', 40, 150);
    ctx.fillText('A', 160, 240);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-700">Trace the Nepali and English letters with your finger or mouse.</p>
      <canvas
        ref={canvasRef}
        width={320}
        height={260}
        className="rounded-3xl bg-[#fef3f2] shadow-soft touch-none"
        onPointerDown={startDraw}
        onPointerMove={draw}
        onPointerUp={stopDraw}
        onPointerLeave={stopDraw}
      />
      <button className="px-4 py-2 rounded-xl bg-rose-500 text-white text-sm font-semibold" onClick={clearCanvas}>
        Clear canvas
      </button>
    </div>
  );
};

export default TracingGame;
