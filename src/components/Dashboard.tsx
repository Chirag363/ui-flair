import { AppSidebar } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { metricsData } from "@/constants/metrics";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <header className="bg-card border-b border-border px-4 py-3">
            <div className="flex-1">
              <DashboardHeader />
            </div>
          </header>

          <main className="flex-1 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metricsData.map((metric, index) => (
                <MetricCard
                  key={metric.title}
                  {...metric}
                  className={`animate-fade-in`}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}