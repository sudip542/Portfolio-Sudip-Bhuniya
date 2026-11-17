import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function Tooltip({ children, content, position = "top", className }) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && content && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 px-2.5 py-1 text-xs font-medium text-foreground bg-surface border border-border rounded-md shadow-md pointer-events-none whitespace-nowrap animate-in fade-in zoom-in-95 duration-150",
            positions[position],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
