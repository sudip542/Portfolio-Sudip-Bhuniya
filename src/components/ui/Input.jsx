import React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef(
  ({ className, type = "text", error, label, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground transition-all duration-200 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 font-medium animate-in fade-in duration-150">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
