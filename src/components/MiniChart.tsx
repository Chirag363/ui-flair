import { cn } from "@/lib/utils";

interface MiniChartProps {
  bars: number[];
  colorClass: string;
}

export function MiniChart({ bars, colorClass }: MiniChartProps) {
  return (
    <div className="flex flex-row items-end gap-[3.24px] w-[42.13px] h-[28.36px]">
      {bars.map((height, index) => (
        <div
          key={index}
          className="rounded-t-[1.62037px] transition-all duration-300"
          style={{
            width: '3.24px',
            height: `${(height / 100) * 28.36}px`,
            background: 'radial-gradient(125% 125% at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #3860E4',
            backgroundBlendMode: 'overlay, normal',
            animationDelay: `${index * 50}ms`,
            flexGrow: 1,
          }}
        />
      ))}
    </div>
  );
}