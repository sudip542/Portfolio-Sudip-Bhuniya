import React from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/assets/icons/BrandIcons";
import { personalInfo } from "@/config/personalInfo";
import { socialLinks } from "@/config/socialLinks";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function ContactCard({ className }) {
  const github = socialLinks.find((s) => s.id === "github");
  const linkedin = socialLinks.find((s) => s.id === "linkedin");

  return (
    <div className={cn("space-y-4", className)}>
      {/* Email Card */}
      <a
        href={`mailto:${siteConfig.email}`}
        className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card shadow-card hover:shadow-soft hover:border-primary/40 transition-all group"
      >
        <div className="p-3 rounded-lg bg-surface-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
          <Mail className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider">
            Email Directly
          </p>
          <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
            {siteConfig.email}
          </p>
        </div>
        <ExternalLink className="h-4 w-4 text-muted group-hover:text-primary transition-colors shrink-0" />
      </a>

      {/* Location Card */}
      <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card shadow-card">
        <div className="p-3 rounded-lg bg-surface-secondary text-primary shrink-0">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider">
            Location
          </p>
          <p className="text-sm font-bold text-foreground">
            {personalInfo.location}
          </p>
        </div>
      </div>

      {/* GitHub & LinkedIn Quick Links */}
      <div className="grid grid-cols-2 gap-3">
        {github && (
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-card text-card-foreground shadow-card hover:border-primary/40 hover:text-primary transition-all text-xs font-semibold"
          >
            <Github className="h-4 w-4 text-primary shrink-0" />
            <span className="truncate">GitHub Profile</span>
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-card text-card-foreground shadow-card hover:border-primary/40 hover:text-primary transition-all text-xs font-semibold"
          >
            <Linkedin className="h-4 w-4 text-primary shrink-0" />
            <span className="truncate">LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}
