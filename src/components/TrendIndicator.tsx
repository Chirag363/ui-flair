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
      <div className={cn(
        "flex items-center justify-center w-5 h-5 rounded-full",
        "bg-opacity-16",
        isPositive ? "bg-green-500" : "bg-red-500"
      )}>
        {isPositive ? (
          <TrendingUp className="h-3 w-3 text-green-500" />
        ) : (
          <TrendingDown className="h-3 w-3 text-red-500" />
        )}
      </div>
      <span className={cn("text-[10.5px] font-medium leading-[18px]", colorClass, "opacity-60")}>
        {isPositive ? "+" : ""}{change}
      </span>
    </div>
  );
}