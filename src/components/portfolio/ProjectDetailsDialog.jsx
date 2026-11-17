import React from "react";
import { Dialog } from "@/components/ui/Dialog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TechStackBadge } from "@/components/common/TechStackBadge";
import { Github } from "@/assets/icons/BrandIcons";
import { ExternalLink, CheckCircle, AlertCircle, Layers, ShieldCheck } from "lucide-react";

export function ProjectDetailsDialog({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={project.name}
      description={project.category}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 text-foreground">
        {/* Tagline & Badges */}
        <div className="p-4 rounded-xl bg-surface-secondary/50 border border-border/60">
          <p className="text-sm sm:text-base font-semibold text-primary italic">
            "{project.tagline}"
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.engineeringBadges.map((badge, idx) => (
              <Badge key={idx} variant="primary" size="sm">
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview & Problem Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              Problem It Solves
            </h4>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        </div>

        {/* Architecture Overview */}
        {project.architectureOverview && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Architecture & System Design
            </h4>
            <div className="p-4 rounded-xl bg-surface border border-border text-xs sm:text-sm leading-relaxed text-muted font-mono">
              {project.architectureOverview}
            </div>
          </div>
        )}

        {/* Key Engineering Decisions / Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted">
            Key Engineering Highlights & Decisions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-surface-secondary/40 border border-border/50 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-foreground">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs text-muted pl-6 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Use Cases */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted">
            Real-World Use Cases
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechStackBadge key={tech} name={tech} size="md" />
            ))}
          </div>
        </div>

        {/* Actions / Repositories */}
        <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" leftIcon={Github}>
                  View Repository
                </Button>
              </a>
            ) : null}

            {project.hasLiveDemo && project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" rightIcon={ExternalLink}>
                  Live Demo
                </Button>
              </a>
            ) : (
              <span className="text-xs text-muted font-medium bg-surface-secondary px-3 py-2 rounded-lg border border-border/50">
                Live demo coming soon
              </span>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
