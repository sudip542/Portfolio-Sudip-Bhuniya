import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SkillCategoryCard } from "@/components/portfolio/SkillCategoryCard";
import { skillCategories } from "@/config/skills";
import { staggerContainer, slideUp } from "@/animations/variants";

export function SkillsSection() {
  return (
    <SectionContainer id="skills" background="subtle">
      <SectionHeading
        badge="Technical Expertise"
        title="Technical Skills"
        subtitle="Technologies and concepts I use to build software."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.id} variants={slideUp}>
            <SkillCategoryCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
