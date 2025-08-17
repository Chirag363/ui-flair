import { useLocation } from "react-router-dom";
import { navigationItems } from "@/constants/navigation";
import { ChevronLeft } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="relative">
      <Sidebar collapsible="icon" className="relative">
        <SidebarContent>
          {/* VinShik Logo Header */}
          <div 
            className="flex items-center justify-center border-b border-border bg-white"
            style={{
              width: '230px',
              height: '55px',
              padding: '8px 16px',
            }}
          >
            {!isCollapsed ? (
              <div className="flex items-center justify-center w-full">
                <span 
                  className="font-bold text-center"
                  style={{
                    fontSize: '24px',
                    lineHeight: '1',
                    color: '#088597', // Vin in teal
                  }}
                >
                  Vin
                </span>
                <span 
                  className="font-bold text-center"
                  style={{
                    fontSize: '24px', 
                    lineHeight: '1',
                    color: '#000000', // Shik in black
                  }}
                >
                  Shik
                </span>
              </div>
            ) : (
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
            )}
          </div>

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={
                        isActive(item.url)
                          ? "bg-primary text-primary-foreground mx-2 rounded-lg"
                          : "hover:bg-accent hover:text-accent-foreground transition-colors mx-2 rounded-lg"
                      }
                    >
                      <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && (
                          <span className="font-medium">{item.title}</span>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Custom Toggle Button */}
      <button
        className="custom-sidebar-toggle"
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          width: '12.96px',
          height: '32.41px',
          right: '-0.09px',
          top: '3.24px',
          background: 'linear-gradient(206.34deg, #FFFFFF 40.99%, rgba(239, 239, 239, 0.7) 83.87%)',
          border: '0.810185px solid #E1E6EA',
          boxShadow: '0px 0.810185px 1.62037px rgba(109, 109, 109, 0.2)',
          borderRadius: '8.10185px 0px 0px 8.10185px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '9.72px 0px',
          gap: '6.48px',
          zIndex: 1,
        }}
      >
        <ChevronLeft 
          className="transform rotate-90" 
          style={{
            width: '12.96px',
            height: '12.96px',
            border: '0.810185px solid #98A2B3',
          }}
        />
      </button>
    </div>
  );
}