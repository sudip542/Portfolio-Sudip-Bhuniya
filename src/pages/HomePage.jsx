import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <SocialSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
