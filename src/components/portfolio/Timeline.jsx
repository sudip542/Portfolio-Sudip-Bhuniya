import React from "react";
import { ExperienceCard } from "./ExperienceCard";

export function Timeline({ experiences = [] }) {
  return (
    <div className="relative border-l-2 border-border/80 ml-4 sm:ml-6 my-8">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
