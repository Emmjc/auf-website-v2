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
  "Provide a general education program relevant and responsive to local and global needs.",
  "Equip students with knowledge, skills, and attitudes necessary in their professions.",
  "Cultivate a research-oriented attitude and community involvement for productive life in society.",
  "Create an atmosphere of professionalism founded on integrity and ethical standards.",
  "Prepare students for more specialized studies in Biology, Psychology, and Communication.",
];

const programs = [
  "BS Biology",
  "BS Psychology",
  "AB Communication (with specialization in Creative Media)",
  "BS Biology Three-Year Accelerated Program",
  "Straight BA Psychology to MA Psychology (SABMA)",
  "BS Human Biology",
];

const programOutcomes = [
  {
    title: "BS Biology and BS Biology Three-Year Accelerated",
    items: [
      "Demonstrate an in-depth understanding of mechanisms and processes governing life.",
      "Perform mathematical and statistical computations to analyze biological data.",
      "Communicate scientific information and ideas orally and in writing.",
      "Apply biological theories and the scientific method across molecular, cellular, and organismal levels.",
      "Apply biorisk management principles.",
      "Develop sustainable solutions to environmental and social problems.",
      "Conduct biological research and critically assess current views and theories.",
    ],
  },
  {
    title: "BS Human Biology",
    items: [
      "Demonstrate understanding of fundamental concepts in human biology.",
      "Explain chemical and molecular bases of function and disease.",
      "Identify the etiology of diseases.",
      "Integrate knowledge across organ systems to understand health and wellness.",
      "Develop problem-solving skills in the context of human biology.",
      "Demonstrate proficiency in laboratory and biorisk management techniques.",
      "Evaluate and discuss implications of research in human biology.",
      "Embody Angelenean attributes: values-oriented, socially responsible, professionally competent, critical and creative, lifelong learner, globally oriented.",
    ],
  },
  {
    title: "BS Psychology",
    items: [
      "Understand and apply theories and principles in the various fields of Psychology.",
      "Conduct psychological evaluation through testing, interview, and observation.",
      "Prepare and implement structured learning experiences for different settings in Psychology.",
      "Practice empathy, responsibility, and multicultural sensitivity in addressing concerns.",
      "Demonstrate ethical and professional standards in research and practice.",
      "Apply different investigative methods in Psychology.",
      "Develop and enhance competencies through further studies.",
    ],
  },
  {
    title: "AB Communication",
    items: [
      "Define and access information needs; assess, organize, and utilize knowledge.",
      "Communicate across print, broadcast, and online platforms.",
      "Prepare communication and media plans.",
      "Conduct communication and media research and evaluation.",
      "Develop and produce communication materials across formats.",
      "Demonstrate communication management and leadership skills.",
      "Develop entrepreneurial capabilities.",
      "Adhere to ethical standards and practices.",
      "Know and practice rights, responsibilities, and accountabilities in the profession.",
      "Demonstrate a development orientation in communication work.",
      "Apply communication theories, models, principles, and tools in development work.",
    ],
  },
  {
    title: "Straight BA Psychology to MA Psychology (SABMA)",
    items: [
      "Demonstrate theoretical knowledge in Clinical Psychology.",
      "Demonstrate knowledge of advanced methods of psychological inquiry.",
      "Conduct psychological assessment through testing, clinical interview, and observations.",
      "Formulate and implement psychological interventions through counseling and psychotherapy.",
      "Demonstrate ethical and professional standards in research and practice.",
      "Advance knowledge and competencies in theory, practice, and research in Clinical Psychology.",
    ],
  },
];

const studentOrganizations = [
  {
    name: "SAMASKOM",
    description:
      "Organization for AB Communication students that promotes unity and camaraderie through communication-related activities.",
  },
  {
    name: "Kapisanan ng mga Sikolohista sa AUF (KASAUF)",
    description:
      "Promotes social responsibility through opportunities to serve AUF and the community, supporting members' well-being.",
  },
  {
    name: "Biological Sciences Society (BSS)",
    description:
      "Promotes environmental awareness and current trends in Biology, training students as good stewards of the environment.",
  },
];

