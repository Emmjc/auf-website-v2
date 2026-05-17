import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeById, getCollegeBySlug, collegeLabel } from "@/data/colleges";
import { listPublishedPostsForCollege } from "@/server/services/posts";
import { formatDate } from "@/lib/utils";
import CollegeHero from "@/components/public/college/CollegeHero";
import CollegeSection from "@/components/public/college/CollegeSection";
import CollegeSubnav from "@/components/public/college/CollegeSubnav";
import Footer from "@/components/public/Footer";
import type { CollegeNavIcon } from "@/components/public/college/CollegeSubnav";

const strategicGoals = [
  "Develop analytical, critical thinking, and research-driven administrative skills.",
  "Cultivate ethical standards and high-level professionalism across all business sectors.",
  "Train community-centric leaders for private enterprise and public governance.",
];

const programs = [
  {
    title: "BS Accountancy",
    focus:
      "Rigorous 4-year track aligned with PQF/AQF Level 6 for CPA board readiness, auditing, and financial strategy.",
  },
  {
    title: "BS Management Accounting",
    focus:
      "Strategic planning, performance evaluation, corporate finance, and global management certifications.",
  },
  {
    title: "BSBA Marketing Management",
    focus: "Digital marketing, advertising, consumer analytics, and strategic brand execution.",
  },
  {
    title: "BSBA Management & Entrepreneurship",
    focus: "End-to-end enterprise operations, business pitching, and hands-on startup creation.",
  },
  {
    title: "BSBA Legal Management",
    focus:
      "Intersection of corporate operations and law (contracts, compliance, labor law). Ideal pre-law pathway.",
  },
  {
    title: "BS Hospitality Management",
    focus:
      "Hotel operations, culinary arts, and beverage management paired with hands-on internships.",
  },
  {
    title: "BS Tourism Management",
    focus:
      "Travel services, tour operations, airline ticketing, and corporate event planning.",
  },
];

const accreditations = [
  {
    title: "WURI Ranked",
    detail:
      "Ranked 57th globally in the World University Rankings for Innovation (2024).",
  },
  {
    title: "CHED Autonomous Status",
    detail:
      "Granted autonomous status by the Commission on Higher Education since 2003.",
  },
  {
    title: "PAASCU Level 3",
    detail:
      "Re-accredited status across Accountancy, Business Administration, Hospitality, and Tourism programs.",
  },
  {
    title: "ISO 9001:2015",
    detail: "Certified quality management system by TUV-SUD.",
  },
];

const studentOrganizations = [
  {
    name: "CSC",
    description: "College Student Council, the apex governing student body.",
  },
  {
    name: "AUF-JPIA",
    description: "Premier hub for Accountancy students; affiliated with NF-JPIA.",
  },
  {
    name: "AUF-JMA",
    description: "Marketing projects, competitions, and corporate networking.",
  },
  {
    name: "AUF-YES",
    description: "Student-led startups, business pitching, and entrepreneurship.",
  },
  {
    name: "ALMAS",
    description: "Legal Management society focusing on debate, compliance, and legal aid outreach.",
  },
  {
    name: "CHMS & LTSP",
    description: "Industry-grade simulations, catering events, and tourism campaigns.",
  },
  {
    name: "Trade Wings",
    description: "Official student press and media publication of CBA.",
  },
  {
    name: "HONSOC",
    description: "Honor society providing peer tutoring and academic competition training.",
  },
];

const facilities = [
  {
    title: "Mock Travel Facility",
    detail:
      "Tourism simulation lab for flight distribution, booking platforms, and itinerary management.",
  },
  {
    title: "AUF Residence",
    detail:
      "Fully functioning training hotel for front-office operations and premium housekeeping management.",
  },
  {
    title: "The Bar & Beverage Counter",
    detail: "Industry-standard mixology and bar operations setup.",
  },
  {
    title: "HM Kitchen Laboratory",
    detail:
      "Commercial-grade culinary facility with hot and cold kitchens, quantity food production, and cold storage.",
  },
];

const topnotchers = [
  { year: "2022", name: "Anthony Marc S. Alfonso", place: "Rank 9" },
  { year: "2016", name: "John Michael P. Miclat", place: "Rank 9" },
  { year: "1998", name: "Jean P. Masbang", place: "Rank 9" },
];

