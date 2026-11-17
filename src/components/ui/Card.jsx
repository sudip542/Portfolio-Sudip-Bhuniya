import React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef(
  ({ className, hover = true, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-card-border bg-card text-card-foreground shadow-card transition-all duration-300",
          hover && "hover:shadow-soft hover:-translate-y-1 hover:border-primary/40",
          glow && "hover:shadow-glow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("p-6 pb-3 space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
});
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn("text-xl font-bold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("text-sm text-muted leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
});
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("p-6 pt-3", className)} {...props}>
      {children}
    </div>
  );
});
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0 flex items-center justify-between border-t border-border/40 mt-4", className)}
      {...props}
    >
      {children}
    </div>
  );
});
CardFooter.displayName = "CardFooter";
