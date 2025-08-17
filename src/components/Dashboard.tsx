import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";

const metrics = [
  {
    title: "Active Jobs",
    value: "43.7k",
    change: "12.2%",
    trend: "up" as const,
    type: "active" as const,
  },
  {
    title: "Jobs In Progress", 
    value: "92.3k",
    change: "31.1%",
    trend: "down" as const,
    type: "progress" as const,
  },
  {
    title: "Finished Jobs",
    value: "66.3k", 
    change: "3.3%",
    trend: "up" as const,
    type: "finished" as const,
  },
  {
    title: "New Leads",
    value: "92.3k",
    change: "31.1%", 
    trend: "up" as const,
    type: "leads" as const,
  },
];

export function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                change={metric.change}
                trend={metric.trend}
                type={metric.type}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}