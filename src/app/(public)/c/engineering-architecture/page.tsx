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

const goals = [
  "Develop competent, productive, and self-reliant engineers and architects with sound moral values.",
  "Conduct and encourage relevant and innovative research in engineering, architecture, and technology.",
  "Provide extension services contributing to community development through technical assistance.",
  "Promote mutually beneficial linkages with professional organizations, institutions, and industry.",
  "Generate goodwill and support of alumni and the community through active involvement.",
];

const programs = [
  "BS Architecture",
  "BS Civil Engineering",
  "BS Computer Engineering",
  "BS Electronics Engineering",
];

const affiliationsLocal = [
  "Philippine Computer Society",
  "Philippine Institute of Civil Engineers",
  "Institute of Electronics and Communications Engineering of the Philippines",
  "Association of Civil Engineering Educators of the Philippines",
  "Department of Science and Technology",
  "Philippine Association of Technology Educators",
  "National Research Council of the Philippines",
  "Philippine Association of Tertiary Level Educational Institutions in Environmental Protection and Management",
  "Philippine Council for Industry and Energy Research and Development",
];

const affiliationsInternational = [
  "Griffith University - Australia",
  "Asian Institute of Technology - Thailand",
  "Prince of Songkhla University - Thailand",
];

const institutionalLearningOutcomes = [
  {
    title: "Values-Oriented",
    items: [
      "Embrace Christ's way of life through moral living and social accountability.",
      "Adhere to truth and Catholic values amidst conflicting value systems.",
      "Practice fairness, honesty, and integrity in all aspects of life.",
      "Demonstrate maturity and courage rooted in Catholic values in the face of adversity.",
    ],
  },
  {
    title: "Socially and Ethically Responsible",
    items: [
      "Engage in advocacies of life, cultural heritage, and the environment.",
      "Demonstrate concern through active involvement in socio-civic activities.",
      "Promote and practice inclusion across cultures and contexts.",
      "Apply knowledge and skills in addressing social issues and concerns.",
    ],
  },
  {
    title: "Professionally Competent",
    items: [
      "Demonstrate expertise in their field of specialization.",
      "Communicate effectively in oral and written forms through various media.",
      "Collaborate effectively with colleagues and institutions.",
      "Pass examinations administered by government and professional organizations.",
    ],
  },
  {
    title: "Critical and Creative Thinker",
    items: [
      "Analyze and evaluate arguments and evidence through research and data analysis.",
      "Apply innovative methods in solving problems.",
      "Generate ideas, products, and approaches appropriate to the discipline.",
      "Use research methodologies and interpret findings.",
    ],
  },
  {
    title: "Lifelong Learner",
    items: [
      "Practice further learning and professional development.",
      "Adapt to the demands of the profession.",
      "Seek growth in moral, spiritual, socio-civic, and physical aspects of life.",
      "Participate in collaborative learning while respecting diversity and dignity.",
    ],
  },
  {
    title: "Globally-Oriented",
    items: [
      "Maintain global and international perspectives on their disciplines.",
      "Collaborate with people from different cultures.",
      "Interact effectively in culturally or linguistically diverse contexts.",
      "Respect other perspectives while adhering to beliefs and values.",
    ],
  },
];

const topnotchers = [] as { year: string; name: string; place: string }[];

export default async function CollegeOfEngineeringAndArchitecturePage() {
  const college = getCollegeBySlug("engineering-architecture");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "accreditation", label: "Accreditation", icon: "clipboard" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "affiliations", label: "Affiliations", icon: "news" },
    { id: "obe", label: "Outcome-Based", icon: "scroll" },
    { id: "topnotchers", label: "Topnotchers", icon: "news" },
    { id: "facilities", label: "Facilities", icon: "calendar" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/cea-logo.png"
        badges={["Outcome-based", "Industry linkages", "Research-driven"]}
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
          title="CEA Overview"
          subtitle="Engineering and architecture for sustainable systems."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Engineering and Architecture
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The College prepares responsive and responsible engineers and architects who
                lead in sustainable, environment-friendly structures and systems.
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

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To produce the country's builders of environment-friendly structures and
                systems.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To develop responsive and responsible engineers and architects who become
                leaders and citizens of the 21st century.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{program}</div>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="accreditation" title="Accreditation" icon="clipboard">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              Accreditation details for CEA programs are published by the College and its
              partner accrediting agencies.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="organizations" title="Student Organizations" icon="book">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Student organization details coming soon.</p>
          </div>
        </CollegeSection>

        <CollegeSection id="affiliations" title="Affiliations" icon="news">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Local
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {affiliationsLocal.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                International
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {affiliationsInternational.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="obe" title="Outcome-Based Education" icon="scroll">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              The College anchors program learning outcomes on the university's vision and
              mission. Course planning, assessment, and curriculum development are aligned to
              program and institutional outcomes to drive continuous improvement.
            </p>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {institutionalLearningOutcomes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.items.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Program Educational Objectives</div>
            <p className="mt-2 text-sm text-slate-600">
              Broad statements describing what graduates achieve three to five years after
              graduation, based on program constituencies.
            </p>
            <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              {programs.map((program) => (
                <div key={program}>{program}</div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Program Outcomes</div>
            <p className="mt-2 text-sm text-slate-600">
              Program-specific outcomes describe essential learning achieved by graduation.
            </p>
            <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              {programs.map((program) => (
                <div key={program}>{program}</div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Course Outcomes</div>
            <p className="mt-2 text-sm text-slate-600">
              Course outcomes define measurable knowledge and skills for each course and guide
              learning activities and assessment.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="topnotchers" title="Topnotchers" icon="news">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Topnotcher details coming soon.</p>
          </div>
        </CollegeSection>

        <CollegeSection id="facilities" title="Facilities" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Facilities information coming soon.</p>
          </div>
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="phone">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUF CEA
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
