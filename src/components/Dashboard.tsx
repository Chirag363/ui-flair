import { AppSidebar } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { metricsData } from "@/constants/metrics";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <header className="bg-card border-b border-border px-3 sm:px-6 py-3 flex items-center">
            {/* Mobile sidebar trigger */}
            <SidebarTrigger className="md:hidden mr-3" />
            <div className="flex-1">
              <DashboardHeader />
            </div>
          </header>

          <main className="flex-1 p-3 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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