import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, Sparkles, Check, ChevronDown } from "lucide-react";
import { useTheme, THEMES } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const ICONS = {
  Sparkles: Sparkles,
  Sun: Sun,
  Moon: Moon,
};

export function ThemeSelector({ className }) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const activeThemeObj = THEMES.find((t) => t.id === theme) || THEMES[0];
  const ActiveIcon = ICONS[activeThemeObj.icon] || Sparkles;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative inline-block text-left", className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select theme"
        className="flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-surface text-foreground hover:bg-surface-secondary transition-all text-xs font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ActiveIcon className="h-3.5 w-3.5 text-primary" />
        <span className="hidden sm:inline-block">{activeThemeObj.label}</span>
        <ChevronDown className={cn("h-3 w-3 text-muted transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-surface p-1.5 shadow-lg z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2 py-1.5 text-[11px] font-semibold text-muted uppercase tracking-wider">
            Switch Theme
          </div>
          {THEMES.map((item) => {
            const ItemIcon = ICONS[item.icon] || Sparkles;
            const isSelected = item.id === theme;
            return (
              <button
                key={item.id}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setTheme(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center justify-between w-full px-2.5 py-2 text-xs rounded-lg transition-colors text-left",
                  isSelected
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-surface-secondary"
                )}
              >
                <div className="flex items-center gap-2">
                  <ItemIcon className={cn("h-3.5 w-3.5", isSelected ? "text-primary" : "text-muted")} />
                  <span>{item.label}</span>
                </div>
                {isSelected && <Check className="h-3.5 w-3.5 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ThemeToggle({ className }) {
  const { theme, cycleTheme } = useTheme();
  const current = THEMES.find((t) => t.id === theme) || THEMES[0];
  const Icon = ICONS[current.icon] || Sparkles;

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Current theme: ${current.label}. Click to cycle.`}
      className={cn(
        "p-2 rounded-lg border border-border bg-surface text-foreground hover:bg-surface-secondary transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
    >
      <Icon className="h-4 w-4 text-primary" />
    </button>
  );
}
