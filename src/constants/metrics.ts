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
    color: "text-blue-500",
    bars: [50, 100, 63, 63, 89, 57, 63] as number[],
  },
  progress: {
    color: "text-orange-500", 
    bars: [50, 40, 70, 35, 60, 80, 30] as number[],
  },
  finished: {
    color: "text-green-500",
    bars: [60, 35, 75, 50, 80, 45, 70] as number[],
  },
  leads: {
    color: "text-purple-500",
    bars: [45, 80, 25, 70, 40, 65, 85] as number[],
  },
};