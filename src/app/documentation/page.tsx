import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Export Documentation",
  description:
    "Understand documentation flow for gold export transactions including verification records and process coordination.",
  alternates: {
    canonical: "/documentation",
  },
  openGraph: {
    title: "Gold Export Documentation | Africa Gold Exporters",
    description:
      "Documentation structure supporting international gold sourcing and export coordination.",
    url: "https://africagoldexporters.com/documentation",
    images: ["/opengraph-image.png"],
  },
};

const docs = [
  {
    title: "Export Documentation",
    text: "Documentation presented in line with transaction and export discussion requirements.",
  },
  {
    title: "Assay / Verification Records",
    text: "Product verification and quality-related documentation may be reviewed within the agreed process.",
  },
  {
    title: "Commercial Offer Documents",
    text: "Structured offer and agreement-stage documentation supports professional communication.",
  },
  {
    title: "Buyer Coordination Records",
    text: "Communication and process alignment are handled in a clear and organized manner.",
  },
];

export default function DocumentationPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
            Documentation
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold sm:text-5xl">
            Professional documentation overview for buyer confidence
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Serious buyers often expect a structured presentation of process and
            transaction-related documentation. This page helps communicate that
            your business operates in an organized and professional way.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {docs.map((doc) => (
              <div
                key={doc.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-[#d4af37]" />
                <h2 className="text-xl font-bold">{doc.title}</h2>
                <p className="mt-4 text-sm leading-8 text-white/70">
                  {doc.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a1a] to-[#101010] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
                Important Note
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Only use real documentation
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/70">
                Never upload fake certificates, fake export licenses, or false
                verification records. Only display or share documentation that
                is real and appropriate to your actual transaction process.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
              <h2 className="text-2xl font-bold">Need more details?</h2>
              <p className="mt-4 text-sm leading-8 text-white/70">
                Buyers can contact us directly for more information regarding
                process presentation, documentation flow, and inquiry handling.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
