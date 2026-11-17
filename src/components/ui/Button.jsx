import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      children,
      as: Component = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm hover:shadow-md font-semibold",
      secondary:
        "bg-surface-secondary text-foreground hover:bg-surface-tertiary border border-border/50",
      outline:
        "border border-border text-foreground hover:bg-surface-secondary/70 hover:border-primary/50",
      ghost:
        "text-foreground hover:bg-surface-secondary/60 hover:text-foreground",
      link:
        "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
      icon: "h-10 w-10 p-0",
    };

    return (
      <Component
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          LeftIcon && <LeftIcon className="h-4 w-4 shrink-0" />
        )}
        <span>{children}</span>
        {!isLoading && RightIcon && <RightIcon className="h-4 w-4 shrink-0" />}
      </Component>
    );
  }
);

Button.displayName = "Button";
