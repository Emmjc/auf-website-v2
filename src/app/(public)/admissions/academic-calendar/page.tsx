"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

type CalendarItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

const calendarItems: CalendarItem[] = [
  {
    id: "college-1st",
    title: "College",
    subtitle: "First Semester",
    image: "/images/acadcalendar/COLLEGE-2025.jpg",
  },
  {
    id: "college-2nd",
    title: "College",
    subtitle: "Second Semester",
    image: "/images/acadcalendar/COLLEGE-2025-2.jpg",
  },
  {
    id: "holidays",
    title: "Holidays",
    subtitle: "Academic Year 2025-2026",
    image: "/images/acadcalendar/SPECIAL-2025.jpg",
  },
  {
    id: "law",
    title: "School of Law",
    subtitle: "Academic Calendar",
    image: "/images/acadcalendar/SOL-2025.jpg",
  },
  {
    id: "medicine",
    title: "School of Medicine",
    subtitle: "Academic Calendar",
    image: "/images/acadcalendar/SOM-2025.jpg",
  },
  {
    id: "graduate-school",
    title: "Graduate School",
    subtitle: "Academic Calendar",
    image: "/images/acadcalendar/GS-2025.jpg",
  },
  {
    id: "integrated-school-1st",
    title: "Integrated School",
    subtitle: "First Semester",
    image: "/images/acadcalendar/IS-2025.jpg",
  },
  {
    id: "integrated-school-2nd",
    title: "Integrated School",
    subtitle: "Second Semester",
    image: "/images/acadcalendar/IS-2025-2.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function CalendarCard({ item }: { item: CalendarItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
            {item.title}
          </div>
          <div className="mt-2 text-sm font-semibold text-slate-800 sm:text-base">
            {item.subtitle}
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
          <CalendarDays className="size-5" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative mt-4 h-40 w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-inner transition hover:border-[#27409E]/40"
        aria-label={`Open ${item.title} ${item.subtitle} calendar`}
      >
        <Image
          src={item.image}
          alt={`${item.title} ${item.subtitle} calendar`}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
          View full calendar
        </div>
      </button>
      <div className="mt-2 text-xs text-slate-500">Tap to enlarge.</div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} ${item.subtitle} calendar`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
              <span>{`${item.title} · ${item.subtitle}`}</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:border-slate-300"
              >
                Close
              </button>
            </div>
            <div className="relative h-[70vh] bg-slate-100">
              <Image
                src={item.image}
                alt={`${item.title} ${item.subtitle} calendar`}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function AcademicCalendarPage() {
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
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#27409E]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#27409E]">
              <Sparkles className="size-3.5" />
              Academic Calendar
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Academic Calendar 2025-2026
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              View the official calendars for each AUF academic unit. Tap any card to
              enlarge the full calendar image.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {calendarItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-[#27409E]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:border-[#27409E]/40"
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {calendarItems.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              className="scroll-mt-28"
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
              variants={itemVariants}
            >
              <CalendarCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
