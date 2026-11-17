import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ContactCard } from "@/components/portfolio/ContactCard";
import { contactSchema } from "@/lib/validations/contactSchema";
import { contactService } from "@/services/contactService";
import { fadeIn, slideUp } from "@/animations/variants";

export function ContactSection() {
  const [submissionState, setSubmissionState] = useState({
    status: "idle", // 'idle' | 'loading' | 'success' | 'error'
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmissionState({ status: "loading", message: "" });
    try {
      const response = await contactService.sendMessage(data);
      if (response.success) {
        setSubmissionState({
          status: "success",
          message: response.message,
        });
        reset();
      } else {
        setSubmissionState({
          status: "error",
          message: response.message,
        });
      }
    } catch (err) {
      setSubmissionState({
        status: "error",
        message: "An unexpected error occurred. Please try reaching out directly via email.",
      });
    }
  };

  return (
    <SectionContainer id="contact" background="subtle">
      <SectionHeading
        badge="Get In Touch"
        title="Let's Build Something Great Together"
        subtitle="I'm always interested in connecting with engineering teams, discussing backend challenges and exploring new opportunities."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
        {/* Left: Contact Form */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="name"
                label="Your Name *"
                placeholder="e.g. John Doe"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                id="email"
                type="email"
                label="Email Address *"
                placeholder="e.g. john@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <Input
              id="subject"
              label="Subject *"
              placeholder="e.g. Backend Engineering Role / Technical Inquiry"
              error={errors.subject?.message}
              {...register("subject")}
            />

            <Textarea
              id="message"
              label="Message *"
              rows={5}
              placeholder="Share the details of your inquiry or project opportunity..."
              error={errors.message?.message}
              {...register("message")}
            />

            {/* Submission Status Alerts */}
            <AnimatePresence>
              {submissionState.status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">{submissionState.message}</div>
                </motion.div>
              )}

              {submissionState.status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs sm:text-sm text-red-700 dark:text-red-300 flex items-start gap-2.5"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">{submissionState.message}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
              rightIcon={Send}
            >
              {isSubmitting ? "Delivering Message..." : "Send Message"}
            </Button>
          </form>
        </motion.div>

        {/* Right: Direct Information Channels */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">
              Direct Contact & Channels
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Prefer direct outreach? You can email me directly or connect through professional developer networks.
            </p>
          </div>

          <ContactCard />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
