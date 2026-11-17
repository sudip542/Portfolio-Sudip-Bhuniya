import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col mb-12 sm:mb-16 max-w-2xl", alignments[align], className)}>
      {badge && (
        <Badge variant="primary" size="md" className="mb-3">
          {badge}
        </Badge>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SectionTitle({ children, className }) {
  return (
    <h2 className={cn("text-2xl sm:text-3xl font-bold tracking-tight text-foreground", className)}>
      {children}
    </h2>
  );
}
