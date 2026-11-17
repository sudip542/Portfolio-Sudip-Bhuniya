import React from "react";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { educationData } from "@/config/education";
import { cn } from "@/lib/utils";

export function EducationCard({ education = educationData, className }) {
  const { institution, degree, branch, period, location, cgpa, highlights } = education;

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card hover:shadow-soft hover:border-primary/40 transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border/50">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-surface-secondary text-primary border border-border/60 shrink-0">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              {degree}
            </h3>
            <p className="text-sm font-semibold text-primary mt-1">
              {branch}
            </p>
            <p className="text-sm text-foreground/80 font-medium mt-0.5">
              {institution}
            </p>
          </div>
        </div>

        {/* CGPA Badge & Timeline */}
        <div className="flex flex-col sm:items-end gap-2 text-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/15 border border-primary/30 text-primary font-bold text-sm">
            <Award className="h-4 w-4" />
            <span>CGPA: {cgpa}</span>
          </div>
          <div className="flex items-center gap-3 text-muted">
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
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
            Academic Highlights & Focus Areas
          </h4>
          <ul className="space-y-2">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
