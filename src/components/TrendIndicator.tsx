import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendIndicatorProps {
  change: string;
  trend: "up" | "down";
  colorClass: string;
}

export function TrendIndicator({ change, trend, colorClass }: TrendIndicatorProps) {
  const isPositive = trend === "up";

  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "text-xs px-2 py-1 rounded-full transition-colors",
          colorClass,
          "bg-opacity-10"
        )}
      >
        {isPositive ? "+" : ""}{change}
      </span>
      {isPositive ? (
        <TrendingUp className="h-3 w-3 text-emerald-500" />
      ) : (
        <TrendingDown className="h-3 w-3 text-red-500" />
      )}
    </div>
  );
}