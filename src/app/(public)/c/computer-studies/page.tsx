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
  "Facilitate instruction through a curriculum aligned with industry needs.",
  "Provide exposure that links theory with real ICT practices.",
  "Inculcate proper utilization of computer systems resources for IT advancement.",
  "Instill professionalism and moral values necessary in practice.",
];

const programs = [
  {
    title: "BS Computer Science",
    description:
      "Computing concepts, algorithmic foundations, and software engineering practices for designing and developing complex software solutions.",
  },
  {
    title: "BS Information Technology",
    description:
      "Planning, deploying, and managing IT infrastructure and computing solutions across organizations.",
  },
  {
    title: "Bachelor of Multimedia Arts",
    description:
      "Conceptual, technical, and professional competencies for storytelling across media forms.",
  },
];

const specializations = [
  {
    title: "Computer Science: Data Science",
    items: [
      "Systematic analysis of data using scientific methods, algorithms, and processes.",
      "Extracting meaningful insights across interdisciplinary domains.",
    ],
  },
  {
    title: "Information Technology: Web and Mobile Technologies",
    items: [
      "Website development and design",
      "UI/UX design",
      "Computer programming and scripting",
      "Technical communication",
      "Database administration",
      "Mobile application development",
    ],
  },
  {
    title: "Information Technology: IT Infrastructure",
    items: [
      "Networking principles",
      "Managing and maintaining servers, computers, routers, and switches",
      "Network configuration, processing, and connectivity",
      "Installing, configuring, and administering network technologies",
      "Troubleshooting Cisco networks and devices",
      "Cloud computing and architecting",
    ],
  },
  {
    title: "Multimedia Arts: Graphic Design",
    items: [
      "Design for print, web, mobile, and game platforms",
      "Motion graphic production",
      "Branding and marketing strategy",
    ],
  },
  {
    title: "Multimedia Arts: Animation",
    items: [
      "2D and 3D animation pipeline",
      "Visual effects and motion graphics for film and composition",
    ],
  },
];

const accreditations = [
  {
    title: "CHED Autonomous Status",
    detail:
      "Granted since 2003; only a limited number of HEIs hold this recognition.",
  },
  {
    title: "FAAP Institutional Accreditation",
    detail: "Institutional accreditation by FAAP.",
  },
  {
    title: "ISO 9001:2015",
    detail: "Certification by TUV-SUD.",
  },
  {
    title: "PAASCU Program Accreditation",
    detail: "Computer Science Level III and Information Technology Level III.",
  },
];

const recognitions = [
  {
    title: "Center of Excellence in IT Education",
    detail: "Awarded by the Commission on Higher Education.",
  },
];

const affiliations = [
  {
    name: "Adobe Creative Cloud for Education",
    detail:
      "Access to Adobe tools for design and production to build digital skills.",
  },
  {
    name: "Animation Council of the Philippines Inc. (ACPI)",
    detail:
      "Promotes the Philippine animation industry and develops local and global talent.",
  },
  {
    name: "Cisco Networking Academy",
    detail:
      "Global IT and cybersecurity education program with certifications for networking careers.",
  },
  {
    name: "CompTIA Partnership",
    detail:
      "Vendor-neutral IT certifications across cybersecurity, networking, cloud, and IT support.",
  },
  {
    name: "Huawei Partnership",
    detail:
      "Training and certifications in 5G, cloud computing, AI, and IoT.",
  },
  {
    name: "Microsoft Learn for Educators (MSLE)",
    detail:
      "Access to Microsoft curriculum and certification-aligned teaching materials.",
  },
  {
    name: "Multimedia Arts Association of the Philippines (MMAAP)",
    detail:
      "Professional network for multimedia arts capacity building and industry connections.",
  },
  {
    name: "Oracle Academy",
    detail:
      "Oracle software and curriculum resources with certification pathways.",
  },
  {
    name: "Philippine Society of IT Educators (PSITE)",
    detail:
      "Faculty development and quality education initiatives for IT practitioners.",
  },
  {
    name: "SAP University Alliance Program Council (SUCP)",
    detail:
      "SAP software access and training for professors and students.",
  },
];

const facilities = [
  "Five computer laboratories with 42 workstations and internet facilities (1st and 2nd floors).",
  "Five fully air-conditioned lecture rooms (4th floor).",
  "One open laboratory (3rd floor).",
  "One hardware laboratory (2nd floor).",
  "One ICT Research and Development laboratory (1st floor).",
  "Wi-Fi access point (4th floor).",
];

export default async function CollegeOfComputerStudiesPage() {
  const college = getCollegeBySlug("computer-studies");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "specializations", label: "Specializations", icon: "scroll" },
    { id: "accreditation", label: "Accreditation", icon: "clipboard" },
    { id: "recognition", label: "Recognition", icon: "news" },
    { id: "affiliations", label: "Affiliations", icon: "book" },
    { id: "facilities", label: "Facilities", icon: "calendar" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/ccs-logo.png"
        badges={["Center of Excellence", "PAASCU Level III", "Industry partners"]}
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
          title="CCS Overview"
          subtitle="IT education, research, and community service in the region."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Computer Studies
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The College of Computer Studies develops globally competitive and socially
                responsible IT professionals dedicated to advancing the industry.
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
                To emerge as the center of excellence in IT education, research, and community
                service in the region, producing globally competitive and socially responsible
                professionals.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To provide well-rounded Information Technology Education programs that meet
                professional standards locally and globally.
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
                <p className="mt-2 text-sm text-slate-600">{program.description}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="specializations" title="Areas of Specialization" icon="scroll">
          <div className="grid gap-6 lg:grid-cols-2">
            {specializations.map((item) => (
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

        <CollegeSection id="recognition" title="Recognition" icon="news">
          <div className="grid gap-6 lg:grid-cols-2">
            {recognitions.map((item) => (
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

        <CollegeSection id="affiliations" title="Affiliations" icon="book">
          <div className="grid gap-6 lg:grid-cols-2">
            {affiliations.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="facilities" title="Facilities" icon="calendar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Information Technology Training Center (ITTC)
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {facilities.map((item) => (
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
              Contact AUF CCS
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
