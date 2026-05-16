"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

const services = [
  "Processes students' entrance and other academic credentials.",
  "Advises students and other clientele on curriculum requirements and other academic policies of the University and concerned government agencies.",
  "Processes special study permit and student visa of international students.",
  "Evaluates and credits subjects/units earned by the students.",
  "Updates student records.",
  "Issues Transcript of Records, Diploma, Transfer Credentials and other school documents.",
  "Verifies, authenticates, and certifies school records upon request of individuals and public or private organizations, here and abroad.",
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function RegistrarPage() {
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
              Admissions
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              University Registrar
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              The Office of the University Registrar supports admissions, enrollment,
              graduation, international student processing, and records management across
              the university.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
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
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Services Overview</h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Specifically, the Office provides the following services:
                </p>
              </div>
            </div>

            <ol className="mt-6 space-y-4 text-sm text-slate-600 sm:text-base">
              {services.map((service, index) => (
                <li key={service} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EAD162]/30 text-xs font-semibold text-[#8c6d12]">
                    {String.fromCharCode(97 + index)}
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ol>
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
              Contact Information
            </div>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              Office of the University Registrar
            </h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600 sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 text-[#27409E]" />
                <div>
                  Room 202, 2nd Floor, BYA Building
                  <br />
                  Angeles University Foundation
                  <br />
                  2009 Angeles City, Philippines
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 size-4 text-[#27409E]" />
                <div>Tel. Nos: (63-45) 625-2888 local 1707</div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 size-4 text-[#27409E]" />
                <div>registrar@auf.edu.ph</div>
              </div>
            </div>

            <a
              href="mailto:registrar@auf.edu.ph"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[#27409E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:bg-[#27409E] hover:text-white"
            >
              Email Registrar
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
