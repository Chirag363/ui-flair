import { cn } from "@/lib/utils";

interface MiniChartProps {
  bars: number[];
  colorClass: string;
  chartBgClass: string;
}

export function MiniChart({ bars, colorClass, chartBgClass }: MiniChartProps) {
  return (
    <div className="flex items-end justify-center gap-1 h-12 w-16">
      {bars.map((height, index) => (
        <div
          key={index}
          className={cn(
            "rounded-sm",
            colorClass.replace('text-', 'bg-')
          )}
          style={{
            height: `${(height / 100) * 32}px`,
            width: "3px",
          }}
        />
      ))}
    </div>
  );
}