import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  type: "active" | "progress" | "finished" | "leads";
  className?: string;
}

const typeStyles = {
  active: {
    color: "text-metric-active",
    chart: "bg-chart-active",
    bars: [60, 80, 40, 90, 70, 50, 85],
  },
  progress: {
    color: "text-metric-progress", 
    chart: "bg-chart-progress",
    bars: [40, 60, 80, 30, 70, 90, 45],
  },
  finished: {
    color: "text-metric-finished",
    chart: "bg-chart-finished", 
    bars: [70, 45, 85, 60, 90, 40, 75],
  },
  leads: {
    color: "text-metric-leads",
    chart: "bg-chart-leads",
    bars: [50, 90, 30, 80, 45, 70, 95],
  },
};

export function MetricCard({ 
  title, 
  value, 
  change, 
  trend, 
  type, 
  className 
}: MetricCardProps) {
  const styles = typeStyles[type];
  const isPositive = trend === "up";
  
  return (
    <div className={cn(
      "bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <span className={cn("text-xs px-2 py-1 rounded-full", styles.color, "bg-opacity-10")}>
              {isPositive ? "+" : ""}{change}
            </span>
            {isPositive ? (
              <TrendingUp className="h-3 w-3 text-emerald-500" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500" />
            )}
          </div>
        </div>
      </div>

      {/* Value */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-foreground">{value}</span>
      </div>

      {/* Mini Chart */}
      <div className={cn("rounded-lg p-3 flex items-end justify-center gap-1 h-16", styles.chart)}>
        {styles.bars.map((height, index) => (
          <div
            key={index}
            className={cn("rounded-sm", styles.color.replace('text-', 'bg-'))}
            style={{ 
              height: `${(height / 100) * 40}px`,
              width: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
}