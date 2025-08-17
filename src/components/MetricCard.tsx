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
        "flex flex-row items-center relative",
        "bg-white border border-[#F3F6F7]",
        "shadow-[0px_1.57536px_2.36304px_rgba(16,16,16,0.16),inset_0px_-3.15072px_3.15072px_rgba(255,255,255,0.6)]",
        "backdrop-blur-[1.9692px] rounded-[12.963px]",
        "p-[19.4444px] w-[264.82px] h-[122.3px]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Main content area */}
      <div className="flex flex-row items-end w-[225.93px] h-[111.39px]">
        
        {/* Left column - text content */}
        <div className="flex flex-col justify-center items-start w-[183.8px] h-[83.41px]">
          
          {/* Title */}
          <div 
            className="w-[59px] h-[18px] text-[11.3426px] font-medium leading-[18px] mb-[6.48px]"
            style={{
              fontFamily: 'Inter Display',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #161922',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </div>

          {/* Trend indicator */}
          <TrendIndicator
            change={change}
            trend={trend}
            colorClass={styles.color}
          />

          {/* Value */}
          <div 
            className="w-[67px] h-[33px] text-[25.9259px] font-bold leading-[32px] mt-auto"
            style={{
              fontFamily: 'Inter Display',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #161922',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {value}
          </div>
        </div>

        {/* Right column - chart */}
        <div className="flex flex-col items-end pb-[6.48148px] gap-[6.48px] w-[42.13px] h-[34.84px]">
          <MiniChart
            bars={styles.bars}
            colorClass={styles.color}
          />
        </div>
      </div>
    </div>
  );
}