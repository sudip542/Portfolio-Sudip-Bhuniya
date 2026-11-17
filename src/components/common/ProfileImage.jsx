import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProfileImage({ className, size = 320 }) {
  const [imageError, setImageError] = useState(false);
  const profileSrc = "/src/assets/images/profile.jpg";

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Subtle Ambient Background Glow Rings */}
      <div
        className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-sky-400/10 to-transparent blur-2xl -z-10 animate-pulse"
        style={{ animationDuration: "6s" }}
        aria-hidden="true"
      />
      <div
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-sky-300/30 blur-sm -z-10"
        aria-hidden="true"
      />

      {/* Main Circular Container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-full p-1.5 bg-gradient-to-b from-border to-primary/40 shadow-glow"
        style={{
          width: "clamp(240px, 28vw, 340px)",
          height: "clamp(240px, 28vw, 340px)",
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-surface relative flex items-center justify-center border-2 border-border/80">
          {!imageError ? (
            <img
              src={profileSrc}
              alt="Sudip Bhuniya - Java Backend Developer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
          ) : (
            // Graceful Fallback Developer Monogram
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-surface via-surface-secondary to-primary/10 p-6 text-center select-none">
              <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary/10 border border-primary/30 mb-3 shadow-inner">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                  SB
                </span>
                <Server className="absolute -bottom-1 -right-1 h-6 w-6 p-1 rounded-full bg-surface text-primary border border-border shadow-sm" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-foreground tracking-tight">
                Sudip Bhuniya
              </h3>
              <p className="text-xs text-muted font-medium mt-0.5">
                Java Backend Developer
              </p>
              <div className="mt-2.5 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  Open to Opportunities
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Subtle Floating Tech Badges */}
      <div
        className="hidden sm:flex absolute -bottom-2 -left-4 items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-soft text-xs font-semibold text-foreground"
      >
        <span className="h-2 w-2 rounded-full bg-sky-500" />
        Java 21 & Spring Boot
      </div>
      <div
        className="hidden sm:flex absolute -top-2 -right-2 items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-soft text-xs font-semibold text-foreground"
      >
        <Server className="h-3.5 w-3.5 text-primary" />
        Backend Architecture
      </div>
    </div>
  );
}
