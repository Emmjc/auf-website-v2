import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeBySlug, collegeLabel } from "@/data/colleges";
import { listPublishedPostsForCollege } from "@/server/services/posts";
import { formatDate } from "@/lib/utils";
import CollegeHero from "@/components/public/college/CollegeHero";
import CollegeSection from "@/components/public/college/CollegeSection";
import CollegeTimeline from "@/components/public/college/CollegeTimeline";
import CollegeSubnav from "@/components/public/college/CollegeSubnav";
import Footer from "@/components/public/Footer";
import type { CollegeNavIcon } from "@/components/public/college/CollegeSubnav";

const medicineTimeline = [
  {
    year: "June 1983",
    text: "AUF-SOM established by the Board of Medical Education and DECS with Dr. Rodolfo C. Dimayuga as founding dean.",
  },
  {
    year: "1990",
    text: "AUF Medical Center inaugurated; the only private tertiary teaching hospital in Central Luzon for clinical training.",
  },
  {
    year: "1993",
    text: "San Lorenzo Ruiz Building fire led to the construction of a new health sciences building for AUF-SOM.",
  },
  {
    year: "2008",
    text: "Doctor of Medicine program received ISO 9001 certification by TUV-SUD and remains PAASCU-accredited in Central Luzon.",
  },
  {
    year: "Recent years",
    text: "Outstanding board performance and international screening test pass rates strengthen AUF-SOM reputation.",
  },
];

const medicineGoals = [
  "Prepare students to practise medicine in service of God and humanity.",
  "Instill dedication, kindness, patience, and compassion.",
  "Maintain awareness of social and economic conditions locally and globally.",
  "Equip students with strong foundations in basic sciences, clinical disciplines, and preventive medicine.",
  "Inspire continuous learning in medical innovations and research.",
  "Motivate lifelong learning in chosen specializations.",
];

const topnotchers = [
  { year: "1990", name: "Dr. Reynaldo P. Sinamban", place: "20th" },
  { year: "1992", name: "Dr. Philip Nolan C. Dema-ala", place: "20th" },
  { year: "2004", name: "Dr. Floyd V. Villarin", place: "10th" },
  { year: "2007", name: "Dr. Razel C. Siron - Gonzales", place: "10th" },
];

const minimumRequirements = [
  "Holder of any baccalaureate degree.",
  "NMAT score of 40% or higher.",
];

const applicationRequirements = [
  "Application for Admissions (AUF-Form-SOM-01)",
  "Official Bachelor’s Degree Transcript of Records",
  "Diploma or Certificate of Graduation",
  "NMAT Result",
];

const internationalRequirements = [
  "Passport",
  "Birth certificate",
  "Medical fitness certificate",
  "Police clearance",
];

const onsiteRequirements = [
  "Certification of General Weighted Average",
  "Two (2) good moral character certifications (Dean + Guidance Counselor/OSA) in sealed envelopes",
];

const studentOrganizations = [
  {
    name: "Medical Student Council",
    description:
      "Serves as the student voice, inspires innovation, fosters cooperation, and empowers future physicians.",
  },
  {
    name: "Angeles Medical Surgical Mission Society",
    description:
      "Community service organization providing free healthcare to underserved patients.",
  },
];

