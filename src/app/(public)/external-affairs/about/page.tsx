"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Crown,
  FileBarChart,
  Network,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/public/Footer";

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

type Recognition = {
  id: number;
  initiative: string;
  description: string;
  year: string;
  awardingBody: string;
  highlights?: string[];
};

const sections: Section[] = [
  {
    id: "overview",
    label: "Overview",
    icon: <BookOpen className="size-4" />,
  },
  {
    id: "vision-mission-goals",
    label: "Vision, Mission & Objectives",
    icon: <Sparkles className="size-4" />,
  },
  {
    id: "history",
    label: "History",
    icon: <Network className="size-4" />,
  },
  {
    id: "leadership",
    label: "Leadership",
    icon: <Crown className="size-4" />,
  },
  {
    id: "organizational-chart",
    label: "Organizational Chart",
    icon: <Building2 className="size-4" />,
  },
  {
    id: "facts-figures",
    label: "Facts & Figures",
    icon: <FileBarChart className="size-4" />,
  },
  {
    id: "international-recognitions",
    label: "International Recognitions",
    icon: <CircleHelp className="size-4" />,
  },
];

const recognitions: Recognition[] = [
  {
    id: 1,
    initiative: "QS World Rankings: Asia 2026",
    description:
      "AUF joins top Philippine universities in QS World Rankings: Asia 2026.",
    year: "2026",
    awardingBody: "QS World University Rankings: Asia 2026",
    highlights: ["1201-1300+ band"],
  },
  {
    id: 2,
    initiative: "QS World Rankings: Asia 2025",
    description:
      "AUF joins top Philippine universities in QS World Rankings: Asia 2025.",
    year: "2025",
    awardingBody: "QS World University Rankings: Asia 2025",
    highlights: ["901+ band"],
  },
  {
    id: 3,
    initiative: "Times Higher Education (THE) University Impact Rankings 2024",
    description:
      "AUF joins 2,152 universities from 125 countries in the Times Higher Education University Impact Rankings 2024.",
    year: "2024",
    awardingBody: "Times Higher Education (THE) Impact Rankings 2024",
    highlights: [
      "SDG 1 (No Poverty) - Ranked",
      "SDG 3 (Good Health and Well-being) - Ranked among top Philippine universities",
    ],
  },
  {
    id: 4,
    initiative: "Times Higher Education (THE) University Impact Rankings 2025",
    description:
      "AUF marks its second consecutive year in the 2025 THE Impact Rankings, joining 2,526 universities from 130 countries advancing the UN SDGs.",
    year: "2025",
    awardingBody: "Times Higher Education (THE) Impact Rankings 2025",
    highlights: [
      "SDG 3 (Good Health and Well-being) - 401-600",
      "SDG 11 (Sustainable Cities and Communities) - 601-800",
      "SDG 4 (Quality Education) - 801-1000",
      "SDG 5 (Gender Equality) - 801-1000",
    ],
  },
  {
    id: 5,
    initiative: "World University Rankings for Innovation (WURI) 2024",
    description:
      "AUF ranks 57th in the WURI 2024 for Student Mobility and Openness.",
    year: "2024",
    awardingBody: "World University Rankings for Innovation (WURI) 2024",
    highlights: ["A2 Student Mobility and Openness - 57th in the world", "3rd in the Philippines"],
  },
  {
    id: 6,
    initiative: "World University Rankings for Innovation (WURI) 2025",
    description:
      "AUF earns global recognition in the WURI 2025 for SDG-based responses and infrastructure innovation.",
    year: "2025",
    awardingBody: "World University Rankings for Innovation (WURI) 2025",
    highlights: [
      "A8 SDG-Based Responses to Global Challenges - 63rd in the world",
      "B6 Infrastructure and Technologies - 52nd in the world",
    ],
  },
  {
    id: 7,
    initiative: "ISO 21001:2018",
    description:
      "AUF is certified with ISO 21001:2018, the international standard for educational organizations.",
    year: "2025",
    awardingBody: "TUV SUD Philippines",
    highlights: ["ISO 21001:2018"],
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

export default function ExternalAffairsAboutPage() {
  const reduceMotion = useReducedMotion();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    overview: true,
  });
  const [menuPinned, setMenuPinned] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [activeOrgChart, setActiveOrgChart] = useState<string | null>(null);

  const menuOpen = menuPinned || menuHover;

  const sectionMap = useMemo(() => new Set(sections.map((section) => section.id)), []);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionMap.has(hash)) {
        setOpenSections((prev) => ({ ...prev, [hash]: true }));
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [sectionMap]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMenuNavigate = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: true }));
  };

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
              About OVPEA
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Explore the Office of the Vice President for External Affairs and its role in
              strengthening AUF partnerships, visibility, and global engagement.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => handleMenuNavigate(section.id)}
                className="rounded-full border border-[#27409E]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:border-[#27409E]/40"
              >
                {section.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <aside
        className="fixed right-4 top-28 z-40 hidden xl:block"
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}
      >
        <div
          className={`rounded-3xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur transition-all duration-300 ${
            menuOpen ? "w-72" : "w-14"
          }`}
        >
          <button
            type="button"
            onClick={() => setMenuPinned((prev) => !prev)}
            className="relative flex h-28 w-full items-center justify-between p-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]"
            aria-expanded={menuOpen}
          >
            {/* COLLAPSED STATE (Perfectly spaced vertically) */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-between py-4 transition-opacity duration-200 ${
                menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <span className="inline-block rounded-full border border-[#27409E]/20 bg-[#27409E]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#27409E] [writing-mode:vertical-lr] rotate-180">
                Links
              </span>
              <span className="text-[#27409E]">
                {menuOpen ? <ChevronRight className="size-4" /> : <ChevronDown className="size-4" />}
              </span>
            </div>

            {/* EXPANDED STATE (Horizontal row layout) */}
            <div
              className={`flex w-full items-center justify-between transition-opacity duration-200 ${
                menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-[#27409E]/20 bg-[#27409E]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#27409E]">
                  Links
                </span>
                <span className="whitespace-nowrap text-slate-600">
                  On this page
                </span>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#27409E]/20 bg-[#27409E]/10 text-[#27409E]">
                {menuOpen ? <ChevronRight className="size-4" /> : <ChevronDown className="size-4" />}
              </span>
            </div>
          </button>
          
          <div className={`${menuOpen ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300`}>
            <div className="space-y-2 px-4 pb-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => handleMenuNavigate(section.id)}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-transparent px-3 py-2 text-sm text-slate-600 transition hover:border-slate-200 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#27409E]">{section.icon}</span>
                    {section.label}
                  </span>
                  <ChevronRight className="size-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-6">
          <motion.div
            id="overview"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("overview")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections.overview}
              aria-controls="overview-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Overview
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Office of the Vice President for External Affairs
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${openSections.overview ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id="overview-panel"
              className={`overflow-hidden transition-all ${
                openSections.overview ? "mt-4 max-h-[2000px]" : "max-h-0"
              }`}
            >
              <p className="text-sm text-slate-600 sm:text-base">
                Since its establishment, the Angeles University Foundation (AUF) has been
                collaborating with external institutions and stakeholders to achieve its vision
                of becoming a center of excellence in instruction, research, and community
                service. To further establish an institution-wide system that allows its
                academic and support units to establish meaningful partnerships with various
                agencies and groups at the local, national, and international levels for mutual
                benefits and in support of its mission and vision, the University established
                the Office of the Vice President for External Affairs (OVPEA). The OVPEA is
                intended to provide strategic leadership and coherent oversight of units whose
                functions are externally oriented, ensuring strategic engagement with local,
                national, and international stakeholders in support of the institution's mission
                and development goals. The OVPEA ensures harmonized implementation of
                initiatives and programs for networking, linkage, and partnership, and adherence
                to the standards and policies of regulating and accrediting bodies.
              </p>
            </div>
          </motion.div>

          <motion.div
            id="vision-mission-goals"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("vision-mission-goals")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections["vision-mission-goals"]}
              aria-controls="vision-mission-goals-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Vision, Mission & Objectives
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Vision, Mission, and Goals
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${
                    openSections["vision-mission-goals"] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <div
              id="vision-mission-goals-panel"
              className={`overflow-hidden transition-all ${
                openSections["vision-mission-goals"] ? "mt-4 max-h-[4000px]" : "max-h-0"
              }`}
            >
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Vision
                  </div>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    The Office of the Vice President for External Affairs envisions Angeles
                    University Foundation as a globally recognized, socially responsive, and
                    industry-engaged university, strengthened by strategic partnerships, a
                    credible institutional brand, and an empowered alumni community in support
                    of excellence in instruction, research, and community service.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Mission
                  </div>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    The Office of the Vice President for External Affairs is committed to
                    leading, coordinating, and sustaining the University's external engagements
                    by promoting meaningful partnerships, strengthening institutional branding
                    and visibility, and cultivating lifelong alumni relations, thereby
                    advancing the University's mission, strategic goals, and global standing.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Goals
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600 sm:text-base">
                    <li>
                      Establish, manage, and sustain strategic partnerships that support
                      instruction, research, and community engagement.
                    </li>
                    <li>
                      Formulate policies and systems governing external relations, partnerships,
                      and engagements aligned with the University's strategic plan.
                    </li>
                    <li>
                      Strengthen the University's public image and global visibility through
                      coordinated communication and representation.
                    </li>
                    <li>
                      Develop alumni relations and placement programs that promote alumni
                      participation, career development, and employability.
                    </li>
                    <li>
                      Promote international programs including exchanges, research, mobility,
                      and global networks.
                    </li>
                    <li>
                      Generate measurable outcomes in external engagement that contribute to
                      institutional reputation and accreditation readiness.
                    </li>
                    <li>
                      Adopt innovative and data-informed practices to ensure stakeholder
                      satisfaction and continuous improvement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="history"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("history")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections.history}
              aria-controls="history-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  History
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  AUF External Affairs Evolution
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${openSections.history ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id="history-panel"
              className={`overflow-hidden transition-all ${
                openSections.history ? "mt-4 max-h-[5000px]" : "max-h-0"
              }`}
            >
              <div className="space-y-4 text-sm text-slate-600 sm:text-base">
                <p>
                  AUF supports internationalization or globalization, particularly the
                  initiatives geared towards international or cross-border education. It is in
                  this spirit that AUF launched the Center for Global Education (CGE) on June
                  22, 1997 with the following objectives:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Promote the internationalization of the University's quest for academic
                    excellence, elevating the institution's world-class status.
                  </li>
                  <li>Forge linkages and collaboration in the Asia-Pacific region.</li>
                  <li>Provide relevant training programs to meet industry demands.</li>
                  <li>
                    Serve as a center for formulating global agendas for higher education.
                  </li>
                  <li>
                    Provide exchange of publications, academic information, faculty, and
                    students.
                  </li>
                </ul>
                <p>
                  Under the Office of the Vice President for Academic Affairs (OVPAA), the CGE
                  evolved into International Affairs (IA). IA was established to integrate and
                  implement AUF's internationalization thrust with these objectives:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Promote AUF brand name internationally.</li>
                  <li>Network and establish partnerships in the ASEAN region.</li>
                  <li>Improve the environment for international support services within AUF.</li>
                  <li>Promote short-term study abroad programs.</li>
                  <li>Enhance the quality of the ESL program.</li>
                  <li>Develop foreign-accredited programs to attract more international students.</li>
                  <li>Increase international initiatives for students, staff, and faculty.</li>
                  <li>
                    Expand international research networks and strengthen existing
                    interdisciplinary networks.
                  </li>
                  <li>
                    Explore cooperation such as joint conferences, collaborative research, and
                    sharing of library holdings.
                  </li>
                </ul>
                <p>
                  In 2023, to further strengthen the implementation of internationalization
                  initiatives, the Office of Global Relations (OGR) was established under the
                  Office of the University President to provide administrative support to
                  academic units. Its objectives include:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Establish mutually beneficial partnerships with international educational
                    and research entities.
                  </li>
                  <li>
                    Provide administrative support for planning, implementation, monitoring, and
                    evaluation of internationalization initiatives.
                  </li>
                  <li>
                    Assist students, faculty, and administrators participating in
                    internationalization programs.
                  </li>
                  <li>
                    Coordinate internationalization activities such as visits, benchmarking,
                    and consultative conferences.
                  </li>
                  <li>
                    Adopt innovative practices to improve internationalization programs and
                    client satisfaction.
                  </li>
                </ul>
                <p>
                  On March 2, 2026, the Office of the Vice President for External Affairs
                  (OVPEA) was established to harmonize networks, linkages, and partnerships at
                  local, national, regional, and international levels. The VPEA provides
                  executive-level leadership in setting the overall direction of the
                  University's external relations and institutionalizes quality assurance
                  mechanisms for continuous improvement and data-informed management of
                  internationalization and external engagement programs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="leadership"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("leadership")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections.leadership}
              aria-controls="leadership-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Leadership
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  University Leadership
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${openSections.leadership ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id="leadership-panel"
              className={`overflow-hidden transition-all ${
                openSections.leadership ? "mt-4 max-h-[5000px]" : "max-h-0"
              }`}
            >
              <div className="space-y-6 text-sm text-slate-600 sm:text-base">
                <p>
                  The Angeles University Foundation is governed by its Board of Trustees,
                  composed of distinguished men and women from education, business, government,
                  the judiciary, and the clergy, and is led by its President, Atty. Joseph
                  Emmanuel L. Angeles, and the Management Committee.
                </p>
                <div className="grid gap-6 lg:grid-cols-[0.4fr,0.6fr]">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <div className="relative h-72 bg-slate-100">
                      <Image
                        src="/president.jpg"
                        alt="Atty. Joseph E. L. Angeles, Ph.D."
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="border-t border-slate-200 px-4 py-3">
                      <div className="text-sm font-semibold text-slate-900">
                        Atty. Joseph E. L. Angeles, Ph.D.
                      </div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        University President
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Presidential Message
                    </div>
                    <div className="mt-3 space-y-3 text-sm text-slate-600 sm:text-base">
                      <p>
                        On behalf of the Angelenean community, it is my distinct honor to
                        welcome you to Angeles University Foundation (AUF), a university
                        committed to academic excellence, global engagement, and transformative
                        education.
                      </p>
                      <p>
                        As we pursue our vision of becoming a leading center of excellence in
                        instruction, research, and community engagement, AUF continues to expand
                        its global footprint through meaningful and sustainable strategic
                        partnerships. We actively collaborate with universities, research
                        institutions, industry leaders, and international organizations around
                        the world. These partnerships foster faculty and student mobility,
                        transnational education programs, joint research initiatives,
                        professional development, internships, innovation platforms, and
                        intercultural exchange-creating pathways for shared growth and global
                        impact.
                      </p>
                      <p>
                        Anchored in our enduring mission of the "Total Development of Man for
                        God and Humanity," AUF integrates intellectual rigor with ethical
                        formation and social responsibility. Our academic programs, duly
                        recognized by the Philippine Commission on Higher Education (CHED), are
                        designed to cultivate graduates who are not only academically competent
                        but also morally grounded, compassionate, and service-oriented leaders.
                      </p>
                      <p>
                        Our commitment to quality and continuous improvement has earned AUF
                        Autonomous Status from CHED and inclusion in the QS World University
                        Rankings: Asia, affirming our standing within the regional and
                        international academic community.
                      </p>
                      <p>
                        At AUF, we do not merely educate; we shape leaders, innovators, and
                        nation-builders. We invite you to become part of a dynamic university
                        where aspirations are nurtured, global perspectives are embraced, and
                        excellence is a shared pursuit. We look forward to welcoming you to AUF.
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        Atty. Joseph E. L. Angeles, Ph.D.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="organizational-chart"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("organizational-chart")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections["organizational-chart"]}
              aria-controls="organizational-chart-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Organizational Chart
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  OVPEA Structure
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${
                    openSections["organizational-chart"] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <div
              id="organizational-chart-panel"
              className={`overflow-hidden transition-all ${
                openSections["organizational-chart"] ? "mt-4 max-h-[4000px]" : "max-h-0"
              }`}
            >
              <div className="grid gap-4 lg:grid-cols-2">
                {["/images/orgchart/1.png", "/images/orgchart/2.png"].map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveOrgChart(src)}
                    className="group relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left"
                  >
                    <Image
                      src={src}
                      alt="OVPEA organizational chart"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                      Tap to enlarge
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            id="facts-figures"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("facts-figures")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections["facts-figures"]}
              aria-controls="facts-figures-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Facts & Figures
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Data from the Registry
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${
                    openSections["facts-figures"] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <div
              id="facts-figures-panel"
              className={`overflow-hidden transition-all ${
                openSections["facts-figures"] ? "mt-4 max-h-[1200px]" : "max-h-0"
              }`}
            >
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Coming Soon
                </div>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Facts and figures will be published once the registry data is finalized.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="international-recognitions"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => toggleSection("international-recognitions")}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openSections["international-recognitions"]}
              aria-controls="international-recognitions-panel"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  International Recognitions
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Global Rankings and Quality Assurance
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                <ChevronDown
                  className={`size-5 transition ${
                    openSections["international-recognitions"] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <div
              id="international-recognitions-panel"
              className={`overflow-hidden transition-all ${
                openSections["international-recognitions"] ? "mt-4 max-h-[6000px]" : "max-h-0"
              }`}
            >
              <div className="space-y-6">
                <p className="text-sm text-slate-600 sm:text-base">
                  The Angeles University Foundation (AUF) actively engages in global ranking
                  initiatives such as QS World University Rankings, Times Higher Education
                  Impact Rankings, and World University Rankings for Innovation, while also
                  upholding international quality assurance standards through its ISO
                  21001:2018 certification. The table below provides a consolidated summary of
                  AUF's performance in global rankings and its international quality assurance
                  recognitions.
                </p>
                <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Image
                    src="/images/intrecog/QS_University_Rankings_Logo.png"
                    alt="QS World University Rankings logo"
                    width={140}
                    height={64}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/images/intrecog/theimpact2020.png"
                    alt="Times Higher Education Impact Rankings logo"
                    width={140}
                    height={64}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/images/intrecog/TUVISO.png"
                    alt="TUV SUD ISO 21001:2018 logo"
                    width={140}
                    height={64}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-2xl border border-slate-300">
                  <table className="min-w-[760px] w-full border-collapse text-left">
                    <thead className="bg-slate-50">
                      <tr className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        <th className="border border-slate-300 px-4 py-3">No.</th>
                        <th className="border border-slate-300 px-4 py-3">Initiative</th>
                        <th className="border border-slate-300 px-4 py-3">Description</th>
                        <th className="border border-slate-300 px-4 py-3">Year implemented</th>
                        <th className="border border-slate-300 px-4 py-3">Awarding Body</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recognitions.map((recognition) => (
                        <tr key={recognition.id} className="align-top">
                          <td className="border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-600">
                            {recognition.id}
                          </td>
                          <td className="border border-slate-300 px-4 py-4">
                            <div className="text-sm font-semibold text-slate-900">
                              {recognition.initiative}
                            </div>
                          </td>
                          <td className="border border-slate-300 px-4 py-4 text-sm text-slate-600">
                            {recognition.description}
                          </td>
                          <td className="border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-700">
                            {recognition.year}
                          </td>
                          <td className="border border-slate-300 px-4 py-4 text-sm text-slate-600">
                            <div className="font-semibold text-slate-700">
                              {recognition.awardingBody}
                            </div>
                            {recognition.highlights ? (
                              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-500">
                                {recognition.highlights.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {activeOrgChart ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="OVPEA organizational chart"
          onClick={() => setActiveOrgChart(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
              <span>Organizational Chart</span>
              <button
                type="button"
                onClick={() => setActiveOrgChart(null)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:border-slate-300"
              >
                Close
              </button>
            </div>
            <div className="relative h-[70vh] bg-slate-100">
              <Image
                src={activeOrgChart}
                alt="OVPEA organizational chart"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
