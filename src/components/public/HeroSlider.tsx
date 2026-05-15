"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { src: "/images/slider/is.jpg", label: "Institute of Science" },
  { src: "/images/slider/lib.jpg", label: "Library" },
  { src: "/images/slider/mainc.jpg", label: "Main Campus" },
  { src: "/images/slider/mainc2.jpg", label: "Main Campus" },
  { src: "/images/slider/ps.jpg", label: "Performing Space" },
  { src: "/images/slider/ps2.png", label: "Performing Space" },
  { src: "/images/slider/quad.jpg", label: "Quadrangle" },
  { src: "/images/slider/scc.png", label: "Student Center" },
  { src: "/images/slider/abldg.jpg", label: "Academic Building" },
  { src: "/images/slider/is2.jpg", label: "Institute of Science" },
  { src: "/images/slider/is3.jpg", label: "Institute of Science" },
  { src: "/images/slider/eya.jpg", label: "Education Annex" },
  { src: "/images/slider/eya2.jpg", label: "Education Annex" },
  { src: "/images/slider/quad2.jpg", label: "Quadrangle" },
];

const AUTO_INTERVAL = 6000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (index: number) => {
    const normalized = (index + SLIDES.length) % SLIDES.length;
    setActiveIndex(normalized);
  };

  return (
    <section
      className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[activeIndex].src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={SLIDES[activeIndex].src}
            alt="Angeles University Foundation campus"
            fill
            sizes="100vw"
            className="object-cover"
            priority={activeIndex === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1b4d]/70 via-[#0c1b4d]/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <div className="max-w-2xl text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#EAD162]">
              Angeles University Foundation
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Modern education grounded in service, research, and innovation.
            </h1>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Explore admissions, academics, and campus life across AUF. Discover programs
              designed for lifelong learning and community impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-[#EAD162] px-5 py-2 text-sm font-semibold text-[#1c2d66] shadow-sm transition hover:bg-[#d9bf52]">
              Explore Programs
            </button>
            <button className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              Visit the Campus
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        onClick={() => goTo(activeIndex - 1)}
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        onClick={() => goTo(activeIndex + 1)}
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-6 right-6 z-20 flex min-w-[220px] flex-col items-end gap-2 text-white/80">
        <div className="w-full max-w-[260px]">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-[#EAD162] transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / SLIDES.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="text-sm font-semibold text-white" aria-live="polite">
          {SLIDES[activeIndex].label}
        </div>
      </div>
    </section>
  );
}
