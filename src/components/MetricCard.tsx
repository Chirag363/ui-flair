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
        "metric-card-custom transition-all duration-300 hover-scale",
        "animate-fade-in",
        className
      )}
    >
      <div className="flex flex-col justify-center items-start flex-1">
        {/* Title */}
        <h3 className="metric-text-gradient font-medium text-[11.34px] leading-[18px] mb-1">
          {title}
        </h3>

        {/* Trend Stack */}
        <div className="flex items-center gap-[6.48px] py-[6.48px] mb-2">
          <TrendIndicator
            change={change}
            trend={trend}
            colorClass={styles.color}
          />
        </div>

        {/* Value */}
        <span className="metric-text-gradient font-bold text-[25.93px] leading-8">
          {value}
        </span>
      </div>

      {/* Chart Section */}
      <div className="flex flex-col items-end pb-[6.48px]">
        <MiniChart
          bars={styles.bars}
          colorClass={styles.color}
          chartBgClass={styles.chart}
        />
      </div>
    </div>
  );
}