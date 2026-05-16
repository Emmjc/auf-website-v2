"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, ChevronDown, FileText, Handshake, Network, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const sections: Section[] = [
  { id: "overview", label: "Overview", icon: <Handshake className="size-4" /> },
  { id: "guidelines", label: "Guidelines & Policy", icon: <FileText className="size-4" /> },
  { id: "forms", label: "Partnership Forms", icon: <Briefcase className="size-4" /> },
  { id: "partners", label: "Partner Categories", icon: <Network className="size-4" /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function PartnershipsPage() {
  const reduceMotion = useReducedMotion();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    overview: true,
  });

  const sectionMap = useMemo(() => new Set(sections.map((section) => section.id)), []);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionMap.has(hash)) {
        setOpenSections((prev) => ({ ...prev, [hash]: true }));
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [sectionMap]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMenuNavigate = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col bg-white">
      <section className="relative overflow-hidden bg-[#f6f8ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,64,158,0.12),_transparent_55%)]" />
        <div className="absolute right-0 top-0 h-48 w-48 -translate-y-10 translate-x-8 rounded-full bg-[#EAD162]/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-52 w-52 -translate-x-10 translate-y-12 rounded-full bg-[#27409E]/15 blur-3xl" />

        <motion.div
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16 pt-20"
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={containerVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#27409E]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#27409E]">
              <Sparkles className="size-3.5" />
              External Affairs
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Partnerships
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              AUF builds strategic partnerships that strengthen instruction, research, and
              community engagement. Find guidance, policy references, and partnership forms
              here.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => handleMenuNavigate(section.id)}
                className="rounded-full border border-[#27409E]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:border-[#27409E]/40"
              >
                {section.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>



      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-6">
          <motion.div
            id="overview"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("overview")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections.overview}
              aria-controls="overview-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Overview
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Partnerships at AUF
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${openSections.overview ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id="overview-panel"
              className={`overflow-hidden transition-all ${
                openSections.overview ? "mt-4 max-h-[1200px]" : "max-h-0"
              }`}
            >
              <div className="space-y-4 text-sm text-slate-600 sm:text-base">
                <p>
                  AUF partners with academic institutions, industry leaders, government
                  agencies, alumni groups, and community stakeholders to deliver impactful
                  programs that advance instruction, research, and service. This page gathers
                  the guidelines, policies, and form references needed to initiate and manage
                  partnership engagements.
                </p>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Note
                  </div>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    Official forms and downloadable files will be linked here once available.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="guidelines"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("guidelines")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections.guidelines}
              aria-controls="guidelines-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Guidelines & Policy
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Establishing Partnerships
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${openSections.guidelines ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id="guidelines-panel"
              className={`overflow-hidden transition-all ${
                openSections.guidelines ? "mt-4 max-h-[1200px]" : "max-h-0"
              }`}
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Guidelines
                  </div>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    Guidelines on Establishing Partnership with AUF
                  </p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                  >
                    Link coming soon
                  </button>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Policy
                  </div>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    AUF Policy for External Affairs
                  </p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                  >
                    Link coming soon
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="forms"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("forms")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections.forms}
              aria-controls="forms-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Links for Partnership Forms
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Partnership Proposal and Engagement Forms
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${openSections.forms ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id="forms-panel"
              className={`overflow-hidden transition-all ${
                openSections.forms ? "mt-4 max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Partnership Proposal Form",
                  "Partnership Endorsement Form",
                  "Partnership Registration Form",
                  "Partnership Evaluation Form",
                  "Engagement Request Form",
                  "Engagement Activity Report",
                ].map((form) => (
                  <div
                    key={form}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{form}</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Document link pending
                      </div>
                    </div>
                    <button
                      type="button"
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                    >
                      Coming soon
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            id="partners"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("partners")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections.partners}
              aria-controls="partners-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Partner Categories
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Partnership Types
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${openSections.partners ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id="partners-panel"
              className={`overflow-hidden transition-all ${
                openSections.partners ? "mt-4 max-h-[1200px]" : "max-h-0"
              }`}
            >
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "Curricular Partners",
                  "Industry Partners",
                  "Networks (AUN-QA, AUAP)",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-900">{item}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                      Details coming soon
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
