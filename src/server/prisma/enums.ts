export const Role = {
  SUPER_ADMIN: "SUPER_ADMIN",
  COLLEGE_ADMIN: "COLLEGE_ADMIN",
  COLLEGE_EDITOR: "COLLEGE_EDITOR",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const PostType = {
  NEWS: "NEWS",
  BLOG: "BLOG",
  ANNOUNCEMENT: "ANNOUNCEMENT",
} as const;

export type PostType = (typeof PostType)[keyof typeof PostType];

export const PostStatus = {
  DRAFT: "DRAFT",
  PENDING_REVIEW: "PENDING_REVIEW",
  CHANGES_REQUESTED: "CHANGES_REQUESTED",
  APPROVED: "APPROVED",
  PUBLISHED: "PUBLISHED",
  REJECTED: "REJECTED",
  ARCHIVED: "ARCHIVED",
} as const;

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus];

export const ApprovalAction = {
  SUBMIT: "SUBMIT",
  APPROVE: "APPROVE",
  REJECT: "REJECT",
  REQUEST_CHANGES: "REQUEST_CHANGES",
  PUBLISH: "PUBLISH",
  UNPUBLISH: "UNPUBLISH",
  ARCHIVE: "ARCHIVE",
} as const;

export type ApprovalAction = (typeof ApprovalAction)[keyof typeof ApprovalAction];

export const MediaType = {
  IMAGE: "IMAGE",
  DOCUMENT: "DOCUMENT",
  VIDEO: "VIDEO",
  OTHER: "OTHER",
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];
