"use client";

import { useMemo, useState } from "react";
import { Phone, Search } from "lucide-react";

import Footer from "@/components/public/Footer";

const quickContacts = {
  trunkline: "(63) (045) 625-2888",
  smart: "09190597245",
  globe: "09175626758 / 09175626766",
};

const officeDirectory = [
  {
    inquiry: "Academic Partnerships, Benchmarking Activities",
    office: "Office of the Vice President for External Affairs",
    emails: ["connect@auf.edu.ph"],
    facebook: "https://www.facebook.com/aufconnect",
    telephone: "local 1783",
  },
  {
    inquiry: "Admission Requirements and Procedures",
    office: "Office of the University Registrar and Admissions",
    emails: ["registrar@auf.edu.ph", "admissionsofficer@auf.edu.ph"],
    facebook: "https://www.facebook.com/MagingAngelenean",
    telephone: "local 1707",
  },
  {
    inquiry: "Industry Partnerships, Placement Services, Alumni Homecoming",
    office: "Alumni Affairs and Placement Services",
    emails: ["alumni@auf.edu.ph", "alumni.director@auf.edu.ph"],
    facebook: "https://www.facebook.com/angelenean",
    telephone: "local 1740",
  },
  {
    inquiry: "Media/Public Relations Inquiries, Marketing, Campus Tour, AUF Museums Tour",
    office: "Office of University Relations",
    emails: ["universityrelations@auf.edu.ph"],
    facebook: "https://www.facebook.com/aufconnect",
    telephone: "local 1724",
  },
  {
    inquiry: "University Dormitories",
    office: "University Residences",
    emails: ["jervoso.elizabeth@auf.edu.ph"],
    facebook: "https://www.facebook.com/aufconnect",
    telephone: "local 1758",
  },
  {
    inquiry: "Library Resources",
    office: "University Library",
    emails: ["library@auf.edu.ph", "aufuldirector@auf.edu.ph"],
    facebook: "https://www.facebook.com/AUFUniversityLibrary",
    telephone: "local 1753",
  },
  {
    inquiry: "Community Extension",
    office: "Center for Christian Formation & Praxis",
    emails: ["ccfp@auf.edu.ph"],
    facebook: "https://www.facebook.com/aufconnect",
    telephone: "local 1718",
  },
  {
    inquiry: "Research Collaborations",
    office: "Office of the Vice President for Research & Innovation",
    emails: ["ovpri@auf.edu.ph"],
    facebook: "https://www.facebook.com/aufovpri",
    telephone: "local 1764",
  },
  {
    inquiry: "Suppliers",
    office: "Purchasing and Supplies Office",
    emails: ["purchasing@auf.edu.ph", "po@auf.edu.ph"],
    facebook: "https://www.facebook.com/aufconnect",
    telephone: "local 1729",
  },
  {
    inquiry: "Request for Cultural Performance",
    office: "Center for Culture and the Arts",
    emails: ["cca@auf.edu.ph"],
    facebook: "https://www.facebook.com/profile.php?id=61572912610566",
    telephone: "local 1746",
  },
];

