import React from "react";
import { cn } from "@/lib/utils";

export function PageContainer({ className, children }) {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background text-foreground antialiased", className)}>
      {children}
    </div>
  );
}
