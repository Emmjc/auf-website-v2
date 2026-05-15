import Link from "next/link";
import { activeColleges, university } from "@/data/colleges";
import { listPublishedUniversityPosts } from "@/server/services/posts";
import { collegeLabel } from "@/data/colleges";
import { formatDate } from "@/lib/utils";

export default async function HomePage() {
  const posts = await listPublishedUniversityPosts({ limit: 6 });

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-10">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          {university.name}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-neutral-900 sm:text-4xl">
          {university.tagline}
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600">{university.description}</p>
      </section>

      {/* Colleges grid */}
      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">Colleges</h2>
          <span className="text-xs text-neutral-500">Each college opens in a new tab</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {activeColleges.map((c) => (
            <Link
              key={c.id}
              href={`/c/${c.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-neutral-200 bg-white p-4 transition hover:shadow-md"
            >
              <div
                aria-hidden
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-md text-xs font-bold text-white"
                style={{ background: c.brandColor }}
              >
                {c.shortName}
              </div>
              <div className="text-sm font-semibold text-neutral-900 group-hover:underline">
                {c.shortName}
              </div>
              <div className="mt-0.5 text-xs text-neutral-500">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* University news */}
      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">University news</h2>
        </div>
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
                <li key={p.id} className="rounded-lg border border-neutral-200 bg-white p-4">
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
                    <p className="mt-1 line-clamp-3 text-sm text-neutral-600">{p.excerpt}</p>
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
  );
}
