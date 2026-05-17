"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

import Footer from "@/components/public/Footer";

const campuses = [
  {
    id: "main",
    name: "Main Campus",
    image: "/images/slider/mainc2.jpg",
    address: [
      "AUF Main Campus, MacArthur Highway,",
      "Angeles City, Pampanga, Philippines 2009",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.2405039532787!2d120.59206397588086!3d15.145130963511756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2402dee0d49%3A0x6ccb1574d15b576d!2sAngeles%20University%20Foundation!5e0!3m2!1sen!2sph!4v1779017877215!5m2!1sen!2sph",
    unitsTitle: "Academic Units",
    units: [
      "College of Allied Medical Professions",
      "College of Nursing",
      "School of Medicine",
    ],
  },
  {
    id: "ps",
    name: "Professional School Campus",
    image: "/images/slider/ps2.png",
    address: [
      "AUF Professional School Building, MacArthur Highway,",
      "Angeles City, Pampanga, Philippines 2009",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.40557981394824!2d120.59567909128367!3d15.144903704704696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2401bafffff%3A0xba41393463867e40!2sAUF%20Professional%20School!5e0!3m2!1sen!2sph!4v1779017932430!5m2!1sen!2sph",
    unitsTitle: "Academic Units",
    units: [
      "College of Business and Accountancy",
      "School of Law",
      "Graduate School",
      "Confucius Institute",
    ],
  },
  {
    id: "cli",
    name: "Emmauel Y. Angeles-CLI Campus",
    image: "/images/slider/eya2.jpg",
    address: [
      "AUF Emmauel Y. Angeles-CLI Building, MacArthur Highway,",
      "Angeles City, Pampanga, Philippines 2009",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.70344749789226!2d120.59581521256209!3d15.144325370776231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f24013a2f687%3A0xdb958917d431fae2!2s533%20MacArthur%20Hwy%2C%20Angeles%2C%202009%20Pampanga!5e0!3m2!1sen!2sph!4v1779017986838!5m2!1sen!2sph",
    unitsTitle: "Academic Units",
    units: [
      "College of Arts and Sciences",
      "College of Education",
      "College of Computer Studies",
      "College of Criminal Justice Education",
      "College of Engineering and Architecture",
    ],
  },
  {
    id: "scc",
    name: "Sports and Cultural Center Campus",
    image: "/images/slider/scc.png",
    address: [
      "AUF Sports and Cultural Center Building, MacArthur Highway,",
      "Angeles City, Pampanga, Philippines 2009",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.2532935558934!2d120.59259317588084!3d15.144427963529612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2403f00758f%3A0x6f80cd6b294ffb6!2sAUF%20Sports%20and%20Cultural%20Center!5e0!3m2!1sen!2sph!4v1779018034934!5m2!1sen!2sph",
    unitsTitle: "Office",
    units: ["Athletic Office"],
  },
  {
    id: "sbc",
    name: "Sta Barbara Campus",
    image: "/images/slider/is2.JPG",
    address: [
      "AUF Sta Barbara Campus, 327 Maria Soledad Ave, Brgy. Ninoy Aquino,",
      "Angeles, Pampanga, Philippines 2009",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.0790358702798!2d120.59488417588095!3d15.15400356328696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f212c77fb94b%3A0xe8b6c62b13a2236a!2sAngeles%20University%20Foundation%20Santa%20Barbara%20Campus!5e0!3m2!1sen!2sph!4v1779018011451!5m2!1sen!2sph",
    unitsTitle: "Academic Unit",
    units: ["AUF Integrated School"],
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

export default function CampusesPage() {
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
              <MapPin className="size-3.5" />
              Connect
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Campuses and Locations
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Discover each AUF campus, explore its academic units, and view the exact
              location on Google Maps.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8">
          {campuses.map((campus, index) => (
            <motion.article
              key={campus.id}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              variants={itemVariants}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.55fr,0.45fr]"
            >
              <div className="space-y-5">
                <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={campus.image}
                    alt={`${campus.name} photo`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    {campus.name}
                  </h2>
                  <div className="space-y-1 text-sm text-slate-600 sm:text-base">
                    {campus.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#27409E]">
                    {campus.unitsTitle}
                  </div>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:text-base">
                    {campus.units.map((unit) => (
                      <li key={unit} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#27409E]" />
                        <span>{unit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[4/3] w-full lg:aspect-video">
                  <iframe
                    title={`${campus.name} map`}
                    src={campus.mapSrc}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    style={{ border: 0 }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
