import React from "react";
import { ResponsiveContainer } from "@/components/common/ResponsiveContainer";
import { SocialLink } from "@/components/common/SocialLink";
import { navItems } from "@/config/navigation";
import { socialLinks } from "@/config/socialLinks";
import { siteConfig } from "@/config/siteConfig";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface/70 border-t border-border mt-20 pt-16 pb-12 transition-colors">
      <ResponsiveContainer size="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center font-extrabold text-primary text-xs">
                SB
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">
                Sudip Bhuniya
              </span>
            </div>
            <p className="text-sm text-primary font-medium">
              Java Backend Developer
            </p>
            <p className="text-xs text-muted leading-relaxed max-w-md">
              Specializing in Java, Spring Boot, microservices architecture, and distributed systems. Focused on high-throughput transactions, concurrency control, and clean engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.id}
                  name={social.name}
                  url={social.url}
                  icon={social.icon}
                  username={social.username}
                  isConfigured={social.isConfigured}
                  variant="icon"
                />
              ))}
            </div>
            <button
              onClick={scrollToTop}
              type="button"
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {currentYear} Sudip Bhuniya. All rights reserved.</p>
          <p>{siteConfig.footerText}</p>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
