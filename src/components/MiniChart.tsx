import { cn } from "@/lib/utils";

interface MiniChartProps {
  bars: number[];
  colorClass: string;
  chartBgClass: string;
}

export function MiniChart({ bars, colorClass, chartBgClass }: MiniChartProps) {
  return (
    <div className={cn("rounded-lg p-3 flex items-end justify-center gap-1 h-16", chartBgClass)}>
      {bars.map((height, index) => (
        <div
          key={index}
          className={cn(
            "rounded-sm transition-all duration-300 hover:scale-110",
            colorClass.replace('text-', 'bg-')
          )}
          style={{
            height: `${(height / 100) * 40}px`,
            width: "4px",
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}