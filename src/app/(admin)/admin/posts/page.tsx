import Link from "next/link";
import { requireAdminPage } from "@/server/auth/session";
import { listPostsForAdmin } from "@/server/services/posts";
import { collegeLabel } from "@/data/colleges";
import { Badge, Card, EmptyState, LinkButton, PageHeader } from "@/components/ui/primitives";

export const metadata = { title: "Posts" };

export default async function PostsPage() {
  const actor = await requireAdminPage();
  const posts = await listPostsForAdmin(actor, {});

  return (
    <>
      <PageHeader
        title="Posts"
        description="News, blogs, and announcements."
        actions={<LinkButton href="/admin/posts/new">New post</LinkButton>}
      />
      {posts.length === 0 ? (
        <EmptyState
          title="No posts yet"
          action={<LinkButton href="/admin/posts/new">New post</LinkButton>}
        />
      ) : (
        <Card className="p-0">
          <table className="w-full text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50 text-left text-xs uppercase tracking-wide text-neutral-500">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Scope</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Updated</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/posts/${p.id}`}
                      className="font-medium text-neutral-900 hover:underline"
                    >
                      {p.title}
                    </Link>
                    <div className="text-xs text-neutral-500">{p.author.name}</div>
                  </td>
                  <td className="px-4 py-3 text-neutral-600">{p.type}</td>
                  <td className="px-4 py-3 text-neutral-600">
                    {collegeLabel(p.originCollegeId)}
                  </td>
                  <td className="px-4 py-3">
                    <Badge tone={p.status}>{p.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-neutral-500">
                    {new Date(p.updatedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </>
  );
}
