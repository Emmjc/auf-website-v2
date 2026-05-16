"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Globe2, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function InternationalAdmissionsPage() {
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
              External Affairs
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Foreign Admissions
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Admissions guidance for international students who plan to study at Angeles
              University Foundation.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                <Globe2 className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Who may be considered as Foreign Students?
                </h2>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Foreign students are those belonging or owing allegiance to a country other
                  than the Philippines and studying in any educational institution recognized
                  or owned by the government of the Philippines (MECS Memo, No. 183, s. 1983).
                  A student, having means sufficient for his education and support in the
                  Philippines, who is at least eighteen years of age and who seeks to enter the
                  Philippines temporarily and solely for the purpose of taking up a course of
                  study higher than high school at a university, seminary, academy, college or
                  school approved for such alien students by the Commissioner of Immigration
                  (Section 9(f), Philippine Immigration Act of 1940, as amended).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
              Admissions Eligibility
            </div>
            <h2 className="mt-3 text-lg font-semibold text-slate-900">
              Who may apply for Admissions?
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A prospective foreign student-applicant for the tertiary or college level should
              be a graduate of high school or secondary school or its equivalent (CHED Guidebook
              for Foreign Students, 1995).
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Next Step
              </div>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                For admission procedure and requirements, proceed to the AUF Admissions
                Application Guide.
              </p>
              <Link
                href="/admissions/application-guide"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#27409E]"
              >
                Open Application Guide
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
