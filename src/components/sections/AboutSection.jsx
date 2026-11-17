import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Server, Layers, Cpu, Download } from "lucide-react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/config/personalInfo";
import { siteConfig } from "@/config/siteConfig";
import { fadeIn, slideUp, staggerContainer } from "@/animations/variants";

const ICONS = {
  Briefcase,
  Server,
  Layers,
  Cpu,
};

export function AboutSection() {
  return (
    <SectionContainer id="about" background="subtle">
      <SectionHeading
        badge="About Me"
        title="Engineering Foundations & Philosophy"
        subtitle="A little more about my journey as a developer."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative Introduction */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Quick Info Badges */}
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-semibold text-foreground shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-semibold text-foreground shadow-sm">
              <GraduationCap className="h-3.5 w-3.5 text-primary" />
              <span>{personalInfo.educationDegree}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-semibold text-foreground shadow-sm">
              <Server className="h-3.5 w-3.5 text-primary" />
              <span>{personalInfo.role}</span>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-base text-foreground/90 leading-relaxed">
            {personalInfo.aboutIntro.map((paragraph, idx) => (
              <p key={idx} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Resume Link */}
          <div className="pt-2">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button variant="secondary" size="md" leftIcon={Download}>
                Download Detailed Resume
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Column: 4 Highlight Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
        >
          {personalInfo.highlights.map((item) => {
            const Icon = ICONS[item.icon] || Server;
            return (
              <motion.div key={item.id} variants={slideUp}>
                <Card hover className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-surface-secondary text-primary border border-border/50 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
