import { AppSidebar } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { metricsData } from "@/constants/metrics";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <header className="bg-white px-8 py-6 border-b border-gray-100">
            <DashboardHeader />
          </header>

          <main className="flex-1 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metricsData.map((metric, index) => (
                <MetricCard
                  key={metric.title}
                  {...metric}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}