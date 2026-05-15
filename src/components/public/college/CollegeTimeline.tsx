"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  year: string;
  text: string;
};

type CollegeTimelineProps = {
  items: TimelineItem[];
  accentColor: string;
};

export default function CollegeTimeline({ items, accentColor }: CollegeTimelineProps) {
  return (
    <div className="space-y-6 border-l-2 border-slate-200 pl-6">
      {items.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative"
        >
          <span
            className="absolute -left-[14px] top-1.5 h-3 w-3 rounded-full"
            style={{ background: accentColor }}
          />
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {item.year}
          </div>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
