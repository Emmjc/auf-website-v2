import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeBySlug, collegeLabel } from "@/data/colleges";
import { listPublishedPostsForCollege } from "@/server/services/posts";
import { formatDate } from "@/lib/utils";

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

  return (
    <>
      {/* College banner with brand color */}
      <div
        className="border-b border-neutral-200"
        style={{ background: college.brandColor, color: "white" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center gap-4">
            <div
              aria-hidden
              className="flex h-14 w-14 items-center justify-center rounded-md bg-white/15 text-sm font-bold"
            >
              {college.shortName}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider opacity-80">
                A college of Angeles University Foundation
              </div>
              <h1 className="text-2xl font-semibold sm:text-3xl">{college.name}</h1>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-sm opacity-90">{college.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Programs */}
        {college.programs.length > 0 ? (
          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-neutral-900">Programs</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {college.programs.map((d) => (
                <div
                  key={d.id}
                  className="rounded-lg border border-neutral-200 bg-white p-4"
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
          </section>
        ) : null}

        {/* News & blogs */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-900">News &amp; blogs</h2>
          {posts.length === 0 ? (
            <div className="rounded-md border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
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
                    className="rounded-lg border border-neutral-200 bg-white p-4"
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
        </section>
      </div>
    </>
  );
}
