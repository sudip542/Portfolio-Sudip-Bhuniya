import React, { useState } from "react";
import { ResponsiveContainer } from "@/components/common/ResponsiveContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { Divider } from "@/components/ui/Divider";
import { Tooltip } from "@/components/ui/Tooltip";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { ThemeSelector, ThemeToggle } from "@/components/common/ThemeSelector";
import { ProfileImage } from "@/components/common/ProfileImage";
import { TechStackBadge } from "@/components/common/TechStackBadge";
import { SocialLink } from "@/components/common/SocialLink";
import { ExperienceCard } from "@/components/portfolio/ExperienceCard";
import { Timeline } from "@/components/portfolio/Timeline";
import { SkillCategoryCard } from "@/components/portfolio/SkillCategoryCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { EducationCard } from "@/components/portfolio/EducationCard";
import { SocialProfiles } from "@/components/portfolio/SocialProfiles";
import { ContactCard } from "@/components/portfolio/ContactCard";

import { experienceData } from "@/config/experience";
import { skillCategories } from "@/config/skills";
import { projectsData } from "@/config/projects";
import { educationData } from "@/config/education";
import { useTheme } from "@/context/ThemeContext";

import { Sparkles, Sun, Moon, ArrowRight, Download, Send, Server, Database, Code2 } from "lucide-react";

