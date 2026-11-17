import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { modalBackdrop, modalContent } from "@/animations/variants";

export function Dialog({ isOpen, onClose, title, description, children, className, maxWidth = "max-w-3xl" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "dialog-title" : undefined}
            className={cn(
              "relative w-full rounded-2xl bg-surface border border-border shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto",
              maxWidth,
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-secondary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            {(title || description) && (
              <div className="mb-6 pr-8">
                {title && (
                  <h2 id="dialog-title" className="text-2xl font-bold text-foreground tracking-tight">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="mt-1 text-sm text-muted">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Content */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
