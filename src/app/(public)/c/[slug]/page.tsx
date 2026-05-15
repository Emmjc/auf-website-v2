import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeBySlug, collegeLabel } from "@/data/colleges";
import { listPublishedPostsForCollege } from "@/server/services/posts";
import { formatDate } from "@/lib/utils";
import CollegeSubnav from "@/components/public/college/CollegeSubnav";
import CollegeHero from "@/components/public/college/CollegeHero";
import CollegeSection from "@/components/public/college/CollegeSection";
import Footer from "@/components/public/Footer";
import type { CollegeNavIcon } from "@/components/public/college/CollegeSubnav";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const college = getCollegeBySlug(slug);
  if (!college || !college.isActive) notFound();

  // College id === slug in site.json.
  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "overview", label: "Overview", icon: "book" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "news", label: "News", icon: "news" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/auf-logo-mark.png"
      />

      <CollegeSubnav items={navItems} brandColor={college.brandColor} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CollegeSection
          id="overview"
          title="College Overview"
          subtitle="Programs, leadership, and academic focus."
          icon="target"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {college.shortName}
            </div>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {college.description}
            </p>
          </div>
        </CollegeSection>

        {college.programs.length > 0 ? (
          <CollegeSection id="programs" title="Programs" icon="graduation">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {college.programs.map((d) => (
                <div
                  key={d.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-4"
                >
                  <div className="text-sm font-semibold text-neutral-900">{d.name}</div>
                  {d.headName ? (
                    <div className="mt-1 text-xs text-neutral-500">
                      {d.headTitle ? `${d.headTitle}: ` : ""}
                      {d.headName}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </CollegeSection>
        ) : null}

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
              Contact the {college.name}
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
