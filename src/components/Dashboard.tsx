import { AppSidebar } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { metricsData } from "@/constants/metrics";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function Dashboard() {
  return (
    <SidebarProvider>
      <div className="dashboard-container flex min-h-screen w-full max-w-[1403px] h-[735px] mx-auto mt-8">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <header className="bg-card border-b border-border px-4 py-3 flex items-center">
            <SidebarTrigger className="mr-4" />
            <div className="flex-1">
              <DashboardHeader />
            </div>
          </header>

          <main className="flex-1 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[19px] w-[1116px] h-[122px] absolute top-[179px] left-[257px]">
              {metricsData.map((metric, index) => (
                <MetricCard
                  key={metric.title}
                  {...metric}
                  className="animate-fade-in w-[265px] h-[122px]"
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}