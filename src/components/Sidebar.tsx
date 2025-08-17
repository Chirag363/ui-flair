import { cn } from "@/lib/utils";
import {
  Home,
  Calendar,
  Map,
  Users,
  Briefcase,
  FileText,
  Settings,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Calendar, label: "Calendar" },
  { icon: Map, label: "Map" },
  { icon: Users, label: "Clients" },
  { icon: Briefcase, label: "Jobs" },
  { icon: FileText, label: "Quotes" },
  { icon: Settings, label: "My Services" },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn(
      "w-64 h-screen bg-card border-r border-border flex flex-col",
      className
    )}>
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">VinShik</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}