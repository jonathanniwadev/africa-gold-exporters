import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Buy Gold From Africa",
  description:
    "Guide for international buyers on how gold sourcing discussions in Africa typically work, including inquiry stages, verification, assay, and export coordination.",
  alternates: {
    canonical: "/how-to-buy-gold-africa",
  },
  openGraph: {
    title: "How to Buy Gold From Africa | Africa Gold Exporters",
    description:
      "A structured guide for international buyers exploring gold sourcing opportunities in Africa.",
    url: "https://africagoldexporters.com/how-to-buy-gold-africa",
    images: ["/opengraph-image.png"],
  },
};

const steps = [
  {
    title: "Submit a Buyer Inquiry",
    text: "The buyer begins by outlining quantity requirements, destination country, and preferred product form such as gold bars, nuggets, or dust.",
  },
  {
    title: "Initial Sourcing Discussion",
    text: "Supplier communication begins to clarify product availability, sourcing structure, buyer expectations, and transaction flow.",
  },
  {
    title: "Review of Documentation",
    text: "Professional discussions may involve documentation review, company information, and process clarification before moving forward.",
  },
  {
    title: "Assay & Verification",
    text: "Gold purity and product details are generally confirmed through assay procedures or refinery-linked verification depending on the structure.",
  },
  {
    title: "Export Coordination",
    text: "Shipment planning, documentation flow, and logistics coordination are discussed based on destination and transaction requirements.",
  },
  {
    title: "Transaction Completion",
    text: "Once verification and export stages are aligned, the transaction proceeds according to the agreed process and buyer-seller coordination.",
  },
];

export default function HowToBuyGoldAfricaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Buyer Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            How to Buy Gold From Africa
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            International buyers interested in gold sourcing in Africa usually
            follow a structured process involving inquiry, sourcing discussions,
            documentation review, assay confirmation, and export coordination.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Understanding the sourcing process
          </h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Gold sourcing discussions in Africa are usually based on clear
            communication between buyers, suppliers, and export facilitators.
            Serious buyers generally prepare by identifying quantity needs,
            destination country, and product form before opening structured
            discussions.
          </p>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Depending on the transaction structure, buyers may also review
            documentation, discuss assay confirmation, and understand shipment
            coordination before proceeding further.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Typical buying steps</h2>

          <div className="mt-10 space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-white/70">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Important buyer considerations</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Clear Quantity Needs</h3>
              <p className="mt-4 text-white/70">
                Buyers should communicate quantity requirements clearly to help
                structure sourcing discussions effectively.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Verification Awareness</h3>
              <p className="mt-4 text-white/70">
                Documentation review and assay confirmation are important parts
                of professional sourcing discussions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Export Coordination</h3>
              <p className="mt-4 text-white/70">
                Shipment preparation, documentation flow, and destination
                planning are central to international gold transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to begin a sourcing discussion?
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-white/70">
            If you are a refinery, bullion dealer, trading company, or
            investment group interested in sourcing gold from Africa, submit
            your inquiry for further information.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-8 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Submit Buyer Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
