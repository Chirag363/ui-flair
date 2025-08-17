import { cn } from "@/lib/utils";

interface MiniChartProps {
  bars: number[];
  colorClass: string;
}

export function MiniChart({ bars, colorClass }: MiniChartProps) {
  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((height, index) => (
        <div
          key={index}
          className={cn(
            "rounded-sm transition-all duration-300",
            colorClass.replace('text-', 'bg-')
          )}
          style={{
            height: `${(height / 100) * 40}px`,
            width: "3px",
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}