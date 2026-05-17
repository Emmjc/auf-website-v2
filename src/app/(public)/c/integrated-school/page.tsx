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

const missionObjectives = [
  "Provide quality basic education inspired by the teachings of Christ and the development of cognitive, affective, and psychomotor domains.",
  "Promote research and innovation in curriculum and instruction through STEM and Humanities programs that foster 21st century skills.",
  "Hone Catholicity and Christian values through peace education, global understanding, and character education.",
  "Develop responsible, law-abiding young leaders committed to community empowerment and advocacy.",
  "Enhance physical well-being, cultural orientation, and art appreciation through sports and cultural activities.",
  "Produce graduates who are Christ-centered, socially responsible, academically excellent, creative, and globally oriented.",
];

const coreValues = [
  {
    title: "Mabuti (Integrity of Character) - Virtus",
    description:
      "Courage, worth, integrity, and character rooted in faith, hope, love, justice, prudence, temperance, and fortitude.",
    items: [
      "Values Christ-centeredness through respect, humility, kindness, truth, and honesty.",
      "Manifests good manners and right conduct with deep respect for others.",
      "Abides by rules with respect for ethical standards and moral values.",
      "Shows love and respect for God, humanity, the country, and the environment.",
    ],
  },
  {
    title: "Magaling (Competence for Excellence) - Veritas",
    description:
      "Commitment to learning and the ardent search for truth and its unselfish transmission.",
    items: [
      "Demonstrates wisdom and competence with commitment to lifelong learning.",
      "Pursues excellence and truth in speech and action.",
      "Shows adeptness in time management, leadership, and problem-solving.",
      "Collaborates harmoniously with others.",
      "Seeks help or lends a helping hand in times of challenges.",
      "Demonstrates grit to accomplish academic tasks and life challenges.",
      "Produces remarkable output or valuable innovative or creative work.",
    ],
  },
  {
    title: "May Malasakit sa Kapwa (Charity as Mission) - Caritas",
    description:
      "Self-giving love expressed through care and concern for others.",
    items: [
      "Practices care for the poor, disabled, and marginalized through service and generosity.",
      "Participates in advocacies for cultural understanding, peace, human rights, and environmental preservation.",
      "Contributes time and resources toward community empowerment and societal transformation.",
    ],
  },
];

const learningOutcomes = [
  {
    title: "Christ-centeredness",
    items: [
      "Embrace Christ's way of life through moral living and social accountability.",
      "Adhere to truth and Christian values amidst challenges.",
      "Practice fairness, honesty, and integrity in all aspects of life.",
      "Demonstrate positive disposition, maturity, and courage rooted in Catholic values.",
    ],
  },
  {
    title: "Social and Environmental Responsibility",
    items: [
      "Engage in advocacies for peace, cultural heritage, and the environment.",
      "Demonstrate concern through active involvement in socio-civic activities.",
      "Practice tolerance for differences in race, culture, and exceptionalities.",
      "Respect individual dignity and human diversity.",
    ],
  },
  {
    title: "Wisdom and Academic Excellence",
    items: [
      "Demonstrate competence in various disciplines and fields of study.",
      "Collaborate skillfully with peers, colleagues, authorities, and institutions.",
      "Demonstrate proficiency in oral and written communication using various media.",
      "Manifest wise decision-making and judgment relevant to academic endeavors.",
    ],
  },
  {
    title: "Commitment to Lifelong Learning",
    items: [
      "Practice further development of skills and competence.",
      "Adapt to demands of innovation in fields of endeavor.",
      "Manifest growth in moral, spiritual, socio-civic, and physical aspects of life.",
      "Participate in collaborative learning for continual improvement.",
    ],
  },
  {
    title: "Creative, Innovative, and Critical Thinking",
    items: [
      "Analyze and evaluate arguments and evidence logically.",
      "Generate ideas and produce novel works to solve problems.",
      "Demonstrate competence in scientific research and technology for innovation.",
    ],
  },
  {
    title: "Peace and Universal Understanding",
    items: [
      "Possess national and international perspectives towards peace and understanding.",
      "Demonstrate awareness and skills in culturally or linguistically diverse contexts.",
      "Advocate peace and cultural, historical, political, environmental, and technological understanding.",
      "Use academic competence and technology to promote Christian ideals and global understanding.",
    ],
  },
];

