import React from "react";
import { cn } from "@/lib/utils";
import { ResponsiveContainer } from "./ResponsiveContainer";

export function SectionContainer({
  id,
  className,
  children,
  size = "max-w-6xl",
  noPadding = false,
  background = "default",
}) {
  const backgrounds = {
    default: "bg-transparent",
    surface: "bg-surface/50 border-y border-border/30",
    subtle: "bg-surface-secondary/30",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        !noPadding && "py-16 sm:py-20 lg:py-24",
        backgrounds[background],
        className
      )}
    >
      <ResponsiveContainer size={size}>{children}</ResponsiveContainer>
    </section>
  );
}
