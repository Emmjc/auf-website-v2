"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type CollegeHeroProps = {
  name: string;
  description: string;
  brandColor: string;
  logoSrc: string;
  badges?: string[];
};

export default function CollegeHero({
  name,
  description,
  brandColor,
  logoSrc,
  badges = [],
}: CollegeHeroProps) {
  return (
    <div className="border-b border-neutral-200" style={{ background: brandColor }}>
      <div className="mx-auto max-w-6xl px-6 py-12 text-white">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/80">
              A college of Angeles University Foundation
            </div>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{name}</h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/admissions/application-guide"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
              >
                Admissions Guide
              </Link>
              <Link
                href="https://sblive.auf.edu.ph/schoolautomate/PARENTS_STUDENTS/parents_student_index.jsp"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white"
              >
                Apply Now
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white"
              >
                Contact
              </Link>
            </div>
            {badges.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/40 px-3 py-1 text-xs font-semibold text-white/90"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center lg:items-start lg:justify-end lg:-mt-68"
          >
            <div className="rounded-[28px] border border-white/30 bg-white/85 p-6 shadow-2xl backdrop-blur sm:p-7 lg:p-8">
              <Image
                src={logoSrc}
                alt={`${name} logo`}
                width={240}
                height={240}
                className="h-32 w-32 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] sm:h-36 sm:w-36 lg:h-44 lg:w-44 xl:h-52 xl:w-52"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
