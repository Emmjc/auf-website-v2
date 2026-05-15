"use client";

import { motion } from "framer-motion";
import type { CollegeNavIcon } from "@/components/public/college/CollegeSubnav";
import {
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  Mail,
  Newspaper,
  Phone,
  ScrollText,
  Target,
} from "lucide-react";

const iconMap = {
  book: BookOpen,
  calendar: CalendarDays,
  clipboard: ClipboardCheck,
  graduation: GraduationCap,
  mail: Mail,
  news: Newspaper,
  phone: Phone,
  scroll: ScrollText,
  target: Target,
};

type CollegeSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: CollegeNavIcon;
  children: React.ReactNode;
};

export default function CollegeSection({
  id,
  title,
  subtitle,
  icon,
  children,
}: CollegeSectionProps) {
  const Icon = icon ? iconMap[icon] : null;
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-12"
    >
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
            <Icon className="size-5" />
          </span>
        ) : null}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
          {subtitle ? (
            <p className="text-sm text-slate-600 sm:text-base">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}