const topnotchers = [
  { year: "2015", name: "Mary Anne Joseph T. Montoya", place: "5th" },
  { year: "2016", name: "Mikee B. Arrozal", place: "6th" },
  { year: "2016", name: "Chiaki Pelayo", place: "8th" },
  { year: "2017", name: "Ma. Angelica V. Cudia", place: "6th" },
  { year: "2017", name: "Karen S. Alambat", place: "7th" },
  { year: "2017", name: "Angelica T. Estrada", place: "10th" },
  { year: "2018", name: "Nikka Rae C. Ludovice", place: "7th" },
  { year: "2018", name: "Juvy Anne B. Paneda", place: "8th" },
  { year: "2018", name: "Ericka Faye N. David", place: "10th" },
  { year: "2018", name: "Ericka P. Fring", place: "10th" },
  { year: "2019", name: "Christian Jemverick S. Manio", place: "3rd" },
  { year: "2019", name: "Nicole Jane S. Macalino", place: "4th" },
  { year: "2019", name: "Gabrielle Anne O. Canlas", place: "5th" },
  { year: "2019", name: "Denise Janelle P. Soriano", place: "10th" },
  { year: "2023", name: "Irish Angelique Campo", place: "10th" },
  { year: "2024", name: "Mary Ann B. Felker", place: "8th" },
  { year: "2024", name: "Patricia Isabel P. Jurado", place: "10th" },
  { year: "2025", name: "Hailie Jade B. Gopez", place: "7th" },
  { year: "2025", name: "Nicole Elizabeth C. Moran", place: "9th" },
  { year: "2025", name: "Lira Eunice M. Samonte", place: "10th" },
];

export default async function CollegeOfArtsAndSciencesPage() {
  const college = getCollegeBySlug("cas");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "overview", label: "Overview", icon: "book" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "outcomes", label: "Outcomes", icon: "scroll" },
    { id: "accreditation", label: "Accreditation", icon: "clipboard" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "topnotchers", label: "Topnotchers", icon: "news" },
    { id: "facilities", label: "Facilities", icon: "calendar" },
    { id: "news", label: "News", icon: "news" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  const contactPhone = college.contact.phone || "(045) 625 2888 Local 1915";

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/cas-logo.png"
        badges={["PAASCU Level IV", "Liberal arts", "Research-oriented"]}
      />

      <CollegeSubnav items={navItems} brandColor={college.brandColor} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CollegeSection
          id="overview"
          title="CAS Overview"
          subtitle="Preserving culture, advancing the arts, and promoting science and technology."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Arts and Sciences
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The College of Arts and Sciences leads in academic excellence by preserving
                culture, propagating the arts, and promoting science and technology.
              </p>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                CAS is dedicated to quality liberal and professional education in Biology,
                Psychology, and Communication.
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
                To be the fountainhead for the preservation of culture, the propagation of the
                arts, and the promotion of science and technology through an ambiance of
                academic excellence.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Dedicated to promote quality liberal education and professional education in
                Biology, Psychology, and Communication.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((name) => (
              <div
                key={name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{name}</div>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="outcomes" title="Program Outcomes" icon="scroll">
          <div className="grid gap-6 lg:grid-cols-2">
            {programOutcomes.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{program.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {program.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="accreditation" title="Accreditation" icon="clipboard">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              PAASCU Level IV
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Biology, Psychology, and Communication programs are PAASCU Level IV accredited.
            </p>
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

        <CollegeSection id="facilities" title="Facilities" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              Academic programs are supported by laboratories equipped with modalities and
              equipment to meet the needs of students.
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
              Contact AUF CAS
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {college.contact.email ? <div>{college.contact.email}</div> : null}
              <div>{contactPhone}</div>
              {college.contact.address ? <div>{college.contact.address}</div> : null}
            </div>
          </div>
        </CollegeSection>
      </div>

      <Footer />
    </>
  );
}
