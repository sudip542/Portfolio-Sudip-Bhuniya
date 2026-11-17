import React from "react";
import { cn } from "@/lib/utils";

export function Divider({ className, text, orientation = "horizontal" }) {
  if (orientation === "vertical") {
    return <div className={cn("w-px bg-border h-full self-stretch", className)} />;
  }

  if (text) {
    return (
      <div className={cn("relative flex items-center justify-center my-6", className)}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative px-4 bg-background text-xs text-muted uppercase tracking-wider font-semibold">
          {text}
        </div>
      </div>
    );
  }

  return <hr className={cn("border-t border-border my-6", className)} />;
}
