import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projectsData } from "@/config/projects";
import { staggerContainer, slideUp } from "@/animations/variants";

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionHeading
        badge="System Architecture & Code"
        title="Featured Projects"
        subtitle="Engineering solutions to real-world problems."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={slideUp} className="h-full">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
