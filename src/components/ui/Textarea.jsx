import React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef(
  ({ className, error, label, id, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <textarea
          id={id}
          rows={rows}
          ref={ref}
          className={cn(
            "flex w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground transition-all duration-200 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[100px]",
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
Textarea.displayName = "Textarea";
