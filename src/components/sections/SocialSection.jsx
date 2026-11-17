import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SocialProfiles } from "@/components/portfolio/SocialProfiles";
import { fadeIn } from "@/animations/variants";

export function SocialSection() {
  return (
    <SectionContainer id="socials">
      <SectionHeading
        badge="Community & Presence"
        title="Let's Connect"
        subtitle="Find me across developer communities and professional platforms."
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <SocialProfiles />
      </motion.div>
    </SectionContainer>
  );
}
