import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendIndicatorProps {
  change: string;
  trend: "up" | "down";
  colorClass: string;
}

export function TrendIndicator({ change, trend, colorClass }: TrendIndicatorProps) {
  const isPositive = trend === "up";
  const iconBgColor = isPositive ? 'rgba(29, 191, 115, 0.16)' : 'rgba(239, 68, 68, 0.16)';
  const iconColor = isPositive ? '#1DBF73' : '#EF4444';

  return (
    <div className="flex flex-row items-center py-[6.48148px] gap-[6.48px] w-[60.93px] h-[32.41px]">
      {/* Icon container */}
      <div 
        className="flex flex-row justify-center items-center p-[3.24074px] w-[19.44px] h-[19.44px] border-[0.405093px] border-black/[0.02] rounded-[40.5093px]"
        style={{
          background: `radial-gradient(125% 125% at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), ${iconBgColor}`,
          backgroundBlendMode: 'overlay, normal',
        }}
      >
        {isPositive ? (
          <TrendingUp 
            className="w-[12.96px] h-[12.96px]" 
            style={{
              background: `radial-gradient(125% 125% at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), ${iconColor}`,
              backgroundBlendMode: 'overlay, normal',
              color: iconColor
            }}
          />
        ) : (
          <TrendingDown 
            className="w-[12.96px] h-[12.96px]" 
            style={{
              background: `radial-gradient(125% 125% at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), ${iconColor}`,
              backgroundBlendMode: 'overlay, normal',
              color: iconColor
            }}
          />
        )}
      </div>
      
      {/* Label */}
      <div className="flex flex-row items-center w-[35px] h-[18px]">
        <span 
          className="text-[10.5324px] font-medium leading-[18px] opacity-60"
          style={{
            fontFamily: 'Inter Display',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #161922',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {isPositive ? "+" : "-"}{change}
        </span>
      </div>
    </div>
  );
}