const collegeDirectory = [
  {
    name: "College of Allied Medical Professions",
    emails: ["camp@auf.edu.ph", "camp.admissions@auf.edu.ph"],
    telephone: "local 1710",
    mobiles: [{ label: "Mobile", value: "(+63)947-480-5508" }],
  },
  {
    name: "College of Arts and Sciences",
    emails: ["cas@auf.edu.ph", "cas.admissions@auf.edu.ph"],
    telephone: "local 1915",
    mobiles: [
      { label: "Psychology", value: "(+63)998-999-8186" },
      { label: "Biology", value: "(+63)917-590-2627" },
      { label: "AB Communication", value: "(+63)956-754-7163" },
    ],
  },
  {
    name: "College of Business Administration",
    emails: ["cba@auf.edu.ph", "cba.admissions@auf.edu.ph"],
    telephone: "local 1776",
    mobiles: [
      { label: "General Inquiries", value: "(+63)919-264-1793" },
      { label: "Marketing Management", value: "(+63)908-862-7937" },
      { label: "Accountancy", value: "(+63)917-773-2809" },
      { label: "Tourism Management", value: "(+63)905-330-4303" },
      { label: "Hospitality Management", value: "(+63)908-868-0552" },
      {
        label: "Management & Entrepreneurship / Human Resource Management",
        value: "(+63)928-524-0951",
      },
      { label: "Legal Management", value: "(+63)933-868-0409" },
    ],
  },
  {
    name: "College of Education",
    emails: ["ced@auf.edu.ph", "ced.admissions@auf.edu.ph"],
    telephone: "local 1903",
    mobiles: [
      { label: "Mobile", value: "(+63)919-635-8645" },
      { label: "Mobile", value: "(+63)917-519-2620" },
    ],
  },
  {
    name: "College of Criminal Justice Education",
    emails: ["ccje@auf.edu.ph", "ccje.admissions@auf.edu.ph"],
    telephone: "local 1906",
    mobiles: [
      { label: "Mobile", value: "(+63)923-139-9354" },
      { label: "Mobile", value: "(+63)917-511-4322" },
      { label: "Mobile", value: "(+63)998-341-7882" },
    ],
  },
  {
    name: "College of Engineering and Architecture",
    emails: ["cea@auf.edu.ph", "cea.admissions@auf.edu.ph"],
    telephone: "local 1909",
    mobiles: [
      { label: "General Inquiries", value: "(+63)917-513-4112" },
      { label: "General Inquiries", value: "(+63)926-657-6463" },
      { label: "Architecture", value: "(+63)917-158-7870" },
      { label: "Civil Engineering", value: "(+63)926-657-6463" },
      { label: "Electronics Engineering", value: "(+63)926-442-8587" },
      { label: "Computer Engineering", value: "(+63)926-554-9496" },
    ],
  },
  {
    name: "College of Computer Studies",
    emails: ["ccs@auf.edu.ph", "ccs.admissions@auf.edu.ph"],
    telephone: "local 1912",
    mobiles: [{ label: "Mobile", value: "(+63)961-061-2987" }],
  },
  {
    name: "College of Nursing",
    emails: ["con@auf.edu.ph", "con.admissions@auf.edu.ph"],
    telephone: "local 1711",
    mobiles: [{ label: "Mobile", value: "(+63)999-411-1943" }],
  },
  {
    name: "Graduate School",
    emails: ["graduateschool@auf.edu.ph"],
    telephone: "local 1780",
    mobiles: [{ label: "Mobile", value: "(+63)995-845-2270" }],
  },
  {
    name: "Integrated School",
    emails: ["is@auf.edu.ph", "is.admissions@auf.edu.ph"],
    telephone: "local 1801",
    mobiles: [],
  },
  {
    name: "School of Medicine",
    emails: ["som@auf.edu.ph"],
    telephone: "local 1709",
    mobiles: [],
  },
  {
    name: "School of Law",
    emails: ["law@auf.edu.ph"],
    telephone: "local 1778",
    mobiles: [],
  },
];

const toTel = (value: string) => `tel:${value.replace(/[^+\d]/g, "")}`;

const filterText = (value: string) => value.toLowerCase();

