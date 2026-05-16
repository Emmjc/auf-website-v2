"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  ChevronRight,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  LineChart,
  Microscope,
  Sparkles,
  Users,
} from "lucide-react";
import Footer from "@/components/public/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const researchCenters = [
  {
    title: "Center for Data Analytics, Informatics, and Computing (CDAIC)",
    description: "Supports quantitative and computational research across disciplines.",
    bullets: [
      "Big data analysis, visualization, and applied statistics",
      "Predictive modeling and machine learning applications",
    ],
    icon: <BarChart3 className="size-5" />,
  },
  {
    title: "Center for Advanced Research and Innovation (CARI)",
    description: "Leads AUF's frontier and breakthrough research initiatives.",
    bullets: [
      "Biomedical, clinical research, and diagnostic technology development",
      "State-funded innovation projects with national agencies",
    ],
    icon: <FlaskConical className="size-5" />,
  },
  {
    title: "Center for Applied Research in Education (CARE)",
    description: "Drives pedagogical innovation and evidence-based academic practices.",
    bullets: [
      "Curriculum design, inclusive education, and learning technologies",
      "Classroom-based studies and professional teacher training",
    ],
    icon: <GraduationCap className="size-5" />,
  },
];

const researchThrusts = [
  {
    title: "Health Sciences and Public Health",
    description: "Biomedical breakthroughs, clinical advancements, and health policy.",
    icon: <Microscope className="size-5" />,
  },
  {
    title: "Education",
    description: "Instructional design, inclusive learning strategies, and classroom innovation.",
    icon: <BookOpen className="size-5" />,
  },
  {
    title: "Business and Entrepreneurship",
    description: "Sustainable business models, financial tech, and startup ecosystems.",
    icon: <Briefcase className="size-5" />,
  },
  {
    title: "Engineering and Technology",
    description: "Automation, infrastructure solutions, and emerging industrial technologies.",
    icon: <Brain className="size-5" />,
  },
  {
    title: "Environmental Sustainability",
    description: "Climate resilience, ecological balance, and resource management.",
    icon: <Globe2 className="size-5" />,
  },
  {
    title: "Social Development and Creative Work",
    description: "Social justice, community empowerment, and interdisciplinary design thinking.",
    icon: <Users className="size-5" />,
  },
];

const researchServices = [
  {
    title: "Research Publication Help Desk (RPH)",
    description:
      "Journal matching, statistical verification, proofreading, and language editing.",
  },
  {
    title: "Ethics Review Coordination",
    description:
      "Documentation templates and clearance scheduling with the AUF Ethics Review Committee.",
  },
  {
    title: "Proposal Development Assistance",
    description: "Technical writing workshops, budget planning, and one-on-one mentoring.",
  },
  {
    title: "Statistical and Methodological Support",
    description: "Data consultation, instrument validation, and advanced visualization.",
  },
  {
    title: "External Funding Facilitation",
    description:
      "Endorsement, compliance review, and grant applications for DOST, CHED, CLHRDC, and private foundations.",
  },
];

const institutionalJournals = [
  "AUF Journal of Multidisciplinary Research",
  "AUF Health Sciences Review",
  "AUF Business and Innovation Journal",
];

const dashboardMetrics = [
  "Publications tracked per college",
  "Citation and impact performance",
  "External grant funding totals and faculty research awards",
];

const upcomingEvents = [
  "Research forums",
  "Methodological symposia",
  "Proposal writing workshops",
];

const recentHighlights = [
  "National competition winners",
  "Successful external grant acquisitions",
  "Pilot testing cycle updates",
];

export default function ResearchPage() {
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
              Research and Innovation
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Office of the Vice President for Research and Innovation
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              OVPRI is the central hub for advancing the research agenda of Angeles University
              Foundation, driving a dynamic, innovative, and data-driven research climate.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#27409E]">
                Vision
              </div>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                To emerge as a Center of Excellence in Research in the region and the global
                community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#27409E]">
                Mission
              </div>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                To cultivate a robust Research and Development culture through cutting-edge
                institutional and faculty research.
              </p>
            </div>
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
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
              <Building2 className="size-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                Specialized Research Centers
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Engines of Innovation
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {researchCenters.map((center) => (
              <div
                key={center.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#27409E] shadow-sm">
                    {center.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{center.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{center.description}</p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-500">
                      {center.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#27409E]/60" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
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
              <LineChart className="size-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                Core Research Thrusts
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Interdisciplinary Priorities
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {researchThrusts.map((thrust) => (
              <div
                key={thrust.title}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#8c6d12] shadow-sm">
                  {thrust.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{thrust.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{thrust.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
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
              <Handshake className="size-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                Research Services and Support
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Full Lifecycle Assistance
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {researchServices.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">{service.title}</div>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
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
                <FileText className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                  Grants and Opportunities
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Funding and Awards
                </h2>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  AUF Research Grant (Open Scheme)
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Awarded to high-quality basic, applied, or collaborative research projects
                  that drive significant advances in AUF's core thrusts, commercial technology,
                  or community service.
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                >
                  Download form (coming soon)
                </button>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  AUF International Publication Award
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  A prestigious incentive program designed to reward faculty and personnel who
                  publish exemplary research outputs in top-tier international journals.
                </p>
              </div>
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
                <LineChart className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Archive and Research Metrics
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Institutional Impact
                </h2>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Institutional Journals
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {institutionalJournals.map((journal) => (
                    <li key={journal} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#27409E]/60" />
                      <span>{journal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Live Research Dashboards
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {dashboardMetrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#27409E]/60" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
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
                Faculty Research Directory
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Connect with AUF Researchers
              </h2>
            </div>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">Search and Filter</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8c6d12]/70" />
                  <span>Filter by College or Department</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8c6d12]/70" />
                  <span>Filter by Research Thrust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8c6d12]/70" />
                  <span>Filter by Keyword, Topic, or Publication Type</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">Update Your Profile</div>
              <p className="mt-2 text-sm text-slate-600">
                AUF faculty members can keep their directory records up to date through the
                profile submission form.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
              >
                Access form (coming soon)
                <ChevronRight className="size-3" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
              News and Announcements
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Upcoming and Recent Highlights
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">Upcoming Events</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {upcomingEvents.map((event) => (
                    <li key={event} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#27409E]/60" />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">Recent Highlights</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {recentHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#27409E]/60" />
                      <span>{highlight}</span>
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                <FileText className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Get in Touch
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Contact OVPRI
                </h2>
              </div>
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-600 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Office Location
                </div>
                <p className="mt-2">OVPRI Office, Angeles University Foundation</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Email
                </div>
                <a
                  href="mailto:ovpri@auf.edu.ph"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#27409E]"
                >
                  ovpri@auf.edu.ph
                  <ChevronRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