export default async function SchoolOfMedicinePage() {
  const college = getCollegeBySlug("medicine");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "overview", label: "Overview", icon: "book" },
    { id: "history", label: "History", icon: "scroll" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "topnotchers", label: "Topnotchers", icon: "news" },
    { id: "admissions", label: "Admissions", icon: "clipboard" },
    { id: "calendar", label: "Calendar", icon: "calendar" },
    { id: "faculty", label: "Faculty", icon: "mail" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "news", label: "News", icon: "news" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/som-logo.png"
        badges={["PAASCU accredited", "ISO certified", "Teaching hospital"]}
      />

      <CollegeSubnav items={navItems} brandColor={college.brandColor} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CollegeSection
          id="overview"
          title="School of Medicine Overview"
          subtitle="Compassionate, research-driven medical education."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                AUF-SOM at a Glance
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                AUF-SOM is a leader in Central Luzon for accredited medical education with
                modern facilities, a dedicated faculty, and a strong clinical training network.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Goals
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {medicineGoals.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full"
                      style={{ background: college.brandColor }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="history" title="History Timeline" icon="scroll">
          <CollegeTimeline items={medicineTimeline} accentColor={college.accentColor} />
        </CollegeSection>

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The School of Medicine envisions itself as a center for quality and relevant
                medical education recognized locally and internationally, ensuring total
                satisfaction of stakeholders worldwide.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To produce quality and compassionate medical practitioners imbued with social
                conscience and dedication to the service of God and humanity.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Doctor of Medicine</div>
            <p className="mt-2 text-sm text-slate-600">
              Comprehensive medical education with strong clinical exposure and research focus.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="topnotchers" title="Topnotchers" icon="news">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 gap-2 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <div>Year</div>
              <div>Name</div>
              <div>Place</div>
            </div>
            <div className="divide-y divide-slate-100">
              {topnotchers.map((item) => (
                <div
                  key={`${item.year}-${item.name}`}
                  className="grid grid-cols-3 gap-2 px-6 py-3 text-sm text-slate-600"
                >
                  <div className="font-semibold text-slate-900">{item.year}</div>
                  <div>{item.name}</div>
                  <div>{item.place}</div>
                </div>
              ))}
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="admissions" title="Admissions" icon="clipboard">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Minimum Requirements</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {minimumRequirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Application Requirements
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {applicationRequirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                International Students
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {internationalRequirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                On-site Submission
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Bring these documents on the date of psychometric testing along with originals
                of previously submitted documents.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {onsiteRequirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Application Form
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Application for Admissions (AUF-Form-SOM-01). Upload link placeholder.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="calendar" title="Academic Calendar" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Academic Calendar
            </div>
            <p className="mt-2 text-sm text-slate-600">
              School of Medicine schedules are published by the Office of the Dean.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="faculty" title="Faculty & Staff" icon="mail">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Leadership
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <div className="font-semibold">Dr. Rodolfo C. Dimayuga</div>
                <div className="text-xs text-slate-500">Founding Dean</div>
              </div>
              <div>
                <div className="font-semibold">Dr. Presentacion C. Peralta</div>
                <div className="text-xs text-slate-500">Assistant Dean / School Secretary</div>
              </div>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="organizations" title="Student Organizations" icon="book">
          <div className="grid gap-6 lg:grid-cols-2">
            {studentOrganizations.map((org) => (
              <div
                key={org.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{org.name}</div>
                <p className="mt-2 text-sm text-slate-600">{org.description}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="news" title="News & Blogs" icon="news">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
              No published posts yet.
            </div>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => {
                const href = p.originCollegeId
                  ? `/c/${p.originCollegeId}/posts/${p.slug}`
                  : `/posts/${p.slug}`;
                return (
                  <li
                    key={p.id}
                    className="rounded-2xl border border-neutral-200 bg-white p-4"
                  >
                    <div className="text-xs uppercase tracking-wide text-neutral-500">
                      {collegeLabel(p.originCollegeId)} · {p.type}
                    </div>
                    <Link
                      href={href}
                      className="mt-1 block text-base font-semibold text-neutral-900 hover:underline"
                    >
                      {p.title}
                    </Link>
                    {p.excerpt ? (
                      <p className="mt-1 line-clamp-3 text-sm text-neutral-600">
                        {p.excerpt}
                      </p>
                    ) : null}
                    <div className="mt-3 text-xs text-neutral-500">
                      {p.publishedAt ? formatDate(p.publishedAt) : ""} · {p.author.name}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="phone">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUF School of Medicine
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {college.contact.email ? <div>{college.contact.email}</div> : null}
              {college.contact.phone ? <div>{college.contact.phone}</div> : null}
              {college.contact.address ? <div>{college.contact.address}</div> : null}
            </div>
          </div>
        </CollegeSection>
      </div>

      <Footer />
    </>
  );
}
