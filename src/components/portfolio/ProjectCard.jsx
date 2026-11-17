import React, { useState } from "react";
import { ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { Github } from "@/assets/icons/BrandIcons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TechStackBadge } from "@/components/common/TechStackBadge";
import { ProjectDetailsDialog } from "./ProjectDetailsDialog";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <>
      <Card
        hover
        className={cn(
          "flex flex-col h-full rounded-2xl border border-border bg-card shadow-card group transition-all duration-300",
          className
        )}
      >
        {/* Card Header & Visual Accent */}
        <div className="relative p-6 sm:p-7 pb-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub Repository`}
                  className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-secondary transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>

          <p className="mt-1 text-xs sm:text-sm font-medium text-muted/90 italic">
            "{project.tagline}"
          </p>
        </div>

        {/* Card Content */}
        <div className="px-6 sm:px-7 space-y-4 flex-1">
          <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Engineering Focus Badges */}
          <div className="pt-2">
            <span className="text-[11px] font-semibold text-muted uppercase tracking-wider block mb-2">
              Engineering Focus
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.engineeringBadges.map((badge, idx) => (
                <Badge key={idx} variant="primary" size="sm">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Highlight Sneak Peek */}
          <div className="p-3 rounded-xl bg-surface-secondary/40 border border-border/50 text-xs text-muted space-y-1.5">
            <div className="font-semibold text-foreground flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Core Architectural Highlight:</span>
            </div>
            <p className="line-clamp-2 leading-relaxed">
              {project.highlights[0]?.description}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="pt-1">
            <span className="text-[11px] font-semibold text-muted uppercase tracking-wider block mb-2">
              Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <TechStackBadge key={tech} name={tech} size="sm" />
              ))}
              {project.technologies.length > 5 && (
                <span className="text-xs text-muted self-center font-medium pl-1">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-6 sm:p-7 pt-5 border-t border-border/50 mt-6 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsDetailsOpen(true)}
            rightIcon={ArrowRight}
            className="w-full sm:w-auto"
          >
            View Details
          </Button>

          {project.hasLiveDemo && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>Demo</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <span className="text-[11px] font-medium text-muted/80">
              Live demo coming soon
            </span>
          )}
        </div>
      </Card>

      {/* Details Dialog */}
      <ProjectDetailsDialog
        project={project}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </>
  );
}
