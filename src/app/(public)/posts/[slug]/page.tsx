import { notFound } from "next/navigation";
import Link from "next/link";
import { getCollegeById } from "@/data/colleges";
import { getPostForView } from "@/server/services/posts";
import { PostContent } from "@/components/public/post-content";
import { formatDate } from "@/lib/utils";

export default async function UniversityPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostForView({ slug, collegeId: null });
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-xs text-neutral-500 hover:underline">
        ← Back to home
      </Link>

      <div className="mt-4 text-xs uppercase tracking-wide text-neutral-500">
        University · {post.type} · {post.publishedAt ? formatDate(post.publishedAt) : ""}
      </div>
      <h1 className="mt-2 text-3xl font-semibold text-neutral-900">{post.title}</h1>
      {post.excerpt ? <p className="mt-3 text-neutral-600">{post.excerpt}</p> : null}
      <div className="mt-2 text-xs text-neutral-500">By {post.author.name}</div>

      {post.collegeTags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.collegeTags.map((t) => {
            const c = getCollegeById(t.collegeId);
            return (
              <Link
                key={t.collegeId}
                href={`/c/${t.collegeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-700 hover:bg-neutral-50"
              >
                {c?.shortName ?? t.collegeId}
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="mt-8">
        <PostContent doc={post.content} />
      </div>
    </article>
  );
}
