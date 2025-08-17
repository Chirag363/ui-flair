export interface MetricData {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  type: "active" | "progress" | "finished" | "leads";
}

export interface NavigationItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}