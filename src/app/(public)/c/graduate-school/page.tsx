import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeById, getCollegeBySlug, collegeLabel } from "@/data/colleges";
import { listPublishedPostsForCollege } from "@/server/services/posts";
import { formatDate } from "@/lib/utils";
import CollegeHero from "@/components/public/college/CollegeHero";
import CollegeSection from "@/components/public/college/CollegeSection";
import CollegeTimeline from "@/components/public/college/CollegeTimeline";
import CollegeSubnav from "@/components/public/college/CollegeSubnav";
import Footer from "@/components/public/Footer";
import type { CollegeNavIcon } from "@/components/public/college/CollegeSubnav";

const graduateTimeline = [
  {
    year: "1966–1967",
    text: "Graduate School organized with 15 enrollees in the MA in Education program; Dr. Cristian Alcantara appointed first dean.",
  },
  {
    year: "1975–1976",
    text: "Ph.D. in Educational Management and MS Mathematics added to the program offerings.",
  },
  {
    year: "1983–1984",
    text: "Trimester scheme adopted, attracting working professionals across disciplines.",
  },
  {
    year: "2015–2019",
    text: "PAASCU initial accreditation (2015) and five-year re-accreditation (2019) for MAEd and MBA.",
  },
  {
    year: "2021–2022",
    text: "Curricula revised to meet global standards and CHED policy updates.",
  },
];

const graduatePrograms = [
  {
    title: "Education Programs",
    items: [
      "Doctor of Philosophy in Curriculum and Instruction (English Language Teaching)",
      "Doctor of Philosophy in Education (Educational Management)",
      "Master of Arts in Education (Educational Management)",
      "Master of Arts in Education (English)",
      "Master of Arts in Education (General Science)",
      "Master of Arts in Education (Guidance and Counseling)",
      "Master of Arts in Education (Early Childhood Education)",
      "Master of Arts in Education (Chinese Language Teaching)",
      "Master of Arts in Education (Special Needs and Inclusive Education)",
    ],
  },
  {
    title: "Business & Public Administration",
    items: [
      "Doctor of Philosophy in Management",
      "Doctor of Business Administration",
      "Master in Business Administration",
    ],
  },
  {
    title: "Health Sciences",
    items: [
      "Doctor of Public Health in Health Promotion and Education",
      "Doctor of Philosophy in Health Sciences by Research (Public Health Promotion and Education)",
      "Doctor of Philosophy in Health Sciences by Research (Biomedical Sciences)",
      "Master in Public Health",
      "Master of Science in Public Health",
      "Master of Science in Medical Laboratory Science",
    ],
  },
  {
    title: "Information Technology",
    items: [
      "Doctor of Information Technology (Business Intelligence and Data Analytics)",
      "Master in Information Technology",
      "Master in Data Science",
    ],
  },
  {
    title: "Nursing",
    items: [
      "Master of Arts in Nursing (Medical-Surgical Nursing)",
      "Master of Arts in Nursing (Maternal and Child Health Nursing)",
      "Master in Nursing (Medical-Surgical Nursing)",
      "Master in Nursing (Maternal and Child Health Nursing)",
    ],
  },
  {
    title: "Psychology",
    items: [
      "Master of Arts in Psychology (Clinical Psychology)",
      "Straight BA Psychology – MA Psychology",
    ],
  },
  {
    title: "Criminology",
    items: ["Master of Science in Criminal Justice (Criminology)"],
  },
  {
    title: "Certification",
    items: ["Certificate in School Counseling"],
  },
];

const admissionRequirements = [
  "Bachelor's degree Transcript of Records (Master's applicants)",
  "Master's degree Transcript of Records (Doctoral applicants)",
  "Bachelor's degree Diploma or Certification of Graduation",
  "Personal Statement for Pursuing Graduate Studies",
  "Birth Certificate (PSA or issued by country of origin)",
  "Marriage Certificate (for females using married name)",
  "Digital ID photo (white background)",
  "At least one Recommendation Form (sent directly to recommenders)",
];

const internationalRequirements = [
  "Passport data and visa pages",
  "Police Clearance (if residing outside the Philippines)",
];

export default async function GraduateSchoolPage() {
  const college = getCollegeBySlug("graduate-school");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "history", label: "History", icon: "scroll" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "admissions", label: "Admissions", icon: "clipboard" },
    { id: "calendar", label: "Calendar", icon: "calendar" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/gs-logo.png"
        badges={["Founded 1966", "Trimester system", "PAASCU accredited"]}
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
          title="Graduate School Overview"
          subtitle="Advanced instruction, research, and professional development."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Graduate School at a Glance
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Advancing scholarship, leadership, and professional practice.
              </h3>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The Graduate School strengthens AUF’s mission through advanced instruction,
                research, and professional education for leaders across education, government,
                healthcare, and industry.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Highlights
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Established in 1966 with a strong focus on research and instruction.</li>
                <li>Trimester system designed for working professionals.</li>
                <li>PAASCU-accredited MAEd and MBA programs.</li>
                <li>Curricula updated for global and CHED standards.</li>
              </ul>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="history" title="History Timeline" icon="scroll">
          <CollegeTimeline items={graduateTimeline} accentColor={college.accentColor} />
        </CollegeSection>

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The Graduate School envisions to be the leading higher education institution in
                the region offering graduate programs responsive to professional and executive
                development needs across private and public sectors.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The AUF Graduate School produces high-level professionals for the national and
                international market through graduate and continuing education anchored on
                advanced theories, modern technologies, and best practices.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="grid gap-6 lg:grid-cols-2">
            {graduatePrograms.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{group.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {group.items.map((item) => (
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
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="admissions" title="Admissions" icon="clipboard">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Admission Requirements</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {admissionRequirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <div className="font-semibold text-slate-800">International students</div>
                <ul className="mt-2 space-y-2">
                  {internationalRequirements.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Graduate Application Procedure
              </div>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Apply online through MyAU and complete your student information sheet.</li>
                <li>Upload required documents and personal statement.</li>
                <li>Provide recommender names and emails; AUF sends the forms directly.</li>
                <li>Monitor admissions updates via AUF channels.</li>
              </ol>
              <Link
                href="/admissions/application-guide"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                View Admissions Details
              </Link>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="calendar" title="Academic Calendar" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              GS AY 2025–2026
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Full calendar details are published by the Graduate School.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="mail">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUF Graduate School
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div>graduateschool@auf.edu.ph</div>
              <div>625 2888 loc 1780</div>
              <div>0962 154 1525</div>
            </div>
          </div>
        </CollegeSection>
      </div>
      <Footer />
    </>
  );
}
