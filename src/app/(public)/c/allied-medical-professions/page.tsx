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

const strategicGoals = [
  "Instill Christian virtues and moral values in healthcare delivery.",
  "Provide high-quality clinical knowledge and technical skills.",
  "Foster empathy, professional ethics, and lifelong research-driven growth.",
];

const programs = [
  {
    title: "BS Medical Technology",
    focus: "Clinical diagnostics, laboratory management, and biosafety.",
  },
  {
    title: "BS Occupational Therapy",
    focus: "Holistic intervention, community mobilization, and functional independence.",
  },
  {
    title: "BS Pharmacy",
    focus: "Pharmaceutical care, drug development, and medication management.",
  },
  {
    title: "BS Clinical Pharmacy",
    focus: "Advanced patient-centered therapeutic care and medication optimization.",
  },
  {
    title: "BS Radiologic Technology",
    focus: "Medical imaging energy (X-ray, MRI, sound) and radiation safety.",
  },
  {
    title: "BS Physical Therapy",
    focus: "Movement science, rehabilitation, and clinical administration.",
  },
];

const studentOrganizations = [
  {
    name: "JPPhA",
    description: "Shaping future leaders in pharmaceutical advancement.",
  },
  {
    name: "PTSS",
    description: "Fostering unity and clinical excellence in Physical Therapy.",
  },
  {
    name: "SFMT",
    description: "Cultivating social responsibility in Medical Technology students.",
  },
  {
    name: "COTSA",
    description: "Driving community involvement in Occupational Therapy.",
  },
  {
    name: "ARTS",
    description: "Upholding welfare and service in Radiologic Technology.",
  },
  {
    name: "Achievers Guild",
    description: "Promoting academic excellence and college-wide projects.",
  },
  {
    name: "AlliMEd Explorer",
    description: "The official media voice for CAMP journalism.",
  },
];

const studentLife = [
  {
    title: "Community Engagement",
    detail: "Development services and waste management programs.",
  },
  {
    title: "Competitions",
    detail: "Quiz bees, intramurals, and science camps.",
  },
  {
    title: "Personal Growth",
    detail: "Leadership training, youth camps, and Family Day.",
  },
  {
    title: "Academic Support",
    detail: "JEP (English Proficiency) and DEAR (Reading) campaigns.",
  },
];

const facilities = [
  {
    title: "PT & OT Labs",
    detail:
      "Hydrotherapy units, electrotherapy devices, and sensory integration kits for pediatric and adult dysfunction.",
  },
  {
    title: "Medical Technology Lab",
    detail:
      "Clinical Chemistry, Hematology, and Histology sections with modern biosafety cabinets.",
  },
  {
    title: "Pharmacy Labs",
    detail:
      "Pharmaceutical Chemistry, Quality Control, and Research areas with a Botanical Garden and simulated pharmacy.",
  },
  {
    title: "Rehab Tools",
    detail:
      "Specialized evaluation kits (Jamar, Minnesota) and independent living simulation tools.",
  },
];

const affiliations = ["ACAPS", "APPEAR III", "PRISSAA", "PAPSPAP"];

export default async function AlliedMedicalProfessionsPage() {
  const college = getCollegeBySlug("allied-medical-professions");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "student-life", label: "Student Life", icon: "calendar" },
    { id: "facilities", label: "Facilities", icon: "clipboard" },
    { id: "affiliations", label: "Affiliations", icon: "news" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/camp-logo.png"
        badges={["Healthcare excellence", "Research-driven", "Industry-ready"]}
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
          </div>
        </CollegeSection>
        <CollegeSection
          id="overview"
          title="CAMP Overview"
          subtitle="Health promotion, functional optimization, and clinical readiness."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Allied Medical Professions
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                CAMP develops healthcare professionals for local and global service through
                rigorous clinical training, research, and community engagement.
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
                To lead in health promotion and functional optimization through scientific
                excellence.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To develop competent, compassionate healthcare professionals for local and
                global service.
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

        <CollegeSection id="student-life" title="Student Life & Activities" icon="calendar">
          <div className="grid gap-6 lg:grid-cols-2">
            {studentLife.map((item) => (
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

        <CollegeSection id="facilities" title="World-Class Facilities" icon="clipboard">
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

        <CollegeSection id="affiliations" title="Affiliations" icon="news">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Regional and National Partners
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {affiliations.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="phone">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUF CAMP
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Ready to start your healthcare journey? Reach out to us today.
            </p>
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
