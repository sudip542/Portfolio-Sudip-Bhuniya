import React from "react";
import { Server, Database, Layout, Terminal, Cpu } from "lucide-react";
import { TechStackBadge } from "@/components/common/TechStackBadge";
import { cn } from "@/lib/utils";

const ICONS = {
  Server,
  Database,
  Layout,
  Terminal,
  Cpu,
};

export function SkillCategoryCard({ category, className }) {
  const { name, description, icon, skills } = category;
  const IconComponent = ICONS[icon] || Cpu;

  return (
    <div
      className={cn(
        "flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-soft hover:-translate-y-1 hover:border-primary/40 transition-all duration-300",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3.5 mb-4">
        <div className="p-3 rounded-xl bg-surface-secondary text-primary border border-border/50">
          <IconComponent className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground tracking-tight">
            {name}
          </h3>
          <span className="text-xs text-muted font-medium">
            {skills.length} core concepts
          </span>
        </div>
      </div>

      <p className="text-xs text-muted leading-relaxed mb-6">
        {description}
      </p>

      {/* Skills Grid - No fake percentage bars */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/40">
        {skills.map((skill, idx) => (
          <TechStackBadge
            key={idx}
            name={skill.name}
            size="md"
            className="text-xs"
          />
        ))}
      </div>
    </div>
  );
}
