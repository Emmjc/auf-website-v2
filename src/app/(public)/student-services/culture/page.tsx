"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Music2, Sparkles, Star } from "lucide-react";
import Footer from "@/components/public/Footer";

type CultureGroup = {
  id: string;
  name: string;
  initials: string;
  description: string;
  history: string;
  logo?: string;
  facebook?: string;
};

const cultureGroups: CultureGroup[] = [
  {
    id: "concert-chorus",
    name: "AUF Concert Chorus",
    initials: "ACC",
    logo: "/images/culture/concertchorus.jpg",
    facebook: "https://www.facebook.com/aufconcertchorus87",
    description:
      "A premier chorale composed of students whose talent, creativity, discipline, and personality have brought them to national and international stages.",
    history:
      "Organized in 1979 and currently under the tutelage of Music Director Gildo " +
      "Boron" +
      " Garcia, Jr., the chorus has performed for Philippine Presidents, statesmen, diplomats, and high-ranking officials in the Philippines and abroad.",
  },
  {
    id: "dance-troupe",
    name: "AUF Dance Troupe",
    initials: "ADT",
    logo: "/images/culture/dancetroupe.jpg",
    facebook: "https://www.facebook.com/dancetroupeauf",
    description:
      "A troupe of talented students who express creativity and emotion through dance, with a repertoire from folk to modern.",
    history:
      "Formed in 1973 under the banner Maharlika Dance Troupe and currently under the directorship of Mr. Rommel " +
      "Poklong" +
      " Guina.",
  },
  {
    id: "rondalla",
    name: "AUF Rondalla",
    initials: "AR",
    logo: "/images/culture/rondalla.jpg",
    facebook: "https://www.facebook.com/aufsanlahirondalla1973",
    description:
      "Partners with the Dance Troupe in promoting Filipino culture through music and dance, with renditions of local and international favorites.",
    history:
      "Originally formed with the AUF Dance Troupe in 1973 and currently under the baton of Mr. Leovie Ruga.",
  },
  {
    id: "brass-band",
    name: "AUF Brass Band",
    initials: "ABB",
    description:
      "The first group formed in 1963, nurturing young musicians from Pampanga to perform for religious, social, and cultural celebrations.",
    history:
      "Today under the baton of Ms. Tiffany Chei Manaloto, a former band member.",
  },
  {
    id: "glee-club",
    name: "AUF High School Glee Club",
    initials: "HSGC",
    description:
      "A youthful ensemble with renditions ranging from Broadway to contemporary pop.",
    history:
      "Originally formed in 1995 and currently led by musical conductor Mr. Marko Quioc Riyal. Members eventually graduate into the AUF Concert Chorus.",
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

function GroupLogo({ group }: { group: CultureGroup }) {
  if (!group.logo) {
    return (
      <div className="flex h-16 w-28 items-center justify-center rounded-xl border border-slate-200 bg-[#27409E]/10 text-xs font-semibold uppercase tracking-[0.24em] text-[#27409E]">
        {group.initials}
      </div>
    );
  }

  return (
    <div className="flex h-16 w-28 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={group.logo}
        alt={`${group.name} logo`}
        width={96}
        height={48}
        className="h-12 w-24 object-contain"
      />
    </div>
  );
}

export default function CulturePage() {
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
              Student Services - CCA
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Center for Culture and the Arts
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              The AUF Center for Culture and the Arts preserves Kapampangan and Filipino
              cultural heritage through performances by the Angklung Ensemble, AUF Band,
              Concert Chorus, Dance Troupe, and Rondalla. It also organizes the Mr. and
              Ms. University Pageant and Annual Inter-Collegiate Cultural Competitions.
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
                <Music2 className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                  Performing Arts Legacy
                </div>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  The AUF Performing Arts was organized in 1963 by Dr. Emmanuel Y. Angeles at
                  the former Angeles Institute of Technology to provide a venue for young
                  Kapampangan artists to develop their talents while pursuing college education
                  under scholarship.
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
            className="rounded-3xl border border-[#EAD162]/40 bg-[#EAD162]/15 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#8c6d12]">
                <CalendarDays className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c6d12]">
                  Signature Events
                </div>
                <p className="mt-2 text-sm text-slate-700 sm:text-base">
                  The Center organizes the prestigious Mr. and Ms. University Pageant and
                  the Annual Inter-Collegiate Cultural Competitions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cultureGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.04 }}
              variants={itemVariants}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <GroupLogo group={group} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{group.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                  <Star className="size-5" />
                </div>
              </div>

              <details className="group mt-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-700">
                  About the group
                  <span className="text-slate-400 transition group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">{group.history}</p>
              </details>

              {group.facebook ? (
                <Link
                  href={group.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#27409E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:bg-[#27409E] hover:text-white"
                >
                  Follow on Facebook
                </Link>
              ) : null}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
