"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ExternalLink } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const admissionsLinks = [
  { label: "Testing Dates", href: "/admissions/testing-dates" },
  { label: "Application Guide", href: "/admissions/application-guide" },
  { label: "Academic Programs", href: "/admissions/academic-programs" },
  { label: "Academic Calendar", href: "/admissions/academic-calendar" },
  { label: "Scholarships and Grants", href: "/admissions/scholarships" },
  { label: "University Registrar", href: "/admissions/registrar" },
];

const academicsLinks = [
  { label: "Graduate School", href: "/c/graduate-school" },
  { label: "School of Law", href: "/c/law" },
  { label: "School of Medicine", href: "/c/medicine" },
  { label: "College of Allied Medical Professions", href: "/c/allied-medical-professions" },
  { label: "College of Arts and Sciences", href: "/c/cas" },
  { label: "College of Business and Accountancy", href: "/c/business-accountancy" },
  { label: "College of Criminal Justice Education", href: "/c/criminal-justice" },
  { label: "College of Computer Studies", href: "/c/computer-studies" },
  { label: "College of Education", href: "/c/education" },
  { label: "College of Engineering and Architecture", href: "/c/engineering-architecture" },
  { label: "College of Nursing", href: "/c/nursing" },
  { label: "AUF Integrated School", href: "/c/integrated-school" },
];

const studentServicesGroups = [
  {
    title: "Becoming Mabuti",
    links: [
      { label: "Student Affairs", href: "/student-services/student-affairs" },
      { label: "Guidance", href: "/student-services/guidance" },
    ],
  },
  {
    title: "Becoming Magaling",
    links: [
      { label: "Health", href: "/student-services/health" },
      { label: "Sports", href: "/student-services/sports" },
      { label: "Culture", href: "/student-services/culture" },
    ],
  },
  {
    title: "Becoming May Malasakit",
    links: [{ label: "CCFP", href: "/student-services/ccfp" }],
  },
];

const learningResourcesLinks = [
  { label: "Library", href: "https://library.auf.edu.ph/" },
  { label: "AUF MyClass", href: "https://auf.instructure.com/login/canvas" },
  { label: "MyAU", href: "https://sblive.auf.edu.ph/schoolautomate/index.jsp" },
  { label: "AUF Mail", href: "http://mail.auf.edu.ph/" },
];

