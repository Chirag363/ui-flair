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
        "bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative",
        "hover:shadow-md transition-all duration-300",
        "animate-fade-in",
        className
      )}
    >
      {/* Title */}
      <h3 className="text-sm font-medium text-gray-600 mb-3">
        {title}
      </h3>
      
      {/* Trend indicator */}
      <div className="mb-6">
        <TrendIndicator
          change={change}
          trend={trend}
          colorClass={styles.color}
        />
      </div>

      {/* Value */}
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{value}</span>
      </div>

      {/* Mini chart positioned at bottom right */}
      <div className="absolute bottom-6 right-6">
        <MiniChart
          bars={styles.bars}
          colorClass={styles.color}
        />
      </div>
    </div>
  );
}