import React from "react";
import { cn } from "@/lib/utils";

export function GradientText({
  children,
  className,
  as: Component = "span",
  gradient = "from-primary via-sky-500 to-blue-600",
}) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent font-extrabold",
        gradient,
        className
      )}
    >
      {children}
    </Component>
  );
}
