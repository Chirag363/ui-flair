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
    <div className="flex items-center gap-0">
      <div className="trend-icon">
        {isPositive ? (
          <TrendingUp className="h-[12.96px] w-[12.96px]" />
        ) : (
          <TrendingDown className="h-[12.96px] w-[12.96px]" />
        )}
      </div>
      
      <div className="flex items-center ml-[6.48px]">
        <span className="metric-text-gradient font-medium text-[10.53px] leading-[18px] opacity-60">
          {isPositive ? "+" : ""}{change}
        </span>
      </div>
    </div>
  );
}