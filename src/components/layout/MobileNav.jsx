import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import { ThemeSelector } from "@/components/common/ThemeSelector";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function MobileNav({ isOpen, onClose, navItems, activeSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface border-l border-border p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center font-bold text-primary text-sm">
                    SB
                  </div>
                  <span className="font-bold text-foreground text-sm">Sudip Bhuniya</span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground hover:bg-surface-secondary"
                      )}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Footer actions inside drawer */}
            <div className="pt-6 border-t border-border/60 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted font-medium">Theme</span>
                <ThemeSelector />
              </div>
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full"
              >
                <Button variant="primary" size="md" className="w-full" leftIcon={Download}>
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