export default function DirectoryPage() {
  const [officeQuery, setOfficeQuery] = useState("");
  const [collegeQuery, setCollegeQuery] = useState("");

  const filteredOffices = useMemo(() => {
    const query = filterText(officeQuery);
    if (!query) return officeDirectory;
    return officeDirectory.filter((item) => {
      const combined = [
        item.inquiry,
        item.office,
        item.emails.join(" "),
        item.facebook,
        item.telephone,
      ]
        .join(" ")
        .toLowerCase();
      return combined.includes(query);
    });
  }, [officeQuery]);

  const filteredColleges = useMemo(() => {
    const query = filterText(collegeQuery);
    if (!query) return collegeDirectory;
    return collegeDirectory.filter((item) => {
      const combined = [
        item.name,
        item.emails.join(" "),
        item.telephone,
        item.mobiles.map((mobile) => `${mobile.label} ${mobile.value}`).join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return combined.includes(query);
    });
  }, [collegeQuery]);

  return (
    <div className="flex flex-col bg-white">
      <section className="relative overflow-hidden bg-[#f6f8ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,64,158,0.12),_transparent_55%)]" />
        <div className="absolute right-0 top-0 h-48 w-48 -translate-y-10 translate-x-8 rounded-full bg-[#EAD162]/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-52 w-52 -translate-x-10 translate-y-12 rounded-full bg-[#27409E]/15 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16 pt-20">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#27409E]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#27409E]">
              Connect
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Directory
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Reach the right AUF office quickly. Search by inquiry, college, or
              department to find the best contact for your concern.
            </p>
          </div>

          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#27409E]/10 text-[#27409E]">
                <Phone className="size-4" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Trunkline
                </div>
                <a
                  href={toTel(quickContacts.trunkline)}
                  className="text-sm font-semibold text-slate-900"
                >
                  {quickContacts.trunkline}
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Smart
              </div>
              <a
                href={toTel(quickContacts.smart)}
                className="text-sm font-semibold text-slate-900"
              >
                {quickContacts.smart}
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Globe
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {quickContacts.globe.split("/").map((number) => {
                  const trimmed = number.trim();
                  return (
                    <span key={trimmed} className="block">
                      <a href={toTel(trimmed)}>{trimmed}</a>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
              Nature of Inquiry
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              University Offices Directory
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Start here for admissions, partnerships, media inquiries, and
              university-wide services.
            </p>
          </div>
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              value={officeQuery}
              onChange={(event) => setOfficeQuery(event.target.value)}
              placeholder="Search office or inquiry"
              className="w-full rounded-full border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-700 shadow-sm focus:border-[#27409E] focus:outline-none focus:ring-2 focus:ring-[#27409E]/20"
            />
          </div>
        </div>

        <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="px-5 py-4">Nature of Inquiry</th>
                <th className="px-5 py-4">Office to Contact</th>
                <th className="px-5 py-4">Email Address</th>
                <th className="px-5 py-4">Facebook Page</th>
                <th className="px-5 py-4">Telephone Number</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOffices.map((item) => (
                <tr key={item.inquiry} className="align-top">
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {item.inquiry}
                  </td>
                  <td className="px-5 py-4 text-slate-700">{item.office}</td>
                  <td className="px-5 py-4">
                    <div className="grid gap-1">
                      {item.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="text-sm font-semibold text-[#27409E]"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <a
                      href={item.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#27409E]"
                    >
                      {item.facebook.replace("https://", "")}
                    </a>
                  </td>
                  <td className="px-5 py-4 text-slate-700">{item.telephone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 lg:hidden">
          {filteredOffices.map((item) => (
            <div
              key={item.inquiry}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">{item.inquiry}</div>
              <div className="mt-2 text-sm text-slate-600">{item.office}</div>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Email Address
                  </div>
                  <div className="mt-1 grid gap-1">
                    {item.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-[#27409E]"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Facebook Page
                  </div>
                  <a
                    href={item.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#27409E]"
                  >
                    {item.facebook.replace("https://", "")}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Telephone Number
                  </div>
                  <div className="text-sm text-slate-700">{item.telephone}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 pb-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
              College and School Concerns
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Colleges and Schools Directory
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Contact each college for admissions, program inquiries, and
              department-specific concerns.
            </p>
          </div>
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              value={collegeQuery}
              onChange={(event) => setCollegeQuery(event.target.value)}
              placeholder="Search college or program"
              className="w-full rounded-full border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-700 shadow-sm focus:border-[#27409E] focus:outline-none focus:ring-2 focus:ring-[#27409E]/20"
            />
          </div>
        </div>

        <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="px-5 py-4">College / School</th>
                <th className="px-5 py-4">Email Address</th>
                <th className="px-5 py-4">Telephone No.</th>
                <th className="px-5 py-4">Mobile No.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredColleges.map((item) => (
                <tr key={item.name} className="align-top">
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-5 py-4">
                    <div className="grid gap-1">
                      {item.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="text-sm font-semibold text-[#27409E]"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-700">{item.telephone}</td>
                  <td className="px-5 py-4">
                    {item.mobiles.length ? (
                      <div className="grid gap-1">
                        {item.mobiles.map((mobile) => (
                          <div key={`${item.name}-${mobile.label}-${mobile.value}`}>
                            <div className="text-xs text-slate-500">{mobile.label}</div>
                            <a
                              href={toTel(mobile.value)}
                              className="text-sm font-semibold text-slate-700"
                            >
                              {mobile.value}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm text-slate-500">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 lg:hidden">
          {filteredColleges.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">{item.name}</div>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Email Address
                  </div>
                  <div className="mt-1 grid gap-1">
                    {item.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-[#27409E]"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Telephone No.
                  </div>
                  <div className="text-sm text-slate-700">{item.telephone}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Mobile No.
                  </div>
                  {item.mobiles.length ? (
                    <div className="mt-1 grid gap-2">
                      {item.mobiles.map((mobile) => (
                        <div key={`${item.name}-${mobile.label}-${mobile.value}`}>
                          <div className="text-xs text-slate-500">{mobile.label}</div>
                          <a
                            href={toTel(mobile.value)}
                            className="text-sm font-semibold text-slate-700"
                          >
                            {mobile.value}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500">Not available</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
