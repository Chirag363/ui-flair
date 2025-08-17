import { Mail, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between flex-1">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-semibold text-foreground mb-1">
          Welcome back, Julie 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what you need to focus on today
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover-scale"
        >
          <Mail className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover-scale"
        >
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-10 w-10 hover-scale">
          <AvatarImage src="/lovable-uploads/c4885ec0-7adb-40ad-aaaa-96bd95d6eaf5.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}