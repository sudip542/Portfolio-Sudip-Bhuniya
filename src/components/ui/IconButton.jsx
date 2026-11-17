import React from "react";
import { cn } from "@/lib/utils";

export const IconButton = React.forwardRef(
  (
    {
      className,
      icon: Icon,
      variant = "ghost",
      size = "md",
      label,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
      secondary: "bg-surface-secondary text-foreground hover:bg-surface-tertiary border border-border/50",
      outline: "border border-border text-foreground hover:bg-surface-secondary hover:border-primary/50",
      ghost: "text-muted-foreground hover:text-foreground hover:bg-surface-secondary/70",
    };

    const sizes = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        title={label}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {Icon ? <Icon className="h-5 w-5" /> : children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
