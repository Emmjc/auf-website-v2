import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeBySlug, collegeLabel } from "@/data/colleges";
import { listPublishedPostsForCollege } from "@/server/services/posts";
import { formatDate } from "@/lib/utils";
import CollegeHero from "@/components/public/college/CollegeHero";
import CollegeSection from "@/components/public/college/CollegeSection";
import CollegeSubnav from "@/components/public/college/CollegeSubnav";
import Footer from "@/components/public/Footer";
import type { CollegeNavIcon } from "@/components/public/college/CollegeSubnav";

const historyHighlights = [
  {
    year: "1979–1984",
    text: "BS Criminology launched under CAS (1979); College of Criminology established in 1982 with Prof. Jose B. Maniwang as founding dean and recognized by DECS in 1984.",
  },
  {
    year: "1990–Today",
    text: "More than a thousand graduates; eight board topnotchers; alumni in law enforcement, investigation, forensics, and security roles in the Philippines and abroad.",
  },
  {
    year: "Recent Years",
    text: "Only PAASCU Level 3 Reaccredited Criminology program and Center of Excellence in Central Luzon; strong licensure performance with passing rates above the national average.",
  },
];

const goals = [
  "Provide opportunity, instruction, and experience for core criminology and public safety practice.",
  "Prepare students for police, jail, fire, investigation, and other public safety careers.",
  "Equip students with cultural grounding, constitutional guarantees, and due process understanding.",
  "Foster citizenry, leadership, and moral and legal responsibility.",
  "Instill the value of service to God and humanity.",
  "Promote research and inquiry in justice education.",
  "Prepare students for a career in law.",
];

const accreditations = [
  {
    title: "FAAP / PAASCU",
    detail:
      "Level III Re-Accredited status under CHED Memorandum Order No. 1 Series of 2005.",
  },
  {
    title: "ISO Certification",
    detail:
      "Compliance with Educational Organization Management Systems and Quality Management Systems.",
  },
];

const affiliations = [
  {
    title: "Commission on Human Rights",
    detail:
      "Center for Human Rights Education and a continuing commitment to human rights education, advocacy, and community engagement.",
  },
  {
    title: "Partner Agencies",
    detail:
      "Memorandums of Agreement with PNP-AVSEU3, BFP, BJMP, PDEA, CHR, and PPA for training, research, and professional development.",
  },
];

const studentOrganizations = [
  {
    name: "College Student Council (CSC)",
    description:
      "Mandated organization representing criminology students in university and college activities and supporting non-mandated groups.",
  },
  {
    name: "Junior Law Enforcers Association (JLEA)",
    description:
      "Largest non-mandated organization fostering leadership, unity, and alignment with CCJE's mission and vision.",
  },
  {
    name: "CrimWatch",
    description:
      "Promotes student leadership and academic excellence through writing and the official college periodical.",
  },
  {
    name: "Criminology Society",
    description:
      "Honor organization promoting academic excellence and participation in competitions.",
  },
];

const topnotchers = [
  { year: "Dec 2017", name: "Vince Reginald O. Pangilinan", place: "4th" },
  { year: "Oct 2012", name: "PMAJ Resty S. Astrero", place: "3rd" },
  { year: "Sep 2002", name: "Ms. Shirley V. Sarmiento", place: "3rd" },
  { year: "Sep 2001", name: "PMAJ Dickson G. Tolentino", place: "5th" },
  { year: "Mar 1998", name: "Mr. Dennis G. Hipolito", place: "2nd" },
  { year: "Nov 1992", name: "Mr. Felix A. Verbo, Jr.", place: "5th" },
  { year: "Nov 1991", name: "Mr. Arnaldo C. Nunag", place: "11th" },
  { year: "Nov 1990", name: "Mr. Wilfredo M. Lagman", place: "8th" },
  {
    year: "Nov 1990",
    name: "PCOL Eduardo G. Tuazon, Jr. (Ret.)",
    place: "12th",
  },
];

