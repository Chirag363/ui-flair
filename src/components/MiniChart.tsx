import { cn } from "@/lib/utils";

interface MiniChartProps {
  bars: number[];
  colorClass: string;
}

export function MiniChart({ bars, colorClass }: MiniChartProps) {
  return (
    <div className="flex items-end gap-1 h-7 w-[42px]">
      {bars.map((height, index) => (
        <div
          key={index}
          className={cn(
            "rounded-t-sm transition-all duration-300",
            colorClass.replace('text-', 'bg-')
          )}
          style={{
            height: `${(height / 100) * 28}px`,
            width: "3.24px",
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}