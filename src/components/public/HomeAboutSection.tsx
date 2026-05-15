"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Crown,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const tabs = [
  {
    id: "legacy",
    label: "The AUF Legacy",
    title: "A legacy rooted in service and scholarship",
    description:
      "Established on May 25, 1962 by Dr. Barbara Yap-Angeles and family as Angeles Institute of Technology, AUF earned university status in 1971 and became the first Catholic University in Central Luzon in 1978. Today, it remains a non-stock, non-profit educational foundation dedicated to instruction, research, and community service.",
    highlights: ["Founded 1962", "University status 1971", "Catholic University 1978"],
  },
  {
    id: "vision",
    label: "Vision & Mission",
    title: "Guided by faith. Driven by excellence.",
    description:
      "Inspired by the Catholic Church, AUF envisions a center of excellence in instruction, research, and community extension services in the region and the global community. Its mission is the total development of man for God and Humanity, supported by quality education and continuous improvement.",
    highlights: ["Center of Excellence", "Total development", "Quality education"],
  },
  {
    id: "governance",
    label: "Governance",
    title: "Shared leadership for a resilient institution",
    description:
      "The Board of Trustees provides strategic direction, while the Management Committee oversees daily operations through the deans and heads of academic, administrative, and finance offices. AUF practices shared leadership and participatory management to address evolving community needs.",
    highlights: ["Board of Trustees", "Management Committee", "Participatory leadership"],
  },
];

const values = [
  {
    title: "Mabuti",
    subtitle: "Integrity of Character — Virtus",
    description:
      "Live with courage, humility, and honesty, guided by faith, hope, love, and respect for others.",
    icon: Scale,
  },
  {
    title: "Magaling",
    subtitle: "Competence for Excellence — Veritas",
    description:
      "Pursue truth, mastery, and lifelong learning through discipline, collaboration, and excellence.",
    icon: Sparkles,
  },
  {
    title: "May Malasakit sa Kapwa",
    subtitle: "Charity as Mission — Caritas",
    description:
      "Practice compassion through service, leadership, and community engagement for societal good.",
    icon: HeartHandshake,
  },
];

const recognitions = [
  {
    label: "CHED Autonomous Status",
    detail: "Highest level of academic freedom",
    icon: ShieldCheck,
  },
  {
    label: "ISO 21001:2015",
    detail: "International quality systems",
    icon: Crown,
  },
  {
    label: "THE Impact Rankings",
    detail: "Recognized SDG contributions",
    icon: BookOpen,
  },
  {
    label: "QS Asian University Rankings",
    detail: "Leading university in Asia",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeAboutSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,64,158,0.08),_transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.36em] text-[#27409E]">
            About AUF
          </div>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Discover our legacy, mission, and governance.
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Explore the milestones, values, and leadership that shape Angeles University
            Foundation today.
          </p>
        </div>
        <motion.div
          className="grid gap-10 lg:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={containerVariants}
        >
          <div className="lg:col-span-5">
            <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/70 bg-slate-200 shadow-xl sm:h-[440px]">
              <Image
                src="/about-placeholder.jpg"
                alt="About AUF"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1b4d]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#27409E] shadow">
                Since 1962
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                      activeTab === tab.id
                        ? "bg-[#27409E] text-white"
                        : "border border-slate-200 text-slate-600 hover:border-[#27409E]/40"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {activeContent.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {activeContent.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeContent.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[#EAD162]/50 bg-[#EAD162]/20 px-3 py-1 text-xs font-semibold text-[#8c6d12]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          variants={containerVariants}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E]">
                    {value.subtitle}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          variants={containerVariants}
        >
          {recognitions.map((recognition) => {
            const Icon = recognition.icon;
            return (
              <div key={recognition.label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAD162]/30 text-[#8c6d12]">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{recognition.label}</div>
                  <div className="text-xs text-slate-500">{recognition.detail}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
