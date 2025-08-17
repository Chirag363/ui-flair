import { cn } from "@/lib/utils";

interface MiniChartProps {
  bars: number[];
  colorClass: string;
  chartBgClass: string;
}

export function MiniChart({ bars, colorClass, chartBgClass }: MiniChartProps) {
  return (
    <div className="flex items-end gap-[3.24px] w-[42.13px] h-[28.36px]">
      {bars.map((height, index) => (
        <div
          key={index}
          className="chart-column flex-1"
          style={{
            height: `${(height / 100) * 28.36}px`,
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}