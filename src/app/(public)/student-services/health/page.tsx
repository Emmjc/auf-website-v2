"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

const aims = [
  "Provide quality health care through promotion of health, prevention of diseases and curative services.",
  "Administer medical and dental services through strong collaboration with members of the academic community.",
  "Empower members of the academic community to stay healthy through accessible, affordable and quality health care.",
  "Promote a healthy community through active participation in community extension services in collaboration with Christian Praxis.",
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function HealthServicesPage() {
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
              University Health Services
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              The Office of the University Health Services envisions a healthy academic
              community by promoting health, preventing disease, and providing curative
              services that build health consciousness through self-empowerment.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
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
              <HeartPulse className="size-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                UHS Mission
              </div>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                The UHS aims to provide quality, accessible, and collaborative health care
                services that support student well-being and community health.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {aims.map((aim) => (
              <div key={aim} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#27409E]/60" />
                <span className="text-sm text-slate-600 sm:text-base">{aim}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          variants={itemVariants}
          className="mt-8 rounded-3xl border border-[#EAD162]/40 bg-[#EAD162]/15 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#8c6d12]">
              <ShieldCheck className="size-5" />
            </div>
            <p className="text-sm text-slate-700 sm:text-base">
              UHS works in collaboration with members of the academic community to deliver
              preventive and responsive health services that support a safe and productive
              learning environment.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
