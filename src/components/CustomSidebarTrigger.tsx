import React from "react";
import { ChevronLeft } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface CustomSidebarTriggerProps extends React.ComponentProps<"button"> {
  className?: string;
}

export function CustomSidebarTrigger({ className, ...props }: CustomSidebarTriggerProps) {
  const { toggleSidebar, state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <button
      onClick={toggleSidebar}
      className={cn(
        "absolute z-10 flex items-center justify-center",
        "w-[13px] h-[32px] -right-[0.09px] top-[3px]",
        "bg-gradient-to-br from-white to-gray-200/70",
        "border border-[#E1E6EA]",
        "shadow-[0px_0.8px_1.6px_rgba(109,109,109,0.2)]",
        "rounded-l-[8px] rounded-r-none",
        "transition-transform duration-200 hover:scale-105",
        className
      )}
      {...props}
    >
      <ChevronLeft 
        className={cn(
          "w-[13px] h-[13px] text-[#98A2B3] transition-transform duration-200",
          isCollapsed ? "rotate-180" : "rotate-0"
        )}
        strokeWidth={0.8}
      />
    </button>
  );
}