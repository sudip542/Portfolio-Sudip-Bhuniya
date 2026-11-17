import React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  icon: Icon,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors whitespace-nowrap";

  const variants = {
    default:
      "bg-surface-secondary text-foreground border border-border/70",
    primary:
      "bg-primary/15 text-primary-hover dark:text-primary border border-primary/30",
    outline:
      "border border-border text-muted-foreground hover:text-foreground",
    secondary:
      "bg-surface-tertiary/60 text-muted-foreground border border-border/40",
    status:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium",
    sky:
      "bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/25",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs gap-1",
    md: "px-3 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {Icon && <Icon className="h-3 w-3 shrink-0" />}
      {children}
    </span>
  );
}
