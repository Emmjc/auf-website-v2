"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import CollegesGridSection from "@/components/public/CollegesGridSection";
import Footer from "@/components/public/Footer";

type ProgramSection = {
  title?: string;
  items: string[];
};

type AcademicUnit = {
  id: string;
  name: string;
  description: string;
  microsite: string;
  sections: ProgramSection[];
};

const academicUnits: AcademicUnit[] = [
  {
    id: "integrated-school",
    name: "Integrated School",
    description: "Foundational programs for basic education learners.",
    microsite: "/c/integrated-school",
    sections: [
      {
        items: [
          "Pre-Kinder",
          "Kindergarten",
          "Grade School",
          "Junior High School",
          "Senior High School",
          "Tracks offered: General Academic, Business & Accounting, Health Sciences, IT/Engineering/Architecture",
        ],
      },
    ],
  },
  {
    id: "allied-medical-professions",
    name: "College of Allied Medical Professions",
    description: "Professional healthcare programs with clinical training.",
    microsite: "/c/allied-medical-professions",
    sections: [
      {
        items: [
          "BS Medical Technology",
          "BS Occupational Therapy",
          "BS Pharmacy",
          "BS Clinical Pharmacy",
          "BS Radiologic Technology",
          "BS Physical Therapy",
          "BS Physical Therapy Professional Enhancement Program",
        ],
      },
    ],
  },
  {
    id: "cas",
    name: "College of Arts and Sciences",
    description: "Humanities, sciences, and interdisciplinary foundations.",
    microsite: "/c/cas",
    sections: [
      {
        items: [
          "AB Communication (with specialization in Creative Media)",
          "BS Biology",
          "BS Biology Three-Year Accelerated Program",
          "BS Psychology",
          "AB Psychology (for International Students)",
          "BS in Human Biology",
          "Straight AB Psychology - MA Psychology Program",
        ],
      },
    ],
  },
  {
    id: "business-accountancy",
    name: "College of Business and Accountancy",
    description: "Business, management, accounting, and tourism disciplines.",
    microsite: "/c/business-accountancy",
    sections: [
      {
        items: [
          "BS Accountancy",
          "BS Management Accounting",
          "BS Business Administration (Major in: Legal Management, Marketing Management, Management and Entrepreneurship)",
          "BS Hospitality Management",
          "BS Tourism Management",
        ],
      },
    ],
  },
  {
    id: "computer-studies",
    name: "College of Computer Studies",
    description: "Technology, computing, and digital media programs.",
    microsite: "/c/computer-studies",
    sections: [
      {
        items: [
          "Bachelor of Multimedia Arts",
          "BS Computer Science",
          "BS Information Technology",
        ],
      },
    ],
  },
  {
    id: "criminal-justice",
    name: "College of Criminal Justice Education",
    description: "Training future justice and security professionals.",
    microsite: "/c/criminal-justice",
    sections: [{ items: ["BS Criminology"] }],
  },
  {
    id: "engineering-architecture",
    name: "College of Engineering and Architecture",
    description: "Engineering disciplines and architecture programs.",
    microsite: "/c/engineering-architecture",
    sections: [
      {
        items: [
          "BS Architecture",
          "BS Civil Engineering",
          "BS Computer Engineering",
          "BS Electronics Engineering",
        ],
      },
    ],
  },
  {
    id: "education",
    name: "College of Education",
    description: "Teacher education and professional teaching certificates.",
    microsite: "/c/education",
    sections: [
      {
        items: [
          "Bachelor of Elementary Education",
          "Bachelor of Secondary Education (Major in: English, English and Chinese Language Teaching, Mathematics, Science, Social Studies, Values Education)",
          "Bachelor of Early Childhood Education",
          "Bachelor of Special Needs Education",
          "Professional Certificate Course in Teaching",
        ],
      },
    ],
  },
  {
    id: "nursing",
    name: "College of Nursing",
    description: "Professional nursing education with clinical focus.",
    microsite: "/c/nursing",
    sections: [{ items: ["BS Nursing"] }],
  },
  {
    id: "law",
    name: "School of Law",
    description: "Professional legal education and advocacy training.",
    microsite: "/c/law",
    sections: [{ items: ["Juris Doctor"] }],
  },
  {
    id: "medicine",
    name: "School of Medicine",
    description: "Medical education for future physicians.",
    microsite: "/c/medicine",
    sections: [{ items: ["Doctor of Medicine"] }],
  },
  {
    id: "graduate-school",
    name: "Graduate School",
    description: "Graduate, doctoral, and professional advanced studies.",
    microsite: "/c/graduate-school",
    sections: [
      {
        title: "Education Programs",
        items: [
          "Doctor of Philosophy in Curriculum and Instruction (PhDCI-ELT)",
          "Doctor of Philosophy in Education (PhD Educ-EM)",
          "Master of Arts in Education (MAEd)",
          "MAEd Major in: Educational Management, English, General Science, Early Childhood Education, Special Needs and Inclusive Education, Chinese Language Teaching, Christian Formation Education",
          "Diploma in Education (Educational Management, English Language Teaching)",
        ],
      },
      {
        title: "Psychology Program",
        items: [
          "Master of Arts in Psychology major in Clinical Psychology (MAPsych-ClinPsych)",
        ],
      },
      {
        title: "Business Programs",
        items: [
          "Doctor of Philosophy in Management (PHD-Mgmt)",
          "Doctor of Business Administration (DBA)",
          "Master in Business Administration (MBA)",
        ],
      },
      {
        title: "Information Technology Programs",
        items: [
          "Doctor of Information Technology with specialization in Business Intelligence and Data Analytics (DIT)",
          "Master in Data Science (MDS)",
          "Master in Information Technology (MIT)",
        ],
      },
      {
        title: "Public Health Programs",
        items: [
          "Doctor of Public Health in Health Promotion and Education (DrPH)",
          "Master of Science in Public Health (MSPH)",
          "Master in Public Health (MPH)",
        ],
      },
      {
        title: "Medical Laboratory Science Programs",
        items: ["Master of Science in Medical Laboratory Science (MSMLS)", "Master in Laboratory Science (MLS)"],
      },
      {
        title: "Nursing Programs",
        items: [
          "Master of Arts in Nursing (MAN) - Major in: Medical-Surgical Nursing, Maternal and Child Health Nursing",
          "Master in Nursing (MN) - Major in: Medical-Surgical Nursing, Maternal and Child Health Nursing",
        ],
      },
      {
        title: "Criminal Justice Program",
        items: [
          "Master of Science in Criminal Justice with specialization in Criminology (MSCrim)",
        ],
      },
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

export default function AcademicProgramsPage() {
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
              Academic Programs
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Academic Programs
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Explore AUF's academic units and programs. Use the microsite links to view
              each college or school's full details.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {academicUnits.map((unit) => (
              <a
                key={unit.id}
                href={`#${unit.id}`}
                className="rounded-full border border-[#27409E]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:border-[#27409E]/40"
              >
                {unit.name}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <CollegesGridSection />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.36em] text-[#27409E]">
              Programs by Unit
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Explore programs by college or school
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Expand a section to view program offerings. Each unit links directly to its
              AUF microsite.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {academicUnits.map((unit, index) => (
              <motion.details
                key={unit.id}
                id={unit.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-28"
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.03 }}
                variants={itemVariants}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#27409E]">
                      {unit.name}
                    </div>
                    <div className="mt-2 text-sm text-slate-600 sm:text-base">
                      {unit.description}
                    </div>
                  </div>
                  <span className="text-slate-400 transition group-open:rotate-180">▾</span>
                </summary>

                <div className="mt-6 space-y-4">
                  <Link
                    href={unit.microsite}
                    className="inline-flex items-center gap-2 rounded-full border border-[#27409E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:bg-[#27409E] hover:text-white"
                  >
                    <GraduationCap className="size-4" />
                    Visit microsite
                  </Link>

                  <div className="grid gap-4">
                    {unit.sections.map((section, sectionIndex) => (
                      <div key={`${unit.id}-${sectionIndex}`} className="space-y-2">
                        {section.title ? (
                          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            {section.title}
                          </div>
                        ) : null}
                        <ul className="grid gap-2 text-sm text-slate-700 sm:text-base">
                          {section.items.map((item, itemIndex) => (
                            <li key={`${unit.id}-${sectionIndex}-${itemIndex}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
