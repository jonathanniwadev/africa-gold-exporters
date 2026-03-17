import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Gold Export From Uganda Works | Buyer Guide",
  description:
    "Understand how gold export from Uganda works including sourcing discussions, documentation review, assay verification and secure export coordination for international buyers.",
  keywords: [
    "gold export Uganda",
    "buy gold Uganda",
    "Uganda gold suppliers",
    "how gold export works Uganda",
    "gold export process Africa",
    "Uganda gold export guide",
  ],
  alternates: {
    canonical: "https://africagoldexporters.com/how-gold-export-uganda-works",
  },
  openGraph: {
    title: "How Gold Export From Uganda Works",
    description:
      "A structured guide explaining how gold sourcing and export coordination works in Uganda.",
    url: "https://africagoldexporters.com/how-gold-export-uganda-works",
    siteName: "Africa Gold Exporters",
    images: ["/opengraph-image.png"],
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const steps = [
  "Buyer submits inquiry with product interest and quantity",
  "Initial sourcing discussion and product clarification",
  "Documentation expectations and compliance review",
  "Assay and purity verification discussion",
  "Export coordination and shipment planning",
];

export default function UgandaExportPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Uganda Gold Guide
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
            How Gold Export From Uganda Works
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-8">
            Gold export from Uganda follows a structured process involving buyer
            inquiry, documentation review, assay verification and coordinated
            shipment. Understanding this process helps international buyers move
            forward with clarity and confidence.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-16 space-y-6 text-white/70 leading-8">
          <p>
            Many international buyers researching{" "}
            <Link
              href="/gold-suppliers-uganda"
              className="text-[#f3d46b] underline"
            >
              gold suppliers in Uganda
            </Link>{" "}
            want to understand how the export process actually works.
          </p>

          <p>
            Gold export is not a simple purchase. It involves multiple stages
            including sourcing discussions, verification procedures and secure
            logistics coordination before shipment.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-3xl font-bold">
            Main stages of gold export from Uganda
          </h2>

          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl"
              >
                <div className="h-10 w-10 flex items-center justify-center bg-[#d4af37] text-black font-bold rounded-full">
                  {index + 1}
                </div>
                <p className="text-white/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 space-y-6 text-white/70 leading-8">
          <h2 className="text-3xl font-bold text-white">
            Documentation and compliance
          </h2>

          <p>
            Gold export discussions include documentation review and compliance
            awareness. Buyers typically review export procedures, licensing
            structure and shipment coordination before moving forward.
          </p>

          <p>
            You can explore more details in our{" "}
            <Link href="/export-procedure" className="text-[#f3d46b] underline">
              export procedure guide
            </Link>{" "}
            and{" "}
            <Link
              href="/verification-compliance"
              className="text-[#f3d46b] underline"
            >
              verification and compliance section
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ASSAY */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 py-16 space-y-6 text-white/70 leading-8">
          <h2 className="text-3xl font-bold text-white">
            Assay and purity verification
          </h2>

          <p>
            Assay verification is a key step in gold transactions. Buyers need
            clarity on purity levels and testing procedures before export
            coordination.
          </p>

          <p>
            Understanding{" "}
            <Link href="/purity-standards" className="text-[#f3d46b] underline">
              gold purity standards
            </Link>{" "}
            helps buyers evaluate product quality during sourcing discussions.
          </p>
        </div>
      </section>

      {/* FINAL */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 space-y-6 text-white/70 leading-8">
          <h2 className="text-3xl font-bold text-white">Final understanding</h2>

          <p>
            Gold export from Uganda is a structured, multi-stage process. Buyers
            who approach it with preparation, clear communication and awareness
            of verification steps are better positioned for serious sourcing
            discussions.
          </p>

          <p>
            If you are new to African sourcing, you can also review our{" "}
            <Link
              href="/how-to-buy-gold-africa"
              className="text-[#f3d46b] underline"
            >
              complete guide on how to buy gold from Africa
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 text-center py-20">
        <h2 className="text-3xl font-bold">Start your sourcing discussion</h2>

        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Submit your inquiry with product interest, quantity and destination
          country to begin a structured gold sourcing discussion.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="bg-[#d4af37] text-black px-6 py-3 rounded-2xl font-semibold"
          >
            Submit Buyer Inquiry
          </Link>

          <Link
            href="/buyer-requirements"
            className="border border-white/20 px-6 py-3 rounded-2xl"
          >
            View Buyer Requirements
          </Link>
        </div>
      </section>
    </main>
  );
}