export function ComponentShowcase() {
  const { theme, setTheme } = useTheme();
  const [testInput, setTestInput] = useState("");

  return (
    <div className="py-12 space-y-16">
      <ResponsiveContainer size="max-w-6xl">
        {/* Showcase Header */}
        <div className="p-8 rounded-2xl border border-border bg-card shadow-soft mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <Badge variant="primary" size="md" className="mb-2">
                Phase 2 Verification Testbench
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Design System & Component Showcase
              </h1>
              <p className="mt-2 text-sm text-muted">
                Interactive preview for verifying the 3 themes (Light Blue, Light, Dark), responsive breakpoints, hover effects, and accessible states.
              </p>
            </div>

            {/* Quick Theme Switchers */}
            <div className="flex flex-col gap-2 p-3 rounded-xl bg-surface-secondary/70 border border-border shrink-0">
              <span className="text-xs font-semibold text-foreground">Active Theme:</span>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={theme === "theme-light-blue" ? "primary" : "outline"}
                  onClick={() => setTheme("theme-light-blue")}
                >
                  Light Blue (Primary)
                </Button>
                <Button
                  size="sm"
                  variant={theme === "theme-light" ? "primary" : "outline"}
                  onClick={() => setTheme("theme-light")}
                >
                  Light
                </Button>
                <Button
                  size="sm"
                  variant={theme === "theme-dark" ? "primary" : "outline"}
                  onClick={() => setTheme("theme-dark")}
                >
                  Dark
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Theme Tokens & Color Palette */}
        <div className="space-y-6">
          <SectionHeading
            badge="Theme Engine"
            title="Design Tokens & Theme Verification"
            subtitle="Current active theme palette mapped through CSS variables."
            align="left"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            <div className="p-4 rounded-xl border border-border bg-background text-foreground shadow-sm">
              <span className="text-[11px] font-bold block mb-1">Background</span>
              <span className="text-xs text-muted font-mono">var(--background)</span>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface text-foreground shadow-sm">
              <span className="text-[11px] font-bold block mb-1">Surface</span>
              <span className="text-xs text-muted font-mono">var(--surface)</span>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface-secondary text-foreground shadow-sm">
              <span className="text-[11px] font-bold block mb-1">Secondary</span>
              <span className="text-xs text-muted font-mono">var(--surface-sec)</span>
            </div>
            <div className="p-4 rounded-xl border border-primary bg-primary text-primary-foreground shadow-sm font-bold">
              <span className="text-[11px] block mb-1">Primary</span>
              <span className="text-xs font-mono">var(--primary)</span>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card text-card-foreground shadow-sm">
              <span className="text-[11px] font-bold block mb-1">Card</span>
              <span className="text-xs text-muted font-mono">var(--card)</span>
            </div>
            <div className="p-4 rounded-xl border-2 border-border text-foreground shadow-sm">
              <span className="text-[11px] font-bold block mb-1">Border</span>
              <span className="text-xs text-muted font-mono">var(--border)</span>
            </div>
          </div>
        </div>

        <Divider text="UI Primitives" />

        {/* 2. Buttons & IconButtons */}
        <div className="space-y-6">
          <SectionHeading
            badge="Interactive Components"
            title="Buttons & Controls"
            subtitle="Different variants, sizes, and states."
            align="left"
          />
          <div className="flex flex-wrap items-center gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm">
            <Button variant="primary" size="md" rightIcon={ArrowRight}>
              Primary Button
            </Button>
            <Button variant="secondary" size="md">
              Secondary Button
            </Button>
            <Button variant="outline" size="md" leftIcon={Download}>
              Outline Download
            </Button>
            <Button variant="ghost" size="md">
              Ghost Button
            </Button>
            <Button variant="primary" size="md" isLoading>
              Loading State
            </Button>
            <IconButton icon={Sparkles} label="Theme Magic" variant="secondary" />
            <ThemeSelector />
            <ThemeToggle />
          </div>
        </div>

        {/* 3. Badges & Tech Stack Tags */}
        <div className="space-y-6">
          <SectionHeading
            badge="Metadata & Chips"
            title="Badges & Technology Chips"
            subtitle="Visual indicators and tech stack tags."
            align="left"
          />
          <div className="flex flex-wrap items-center gap-3 p-6 rounded-2xl border border-border bg-card shadow-sm">
            <Badge variant="primary">Primary Badge</Badge>
            <Badge variant="status">Available for Opportunities</Badge>
            <Badge variant="sky">Double-Entry Ledger</Badge>
            <Badge variant="secondary">Secondary Badge</Badge>
            <Badge variant="outline">Outline Badge</Badge>
            <TechStackBadge name="Java 21" icon={Server} size="md" />
            <TechStackBadge name="PostgreSQL" icon={Database} size="md" />
            <TechStackBadge name="Spring Boot" size="md" />
          </div>
        </div>

        <Divider text="Profile & Hero Assets" />

        {/* 4. Profile Image Verification */}
        <div className="space-y-6">
          <SectionHeading
            badge="Hero Section Asset"
            title="Profile Photograph / Fallback Avatar"
            subtitle="Graceful fallback monogram avatar with soft glow and tech badges."
            align="left"
          />
          <div className="p-8 rounded-2xl border border-border bg-card flex items-center justify-center">
            <ProfileImage />
          </div>
        </div>

        <Divider text="Portfolio Domain Cards" />

        {/* 5. Projects Cards Verification */}
        <div className="space-y-6">
          <SectionHeading
            badge="Featured Projects"
            title="Project Cards & Details Modal"
            subtitle="Individual cards for Coinpath, ShowZen, and E-Commerce with interactive detail dialogs."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* 6. Experience Timeline Verification */}
        <div className="space-y-6">
          <SectionHeading
            badge="Career Journey"
            title="Professional Experience Timeline"
            subtitle="Vertical timeline with promotion badge and quantifiable metrics."
            align="left"
          />
          <Timeline experiences={experienceData} />
        </div>

        {/* 7. Skill Categories Verification */}
        <div className="space-y-6">
          <SectionHeading
            badge="Technical Competencies"
            title="Skill Categories"
            subtitle="Clean category cards without arbitrary progress bars."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <SkillCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* 8. Education & Socials Verification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SectionHeading
              badge="Education"
              title="Academic Background"
              subtitle="Supreme Knowledge Foundation B.Tech card."
              align="left"
            />
            <EducationCard education={educationData} />
          </div>

          <div className="space-y-6">
            <SectionHeading
              badge="Direct Channels"
              title="Contact Channels"
              subtitle="Direct email and location details."
              align="left"
            />
            <ContactCard />
          </div>
        </div>

        {/* 9. Social Profiles Grid */}
        <div className="space-y-6">
          <SectionHeading
            badge="Developer Networks"
            title="Social Profiles"
            subtitle="Interactive cards with platform icons and descriptions."
            align="left"
          />
          <SocialProfiles />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
