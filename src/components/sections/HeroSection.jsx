import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Terminal } from "lucide-react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProfileImage } from "@/components/common/ProfileImage";
import { SocialLink } from "@/components/common/SocialLink";
import { personalInfo } from "@/config/personalInfo";
import { siteConfig } from "@/config/siteConfig";
import { socialLinks } from "@/config/socialLinks";
import { fadeIn, slideUp, staggerContainer } from "@/animations/variants";

export function HeroSection() {
  const heroSocials = socialLinks.filter((s) => ["github", "linkedin", "leetcode", "email"].includes(s.id));

  return (
    <SectionContainer id="home" className="pt-8 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
      <div className="relative">
        {/* Subtle decorative background gradient glows */}
        <div
          className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -right-24 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <motion.div variants={slideUp}>
              <Badge variant="status" size="lg" className="shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                {personalInfo.statusBadge}
              </Badge>
            </motion.div>

            {/* Main Headings */}
            <motion.div variants={slideUp} className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Hi, I'm{" "}
                <span className="text-primary">{personalInfo.name}</span>
              </h1>
              <div className="inline-flex items-center gap-2 font-mono text-base sm:text-xl font-semibold text-primary">
                <Terminal className="h-5 w-5" />
                <span>{personalInfo.role}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={slideUp}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/95">
                {personalInfo.headline}
              </h2>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg text-muted leading-relaxed max-w-xl"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a href="#projects">
                <Button variant="primary" size="lg" rightIcon={ArrowRight}>
                  Explore My Work
                </Button>
              </a>

              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button variant="outline" size="lg" leftIcon={Download}>
                  Download Resume
                </Button>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2"
            >
              {heroSocials.map((social) => (
                <SocialLink
                  key={social.id}
                  name={social.name}
                  url={social.url}
                  icon={social.icon}
                  username={social.username}
                  isConfigured={social.isConfigured}
                  variant="button"
                />
              ))}
            </motion.div>

            {/* Tech Stack Strip */}
            <motion.div
              variants={slideUp}
              className="pt-6 w-full max-w-xl border-t border-border/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {personalInfo.heroTechStrip.map((tech, idx) => (
                    <span
                      key={tech}
                      className="inline-flex items-center text-xs font-medium text-foreground bg-surface-secondary/70 border border-border/80 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                      {idx < personalInfo.heroTechStrip.length - 1 && (
                        <span className="text-muted/40 ml-2 hidden sm:inline">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
