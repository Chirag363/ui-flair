import {
  Home,
  Calendar,
  MapPin,
  Users,
  Briefcase,
  FileText,
  Wrench,
} from "lucide-react";
import type { NavigationItem } from "@/types/dashboard";

export const navigationItems: NavigationItem[] = [
  { title: "Home", url: "/", icon: Home, active: true },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Map", url: "/map", icon: MapPin },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Jobs", url: "/jobs", icon: Briefcase },
  { title: "Quotes", url: "/quotes", icon: FileText },
  { title: "My Services", url: "/services", icon: Wrench },
];