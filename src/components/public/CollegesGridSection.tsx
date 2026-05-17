"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { activeColleges } from "@/data/colleges";

const logoMap: Record<string, string> = {
  "graduate-school": "/colleges/gs-logo.png",
  law: "/colleges/sol-logo.png",
  medicine: "/colleges/som-logo.png",
  "allied-medical-professions": "/colleges/camp-logo.png",
  cas: "/colleges/cas-logo.png",
  "business-accountancy": "/colleges/cba-logo.png",
  "criminal-justice": "/colleges/ccje-logo.png",
  "computer-studies": "/colleges/ccs-logo.png",
  education: "/colleges/ced-logo.png",
  "engineering-architecture": "/colleges/cea-logo.png",
  nursing: "/colleges/con-logo.png",
  "integrated-school": "/colleges/is-logo.png",
};

const textOnlySlugs = new Set([
  "graduate-school",
  "law",
  "medicine",
  "integrated-school",
]);

export default function CollegesGridSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="academics" className="relative overflow-hidden bg-[#173a8f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 text-white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Academics
            </div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Colleges &amp; Schools
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
              Each college opens its own dedicated microsite. Explore programs, news, and
              highlights across the university.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
              Tap a tile to open
            </div>
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            12 units
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {activeColleges.map((college, index) => {
            const logoSrc = logoMap[college.slug];
            const useTextOnly = textOnlySlugs.has(college.slug);
            return (
              <motion.div
                key={college.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="group"
              >
                <Link
                  href={`/c/${college.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Open ${college.name} page`}
                >
                  <div
                    className="relative aspect-square overflow-hidden rounded-3xl border border-white/20 shadow-[0_18px_40px_rgba(2,8,23,0.35)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_rgba(2,8,23,0.45)]"
                    style={{ background: college.brandColor }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
                    <div className="relative flex h-full items-center justify-center p-5">
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/92 shadow-[0_10px_24px_rgba(0,0,0,0.2)] sm:h-28 sm:w-28">
                        {logoSrc && !useTextOnly ? (
                          <Image
                            src={logoSrc}
                            alt={`${college.name} logo`}
                            width={160}
                            height={160}
                            className="h-16 w-16 object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.45)] transition duration-300 group-hover:scale-[1.06] sm:h-20 sm:w-20"
                          />
                        ) : (
                          <div
                            className="text-xl font-semibold tracking-[0.32em]"
                            style={{ color: college.brandColor }}
                          >
                            {college.shortName}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                      {college.shortName}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-white/90">
                      {college.name}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
