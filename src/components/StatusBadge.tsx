import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

type StatusType = "success" | "warning" | "error";

interface StatusBadgeProps {
  status: StatusType;
  text: string;
  className?: string;
}

const StatusBadge = ({ status, text, className }: StatusBadgeProps) => {
  const icons = {
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
  };

  const Icon = icons[status];

  return (
    <div
      className={cn(
        "inline-flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium",
        {
          "status-success": status === "success",
          "status-warning": status === "warning", 
          "status-error": status === "error",
        },
        className
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
};

export default StatusBadge;