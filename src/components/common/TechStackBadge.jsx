import React from "react";
import { cn } from "@/lib/utils";

export function TechStackBadge({ name, icon: Icon, className, size = "md" }) {
  const sizes = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3 py-1.5 text-sm gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-lg border border-border/80 bg-surface-secondary/50 text-foreground hover:bg-surface-secondary hover:border-primary/40 transition-colors duration-150",
        sizes[size],
        className
      )}
    >
      {Icon && <Icon className="h-3 w-3 text-primary shrink-0" />}
      <span>{name}</span>
    </span>
  );
}
