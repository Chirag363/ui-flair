import { cn } from "@/lib/utils";

interface MiniChartProps {
  bars: number[];
  colorClass: string;
}

export function MiniChart({ bars, colorClass }: MiniChartProps) {
  // Get color class for gradient background
  const getBarColorClass = () => {
    switch(colorClass) {
      case 'text-blue-500':
        return 'bg-gradient-radial-blue';
      case 'text-orange-500':
        return 'bg-gradient-radial-orange';
      case 'text-green-500':
        return 'bg-gradient-radial-green';
      case 'text-purple-500':
        return 'bg-gradient-radial-purple';
      default:
        return 'bg-gradient-radial-blue';
    }
  };

  return (
    <div className="flex flex-col items-end" style={{ width: '42.13px', height: '34.84px', paddingBottom: '6.48px' }}>
      <div className="flex items-end" style={{ width: '42.13px', height: '28.36px', gap: '3.24px' }}>
        {bars.map((height, index) => (
          <div
            key={index}
            className={cn(
              "transition-all duration-300",
              getBarColorClass()
            )}
            style={{
              width: '3.24px',
              height: `${(height / 100) * 28.36}px`,
              borderRadius: '1.62px 1.62px 0px 0px',
              animationDelay: `${index * 50}ms`,
              backgroundBlendMode: 'overlay, normal',
            }}
          />
        ))}
      </div>
    </div>
  );
}