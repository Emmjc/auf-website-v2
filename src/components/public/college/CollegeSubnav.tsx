"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  List,
  Mail,
  Newspaper,
  Phone,
  ScrollText,
  Target,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export type CollegeNavIcon = keyof typeof iconMap;

type NavItem = {
  id: string;
  label: string;
  icon: CollegeNavIcon;
};

type CollegeSubnavProps = {
  items: NavItem[];
  brandColor: string;
  showAfter?: number;
};

export default function CollegeSubnav({
  items,
  brandColor,
  showAfter = 260,
}: CollegeSubnavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const ids = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  useEffect(() => {
    if (ids.length === 0) return;

    let rafId = 0;
    const offsetTop = 140;

    const updateActive = () => {
      if (isClicking) return;
      const scrollPosition = window.scrollY + offsetTop;
      const positions = ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { id, top };
        })
        .filter((item): item is { id: string; top: number } => Boolean(item))
        .sort((a, b) => a.top - b.top);

      if (positions.length === 0) return;

      const current = positions
        .filter((item) => item.top <= scrollPosition)
        .pop();

      if (current) {
        setActiveId(current.id);
      } else {
        setActiveId(positions[0].id);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, isClicking]);

  const handleJump = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    setIsClicking(true);
    setActiveId(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => setIsClicking(false), 700);
    setIsSheetOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 12 }}
        transition={{ duration: 0.3 }}
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
      >
        <div className="flex flex-col gap-2 rounded-2xl border border-white/60 bg-white/85 p-2 shadow-xl backdrop-blur">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleJump(item.id)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "bg-white text-slate-900 shadow"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                style={
                  isActive
                    ? { border: `1px solid ${brandColor}33` }
                    : { border: "1px solid transparent" }
                }
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ background: isActive ? brandColor : "#E2E8F0" }}
                >
                  <Icon className="size-3.5 text-white" />
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 12 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 top-1/2 z-40 -translate-y-1/2 lg:hidden"
        >
          <SheetTrigger
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg"
            style={{ background: brandColor }}
          >
            <List className="size-4" />
            Sections
          </SheetTrigger>
        </motion.div>
        <SheetContent side="bottom" className="max-h-[70vh]">
          <SheetHeader>
            <SheetTitle className="text-base text-slate-900">
              Jump to section
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-3 px-4 pb-6">
            <div className="grid gap-2">
              {items.map((item) => {
                const Icon = iconMap[item.icon];
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleJump(item.id)}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "border-transparent text-slate-900"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                    style={isActive ? { background: `${brandColor}14` } : undefined}
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full"
                      style={{ background: isActive ? brandColor : "#E2E8F0" }}
                    >
                      <Icon className="size-4 text-white" />
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
