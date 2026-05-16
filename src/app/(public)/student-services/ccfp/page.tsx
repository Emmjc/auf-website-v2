"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, Mail, ShieldCheck, Sparkles, Users } from "lucide-react";
import Footer from "@/components/public/Footer";

const responsibilities = [
  "Offering of CFE and NSTP curricula and initiating curricular and extra-curricular activities for students.",
  "Implementation, supervision, and monitoring of all university and college-based community extension participated by both employees and students.",
  "Facilitation of spiritual enrichment activities including celebration of the sacraments and related para-liturgical celebrations, annual faculty retreats and students' recollections and retreats.",
  "Supervision of mandated and non-mandated religious organizations (National Service Corps - Praxis-NSRC; CYA, YFC, Oikoumene, and Campus Ministry Service Groups).",
  "Provision of support for adult ministries (Couples for Christ, Singles for Christ, Lingkod ng Panginoon, Lector and Commentator Group, and the University Pastoral Council).",
  "Organizing advocacy programs that strengthen commitment to the well-being of society and the environment.",
];

const organizations = [
  "National Service Corps (Praxis-NSRC)",
  "CYA",
  "YFC",
  "Oikoumene",
  "Campus Ministry Service Groups",
];

const adultMinistries = [
  "Couples for Christ",
  "Singles for Christ",
  "Lingkod ng Panginoon",
  "Lector and Commentator Group",
  "University Pastoral Council",
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function CcfpPage() {
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
              Student Services
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Center for Christian Formation and Praxis (CCFP)
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              The CCFP promotes and sustains the Catholic character of the University through
              curricular programs, community extension services, and spiritual enrichment
              activities.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
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
                <HeartHandshake className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Purpose and Mission
                </div>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  CCFP promotes programs and activities that inculcate values, deepen social
                  awareness and responsibility, instill volunteerism and initiative, and
                  maximize stakeholder participation in evangelization. These initiatives
                  strengthen the University community in its faith-commitment to become an
                  authentic witness of God's love.
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
              Contact
            </div>
            <div className="mt-4 flex items-start gap-3 text-sm text-slate-600 sm:text-base">
              <Mail className="mt-1 size-4 text-[#27409E]" />
              <div>ccfp@auf.edu.ph</div>
            </div>
            <a
              href="mailto:ccfp@auf.edu.ph"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[#27409E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:bg-[#27409E] hover:text-white"
            >
              Email CCFP
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={itemVariants}
          className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                Primary Responsibilities
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
                {responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#27409E]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAD162]/25 text-[#8c6d12]">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                  Mandated & Non-Mandated Organizations
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
                  {organizations.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#8c6d12]/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAD162]/25 text-[#8c6d12]">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                  Adult Ministries
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
                  {adultMinistries.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#8c6d12]/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
