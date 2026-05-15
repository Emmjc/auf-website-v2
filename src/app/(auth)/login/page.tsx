import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/server/auth/auth";
import { isGoogleSsoEnabled } from "@/lib/env";
import { LoginForm } from "./login-form";

export const metadata = { title: "Sign in" };

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/admin/dashboard");

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <div className="w-full max-w-sm rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
        <Link href="/" className="block text-xs text-neutral-500 hover:underline">
          ← AUF home
        </Link>
        <h1 className="mt-3 text-xl font-semibold text-neutral-900">Sign in to AUF Admin</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Use your university or college admin account.
        </p>

        <div className="mt-6">
          <LoginForm googleEnabled={isGoogleSsoEnabled} />
        </div>
      </div>
    </div>
  );
}
