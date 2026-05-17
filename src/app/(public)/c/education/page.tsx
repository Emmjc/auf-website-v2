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
  "Develop a deep love of country and an abiding faith in God and man.",
  "Stimulate leadership potentials and develop effective change agents.",
  "Provide an academic environment aligned with local, national, and global issues in education.",
  "Equip students with pedagogical theories and strategies for elementary and secondary teaching.",
];

const beedGoals = [
  "Prepare teachers to handle any elementary grade with confidence and competence.",
  "Enable teachers to direct and facilitate learning of pre-elementary and elementary pupils.",
  "Develop skills in guiding character formation by serving as role models.",
  "Promote research and further studies for capability building in the teaching profession.",
  "Build advocates of Christian principles, virtues, and values in and out of campus.",
];

const bsedGoals = [
  "Develop high school teachers for learning areas such as Biological Sciences, English, Filipino, Mathematics, and P.E.H.M.",
  "Enable teachers to direct and facilitate learning of high school students.",
  "Assist teachers in acquiring skills in guiding student character formation.",
  "Promote research and further studies for capability building in the teaching profession.",
  "Build advocates of Christian principles, virtues, and values in and out of campus.",
];

const bsedPrograms = [
  "Biological Science",
  "Chinese Language Teaching",
  "English",
  "Filipino",
  "General Science",
  "Mathematics",
  "Social Studies",
  "Values Education",
];

const beedPrograms = ["General Education", "Special Education", "Pre-School Education"];

const accreditations = [
  "Center of Excellence in Teacher Education.",
  "PAASCU Level IV Accredited.",
  "ISO 9001:2008 certified by TUV-SUD.",
];

const studentOrganizations = [
  {
    name: "Teacher's Pen",
    description:
      "Official publication and hub for writers, photojournalists, and cartoonists.",
  },
  {
    name: "Educational Leaders for Nation Building (ELNB)",
    description: "Community extension organization of the College.",
  },
  {
    name: "Chinese Language Teaching (CLT) Society",
    description:
      "Promotes appreciation and propagation of Chinese language, art, culture, and history.",
  },
  {
    name: "Meta Art",
    description: "Artists develop and share skills and styles.",
  },
  {
    name: "Metanoia Dance Troupe",
    description: "Traditional and modern dance workshops and projects.",
  },
  {
    name: "Metaeuphony Glee",
    description: "Singing group uniting music lovers across genres.",
  },
  {
    name: "Kapisanang Itinatag sa Asignaturang Filipino (KISAF)",
    description:
      "Promotes creativity through Filipino language projects and activities.",
  },
  {
    name: "AUF English Club",
    description:
      "Open to English students; spearheads contests and seminars for language skills.",
  },
  {
    name: "AUF PE Club",
    description:
      "Opportunities in dance, sports, and recreation with positive social values.",
  },
  {
    name: "Guardian Angel Society",
    description: "Mentoring activities, seminars, exhibits, and projects.",
  },
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

const topnotchers = [
  {
    year: "2015",
    name: "Ms. Pauline Joviene D. Quiazon",
    place: "1st",
    program: "BEEd Special Education",
  },
  {
    year: "2010",
    name: "Mr. Raymond B. Canlapan",
    place: "10th",
    program: "BSEd Math",
  },
  {
    year: "1995",
    name: "Ms. Lourdes Gonzales",
    place: "5th",
    program: "BSE Math",
  },
];

export default async function CollegeOfEducationPage() {
  const college = getCollegeBySlug("education");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "history", label: "History", icon: "scroll" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "accreditation", label: "Accreditation", icon: "clipboard" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "affiliations", label: "Affiliations", icon: "news" },
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
        logoSrc="/colleges/ced-logo.png"
        badges={["Center of Excellence", "PAASCU Level IV", "ISO 9001:2008"]}
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
          title="CED Overview"
          subtitle="Teacher education, research, and community service."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Education
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The College of Education develops Christian educators dedicated to the youth
                and committed to excellence in instruction, research, and community service.
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
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              Established in 1962 under CAS, CED became a separate unit in 1983 and served as
              a pilot college in Region III. It offers BEEd (since 1986) and BSEd (since 1989)
              with multiple specializations and launched a BSEd double-major in Chinese
              Language Teaching in 2011. Today, CED is a Center of Excellence in Teacher
              Education, PAASCU Level IV accredited, and ISO certified.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To be the center for excellence in instruction, research, community service,
                and scholarly activities in teacher education for both public and private
                schools.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To develop Christian educators dedicated to helping the youth become partners
                of development and protectors of human life and the environment.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Bachelor of Secondary Education
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {bsedPrograms.map((program) => (
                  <div key={program}>{program}</div>
                ))}
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900">
                BSEd Program Goals
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {bsedGoals.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Bachelor of Elementary Education
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {beedPrograms.map((program) => (
                  <div key={program}>{program}</div>
                ))}
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900">
                BEEd Program Goals
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {beedGoals.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="accreditation" title="Accreditation" icon="clipboard">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-2 text-sm text-slate-600">
              {accreditations.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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

        <CollegeSection id="topnotchers" title="Topnotchers" icon="news">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[0.7fr_1.8fr_0.6fr] gap-2 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <div>Date</div>
              <div>Name</div>
              <div>Place</div>
            </div>
            <div className="divide-y divide-slate-100">
              {topnotchers.map((item) => (
                <div
                  key={`${item.year}-${item.name}`}
                  className="grid grid-cols-[0.7fr_1.8fr_0.6fr] gap-2 px-6 py-3 text-sm text-slate-600"
                >
                  <div className="font-semibold text-slate-900">{item.year}</div>
                  <div>
                    <div className="font-medium text-slate-900">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.program}</div>
                  </div>
                  <div className="text-slate-700">{item.place}</div>
                </div>
              ))}
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="facilities" title="Facilities" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              Facilities and learning spaces support instruction, practice teaching, and
              student development.
            </p>
          </div>
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="phone">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUF CED
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
