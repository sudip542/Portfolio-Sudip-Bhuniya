import React, { useState, useEffect } from "react";
import { Menu, Download } from "lucide-react";
import { ResponsiveContainer } from "@/components/common/ResponsiveContainer";
import { ThemeSelector } from "@/components/common/ThemeSelector";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/siteConfig";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

export function Navbar({ className }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 border-b",
          isScrolled
            ? "bg-surface/85 backdrop-blur-md border-border/80 shadow-sm"
            : "bg-surface/50 backdrop-blur-sm border-transparent",
          className
        )}
      >
        <ResponsiveContainer size="max-w-6xl">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/20 border border-primary/40 font-extrabold text-primary text-sm group-hover:scale-105 transition-transform">
                SB
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base text-foreground tracking-tight group-hover:text-primary transition-colors">
                  Sudip Bhuniya
                </span>
                <span className="text-[11px] text-muted -mt-0.5 font-medium hidden sm:block">
                  Java Backend Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      isActive
                        ? "text-primary bg-primary/10 shadow-sm font-bold"
                        : "text-muted hover:text-foreground hover:bg-surface-secondary/70"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions: Theme Selector & Resume CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeSelector />

              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="hidden sm:inline-flex"
              >
                <Button variant="outline" size="sm" leftIcon={Download}>
                  Resume
                </Button>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-secondary border border-border"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
}
