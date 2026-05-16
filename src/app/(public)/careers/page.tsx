"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, Users } from "lucide-react";
import Footer from "@/components/public/Footer";

type Role = {
  title: string;
  requirements: string[];
  status?: "open" | "closed";
};

type RoleGroup = {
  heading: string;
  roles: Role[];
};

const instructorGroups: RoleGroup[] = [
  {
    heading: "College of Nursing",
    roles: [
      {
        title: "College/Clinical Instructors",
        requirements: [
          "Licensed in the field of specialization",
          "Preferably with MA/MS Degree",
          "With at least three (3) years clinical experience",
        ],
      },
    ],
  },
  {
    heading: "College of Allied Medical Professions",
    roles: [
      {
        title: "College Instructors (Medical Technology and Occupational Therapy)",
        requirements: [
          "Licensed in the field of specialization",
          "Preferably with MA/MS Degree",
        ],
      },
    ],
  },
  {
    heading: "College of Business and Accountancy",
    roles: [
      {
        title: "Program Chair (Legal Management)",
        status: "closed",
        requirements: [
          "Graduate of BS in Legal Management with Master's degree or Bachelor of Laws",
        ],
      },
      {
        title: "Accountancy Program",
        requirements: [
          "Graduate of BS Accountancy",
          "Licensed in the field of specialization",
          "Preferably with MA/MS Degree",
        ],
      },
    ],
  },
  {
    heading: "College of Engineering and Architecture",
    roles: [
      {
        title: "Full-time College Instructors (Civil Engineering Program)",
        status: "closed",
        requirements: [
          "Must be a Registered Civil Engineer",
          "Preferably with MA/MS Degree",
        ],
      },
    ],
  },
  {
    heading: "Center for Christian Formation and Praxis",
    roles: [
      {
        title: "Full-time Instructors",
        status: "closed",
        requirements: [
          "Graduate of BS Education major in Values Education/Religious Education or any related course",
          "With at least 1 year teaching experience",
        ],
      },
    ],
  },
  {
    heading: "College of Arts and Sciences",
    roles: [
      {
        title: "Psychology Department",
        requirements: [
          "Master's Degree in Psychology or a closely related field (Clinical Psychology, Counseling, Educational Psychology)",
          "Prior teaching experience is highly desirable",
        ],
      },
      {
        title: "Math Department",
        requirements: [
          "Master's Degree in Mathematics or any related discipline",
          "Prior teaching experience at the college level is preferred",
        ],
      },
      {
        title: "Communication / Social Sciences Department",
        requirements: [
          "Master's Degree in Communication or allied fields or Master's Degree in the Social Sciences or Humanities",
        ],
      },
    ],
  },
];

const teacherGroups: RoleGroup[] = [
  {
    heading: "Elementary and Junior High School",
    roles: [
      {
        title: "Teachers",
        requirements: [
          "Graduate of BS Elementary and Secondary Education major in English, Math, Science, and Social Studies",
          "Preferably LET passer",
        ],
      },
    ],
  },
  {
    heading: "Senior High School",
    roles: [
      {
        title: "Teachers",
        requirements: [
          "To teach Chemistry/Research, Math, and Physics",
          "Licensed in the field of specialization",
        ],
      },
    ],
  },
];

const nonTeachingRoles: Role[] = [
  {
    title: "Social Worker (Center for Christian Formation and Praxis)",
    status: "closed",
    requirements: ["Must be a graduate of BS Social Work", "Licensed Social Worker"],
  },
  {
    title: "Records Evaluator-Processor (Registrar's Office)",
    status: "closed",
    requirements: [
      "A graduate of any four-year course",
      "At least one (1) year of relevant experience in Records Management is preferred",
    ],
  },
  {
    title: "Staff Assistant (Alumni Affairs and Placement Services)",
    status: "closed",
    requirements: [
      "A graduate of any four-year course",
      "At least one (1) year of relevant work experience",
    ],
  },
  {
    title: "Accounting Clerk (Accounting and Finance Office)",
    status: "closed",
    requirements: [
      "Graduate of BS Accountancy or any related course",
      "Preferably with relevant work experience",
    ],
  },
  {
    title: "Part-time School Nurse (University Health Services)",
    status: "closed",
    requirements: [
      "Graduate of a Bachelor of Science in Nursing",
      "A holder of a valid nursing license (Registered Nurse)",
      "Preferably with relevant work experience",
    ],
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

function StatusBadge({ status = "open" }: { status?: "open" | "closed" }) {
  const isClosed = status === "closed";
  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        isClosed
          ? "border border-rose-200 bg-rose-50 text-rose-600"
          : "border border-emerald-200 bg-emerald-50 text-emerald-600"
      }`}
    >
      {isClosed ? "Closed" : "Open"}
    </span>
  );
}

function RoleCard({ role }: { role: Role }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm font-semibold text-slate-900">{role.title}</div>
        <StatusBadge status={role.status} />
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {role.requirements.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#27409E]/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareersPage() {
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
              Careers
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Career Opportunities 2025-2026 (1st Semester)
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Explore faculty and staff openings across AUF colleges, units, and support
              services. Open roles are marked clearly; closed postings remain for reference.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-10">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  College and Clinical Instructors
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Faculty Opportunities
                </h2>
              </div>
            </div>
            <div className="mt-6 space-y-6">
              {instructorGroups.map((group) => (
                <div key={group.heading} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{group.heading}</div>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    {group.roles.map((role) => (
                      <RoleCard key={role.title} role={role} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAD162]/25 text-[#8c6d12]">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                  Teachers
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Basic Education Openings
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {teacherGroups.map((group) => (
                <div key={group.heading} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{group.heading}</div>
                  <div className="mt-3 space-y-4">
                    {group.roles.map((role) => (
                      <RoleCard key={role.title + group.heading} role={role} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                <Briefcase className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Non-Teaching Personnel
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Staff Opportunities
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {nonTeachingRoles.map((role) => (
                <RoleCard key={role.title} role={role} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
