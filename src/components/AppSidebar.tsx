import { NavLink, useLocation } from "react-router-dom";
import { Home, Calendar, MapPin, Users, Briefcase, Shield, FileText, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Map", url: "/map", icon: MapPin },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Jobs", url: "/jobs", icon: Briefcase },
  { title: "Quotes", url: "/quotes", icon: Shield },
  { title: "My Services", url: "/services", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="sidebar-custom" collapsible="icon">
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">VinShik</div>
        <button className="sidebar-collapse-btn">
          <ChevronLeft className="w-[12.96px] h-[12.96px] text-[#98A2B3] rotate-90" />
        </button>
      </div>

      <SidebarContent>
        {/* Navigation */}
        <div className="sidebar-navigation pt-[25.93px]">
          {navigationItems.map((item) => {
            const active = isActive(item.url);
            return (
              <NavLink
                key={item.title}
                to={item.url}
                className={cn(
                  active ? "nav-item-active" : "nav-item-inactive"
                )}
              >
                <div className="nav-item-content">
                  <item.icon
                    className={cn(
                      active ? "nav-icon-active" : "nav-icon-inactive"
                    )}
                  />
                  <span
                    className={cn(
                      active ? "nav-text-active" : "nav-text-inactive"
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}