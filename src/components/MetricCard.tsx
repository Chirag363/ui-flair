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
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            {title}
          </h3>
          <TrendIndicator
            change={change}
            trend={trend}
            colorClass={styles.color}
          />
        </div>
        <div className="ml-4">
          <MiniChart
            bars={styles.bars}
            colorClass={styles.color}
            chartBgClass="bg-transparent"
          />
        </div>
      </div>

      <div className="mt-3">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
}