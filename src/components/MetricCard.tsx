import { cn } from "@/lib/utils";
import { metricStyles } from "@/constants/metrics";
import { TrendIndicator } from "./TrendIndicator";
import { MiniChart } from "./MiniChart";
import type { MetricData } from "@/types/dashboard";

interface MetricCardProps extends MetricData {
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  trend,
  type,
  className,
}: MetricCardProps) {
  const styles = metricStyles[type];

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative",
        "hover:shadow-md transition-all duration-300",
        "animate-fade-in w-[265px] h-[122px]",
        className
      )}
    >
      <div className="flex flex-row items-center">
        <div className="flex flex-col justify-center items-start flex-grow">
          {/* Title */}
          <h3 className="text-[11px] font-medium text-gray-600 mb-2 leading-[18px]">
            {title}
          </h3>
          
          {/* Trend indicator */}
          <div className="mb-2">
            <TrendIndicator
              change={change}
              trend={trend}
              colorClass={styles.color}
            />
          </div>

          {/* Value */}
          <div>
            <span className="text-[26px] font-bold text-gray-900 leading-[32px]">{value}</span>
          </div>
        </div>

        {/* Mini chart positioned at right side */}
        <div className="flex flex-col items-end pb-2">
          <MiniChart
            bars={styles.bars}
            colorClass={styles.color}
          />
        </div>
      </div>
    </div>
  );
}