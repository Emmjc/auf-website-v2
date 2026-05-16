"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageSquareQuote, Sparkles } from "lucide-react";
import Footer from "@/components/public/Footer";

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I can't just simply express how happy I am because I made the decision to study here in AUF. On July 4, 2005, we started our four-month-long ESL program, and had a taste of the AUF way of learning English through authentic activities and tests. We had lecture presentations to showcase our culture; our class staged a Filipino-Korean Friendship Talk which presented our insights to some issues affecting our society. I won't forget also the interview, surveys, news casting activities, and listening assignments that we had to accomplish. These tasks have become meaningful learning opportunities to cherish.",
    name: "Kim Yunseung",
    detail: "ESL Program Graduate, Korean",
  },
  {
    quote:
      "In our place here in the province of Tarlac, I heard AUF is an excellent institution when it comes to medical and nursing professions producing topnotchers and globally competitive individuals. I enrolled as a BS Nursing student and AUF presented me with a lavish gift - I was granted a Barbara Yap Angeles (BYA) scholarship owing to my academic status in high school. I will forever be thankful for that. Then in my sophomore year, thru hard work and prayers, I gained a College Scholarship which I treasure and carefully maintained up until now.",
    name: "Mary Valerie P. Rivera",
    detail: "BSN IV-1, Filipino American",
  },
  {
    quote:
      "Me and my three other siblings picked AUF because we were told that the nursing school is very promising with regards to its curriculum, and that the degree was accredited in the states. Also the location was not as much of a culture shock as compared to manila. My pleasant experiences at AUF are when I'm active in the school, from a variety of different competitions, to leadership positions and representation of my very own college of nursing. All these exposures help me learn much that I can apply in life, and I gained a wide network of interactive connection from so many interesting people of all gender, age and nationality.",
    name: "Leslie Ann Cayanan",
    detail: "BSN IV, Filipino American",
  },
  {
    quote:
      "I chose Angeles University Foundation as my school for the start of my college life because of the quality of education they are offering to students like me. I never regret being a part of the university because there is no discrimination among students and the staff or the college is so accommodating when it comes with our needs. One thing I like in the college is that when it comes with academic problems or personal problems they have an open heart to help and understand the students, and they make sure that they know their students like our guidance counselor, level coordinator and clinical instructors.",
    name: "Krissa Galle Miranda Quizon",
    detail: "BSN IV-13, Filipino-American",
  },
];

const testimonialPhotos = [
  "/images/testi/testi1.jpg",
  "/images/testi/testi2.jpg",
  "/images/testi/testi3.jpg",
  "/images/testi/testi4.jpg",
  "/images/testi/testi5.jpg",
  "/images/testi/testi6.jpg",
  "/images/testi/testi7.jpg",
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function TestimonialsPage() {
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
              External Affairs
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Testimonials
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Stories from students who experienced the AUF learning community firsthand.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              variants={itemVariants}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
                  <MessageSquareQuote className="size-5" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 sm:text-base">“{testimonial.quote}”</p>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {testimonial.detail}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={itemVariants}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
                Testimonial Photos
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Faces from the AUF community
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                These photos feature different individuals and are not paired with the
                written testimonials above.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialPhotos.map((src, index) => (
              <div
                key={src}
                className="group relative h-56 overflow-hidden rounded-2xl border border-slate-100 bg-slate-100"
              >
                <Image
                  src={src}
                  alt={`Testimonial photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Community Story
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
