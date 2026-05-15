import { notFound } from "next/navigation";
import Link from "next/link";
import { getCollegeBySlug, getCollegeById } from "@/data/colleges";
import { getPostForView } from "@/server/services/posts";
import { PostContent } from "@/components/public/post-content";
import { formatDate } from "@/lib/utils";

export default async function CollegePostPage({
  params,
}: {
  params: Promise<{ slug: string; postSlug: string }>;
}) {
  const { slug, postSlug } = await params;
  const college = getCollegeBySlug(slug);
  if (!college) notFound();

  const post = await getPostForView({ slug: postSlug, collegeId: college.id });
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link href={`/c/${slug}`} className="text-xs text-neutral-500 hover:underline">
        ← Back to {college.shortName}
      </Link>

      <div className="mt-4 text-xs uppercase tracking-wide text-neutral-500">
        {post.type} · {post.publishedAt ? formatDate(post.publishedAt) : ""}
      </div>
      <h1 className="mt-2 text-3xl font-semibold text-neutral-900">{post.title}</h1>
      {post.excerpt ? <p className="mt-3 text-neutral-600">{post.excerpt}</p> : null}
      <div className="mt-2 text-xs text-neutral-500">By {post.author.name}</div>

      <div className="mt-8">
        <PostContent doc={post.content} />
      </div>

      {post.collegeTags.length > 1 ? (
        <div className="mt-8 flex flex-wrap gap-2 border-t border-neutral-100 pt-4">
          <span className="text-xs text-neutral-500">Also on:</span>
          {post.collegeTags
            .filter((t) => t.collegeId !== college.id)
            .map((t) => {
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
    </article>
  );
}