const performance = [
  {
    exam: "June 2019",
    firstTimers: "3 takers, 100.00%",
    repeaters: "6 takers, 33.33%",
    overall: "9 takers, 55.56%",
    national: "38.47% (+17.09%)",
  },
  {
    exam: "November 2019",
    firstTimers: "22 takers, 100.00%",
    repeaters: "6 takers, 33.33%",
    overall: "26 takers, 85.71%",
    national: "44.11% (+41.60%)",
  },
  {
    exam: "December 2021",
    firstTimers: "17 takers, 82.35%",
    repeaters: "4 takers, 25.00%",
    overall: "21 takers, 71.43%",
    national: "34.19% (+36.24%)",
  },
  {
    exam: "June 2022",
    firstTimers: "2 takers, 100.00%",
    repeaters: "3 takers, 33.33%",
    overall: "5 takers, 60.00%",
    national: "30.39% (+29.61%)",
  },
  {
    exam: "December 2022",
    firstTimers: "22 takers, 95.45%",
    repeaters: "0 takers, 0.00%",
    overall: "22 takers, 95.45%",
    national: "33.18% (+62.27%)",
  },
  {
    exam: "April 2023",
    firstTimers: "5 takers, 100.00%",
    repeaters: "1 taker, 0.00%",
    overall: "6 takers, 83.33%",
    national: "31.84% (+51.49%)",
  },
  {
    exam: "February 2024",
    firstTimers: "34 takers, 94.12%",
    repeaters: "0 takers, 0.00%",
    overall: "34 takers, 94.12%",
    national: "48.27% (+45.85%)",
  },
  {
    exam: "February 2025",
    firstTimers: "32 takers, 87.50%",
    repeaters: "0 takers, 0.00%",
    overall: "32 takers, 87.50%",
    national: "60.52% (+26.98%)",
  },
  {
    exam: "August 2025",
    firstTimers: "0 takers, 0.00%",
    repeaters: "2 takers, 50.00%",
    overall: "2 takers, 50.00%",
    national: "51.47% (-1.47%)",
  },
  {
    exam: "February 2026",
    firstTimers: "31 takers, 83.87%",
    repeaters: "0 takers, 0.00%",
    overall: "32 takers, 81.25%",
    national: "60.52% (+20.73%)",
  },
];

export default async function CollegeOfCriminalJusticeEducationPage() {
  const college = getCollegeBySlug("criminal-justice");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "overview", label: "Overview", icon: "book" },
    { id: "history", label: "History", icon: "scroll" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "accreditation", label: "Accreditation", icon: "clipboard" },
    { id: "affiliations", label: "Affiliations", icon: "news" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "topnotchers", label: "Topnotchers", icon: "news" },
    { id: "performance", label: "Performance", icon: "calendar" },
    { id: "facilities", label: "Facilities", icon: "calendar" },
    { id: "news", label: "News", icon: "news" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/ccje-logo.png"
        badges={["Center of Excellence", "PAASCU Level III", "Top performing"]}
      />

      <CollegeSubnav items={navItems} brandColor={college.brandColor} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CollegeSection
          id="overview"
          title="CCJE Overview"
          subtitle="Justice education with strong licensure performance."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Criminal Justice Education
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                AUF's BS Criminology program is the only PAASCU Level 3 Reaccredited program
                and Center of Excellence in Central Luzon, consistently exceeding national
                licensure passing rates.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College Goals
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

        <CollegeSection id="history" title="History" icon="scroll">
          <div className="grid gap-6 lg:grid-cols-3">
            {historyHighlights.map((item) => (
              <div
                key={item.year}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{item.year}</div>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To produce graduates who are vanguards of justice, peace, and order, and to
                emerge as the center for excellence in criminal justice education, research,
                and community service in the country.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To develop professionally competent and morally upright graduates who deliver
                efficient public safety services and help facilitate the administration of
                justice.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">BS Criminology</div>
            <p className="mt-2 text-sm text-slate-600">
              Professional preparation in criminology, law enforcement administration,
              correctional administration, and safety and security management.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="accreditation" title="Accreditation" icon="clipboard">
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

        <CollegeSection id="affiliations" title="Affiliations" icon="news">
          <div className="grid gap-6 lg:grid-cols-2">
            {affiliations.map((item) => (
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

        <CollegeSection id="topnotchers" title="Topnotchers" icon="news">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 gap-2 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <div>Date</div>
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

        <CollegeSection id="performance" title="Licensure Performance" icon="calendar">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1.1fr,1fr,1fr,1fr,1fr] gap-2 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <div>Exam</div>
              <div>First Timers</div>
              <div>Repeaters</div>
              <div>Overall</div>
              <div>National</div>
            </div>
            <div className="divide-y divide-slate-100">
              {performance.map((item) => (
                <div
                  key={item.exam}
                  className="grid grid-cols-[1.1fr,1fr,1fr,1fr,1fr] gap-2 px-6 py-3 text-sm text-slate-600"
                >
                  <div className="font-semibold text-slate-900">{item.exam}</div>
                  <div>{item.firstTimers}</div>
                  <div>{item.repeaters}</div>
                  <div>{item.overall}</div>
                  <div>{item.national}</div>
                </div>
              ))}
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="facilities" title="Facilities" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Forensic Laboratory</div>
            <p className="mt-2 text-sm text-slate-600">
              Academic programs are supported by laboratories equipped with modalities and
              equipment to meet student needs.
            </p>
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
              Contact AUF CCJE
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div>Tel. No. (6345) 625-2888 loc. 1906 1907</div>
              <div>Fax Nos. (6345) 888-6000 or (632) 888-5000</div>
              <div>E-mail Address: ccje@auf.edu.ph</div>
              <div>URL: www.auf.edu.ph</div>
              {college.contact.address ? <div>{college.contact.address}</div> : null}
            </div>
          </div>
        </CollegeSection>
      </div>

      <Footer />
    </>
  );
}
