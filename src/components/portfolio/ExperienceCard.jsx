import React from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TechStackBadge } from "@/components/common/TechStackBadge";
import { cn } from "@/lib/utils";

export function ExperienceCard({ experience, isLast = false }) {
  const { role, company, companyUrl, location, period, isCurrent, promotionBadge, projects } = experience;

  return (
    <div className="relative pl-6 sm:pl-8 pb-12 group last:pb-2">
      {/* Timeline Node Icon */}
      <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-surface border-2 border-primary shadow-sm text-primary transition-transform group-hover:scale-110">
        <Briefcase className="h-4 w-4" />
      </div>

      {/* Main Experience Content Box */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-card transition-all duration-300 hover:shadow-soft hover:border-primary/40">
        {/* Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/50">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                {role}
              </h3>
              {isCurrent && (
                <Badge variant="status" size="sm">
                  Present
                </Badge>
              )}
            </div>
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary mt-0.5 hover:underline inline-flex items-center gap-1 group/company"
              >
                <span>{company}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover/company:opacity-100 transition-opacity" />
              </a>
            ) : (
              <p className="text-sm font-semibold text-primary mt-0.5">
                {company}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              {period}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {location}
            </span>
          </div>
        </div>

        {/* Promotion Badge If Present */}
        {promotionBadge && (
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <Award className="h-4 w-4 shrink-0 text-primary" />
            <span>{promotionBadge}</span>
          </div>
        )}

        {/* Projects Breakdown */}
        <div className="mt-6 space-y-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-surface-secondary/40 border border-border/50 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h4 className="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {proj.name}
                </h4>
                {proj.url && (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline shrink-0"
                  >
                    <span>Keross App Store</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.map((tech) => (
                  <TechStackBadge key={tech} name={tech} size="sm" />
                ))}
              </div>

              {/* Achievements */}
              <ul className="space-y-2 mt-2">
                {proj.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
