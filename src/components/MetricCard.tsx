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
        "bg-card metric-card-custom transition-all duration-300 hover-scale",
        "animate-fade-in",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </h3>
          <TrendIndicator
            change={change}
            trend={trend}
            colorClass={styles.color}
          />
        </div>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold text-foreground">{value}</span>
      </div>

      <MiniChart
        bars={styles.bars}
        colorClass={styles.color}
        chartBgClass={styles.chart}
      />
    </div>
  );
}