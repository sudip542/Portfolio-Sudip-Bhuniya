import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EducationCard } from "@/components/portfolio/EducationCard";
import { educationData } from "@/config/education";
import { fadeIn } from "@/animations/variants";

export function EducationSection() {
  return (
    <SectionContainer id="education" background="subtle">
      <SectionHeading
        badge="Academic Foundation"
        title="Education"
        subtitle="Formal training and degree in Computer Science and Engineering."
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto"
      >
        <EducationCard education={educationData} />
      </motion.div>
    </SectionContainer>
  );
}
