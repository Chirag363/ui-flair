import {
  Home,
  Calendar,
  Map,
  Users,
  Briefcase,
  FileText,
  Settings,
} from "lucide-react";
import type { NavigationItem } from "@/types/dashboard";

export const navigationItems: NavigationItem[] = [
  { title: "Home", url: "/", icon: Home, active: true },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Map", url: "/map", icon: Map },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Jobs", url: "/jobs", icon: Briefcase },
  { title: "Quotes", url: "/quotes", icon: FileText },
  { title: "My Services", url: "/services", icon: Settings },
];