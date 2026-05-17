import Footer from "@/components/public/Footer";

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col bg-white">
      <section className="relative overflow-hidden bg-[#f6f8ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,64,158,0.12),_transparent_55%)]" />
        <div className="absolute right-0 top-0 h-48 w-48 -translate-y-10 translate-x-8 rounded-full bg-[#EAD162]/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-52 w-52 -translate-x-10 translate-y-12 rounded-full bg-[#27409E]/15 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-16 pt-20">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#27409E]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#27409E]">
              External Affairs
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              News and Events
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              This page is being prepared. Please check back soon for AUF news,
              events, and international engagements.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#27409E]">
            Coming Soon
          </div>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We are preparing highlights on partnerships, delegations, and
            international collaborations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
