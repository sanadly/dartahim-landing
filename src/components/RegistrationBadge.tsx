
import { Shield, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RegistrationBadgeProps {
  className?: string;
  variant?: "navbar" | "footer";
}

const RegistrationBadge = ({ className, variant = "navbar" }: RegistrationBadgeProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1 text-xs",
        variant === "footer" ? "text-text/80" : "text-primary",
        className
      )}
    >
      <Shield className="h-3.5 w-3.5" />
      <span>شركة مسجلة في ليبيا</span>
      <CheckCircle className="h-3 w-3" />
    </div>
  );
};

export default RegistrationBadge;
