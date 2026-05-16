"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function AlumniPage() {
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
              Alumni
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              About AAPS
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              The Alumni Affairs and Placement Services office strengthens alumni relations and
              expands career pathways for Angeleneans through meaningful partnerships and
              community engagement.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[0.6fr,0.4fr]">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                About the Alumni Affairs and Placement Services
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The Office of Alumni Affairs and Placement Services takes initiatives to
                strengthen alumni relations by forging collaborative partnerships with the
                alumni and encourages them to proactively participate in various affairs and
                undertakings of the University. It initiates various activities and programs,
                in partnership with the Alumni Associations, to nurture cordial relationship
                and promote the Angelenean character among AUF graduates.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                Career and Placement Support
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The office facilitates career and placement activities to provide greater
                opportunities for job placement and employment of students and alumni. It
                establishes linkages and maintains cordial relationships with companies across
                industries to support career development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-52 bg-slate-100">
                <Image
                  src="/alumni-logo.jpg"
                  alt="Alumni Affairs and Placement Services logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
              <div className="border-t border-slate-200 px-5 py-4">
                <div className="text-sm font-semibold text-slate-900">AAPS</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Alumni Affairs and Placement Services
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                Contact
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
                <a
                  href="https://www.facebook.com/angelenean"
                  className="inline-flex items-center justify-center rounded-full border border-[#27409E]/30 bg-[#27409E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#27409E] transition hover:border-[#27409E]/50 hover:bg-[#27409E]/15"
                >
                  Facebook Page
                </a>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 size-4 text-[#27409E]" />
                  <a
                    href="mailto:alumni@auf.edu.ph"
                    className="text-sm font-semibold text-[#27409E]"
                  >
                    alumni@auf.edu.ph
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
