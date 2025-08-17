import { Mail, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between flex-1">
      <div className="animate-fade-in min-w-0 flex-1 mr-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground mb-1 truncate">
          Welcome back, Julie 👋
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground hidden sm:block">
          Here's what you need to focus on today
        </p>
      </div>

      <div 
        className="flex items-center gap-1 sm:gap-3 flex-shrink-0 rounded-lg p-2"
        style={{
          background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(206.34deg, rgba(255, 255, 255, 0.5) 40.99%, rgba(239, 239, 239, 0.35) 83.87%)'
        }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover-scale h-8 w-8 sm:h-10 sm:w-10"
        >
          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover-scale h-8 w-8 sm:h-10 sm:w-10"
        >
          <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10 hover-scale">
          <AvatarImage src="/lovable-uploads/c4885ec0-7adb-40ad-aaaa-96bd95d6eaf5.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}