const alumniHighlights = [
  {
    name: "Mark T. Lapid",
    year: "2000",
    role: "COO, Tourism Infrastructure and Enterprise Zone Authority (TIEZA); Former Governor of Pampanga",
  },
  {
    name: "Leo Nino Canlas",
    year: "2008",
    role: "Senior Manager, SGV & Company (Ernst & Young)",
  },
  {
    name: "Maria Sigrid G. Lleva",
    year: "2004",
    role: "Customer Services Manager, Jet Aviation (Massachusetts, USA)",
  },
  {
    name: "Giebeth Ellaine T. Laxamana",
    year: "2009",
    role: "Managing Director, Altamana Real Estate (Dubai, UAE)",
  },
];

const programDirectory = [
  {
    program: "Accountancy & Management Accounting",
    email: "medina.erwin@auf.edu.ph",
  },
  {
    program: "Marketing Management",
    email: "lazatin.wilhelmina@auf.edu.ph",
  },
  {
    program: "Management & Entrepreneurship",
    email: "tayag.maryrose@auf.edu.ph",
  },
  {
    program: "Legal Management",
    email: "yanga.joannabie@auf.edu.ph",
  },
  {
    program: "Hospitality Management",
    email: "jimeno.jinkee@auf.edu.ph",
  },
  {
    program: "Tourism Management",
    email: "gamboa.joella@auf.edu.ph",
  },
];

export default async function CollegeOfBusinessAndAccountancyPage() {
  const college = getCollegeBySlug("business-accountancy");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "accreditation", label: "Accreditations", icon: "clipboard" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "facilities", label: "Facilities", icon: "calendar" },
    { id: "topnotchers", label: "Topnotchers", icon: "news" },
    { id: "alumni", label: "Alumni", icon: "scroll" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/cba-logo.png"
        badges={["CHED autonomous", "PAASCU Level III", "Industry-ready"]}
      />

      <CollegeSubnav items={navItems} brandColor={college.brandColor} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CollegeSection id="news" title="News & Blogs" icon="news">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            {posts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
                No published posts yet.
              </div>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => {
                  const originCollege = p.originCollegeId
                    ? getCollegeById(p.originCollegeId)
                    : null;
                  const href = p.originCollegeId
                    ? `/c/${originCollege?.slug ?? p.originCollegeId}/posts/${p.slug}`
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
          </div>
        </CollegeSection>
        <CollegeSection
          id="overview"
          title="CBA Overview"
          subtitle="Industry-responsive curricula and leadership development."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Business and Accountancy
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                All Business Administration, Hospitality, and Tourism programs feature
                accelerated 3-year curricula, while Accountancy is completed in 4 years.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Strategic Goals
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {strategicGoals.map((item) => (
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

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The premier human resource hub producing globally competitive business
                professionals imbued with integrity and social responsibility.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Dedicated to providing industry-responsive instruction, specialized corporate
                training, and rigorous professional development.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{program.title}</div>
                <p className="mt-2 text-sm text-slate-600">{program.focus}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection
          id="accreditation"
          title="Global Accreditations & Credentials"
          icon="clipboard"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {accreditations.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
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

        <CollegeSection id="facilities" title="Premium Training Facilities" icon="calendar">
          <div className="grid gap-6 lg:grid-cols-2">
            {facilities.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="topnotchers" title="CPA Topnotchers" icon="news">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 gap-2 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <div>Year</div>
              <div>Name</div>
              <div>Rank</div>
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

        <CollegeSection id="alumni" title="Featured Global Professionals" icon="scroll">
          <div className="grid gap-6 lg:grid-cols-2">
            {alumniHighlights.map((alumnus) => (
              <div
                key={`${alumnus.name}-${alumnus.year}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {alumnus.name} ({alumnus.year})
                </div>
                <p className="mt-2 text-sm text-slate-600">{alumnus.role}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="phone">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUF CBA
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div>Trunkline: +63 45-625-2888</div>
              <div>CBA Office: Loc. 1776 | Dean's Office: Loc. 1772</div>
              <div>Program Chairs: Loc. 1773 | Faculty Room: Loc. 1774</div>
              <div>General Inquiry Email: cba@auf.edu.ph</div>
              {college.contact.address ? <div>{college.contact.address}</div> : null}
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              <div className="font-semibold text-slate-800">Program-Specific Directory</div>
              <ul className="mt-2 space-y-2">
                {programDirectory.map((item) => (
                  <li key={item.program} className="flex flex-wrap gap-2">
                    <span className="font-semibold text-slate-700">{item.program}:</span>
                    <span>{item.email}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollegeSection>
      </div>

      <Footer />
    </>
  );
}