const academicPrograms = [
  "Kindergarten",
  "Grade School",
  "Junior High School",
  "Senior High School",
  "General Academic",
  "Business and Accounting",
  "Health Sciences",
  "IT, Engineering and Architecture",
];

const studentOrgsMandated = [
  "Integrated School Student Council (ISSC)",
  "High School Student Council (HSSC)",
  "Grade School Student Council (GSSC)",
  "Classroom Organizations (CORs)",
];

const studentOrgsAcademic = [
  "English Club",
  "Filipino Club",
  "Math Club",
  "Science Club",
  "Social Studies Club",
  "TLE Club",
];

const studentOrgsCultural = ["Boys' Choir", "HS Dance Club", "HS Glee Club", "Pangkat Pambata"];

const studentOrgsPhysical = ["MAPEH Club"];

const studentOrgsReligious = [
  "Catechists Children of Mary Immaculate",
  "Christ Youth in Action",
  "Knights of the Blessed Sacrament",
  "Student Catholic Action",
  "Youth for Christ",
];

const studentOrgsSocial = ["Book Lovers Club", "Foreign Students Club", "Peer Helpers Club"];

const activitiesPrograms = [
  "Community Development Services",
  "Waste Management Program",
  "Drop Everything and Read (DEAR) Program",
  "Campus CHAMPS",
  "JEP (Just English Please) Campaign",
  "Item Analysis of Test",
];

const activitiesAdditional = [
  "Leadership Training",
  "Intramurals",
  "Quiz Bees",
  "Science Camp",
  "Youth Camp",
  "Family Day Celebration",
  "Parents' Encounter",
];

const affiliations = [
  "Angels City Association of Private Schools (ACAPS)",
  "Association of Private Pre-Elementary Administrators of Region III (APPEAR III)",
  "Private Secondary Schools Administrators Association (PRISSAA)",
  "Pampanga Association of Private School Principals and Assistant Principals (PAPSPAP)",
];

export default async function IntegratedSchoolPage() {
  const college = getCollegeBySlug("integrated-school");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "values", label: "Core Values", icon: "scroll" },
    { id: "outcomes", label: "Learning Outcomes", icon: "clipboard" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "activities", label: "Activities", icon: "calendar" },
    { id: "affiliations", label: "Affiliations", icon: "news" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/is-logo.png"
        badges={["Catholic values", "Holistic education", "21st century skills"]}
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
          title="Integrated School Overview"
          subtitle="Quality basic education for holistic development."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                AUF Integrated School
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Born from the Heart of the Church, the Integrated School promotes excellence
                in curriculum and instruction, community empowerment, and research and
                innovation for the protection and advancement of human dignity.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission Objectives
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {missionObjectives.map((item) => (
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
                To emerge as an exemplar school promoting excellence in curriculum and
                instruction, community empowerment, and research and innovation for the
                protection and advancement of human dignity.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To provide quality basic education guided by the University's mission of total
                development of man for God and humanity.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="values" title="Angelenean Core Values" icon="scroll">
          <div className="grid gap-6 lg:grid-cols-2">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{value.title}</div>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {value.items.map((item) => (
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

        <CollegeSection id="outcomes" title="Integrated School Learning Outcomes" icon="clipboard">
          <div className="grid gap-6 lg:grid-cols-2">
            {learningOutcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{outcome.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {outcome.items.map((item) => (
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

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academicPrograms.map((program) => (
              <div
                key={program}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{program}</div>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="organizations" title="Student Organizations" icon="book">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mandated Organizations
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {studentOrgsMandated.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Non-Mandated Organizations
              </div>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                <div>
                  <div className="font-semibold text-slate-800">Academic</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {studentOrgsAcademic.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Cultural</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {studentOrgsCultural.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Physical</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {studentOrgsPhysical.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Religious</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {studentOrgsReligious.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Social</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {studentOrgsSocial.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="activities" title="Activities" icon="calendar">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Programs and Activities</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {activitiesPrograms.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Student Development</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {activitiesAdditional.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="affiliations" title="Affiliations" icon="news">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-2 text-sm text-slate-600">
              {affiliations.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="phone">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUFIS
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
