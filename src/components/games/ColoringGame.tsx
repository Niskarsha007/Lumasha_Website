import { useState } from 'react';

const palette = ['#FF9AA2', '#FFD3B6', '#B3F1E5', '#A0E7E5', '#E7D7FF', '#FFE066'];
const cells = Array.from({ length: 12 }).map((_, i) => i);

const ColoringGame = () => {
  const [selected, setSelected] = useState(palette[0]);
  const [colors, setColors] = useState<Record<number, string>>({});

  const paint = (cell: number) => setColors((prev) => ({ ...prev, [cell]: selected }));

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-700">Tap a color and fill the picture blocks. Save the image when you love it!</p>
      <div className="flex gap-2 flex-wrap">
        {palette.map((color) => (
          <button
            key={color}
            className={`w-10 h-10 rounded-full border-2 ${selected === color ? 'border-midnight' : 'border-transparent'}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelected(color)}
            aria-label={`Use color ${color}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 max-w-xs">
        {cells.map((cell) => (
          <div
            key={cell}
            className="aspect-square rounded-2xl shadow-soft cursor-pointer"
            style={{ backgroundColor: colors[cell] || '#FFF5D9' }}
            onClick={() => paint(cell)}
          />
        ))}
      </div>
      <button className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-semibold">Save image (placeholder)</button>
    </div>
  );
};

export default ColoringGame;
