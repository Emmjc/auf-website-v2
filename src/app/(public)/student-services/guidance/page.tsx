"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  HeartHandshake,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Footer from "@/components/public/Footer";

const objectives = [
  "Help students identify potentials, abilities, interests and provide opportunities for development and effective utilization.",
  "Help students understand themselves better - interests, abilities, needs and problems - to make wise choices and adjustments.",
  "Help students develop wholesome attitudes and sound moral and spiritual values.",
  "Help students develop problem-solving and interpersonal communication skills.",
  "Help students develop effective learning skills for progress across levels and preparation for life career.",
  "Establish linkages with university units and community agencies to support program objectives and make guidance services available to students/pupils in the community.",
  "Conduct studies that assist deans, teachers and guidance staff in understanding students through test and research data.",
];

const areas = [
  {
    title: "Academic Development",
    description:
      "Equips students with skills, habits, and attitudes essential to academic success.",
    icon: CalendarDays,
  },
  {
    title: "Personal / Social Development",
    description:
      "Helps students build a positive and realistic self-concept and awareness of their feelings and others, enabling satisfying relationships.",
    icon: HeartHandshake,
  },
  {
    title: "Career Development",
    description:
      "Assists students in making wise career decisions and carrying out plans aligned with their abilities.",
    icon: Briefcase,
  },
];

const services = [
  {
    title: "Individual Inventory",
    description:
      "Collection, maintenance and analysis of student information essential in identifying and providing needed assistance through testing and non-testing activities.",
    activities: [
      "Mental Ability",
      "Interest & Aptitude",
      "Personality",
      "Study Habits & Attitude",
      "Student Personal Record",
      "Individual Interview",
      "Case Conferences",
      "Home Visitations",
    ],
  },
  {
    title: "Information Service",
    description:
      "Provides relevant information to support personal, interpersonal, academic, and career needs.",
    activities: [
      "Homeroom Guidance",
      "Orientation",
      "Psychological Test Interpretation",
      "Career Guidance",
      "Career Forums/Convocations",
      "Group Sessions",
      "Lectures/Seminars",
    ],
  },
  {
    title: "Counseling Service",
    description:
      "Helps students solve problems and address immediate concerns through responsive interventions.",
    activities: [
      "Individual Counseling",
      "Group Counseling",
      "Career Counseling",
      "Family Counseling",
      "Follow-up",
    ],
  },
  {
    title: "Follow-up Service",
    description:
      "A continuous monitoring program to evaluate intervention effectiveness in relation to student progress and adjustments.",
    activities: ["Follow-up Service"],
  },
  {
    title: "Research and Evaluation",
    description:
      "Conducts studies and evaluation programs that guide educational planning and improve guidance services.",
    activities: ["Research and Evaluation"],
  },
];

const coreServices = [
  "Individual Student Planning - personal, academic, and career plans through psychological testing, interviews, follow-ups, and career guidance.",
  "Guidance Instruction - structured activities that build life skills and support student development.",
  "Responsive Services - counseling, consultation, referral, and peer facilitation (Kayantabe Peer Support Club).",
  "Management Systems - organized and aligned services with program goals.",
  "System Support - training, partnerships, and stakeholder collaboration.",
  "Assessment - evaluates effectiveness of services to continually improve the program.",
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function GuidancePage() {
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
              Guidance and Counseling Center
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              The Guidance and Counseling Center assists students with personal, educational,
              and career concerns to promote self-awareness, self-expression, and growth.
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
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
              Overview
            </div>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              The Guidance and Counseling Center helps students identify their strengths,
              reach their greatest potential, and become mature and responsible individuals
              ready to meet challenges and make important decisions.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Philosophy
              </div>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                In keeping with the university mission, the Guidance Center supports the
                optimum development of the human person so that students may live with
                dignity and integrity, learn meaningfully, discover their God-given
                potentialities, and make wise choices and adjustments.
              </p>
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
              Location and Hours
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-600 sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 text-[#27409E]" />
                <div>Guidance and Counseling Center, A-Building, 3rd Floor, Room A-303</div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 size-4 text-[#27409E]" />
                <div>
                  Office Hours: Monday-Friday, 8:00 am - 7:00 pm<br />
                  Saturdays, 8:00 am - 5:00 pm
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 size-4 text-[#27409E]" />
                <div>
                  gcc@auf.edu.ph
                  <br />
                  is.gcc@auf.edu.ph
                </div>
              </div>
            </div>
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
              <Users className="size-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                Objectives
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
                {objectives.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#27409E]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                variants={itemVariants}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAD162]/25 text-[#8c6d12]">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{area.title}</h3>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.04 }}
              variants={itemVariants}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                {service.description}
              </p>
              <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:text-base">
                {service.activities.map((activity) => (
                  <div key={activity} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#27409E]/60" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={itemVariants}
          className="mt-10 rounded-3xl border border-[#27409E]/15 bg-[#f6f8ff] p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                New Handbook - Updated Services
              </div>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                The Guidance and Counseling Center supports students in their personal,
                academic, social, and career growth through onsite and online services.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
                {coreServices.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#27409E]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
