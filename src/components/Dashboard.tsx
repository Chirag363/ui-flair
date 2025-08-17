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
          <header className="bg-white px-6 py-4 flex items-center justify-between border-b">
            <div className="flex items-center">
              <SidebarTrigger className="mr-4 lg:hidden" />
              <DashboardHeader />
            </div>
          </header>

          <main className="flex-1 p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl">
              {metricsData.map((metric, index) => (
                <MetricCard
                  key={metric.title}
                  {...metric}
                  className="animate-fade-in"
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}