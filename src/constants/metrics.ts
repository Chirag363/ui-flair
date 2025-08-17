import type { MetricData } from "@/types/dashboard";

export const metricsData: MetricData[] = [
  {
    title: "Active Jobs",
    value: "43.7k",
    change: "12.2%",
    trend: "up",
    type: "active",
  },
  {
    title: "Jobs In Progress",
    value: "92.3k",
    change: "31.1%",
    trend: "down",
    type: "progress",
  },
  {
    title: "Finished Jobs",
    value: "66.3k",
    change: "3.3%",
    trend: "up",
    type: "finished",
  },
  {
    title: "New Leads",
    value: "92.3k",
    change: "31.1%",
    trend: "up",
    type: "leads",
  },
];

export const metricStyles = {
  active: {
    color: "text-metric-active",
    chart: "bg-chart-active",
    bars: [60, 80, 40, 90, 70, 50, 85] as number[],
  },
  progress: {
    color: "text-metric-progress",
    chart: "bg-chart-progress",
    bars: [40, 60, 80, 30, 70, 90, 45] as number[],
  },
  finished: {
    color: "text-metric-finished",
    chart: "bg-chart-finished",
    bars: [70, 45, 85, 60, 90, 40, 75] as number[],
  },
  leads: {
    color: "text-metric-leads",
    chart: "bg-chart-leads",
    bars: [50, 90, 30, 80, 45, 70, 95] as number[],
  },
};