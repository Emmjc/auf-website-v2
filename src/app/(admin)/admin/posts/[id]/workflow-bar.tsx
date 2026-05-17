"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PostStatus } from "@/server/prisma/enums";
import {
  submitPostForReviewAction,
  reviewPostAction,
  publishPostAction,
  archivePostAction,
} from "@/server/actions/posts";
import { Alert, Button, Textarea } from "@/components/ui/primitives";

export function WorkflowBar({
  postId,
  status,
  allowedNext,
  canReview,
}: {
  postId: string;
  status: PostStatus;
  allowedNext: PostStatus[];
  canReview: boolean;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [showReview, setShowReview] = useState<"APPROVE" | "REJECT" | "REQUEST_CHANGES" | null>(null);
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();

  const run = (fn: () => Promise<unknown>) => {
    setError(null);
    startTransition(async () => {
      try {
        await fn();
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong");
      }
    });
  };

  const can = (s: PostStatus) => allowedNext.includes(s);

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="flex flex-wrap items-center gap-2">
        {/* Submit (college admin) */}
        {can(PostStatus.PENDING_REVIEW) && status !== PostStatus.PENDING_REVIEW ? (
          <Button onClick={() => run(() => submitPostForReviewAction(postId))} disabled={isPending}>
            Submit for review
          </Button>
        ) : null}

        {/* Review actions (super admin only, when pending) */}
        {canReview && status === PostStatus.PENDING_REVIEW ? (
          <>
            <Button onClick={() => setShowReview("APPROVE")} disabled={isPending}>
              Approve
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowReview("REQUEST_CHANGES")}
              disabled={isPending}
            >
              Request changes
            </Button>
            <Button variant="danger" onClick={() => setShowReview("REJECT")} disabled={isPending}>
              Reject
            </Button>
          </>
        ) : null}

        {/* Direct publish (super admin) */}
        {canReview && can(PostStatus.PUBLISHED) && status !== PostStatus.PENDING_REVIEW ? (
          <Button onClick={() => run(() => publishPostAction(postId))} disabled={isPending}>
            Publish now
          </Button>
        ) : null}

        {/* Archive */}
        {can(PostStatus.ARCHIVED) ? (
          <Button
            variant="ghost"
            onClick={() => run(() => archivePostAction(postId))}
            disabled={isPending}
          >
            Archive
          </Button>
        ) : null}

        <span className="ml-auto text-xs text-neutral-500">
          {allowedNext.length === 0 ? "No actions available for your role." : null}
        </span>
      </div>

      {showReview ? (
        <div className="mt-4 space-y-2">
          <Textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={
              showReview === "APPROVE"
                ? "Optional approval note"
                : "Comments for the author (recommended)"
            }
          />
          <div className="flex gap-2">
            <Button
              disabled={isPending}
              onClick={() =>
                run(async () => {
                  await reviewPostAction({
                    postId,
                    action: showReview,
                    comment: comment.trim() === "" ? null : comment.trim(),
                  });
                  setShowReview(null);
                  setComment("");
                })
              }
            >
              Confirm {showReview.replace("_", " ").toLowerCase()}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setShowReview(null);
                setComment("");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : null}

      {error ? (
        <div className="mt-3">
          <Alert tone="error">{error}</Alert>
        </div>
      ) : null}
    </div>
  );
}
