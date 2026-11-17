import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Timeline } from "@/components/portfolio/Timeline";
import { experienceData } from "@/config/experience";
import { fadeIn } from "@/animations/variants";

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionHeading
        badge="Career Journey"
        title="Professional Experience"
        subtitle="Building real-world applications and solving business problems."
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <Timeline experiences={experienceData} />
      </motion.div>
    </SectionContainer>
  );
}
