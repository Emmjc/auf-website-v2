import Link from "next/link";
import { auth } from "@/server/auth/auth";
import { activeColleges, university } from "@/data/colleges";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div
              aria-hidden
              className="h-10 w-10 rounded-md"
              style={{ background: `linear-gradient(135deg,${university.brandColor},${university.accentColor})` }}
            />
            <div className="leading-tight">
              <div className="text-base font-semibold text-neutral-900">{university.shortName}</div>
              <div className="text-xs text-neutral-500">{university.name}</div>
            </div>
          </Link>

          <nav className="flex items-center gap-5 text-sm text-neutral-700">
            <Link href="/" className="hover:text-neutral-900">Home</Link>
            <details className="relative">
              <summary className="cursor-pointer list-none hover:text-neutral-900">
                Colleges
              </summary>
              <div className="absolute right-0 z-10 mt-2 w-72 rounded-md border border-neutral-200 bg-white p-2 shadow-md">
                {activeColleges.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/c/${c.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded px-3 py-2 text-sm hover:bg-neutral-50"
                  >
                    <span className="font-medium text-neutral-900">{c.shortName}</span>
                    <span className="ml-2 text-xs text-neutral-500">{c.name}</span>
                  </Link>
                ))}
              </div>
            </details>
            {session?.user ? (
              <Link
                href="/admin/dashboard"
                className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800"
              >
                Admin
              </Link>
            ) : (
              <Link
                href="/login"
                className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
              >
                Sign in
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-600">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="font-semibold text-neutral-900">{university.name}</div>
              <p className="mt-1 text-xs">{university.address}</p>
              <p className="text-xs">{university.email} · {university.phone}</p>
            </div>
            <div className="text-xs text-neutral-500">
              © {new Date().getFullYear()} {university.shortName}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
