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
      {isPositive ? (
        <TrendingUp className={cn("h-4 w-4", colorClass)} />
      ) : (
        <TrendingDown className={cn("h-4 w-4", colorClass)} />
      )}
      <span className={cn("text-sm font-medium", colorClass)}>
        {isPositive ? "+" : "-"}{change}
      </span>
    </div>
  );
}