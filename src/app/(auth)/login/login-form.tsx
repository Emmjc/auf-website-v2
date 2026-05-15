"use client";

import { useState, useTransition } from "react";
import {
  signInWithCredentialsAction,
  signInWithGoogleAction,
} from "@/server/actions/auth";
import { Alert, Button, Field, Input } from "@/components/ui/primitives";

export function LoginForm({ googleEnabled }: { googleEnabled: boolean }) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="space-y-4">
      {googleEnabled ? (
        <>
          <form action={signInWithGoogleAction}>
            <Button type="submit" variant="secondary" className="w-full">
              Continue with Google
            </Button>
          </form>
          <div className="relative my-2 text-center text-xs text-neutral-500">
            <span className="bg-white px-2">or</span>
            <span className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-neutral-200" />
          </div>
        </>
      ) : null}

      <form
        action={(fd) => {
          setError(null);
          startTransition(async () => {
            const result = await signInWithCredentialsAction(fd);
            if (result && !result.ok) setError(result.error);
          });
        }}
        className="space-y-3"
      >
        <Field label="Email" required>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="our@auf.edu.ph"
          />
        </Field>
        <Field label="Password" required>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            minLength={8}
          />
        </Field>
        {error ? <Alert tone="error">{error}</Alert> : null}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
