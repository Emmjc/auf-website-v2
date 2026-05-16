"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  ClipboardList,
  CreditCard,
  FileCheck,
  MailCheck,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/public/Footer";

type StepItem = {
  id: string;
  title: string;
  description: string;
  note?: string;
  image?: string;
  link?: { label: string; href: string };
};

type StepBlock = {
  id: string;
  title: string;
  description: string;
  items?: StepItem[];
  highlight?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const stepOneItems: StepItem[] = [
  {
    id: "1.1",
    title: "Step 1.1",
    description:
      "Open an Internet browser and go to the AUF website. From the AUF webpage, scroll down to the quick links menu and click MyAU Live. This will direct you to AUF's School Information System (MyAU) portal.",
    link: { label: "https://www.auf.edu.ph/", href: "https://www.auf.edu.ph/" },
  },
  {
    id: "1.2",
    title: "Step 1.2",
    description: "From the MyAU Portal, click Parents and Students from the MyAU menu.",
    image: "/images/admissions/1.2.jpg",
  },
  {
    id: "1.3",
    title: "Step 1.3",
    description: "Click New User? Click here to Register.",
    image: "/images/admissions/1.3.jpg",
  },
  {
    id: "1.4",
    title: "Step 1.4",
    description: "Select program to register, then click Proceed Next.",
    image: "/images/admissions/1.4.jpg",
  },
  {
    id: "1.5",
    title: "Step 1.5",
    description: "Select New, then click Register.",
    note: "Note: Hover your mouse pointer to show the description of each status.",
    image: "/images/admissions/1.5.jpg",
  },
  {
    id: "1.6",
    title: "Step 1.6",
    description: "Select Course.",
    image: "/images/admissions/1.6.jpg",
  },
  {
    id: "1.7",
    title: "Step 1.7",
    description:
      "Fill out the application form or the General Student Personal Information Sheet (GSPIS) completely and accurately.",
    note: "Note: Items with asterisks are required to be filled out. Type N/A in items that are not applicable to you.",
    image: "/images/admissions/1.7.jpg",
  },
  {
    id: "1.7.1",
    title: "Step 1.7.1",
    description: "Continue completing the application details as shown.",
    image: "/images/admissions/1.7.1.jpg",
  },
  {
    id: "1.8",
    title: "Step 1.8",
    description: "To save the information click on the Click to Create Basic Information button.",
    image: "/images/admissions/1.8.jpg",
  },
  {
    id: "1.9",
    title: "Step 1.9",
    description:
      "System will generate Temporary ID Number. Create Password and click Proceed button to save.",
    note: "Note: Save your Temporary ID number and password. You will use them during the enrollment process. In case you forget, you may email us at MyAU@auf.edu.ph.",
    image: "/images/admissions/1.9.jpg",
  },
  {
    id: "1.10",
    title: "Step 1.10",
    description:
      "Beside the Sign In button, you will be advised to login to your account on a particular date to upload required documents for admissions.",
    image: "/images/admissions/1.10.jpg",
  },
];

const stepTwoItems: StepItem[] = [
  {
    id: "2.1.1",
    title: "Step 2.1.1",
    description:
      "Open an Internet browser and go to the AUF website. From the AUF webpage, scroll down to the quick links menu and click MyAU Live. This will direct you to AUF's School Information System (MyAU) portal.",
    link: { label: "https://www.auf.edu.ph/", href: "https://www.auf.edu.ph/" },
    image: "/images/admissions/2.1.1.jpg",
  },
  {
    id: "2.1.2",
    title: "Step 2.1.2",
    description: "From the MyAU Portal, click Parents and Students from the MyAU menu.",
    image: "/images/admissions/2.1.2.jpg",
  },
  {
    id: "2.1.3",
    title: "Step 2.1.3",
    description:
      "Login to your account by typing your Temporary ID Number in the Username text box and click Proceed Next.",
    image: "/images/admissions/2.1.3.jpg",
  },
  {
    id: "2.1.4",
    title: "Step 2.1.4",
    description:
      "Type the password that you have created in Step 1.9 in the box Password and click Login Now.",
    image: "/images/admissions/2.1.4.jpg",
  },
  {
    id: "2.1.5",
    title: "Step 2.1.5",
    description:
      "Once you have successfully logged in, go to Online Advising Dashboard and click Manage Requirement.",
    note: "Note: If there is no Manage Requirement, please email the Office of Admissions at admissions@auf.edu.ph.",
    image: "/images/admissions/2.1.5.jpg",
  },
  {
    id: "2.1.5.1",
    title: "Step 2.1.5.1",
    description:
      "If prompted, review the requirement list before uploading your documents.",
    image: "/images/admissions/2.1.5.1.jpg",
  },
  {
    id: "2.1.6",
    title: "Step 2.1.6",
    description:
      "To upload requirements, click the icon found at the next column under the list of pending requirements. Then click to upload the requirements in the system.",
    image: "/images/admissions/2.1.6.jpg",
  },
  {
    id: "2.1.7",
    title: "Step 2.1.7",
    description:
      "A new window will appear allowing you to upload the file. After choosing the file, click Upload File.",
    note: "Note: Please prepare documents in PDF or JPG format for uploading.",
    image: "/images/admissions/2.1.7.jpg",
  },
];

const steps: StepBlock[] = [
  {
    id: "step-1",
    title: "Step 1: Student Online Registration",
    description: "Create your MyAU account and complete the GSPIS application form.",
    items: stepOneItems,
  },
  {
    id: "step-2",
    title: "Step 2: Complying with documentary requirements for admissions",
    description: "Log back into MyAU and upload the required admission documents.",
    items: stepTwoItems,
  },
  {
    id: "step-3",
    title: "Step 3: Pay the application fee",
    description:
      "Pay the application fee at the AUF Cashier only. Specific payment instructions will be sent to your MyAU account.",
    highlight: "Payment instructions will arrive in your MyAU account.",
    icon: CreditCard,
  },
  {
    id: "step-4",
    title: "Step 4: Wait for the test permit",
    description:
      "Wait for the test permit, test schedule, and specific instructions for the onsite in your MyAU account.",
    highlight: "Check MyAU regularly for your test permit and schedule.",
    icon: CalendarCheck,
  },
  {
    id: "step-5",
    title: "Step 5: Receive examination results",
    description: "Receive the examination results through your MyAU account.",
    highlight: "Results are released in MyAU once available.",
    icon: MailCheck,
  },
];

const criteriaGroups = [
  {
    id: "kinder",
    title: "Kinder",
    items: [
      "Must be 4 years old (Kinder 1) / 5 years old (Kinder 2) by October 31.",
      "Favorable recommendations from the grade school teacher in the observation-interview.",
      "Upon application: Birth Certificate (PSA or issued by the country of origin).",
      "For foreign students only - Passport data and visa pages.",
      "Other documents upon enrollment: 2x2 picture with name (clear and well-defined, white background).",
    ],
  },
  {
    id: "grade-1-12",
    title: "Grade 1 to Grade 12",
    items: [
      "Grade 1 (New): Must be 6 years old by October 31; must have Learner's Reference Number (LRN) from the previous school; must have Kindergarten Completion Certificate or report card showing K2 is finished; favorable recommendation from the teacher; favorable assessment results.",
      "Grade 7 and Grade 11 (New): Must have a General Weighted Average (GWA) of at least 80; no final grade below 80; favorable recommendation from the guidance counselor or class adviser; favorable admissions test results.",
      "Grade 2 to 5 and Grade 8 to 9 (Transferees): Must have a GWA of at least 85; no final grade below 80; favorable recommendation from the guidance counselor or class adviser; favorable admissions test results.",
      "Grade 6, 10, and 12 Transferees: Must have a GWA of at least 90; no final grade below 80; favorable recommendation from the guidance counselor or class adviser; favorable admissions test results.",
      "Additional requirements for Grade 12: Must be evaluated and interviewed by the SHS Assistant Principal; must have a signed study plan (after discussion with parent/guardian and student).",
      "Transferees within the Academic Year: Must have a GWA of at least 90 with no INC or DRP marks; no grade below 85 for all subjects; favorable recommendation from the guidance counselor and class adviser.",
      "Admissions Requirements upon application for exam: Previous grade level Report Card (example: applying for Grade 7 requires Grade 6 report card; Grade 5 may be uploaded if Grade 6 is not yet completed); Birth Certificate (PSA or issued by the country of origin); recommendation form from the adviser or guidance counselor; for foreign students only - Passport data and visa pages.",
      "Other documents upon enrollment: 2x2 picture with name (clear and well-defined, white background).",
    ],
  },
  {
    id: "college-freshmen",
    title: "College (Freshmen)",
    items: [
      "Upon AUFCAT application: Previous grade level Report Card (example: applying for 1st year college requires Grade 12 report card; Grade 11 report card may be submitted if Grade 12 is not yet completed).",
      "Birth Certificate (PSA or issued by the country of origin).",
      "Recommendation form from the adviser or guidance counselor.",
      "For foreign students only - Passport data and visa pages, notarized affidavit of support, and police clearance (if residing outside the Philippines).",
      "Additional requirements: Straight Bachelor of Arts in Psychology - Master of Arts in Psychology (SABPsych-MAPsych) requires minimum GWA of 88 in Grade 12 (Grade 11 report card may be used if Grade 12 is not yet available, as long as Grade 11 GWA is at least 88).",
      "BS Human Biology: Must have an average of at least 88 in STEM or Health Sciences specialized subjects (Grade 11 and if available 1st Term of Grade 12 for graduating students / Grade 11 and Grade 12 for graduates); must obtain at least a High Average Rating in the AUF College Admissions Test (AUFCAT); favorable recommendation from guidance counselor or adviser; favorable psychological assessment results; favorable interview results.",
      "BS Nursing: Must have a STEM SHS Strand; other documents upon enrollment: 2x2 picture with name (clear and well-defined, white background).",
    ],
  },
  {
    id: "college-transferee",
    title: "College (Transferee)",
    items: [
      "Upon AUFCAT application: Transcript of Records from the school last attended; Certificate of Eligibility to Transfer/Honorable Dismissal; Birth Certificate (PSA or issued by the country of origin); recommendation form from the adviser or guidance counselor.",
      "For foreign students only - Passport data and visa pages, affidavit of support, and police clearance (if residing outside the Philippines).",
      "Other documents upon enrollment: 2x2 picture with name (clear and well-defined, white background).",
    ],
  },
  {
    id: "second-coursers",
    title: "Second Coursers (Second College Degree)",
    items: [
      "Applicants for BS Clinical Pharmacy upon application: BS Pharmacy Transcript of Records; PRC License as a Pharmacist; Birth Certificate (PSA or issued by the country of origin); recommendation form from the adviser or guidance counselor or previous employer.",
      "Other documents upon enrollment: 2x2 picture with name (clear and well-defined, white background).",
      "Other college courses upon application: Bachelor's degree Transcript of Records; Birth Certificate (PSA or issued by the country of origin); recommendation form from the adviser or guidance counselor or previous employer.",
      "For foreign students only - Passport data and visa pages, notarized affidavit of support, and police clearance (if residing outside the Philippines).",
      "Other documents upon enrollment: 2x2 picture with name (clear and well-defined, white background).",
      "Professional Certificate Course in Teaching: Bachelor's degree Transcript of Records with at least 80 GWA; Birth Certificate (PSA or issued by the country of origin); 2x2 picture with name (clear and well-defined, white background).",
      "Note: Must have earned the prescribed number of units (i.e., 60 units) of specialization. The courses taken are subject to the crediting policy.",
    ],
  },
  {
    id: "school-of-law",
    title: "School of Law",
    items: [
      "Bachelor's degree Transcript of Records.",
      "Birth Certificate (PSA or issued by the country of origin).",
      "Marriage Certificate - for females who prefer to use their married names.",
      "2x2 picture with name (clear and well-defined, white background).",
      "For foreign students only - Passport data and visa pages, notarized affidavit of support, and police clearance (if residing outside the Philippines).",
      "Official receipt/payment slip for the admissions application fee.",
      "Please pay the application fee of Php 500 at the AUF Cashier, Accounting Office, Ground Floor Angeles Hall (beside the chapel), AUF Main Campus.",
      "After applying online, uploading the requirements, and paying the application fee, submit the hard copies of your requirements and official receipt/payment slip to the School of Law.",
      "The SOL office is open Monday to Friday, 1:00 pm to 5:00 pm.",
      "School of Law (Room 213), AUF Professional Schools Building, MacArthur Highway, 2009 Angeles City, Philippines.",
    ],
  },
  {
    id: "school-of-medicine",
    title: "School of Medicine",
    items: [
      "Bachelor's degree Transcript of Records.",
      "Bachelor's degree Diploma or Certification of Graduation.",
      "Bachelor's degree Certification of General Weighted Average (GWA).",
      "Certificate of Eligibility to Transfer to be issued by the school where the applicant has earned Bachelor's Degree (for non-AUF graduates only).",
      "Note: The School of Medicine does not accept transfer students. Please discontinue your application if you have already started MD in another medical school.",
      "National Medical Admission Test (NMAT) results.",
      "Birth Certificate (PSA or issued by the country of origin).",
      "Marriage Certificate - for females who prefer to use their married names.",
      "Digital ID picture (clear and well-defined, white background).",
      "For foreign students only - Passport data and visa pages, notarized affidavit of support, and police clearance (if residing outside the Philippines).",
      "Two Good Moral Character Certifications: one from the dean and one from the Office of Student Affairs or Guidance and Counseling Services.",
    ],
  },
  {
    id: "graduate-school",
    title: "Graduate School",
    items: [
      "Bachelor's degree Transcript of Records - applicants for Master's degree.",
      "Master's degree Transcript of Records - applicants for Doctoral degree.",
      "Bachelor's degree Diploma or Certification of Graduation.",
      "Personal Statement for Pursuing Graduate Studies - download this form to see the instruction and upload your Personal Statement.",
      "Birth Certificate (PSA or issued by the country of origin).",
      "Marriage Certificate - for females who prefer to use their married names.",
      "Digital ID picture (clear and well-defined, white background).",
      "For foreign students only - Passport data and visa pages, notarized affidavit of support, and police clearance (if residing outside the Philippines).",
      "Two Recommendation Forms accomplished by any of the following: current or former professors, current or former employers.",
      "AUF Admissions Office will directly send the Recommendation Forms link to your recommenders. Enter their names and email addresses in your General Student Personal Information Sheet as you apply through MyAU.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function StepItemCard({ item }: { item: StepItem }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#27409E]">
          {item.title}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {item.description}
        </p>
        {item.link ? (
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#27409E]"
          >
            {item.link.label}
            <span aria-hidden>→</span>
          </a>
        ) : null}
        {item.note ? (
          <div className="mt-4 rounded-2xl border border-[#EAD162]/60 bg-[#EAD162]/20 px-4 py-3 text-xs text-[#8c6d12]">
            {item.note}
          </div>
        ) : null}
      </div>

      {item.image ? (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative h-40 w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-inner transition hover:border-[#27409E]/40 sm:h-44"
            aria-label={`Open ${item.title} image preview`}
          >
            <Image
              src={item.image}
              alt={`${item.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
              View image
            </div>
          </button>
          <div className="text-xs text-slate-500">Tap to enlarge.</div>
        </div>
      ) : null}

      {item.image && isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} image preview`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
              <span>{item.title}</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:border-slate-300"
              >
                Close
              </button>
            </div>
            <div className="relative h-[60vh] bg-slate-100">
              <Image
                src={item.image}
                alt={`${item.title} screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function HighlightStep({ step }: { step: StepBlock }) {
  const Icon = step.icon ?? ClipboardList;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27409E]/10 text-[#27409E]">
          <Icon className="size-5" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">{step.description}</p>
          {step.highlight ? (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {step.highlight}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function ApplicationGuidePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col bg-white">
      <section className="relative overflow-hidden bg-[#f6f8ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,64,158,0.12),_transparent_55%)]" />
        <div className="absolute right-0 top-0 h-48 w-48 -translate-y-10 translate-x-8 rounded-full bg-[#EAD162]/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-52 w-52 -translate-x-10 translate-y-12 rounded-full bg-[#27409E]/15 blur-3xl" />

        <motion.div
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16 pt-20"
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={containerVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#27409E]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#27409E]">
              <Sparkles className="size-3.5" />
              Admission
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Online Admissions Application Guide
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Follow the step-by-step procedure below to complete your AUF online admission
              application, submit requirements, and track your results in MyAU.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {steps.map((step) => (
              <a
                key={step.id}
                href={`#${step.id}`}
                className="rounded-full border border-[#27409E]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#27409E] transition hover:border-[#27409E]/40"
              >
                {step.title.split(":")[0]}
              </a>
            ))}
            <a
              href="#criteria"
              className="rounded-full border border-[#EAD162]/60 bg-[#EAD162]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8c6d12] transition hover:border-[#EAD162]"
            >
              Admissions Criteria
            </a>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-16">
          {steps.map((step, stepIndex) => (
            <motion.div
              key={step.id}
              id={step.id}
              className="space-y-6 scroll-mt-28"
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: stepIndex * 0.05 }}
              variants={containerVariants}
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.36em] text-[#27409E]">
                  Admission Guide
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  {step.description}
                </p>
              </div>

              {step.items ? (
                <div className="grid gap-6">
                  {step.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.id}
                      initial={reduceMotion ? false : "hidden"}
                      whileInView={reduceMotion ? undefined : "visible"}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: itemIndex * 0.04 }}
                      variants={itemVariants}
                    >
                      <StepItemCard item={item} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  variants={itemVariants}
                >
                  <HighlightStep step={step} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="criteria" className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.36em] text-[#27409E]">
              Admissions Criteria and Documents
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              List of admissions criteria and documents for AY 2026-2027
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Review the criteria and document requirements based on your program or level.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {criteriaGroups.map((group, index) => (
              <motion.details
                key={group.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.03 }}
                variants={itemVariants}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900">
                  {group.title}
                  <span className="text-slate-400 transition group-open:rotate-180">▾</span>
                </summary>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
                  {group.items.map((item, itemIndex) => (
                    <li key={`${group.id}-${itemIndex}`} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#27409E]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.details>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#27409E]/10 bg-white p-6 text-center text-sm text-slate-600">
            ------End of Admissions Process-----
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
