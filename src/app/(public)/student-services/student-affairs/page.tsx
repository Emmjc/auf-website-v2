"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Footer from "@/components/public/Footer";

const responsibilities = [
  {
    title: "Student Activities",
    description:
      "Organization and facilitation of orientation programs and welcome ceremonies for new students; induction ceremonies, general assemblies and elections for mandated and non-mandated organizations; provision of leadership training and exposure to student leaders; supervision of the USC in planning and execution of activities; monitoring, supervision and evaluation of student activities on and off campus.",
  },
  {
    title: "Student Organizations",
    description:
      "Facilitation of formation, renewal and recognition of non-mandated organizations; evaluation of application for candidacy and student party registration of students running for USC/CSC positions.",
  },
  {
    title: "Student Scholarships and Awards",
    description:
      "Processing of all applications for scholarships, grants and financial aids; evaluation of SNPL applicants; organization of awards and recognition programs for exemplary achievements in co-curricular and extra-curricular undertakings.",
  },
  {
    title: "Student Discipline",
    description:
      "Enforcement and monitoring of student discipline in accordance with the Student Handbook; creation of the Student Grievance Committee (SGC) for major offenses involving students from different colleges; imposition of proper disciplinary sanctions for minor and major offenses.",
  },
  {
    title: "Alumni",
    description:
      "Organization of the annual job fair to provide alumni and graduating students opportunities; supervision of the AUF-FAA in spearheading alumni programs and activities.",
  },
  {
    title: "Other OSAA Responsibilities",
    description:
      "Preparation of the university's master plan of activities through collated plans of action of different colleges and units.",
  },
];

const authorities = [
  {
    title: "Student Activities",
    description:
      "Control over approval of student activities, co-curricular and extra-curricular, on and off campus; authority to screen, monitor and evaluate activities to complement classroom experiences and support social, cultural, political, moral and spiritual growth.",
  },
  {
    title: "Student Organizations",
    description:
      "Approves formation, renewal and recognition of mandated and non-mandated organizations; approves and recommends application for party registration and certification of candidacy for USC and CSC posts.",
  },
  {
    title: "Student Scholarships",
    description: "Implements policies and guidelines on scholarships, grants and financial aids.",
  },
  {
    title: "Student Discipline",
    description:
      "Authority to issue call slips to student offenders and subject them to sanctions as provided for by the Student Handbook; forms the Student Grievance Committee as part of due process.",
  },
  {
    title: "Alumni",
    description:
      "Control, monitoring and evaluation of the disbursement of alumni funds and activities of the AUF-Federation of Alumni Associations and college alumni associations.",
  },
];

const standards = [
  "Consistent implementation of rules and conduct on discipline to achieve a more orderly and peaceful academic community.",
  "Proper screening, monitoring and evaluation of all student activities to complement and enhance academic growth.",
  "Effective leadership skills and good human relations to develop proactive and responsible student leaders.",
  "Strict adherence to due process of law in the conduct of the Student Grievance Committee and in the settlement of cases requiring fairness and justice.",
  "Proactive and consistent implementation of proper decorum to develop and enhance emotional intelligence and personality.",
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function StudentAffairsPage() {
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
              Student Affairs
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              The Office of Student Affairs and Alumni Affairs (OSAA) oversees student
              welfare, non-academic initiatives, and alumni engagement while supporting
              institutional policies and student development.
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
                <ClipboardList className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Purpose
                </div>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  The office oversees non-academic student endeavors on and off campus; enforces
                  discipline and proper decorum; recommends appropriate disciplinary action; and
                  processes scholarship grants and other financial aid. It also supervises and
                  coordinates the activities of the AUF-Federation of Alumni Associations (AUF-FAA)
                  and college alumni associations.
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
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAD162]/25 text-[#8c6d12]">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                  Inter-relationships
                </div>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  As the University's students' desk, the OSAA coordinates with different deans and
                  units rendering student personnel services; mandated and non-mandated organizations
                  for effective distribution of services; AUF-FAA and CAA for alumni rapport; and with
                  companies and organizations for partnerships and linkages.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

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
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Responsibility
                </div>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  The office is mainly responsible for the following:
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {responsibilities.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    {item.description}
                  </p>
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
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Authority
                </div>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  The office exercises the following authority areas:
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {authorities.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
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
                <Handshake className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                  Standards
                </div>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  The OSAA upholds the following standards across its services:
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 sm:text-base">
              {standards.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#27409E]/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              Physical Facilities
            </div>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              The office is conveniently located at the ground floor to allow a smooth flow of
              transactions with different units and to easily monitor student discipline. The USC
              office is accessible to CSC officers. Well-equipped student activity centers provide
              venues for varied activities of mandated and non-mandated organizations.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
