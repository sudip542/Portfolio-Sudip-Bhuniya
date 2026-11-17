import React from "react";
import { cn } from "@/lib/utils";

export function ResponsiveContainer({ className, children, size = "max-w-6xl" }) {
  return (
    <div className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", size, className)}>
      {children}
    </div>
  );
}
