import siteData from "./site.json";

export type Program = {
  id: string;
  slug: string;
  name: string;
  headName: string | null;
  headTitle: string | null;
  contactEmail: string | null;
};

export type College = {
  id: string;
  slug: string;
  shortName: string;
  name: string;
  description: string;
  brandColor: string;
  accentColor: string;
  sortOrder: number;
  isActive: boolean;
  dean: { name: string; title: string; photoUrl: string | null };
  contact: { email: string | null; phone: string | null; address: string | null };
  vision: string;
  mission: string;
  programs: Program[];
};

export type University = typeof siteData.university;

export const university: University = siteData.university;

// All colleges ordered by sortOrder.
export const colleges: College[] = (siteData.colleges as College[]).sort(
  (a, b) => a.sortOrder - b.sortOrder,
);

// Active colleges only — what public pages show.
export const activeColleges: College[] = colleges.filter((c) => c.isActive);

export function getCollegeById(id: string): College | undefined {
  return colleges.find((c) => c.id === id);
}

export function getCollegeBySlug(slug: string): College | undefined {
  return colleges.find((c) => c.slug === slug);
}

// Validate that a string is a known college ID — used in server actions.
export function isValidCollegeId(id: string): boolean {
  return colleges.some((c) => c.id === id);
}

// Returns the slug-like label for display (e.g. in post lists).
export function collegeLabel(id: string | null): string {
  if (!id) return "University";
  return getCollegeById(id)?.shortName ?? id;
}
