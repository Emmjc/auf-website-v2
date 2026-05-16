"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, ClipboardCheck, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

type DateRow = {
  testingDate: string;
  deadline: string;
};

type DateGroup = {
  title: string;
  rows: DateRow[];
  note?: string;
};

type DateSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: DateGroup[];
};

const dateSections: DateSection[] = [
  {
    id: "basic-education",
    eyebrow: "Basic Education",
    title: "Basic Education (Kinder to Grade 12)",
    description:
      "There will be no entrance examination and application fee for AUF-IS applicants (Kinder to Grade 12).",
    groups: [
      {
        title: "Grade 1, Grade 7, and Grade 11",
        rows: [
          { testingDate: "February 1, 2025", deadline: "January 09, 2025" },
          { testingDate: "March 8, 2025", deadline: "March 05, 2025" },
          { testingDate: "April 26, 2025", deadline: "April 23, 2025" },
          { testingDate: "May 31, 2025", deadline: "May 28, 2025" },
        ],
      },
      {
        title: "Grade 2 to 6 and Grade 8 to 10 Transferees",
        rows: [
          { testingDate: "To be announced", deadline: "To be announced" },
        ],
      },
      {
        title: "Grade 12 Transferees",
        rows: [
          { testingDate: "To be announced", deadline: "To be announced" },
        ],
      },
    ],
  },
  {
    id: "college-programs",
    eyebrow: "College Programs",
    title: "College Programs",
    description:
      "Schedule for college entrance testing and application fee submission deadlines.",
    groups: [
      {
        title: "BS Nursing",
        rows: [
          { testingDate: "November 16, 2024", deadline: "November 13, 2024" },
          { testingDate: "December 14, 2024", deadline: "December 11, 2024" },
          { testingDate: "February 01, 2025", deadline: "January 29, 2025" },
          { testingDate: "March 08, 2025", deadline: "March 05, 2025" },
        ],
      },
    ],
  },
  {
    id: "all-other-programs",
    eyebrow: "College Programs",
    title: "All Other Programs",
    description:
      "Testing dates for all other undergraduate and graduate programs.",
    groups: [
      {
        title: "All Other Programs",
        rows: [
          { testingDate: "November 16, 2024", deadline: "November 13, 2024" },
          { testingDate: "December 14, 2024", deadline: "December 11, 2024" },
          { testingDate: "February 01, 2025", deadline: "January 29, 2025" },
          { testingDate: "March 08, 2025", deadline: "March 05, 2025" },
          { testingDate: "April 26, 2025", deadline: "April 23, 2025" },
          { testingDate: "May 31, 2025", deadline: "May 28, 2025" },
          { testingDate: "July 05, 2025", deadline: "July 02, 2025" },
        ],
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const listVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function DateCard({ title, note, rows }: DateGroup) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {note ? <p className="mt-1 text-sm text-slate-600">{note}</p> : null}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#EAD162]/50 bg-[#EAD162]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6d12]">
          <CalendarDays className="size-3.5" />
          Schedule
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="hidden grid-cols-2 gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 sm:grid">
          <span>Testing Dates</span>
          <span>Deadline for application submission and payment of the application fee</span>
        </div>
        {rows.map((row) => {
          const isTba = row.testingDate.toLowerCase().includes("announce");
          return (
            <div
              key={`${title}-${row.testingDate}-${row.deadline}`}
              className="grid gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:grid-cols-2 sm:items-center"
            >
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400 sm:hidden">
                  Testing Dates
                </div>
                <div
                  className={`mt-1 text-sm font-semibold ${
                    isTba ? "text-slate-500" : "text-slate-900"
                  }`}
                >
                  {isTba ? (
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {row.testingDate}
                    </span>
                  ) : (
                    row.testingDate
                  )}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400 sm:hidden">
                  Deadline for application submission and payment of the application fee
                </div>
                <div
                  className={`mt-1 text-sm font-semibold ${
                    row.deadline.toLowerCase().includes("announce")
                      ? "text-slate-500"
                      : "text-slate-900"
                  }`}
                >
                  {row.deadline.toLowerCase().includes("announce") ? (
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {row.deadline}
                    </span>
                  ) : (
                    row.deadline
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TestingDatesPage() {
  const reduceMotion = useReducedMotion();

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
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#27409E]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#27409E]">
                <Sparkles className="size-3.5" />
                Admissions
              </div>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Testing Dates
              </h1>
              <p className="text-sm text-slate-600 sm:text-base">
                Find the official testing schedules and application deadline dates for AUF
                admissions. Please review the specific program group below.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-sm">
              <ClipboardCheck className="size-4 text-[#27409E]" />
              Deadline dates are strictly observed.
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {dateSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-[#27409E]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:border-[#27409E]/40"
              >
                {section.eyebrow}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-16">
          {dateSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: sectionIndex * 0.05 }}
              variants={listVariants}
              className="space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.36em] text-[#27409E]">
                    {section.eyebrow}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {section.groups.map((group, groupIndex) => (
                  <motion.div
                    key={`${section.id}-${group.title}`}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: groupIndex * 0.05 }}
                    variants={listVariants}
                  >
                    <DateCard {...group} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
