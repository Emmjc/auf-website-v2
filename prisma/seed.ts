import "dotenv/config";
import { PrismaClient, PostStatus, PostType, Role } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";
// Import college IDs straight from the JSON — no DB table, no migration.
import siteData from "../src/data/site.json";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const SEED_PASSWORD = process.env.SEED_PASSWORD ?? "ChangeMe123!";

const emptyDoc = {
  type: "doc",
  content: [
    { type: "paragraph", content: [{ type: "text", text: "Welcome to the new AUF website." }] },
  ],
};

async function main() {
  console.log("→ Seeding AUF database…");

  const passwordHash = await bcrypt.hash(SEED_PASSWORD, 10);

  // 1. Super admin (Office of University Relations)
  const superAdmin = await prisma.user.upsert({
    where: { email: "our@auf.edu.ph" },
    update: {},
    create: {
      email: "our@auf.edu.ph",
      name: "Office of University Relations",
      role: Role.SUPER_ADMIN,
      passwordHash,
      isActive: true,
    },
  });
  console.log(`  ✓ super admin: ${superAdmin.email}`);

  // 2. One COLLEGE_ADMIN per college (collegeId = college slug from site.json).
  for (const college of siteData.colleges) {
    const email = `${college.slug}.admin@auf.edu.ph`;
    await prisma.user.upsert({
      where: { email },
      update: { collegeId: college.id, role: Role.COLLEGE_ADMIN },
      create: {
        email,
        name: `${college.shortName} Admin`,
        role: Role.COLLEGE_ADMIN,
        collegeId: college.id,   // college.id === college.slug in site.json
        passwordHash,
        isActive: true,
      },
    });
  }
  console.log(`  ✓ ${siteData.colleges.length} college admins`);

  // 3. Sample college post (PENDING_REVIEW) from the CCA admin.
  const ccaAdmin = await prisma.user.findUnique({
    where: { email: "cca.admin@auf.edu.ph" },
  });
  if (ccaAdmin) {
    await prisma.post.upsert({
      where: { originCollegeId_slug: { originCollegeId: "cca", slug: "welcome-from-cca" } },
      update: {},
      create: {
        type: PostType.NEWS,
        title: "Welcome from CCA",
        slug: "welcome-from-cca",
        excerpt: "Our college kicks off the new academic year.",
        content: emptyDoc,
        contentText: "Welcome to the new AUF website.",
        status: PostStatus.PENDING_REVIEW,
        submittedAt: new Date(),
        authorId: ccaAdmin.id,
        originCollegeId: "cca",
        collegeTags: { create: [{ collegeId: "cca" }] },
      },
    });
    console.log("  ✓ CCA sample post (PENDING_REVIEW)");
  }

  // 4. University-wide published post.
  const existingUniPost = await prisma.post.findFirst({
    where: { originCollegeId: null, slug: "auf-launches-new-website" },
  });
  if (!existingUniPost) {
    await prisma.post.create({
      data: {
        type: PostType.ANNOUNCEMENT,
        title: "AUF launches its new website",
        slug: "auf-launches-new-website",
        excerpt: "A modernised digital home for the Angeles University Foundation community.",
        content: emptyDoc,
        contentText: "A modernised digital home for the AUF community.",
        status: PostStatus.PUBLISHED,
        publishedAt: new Date(),
        isFeatured: true,
        authorId: superAdmin.id,
        originCollegeId: null,
      },
    });
    console.log("  ✓ University-wide sample post (PUBLISHED)");
  }

  // 5. Baseline site settings.
  await prisma.siteSetting.upsert({
    where: { key: "hero.title" },
    update: {},
    create: { key: "hero.title", value: siteData.university.tagline },
  });
  await prisma.siteSetting.upsert({
    where: { key: "contact.address" },
    update: {},
    create: { key: "contact.address", value: siteData.university.address },
  });

  console.log("✓ seed complete");
  console.log(`  super admin  → our@auf.edu.ph / ${SEED_PASSWORD}`);
  console.log(`  college admin example → cca.admin@auf.edu.ph / ${SEED_PASSWORD}`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
