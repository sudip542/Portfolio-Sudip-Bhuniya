import React from "react";
import { Mail, ExternalLink, Globe } from "lucide-react";
import { Github, Linkedin, Instagram, LeetCode } from "@/assets/icons/BrandIcons";
import { cn } from "@/lib/utils";

const ICONS = {
  Github,
  Linkedin,
  Mail,
  Instagram,
  LeetCode,
  Code2: LeetCode,
};

export function SocialLink({
  name,
  url,
  icon,
  username,
  description,
  variant = "button", // 'button' | 'card' | 'icon'
  className,
  isConfigured = true,
}) {
  const IconComponent = typeof icon === "string" ? ICONS[icon] || Globe : icon || Globe;

  if (variant === "icon") {
    return (
      <a
        href={isConfigured ? url : undefined}
        target={isConfigured && url.startsWith("http") ? "_blank" : undefined}
        rel={isConfigured && url.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={name}
        title={isConfigured ? `${name} - ${username || ""}` : `${name} (Coming Soon)`}
        className={cn(
          "flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:bg-surface-secondary hover:border-primary/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm",
          !isConfigured && "opacity-50 cursor-not-allowed hover:bg-surface hover:text-muted hover:border-border",
          className
        )}
      >
        <IconComponent className="h-4 w-4" />
      </a>
    );
  }

  if (variant === "card") {
    return (
      <a
        href={isConfigured ? url : undefined}
        target={isConfigured && url.startsWith("http") ? "_blank" : undefined}
        rel={isConfigured && url.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(
          "group relative flex flex-col p-5 rounded-xl border border-border bg-card text-card-foreground shadow-card hover:shadow-soft hover:-translate-y-1 hover:border-primary/40 transition-all duration-200",
          !isConfigured && "opacity-60 cursor-not-allowed hover:translate-y-0 hover:shadow-card hover:border-border",
          className
        )}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-surface-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <IconComponent className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                {name}
              </h4>
              {username && <p className="text-xs text-muted font-mono">{username}</p>}
            </div>
          </div>
          {isConfigured ? (
            <ExternalLink className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
          ) : (
            <span className="text-[11px] font-medium text-muted bg-surface-secondary px-2 py-0.5 rounded">
              Configurable
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted leading-relaxed mt-1">
            {description}
          </p>
        )}
      </a>
    );
  }

  // Default 'button' variant
  return (
    <a
      href={isConfigured ? url : undefined}
      target={isConfigured && url.startsWith("http") ? "_blank" : undefined}
      rel={isConfigured && url.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface text-xs font-semibold text-foreground hover:bg-surface-secondary hover:border-primary/40 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        !isConfigured && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <IconComponent className="h-4 w-4 text-primary" />
      <span>{name}</span>
      {isConfigured && <ExternalLink className="h-3 w-3 text-muted ml-0.5" />}
    </a>
  );
}
