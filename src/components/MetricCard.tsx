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
        "bg-white rounded-lg p-4 lg:p-6 shadow-sm border border-gray-100",
        "hover:shadow-md transition-all duration-300",
        "animate-fade-in min-h-[120px]",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            {title}
          </h3>
          <TrendIndicator
            change={change}
            trend={trend}
            colorClass={styles.color}
          />
        </div>
        <div className="ml-4 flex-shrink-0">
          <MiniChart
            bars={styles.bars}
            colorClass={styles.color}
            chartBgClass={styles.chart}
          />
        </div>
      </div>

      <div className="mt-2">
        <span className="text-2xl lg:text-3xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
}