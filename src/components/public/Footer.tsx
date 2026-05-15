"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Globe,
  MapPin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Admissions", href: "/admissions" },
  { label: "Academic Programs", href: "/admissions/academic-programs" },
  { label: "Scholarships", href: "/admissions/scholarships" },
  { label: "Careers", href: "/careers" },
  { label: "Alumni", href: "/alumni" },
];

const studentResources = [
  { label: "Library", href: "https://library.auf.edu.ph/" },
  { label: "AUF MyClass", href: "https://auf.instructure.com/login/canvas" },
  { label: "MyAU", href: "https://sblive.auf.edu.ph/schoolautomate/index.jsp" },
  { label: "AUF Mail", href: "http://mail.auf.edu.ph/" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: MessageCircle },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Globe },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Briefcase },
];

export default function Footer() {
  return (
    <footer className="bg-[#27409E] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1.2fr,1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/auf-logo-mark.png"
                alt="Angeles University Foundation"
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
              <div>
                <div className="text-base font-semibold uppercase tracking-wide">
                  Angeles University Foundation
                </div>
                <div className="text-xs text-white/70">AUF Official Website</div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 text-[#EAD162]" />
                <span>MacArthur Highway, Angeles City, Pampanga 2009</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 size-4 text-[#EAD162]" />
                <span>(045) 625-2888 | (045) 625-2887</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 size-4 text-[#EAD162]" />
                <span>info@auf.edu.ph</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-[#EAD162] hover:text-[#EAD162]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/80 transition hover:text-[#EAD162]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  Student Resources
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {studentResources.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/80 transition hover:text-[#EAD162]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              Recognitions
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              ISO 21001:2015 Certified | CHED Autonomous Status | PAASCU Accredited
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-white/70 sm:flex-row sm:items-center">
          <span>© 2026 Angeles University Foundation. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition hover:text-[#EAD162]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-[#EAD162]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
