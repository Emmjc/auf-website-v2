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

const lawTimeline = [
  {
    year: "Aug 19, 2003",
    text: "Board of Trustees approved the establishment of AUF School of Law, followed by three years of preparation and the construction of the Professional Schools Building.",
  },
  {
    year: "Mar 13, 2006",
    text: "CHED granted the permit to operate the School of Law upon the recommendation of the Technical Panel for Legal Education.",
  },
  {
    year: "2012–2014",
    text: "Received Legal Education Board recognition for notable bar performance; top-performing law school among those with 19 or fewer examinees.",
  },
  {
    year: "Today",
    text: "Consistently among the Top 10 law schools nationwide and No. 1 in Northern and Central Luzon.",
  },
];

const admissionRequirements = [
  "Four-year bachelor’s degree with at least 18 units in English, 6 units in Math, and 18 units in Social Science (deficiencies up to 9 units may be completed in the first year).",
  "General weighted average of at least 85% (subject to probationary admission conditions).",
  "Pass the AUF Law Admissions Test (includes two essays).",
  "Pass the evaluation interview before the Admissions Committee.",
  "Probationary admission possible for applicants below 85% with satisfactory essays and character reference; conversion to regular after first semester with at least 78% and no failures/incomplete grades.",
  "Transfer credits may be considered on a case-to-case basis by the Dean and Admissions Committee.",
];

const goals = [
  "Prepare students for the practice of law.",
  "Produce competent, committed legal professionals with sound social conscience.",
  "Train students for national leadership.",
  "Advance the country’s legal and judicial systems amid national and international developments.",
];

const foundingFaculty = [
  "Justice Ernesto D. Acosta",
  "Presiding Judge Ed Vincent S. Albano",
  "Prof. Joseph Emmanuel L. Angeles",
  "Prof. Marianne Elizabeth B. Angeles",
  "Justice Hilarion L. Aquino",
  "Fr. Ranhilio C. Aquino",
  "Prof. Timoteo B. Aquino",
  "Justice Alfredo F. Benipayo",
  "Judge Irin Zenaida S. Buan",
  "Dean Sedfrey M. Candelaria",
  "Prof. Noel T. Canlas",
  "Prof. Tristan A. Catindig",
  "Prof. Arnold F. De Vera",
  "Prof. Gwen Grecia De Vera",
  "Justice Japar B. Dimaampao",
  "Prof. Monalisa C. Dimalanta",
  "Prof. Domingo P. Disini, Jr.",
  "Justice Alicia Simpio-Diy",
  "Prof. Charles Escolin",
  "Prof. Ramon S. Esguerra",
  "Judge Katrina Nora B. Factora",
  "Justice Hugo E. Gutierrez, Jr.",
  "Justice Oscar M. Hererra",
  "Judge Ramon. Paul. L. Hernando",
  "Justice Hector L. Hofileña",
  "Prof. Teodoro Jumamil",
  "Prof. Ma. Tanya Karina A. Lat",
  "Prof. Francis Ed Lim",
  "Justice Regalado E. Maambong",
  "Dean Merlin M. Magallona",
  "Prof. Vicente V. Mamalateo",
  "Judge Sixto C. Marella, Jr.",
  "Justice Vicente V. Mendoza",
  "Prof. Alberto T. Muyot",
  "Hon. Antonio Eduardo B. Nachura",
  "Dean Domingo M. Navarro",
  "Justice Rodolfo G. Palattao",
  "Prof. Elizabeth A. Pangalangan",
  "Dean Raul C. Pangalangan",
  "Justice Diosdado M. Peralta",
  "Judge Eduardo B. Peralta",
  "Usec. Ernesto Pineda",
  "Presiding Justice Ruben T. Reyes",
  "Justice Jose L. Sabio, Jr.",
  "Sen. Renato Saguisag",
  "Justice Edilberto G. Sandoval",
  "Dean Jose R. Sundiang",
  "Prof. Alfredo F. Tadiar",
  "Justice Noel G. Tijan",
  "Prof. Mario E. Valderrama",
  "Dean Cesar Villanueva",
  "Prof. Edgardo Carlo L. Vistan II",
];

export default async function SchoolOfLawPage() {
  const college = getCollegeBySlug("law");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "overview", label: "Overview", icon: "book" },
    { id: "history", label: "History", icon: "scroll" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "admissions", label: "Admissions", icon: "clipboard" },
    { id: "calendar", label: "Calendar", icon: "calendar" },
    { id: "faculty", label: "Faculty", icon: "mail" },
    { id: "news", label: "News", icon: "news" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/sol-logo.png"
        badges={["Top 10 nationwide", "No. 1 in N & Central Luzon", "LEB recognized"]}
      />

      <CollegeSubnav items={navItems} brandColor={college.brandColor} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CollegeSection
          id="overview"
          title="School of Law Overview"
          subtitle="Christ-centered legal education with national impact."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Why AUF Law
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The AUF School of Law is built for rigorous, ethical, and practice-ready legal
                education in Central Luzon, supported by jurists, distinguished faculty, and
                modern facilities including a law library and moot court.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Goals
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {goals.map((item) => (
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
          <CollegeTimeline items={lawTimeline} accentColor={college.accentColor} />
        </CollegeSection>

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The AUF School of Law envisions to emerge as the center of excellence in legal
                education north of Metro Manila.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Accessible to students in the Central Luzon area.</li>
                <li>Committed to the highest standards of professional conduct.</li>
                <li>Responsive to technology, globalization, and socio-economic conditions.</li>
              </ul>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Juris Doctor</div>
            <p className="mt-2 text-sm text-slate-600">
              Professional legal education preparing students for bar examination and practice.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="admissions" title="Admissions" icon="clipboard">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Admission Requirements</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {admissionRequirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Admissions Test Schedule
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Applicants are given a test schedule upon compliance with all documentary
                requirements.
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <div className="font-semibold text-slate-800">Graduate Application Procedure</div>
                <p className="mt-2">
                  Details on the admissions process are published on the AUF website.
                </p>
                <Link
                  href="/admissions/application-guide"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  View Admissions Details
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                LEB Memorandum Order
              </div>
              <div className="mt-3 text-sm text-slate-600">
                Embed file placeholder.
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Downloadable Forms
              </div>
              <div className="mt-3 text-sm text-slate-600">
                Recommendation Form (hi-res version).
              </div>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="calendar" title="Academic Calendar" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Academic Calendar
            </div>
            <p className="mt-2 text-sm text-slate-600">
              School of Law schedules are published by the Office of the Dean.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="faculty" title="Faculty & Staff" icon="mail">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Leadership
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div>
                  <div className="font-semibold">Justice Jose C. Vitug</div>
                  <div className="text-xs text-slate-500">Founding Dean</div>
                </div>
                <div>
                  <div className="font-semibold">Atty. Marianne Elizabeth B. Angeles</div>
                  <div className="text-xs text-slate-500">Vice Dean</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Founding Faculty
              </div>
              <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {foundingFaculty.map((name) => (
                  <div key={name}>{name}</div>
                ))}
              </div>
            </div>
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
              Contact AUF School of Law
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