const externalAffairsLinks = [
  { label: "External Affairs", href: "/external-affairs/about" },
  { label: "Partnerships", href: "/external-affairs/partnerships" },
  { label: "News and Events", href: "/external-affairs/news-events" },
  { label: "International Students", href: "/external-affairs/international" },
  { label: "Testimonials", href: "/external-affairs/testimonials" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const connectLinks = [
  { label: "Campuses", href: "/connect/campuses" },
  { label: "Directory", href: "/connect/directory" },
];

const communityPrimaryLinks = [
  { label: "Alumni", href: "/alumni" },
  { label: "Careers", href: "/careers" },
  { label: "Research", href: "/research" },
];

function DesktopDropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-sm font-semibold text-slate-800">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="rounded-xl border border-slate-100 bg-white p-4 shadow-xl">
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function DropdownList({
  items,
  isExternal = false,
}: {
  items: { label: string; href: string }[];
  isExternal?: boolean;
}) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            <span>{item.label}</span>
            {isExternal ? <ExternalLink className="size-3.5 text-slate-400" /> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileLinkList({
  items,
  isExternal = false,
}: {
  items: { label: string; href: string }[];
  isExternal?: boolean;
}) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            <span>{item.label}</span>
            {isExternal ? <ExternalLink className="size-3.5 text-slate-400" /> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-lg border border-slate-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800">
        {title}
        <span className="text-slate-400 transition group-open:rotate-180">▾</span>
      </summary>
      <div className="border-t border-slate-100 px-4 py-3">{children}</div>
    </details>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-full max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/auf-logo.png"
            alt="Angeles University Foundation"
            width={56}
            height={56}
            className="h-11 w-11 object-contain"
            priority
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Angeles University Foundation
            </div>
            <div className="text-[11px] font-medium text-slate-600">
              AUF Official Website
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <DesktopDropdown title="Admissions">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Start your AUF journey</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Key dates, requirements, and how to apply.
                    </p>
                    <Link
                      href="/admissions/application-guide"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#27409E]"
                    >
                      Application Guide
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <DropdownList items={admissionsLinks} />
                </div>
              </DesktopDropdown>

              <DesktopDropdown title="Academics">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Explore AUF colleges</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Undergraduate, graduate, and professional programs.
                    </p>
                    <Link
                      href="/admissions/academic-programs"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#27409E]"
                    >
                      Academic Programs
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <DropdownList items={academicsLinks} />
                </div>
              </DesktopDropdown>

              <DesktopDropdown title="Campus Life">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Student services at AUF</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Support, wellness, and student success programs.
                    </p>
                    <Link
                      href="/student-services/student-affairs"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#27409E]"
                    >
                      Student Affairs
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <div className="grid gap-4">
                    {studentServicesGroups.map((group) => (
                      <div key={group.title} className="space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {group.title}
                        </div>
                        <DropdownList items={group.links} />
                      </div>
                    ))}
                  </div>
                </div>
              </DesktopDropdown>

              <DesktopDropdown title="Resources">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Learning resources</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Library, learning platform, and campus portals.
                    </p>
                    <Link
                      href="https://library.auf.edu.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#27409E]"
                    >
                      Visit AUF Library
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <DropdownList items={learningResourcesLinks} isExternal />
                </div>
              </DesktopDropdown>

              <DesktopDropdown title="External Affairs">
                <DropdownList items={externalAffairsLinks} />
              </DesktopDropdown>

              <DesktopDropdown title="Community">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Join the AUF community</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Alumni network, careers, and stay connected.
                    </p>
                    <Link
                      href="/alumni"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#27409E]"
                    >
                      Alumni
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <DropdownList items={communityPrimaryLinks.concat(connectLinks)} />
                </div>
              </DesktopDropdown>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/apply"
            className="inline-flex min-w-[112px] items-center justify-center rounded-full border border-[#27409E] px-4 py-2 text-sm font-semibold text-[#27409E] transition hover:bg-[#27409E] hover:text-white whitespace-nowrap"
          >
            Apply Now
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] max-w-md">
            <SheetHeader>
              <SheetTitle className="text-base text-slate-900">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4 pb-6">
              <div className="grid gap-2">
                <Link
                  href="/"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Home
                </Link>
              </div>

              <MobileAccordion title="Admissions">
                <MobileLinkList items={admissionsLinks} />
              </MobileAccordion>
              <MobileAccordion title="Academics">
                <MobileLinkList items={academicsLinks} />
              </MobileAccordion>
              <MobileAccordion title="Campus Life">
                <div className="grid gap-4">
                  {studentServicesGroups.map((group) => (
                    <div key={group.title} className="space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {group.title}
                      </div>
                      <MobileLinkList items={group.links} />
                    </div>
                  ))}
                </div>
              </MobileAccordion>
              <MobileAccordion title="Resources">
                <MobileLinkList items={learningResourcesLinks} isExternal />
              </MobileAccordion>
              <MobileAccordion title="External Affairs">
                <MobileLinkList items={externalAffairsLinks} />
              </MobileAccordion>
              <MobileAccordion title="Community">
                <MobileLinkList items={communityPrimaryLinks.concat(connectLinks)} />
              </MobileAccordion>

              <Link
                href="/apply"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#27409E] px-4 py-3 text-sm font-semibold text-[#27409E] transition hover:bg-[#27409E] hover:text-white whitespace-nowrap"
              >
                Apply Now
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
