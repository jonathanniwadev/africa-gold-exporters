import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transaction Process",
  description:
    "Understand the structured transaction process for gold sourcing including LOI, FCO, SPA, assay verification, shipment coordination, and transaction completion.",
  alternates: {
    canonical: "/transaction-process",
  },
  openGraph: {
    title: "Gold Transaction Process | Africa Gold Exporters",
    description:
      "Overview of the structured gold sourcing and export transaction flow for international buyers.",
    url: "https://africagoldexporters.com/transaction-process",
    images: ["/opengraph-image.png"],
  },
};

const steps = [
  {
    title: "Buyer Inquiry / LOI",
    text: "The buyer submits an inquiry or Letter of Intent (LOI) outlining quantity requirements, destination country, and product interest.",
  },
  {
    title: "Full Corporate Offer (FCO)",
    text: "The seller issues a Full Corporate Offer describing product details, indicative terms, and initial transaction structure.",
  },
  {
    title: "Sales & Purchase Agreement (SPA)",
    text: "Once discussions progress, the buyer and seller review and sign the Sales & Purchase Agreement outlining the transaction framework.",
  },
  {
    title: "Assay & Verification",
    text: "Gold purity confirmation typically involves professional assay verification or refinery testing depending on the transaction structure.",
  },
  {
    title: "Export Coordination",
    text: "Export procedures involve documentation preparation, logistics planning, and coordination aligned with applicable regulations.",
  },
  {
    title: "Shipment & Completion",
    text: "After verification and coordination stages, shipment and transaction completion proceed according to the agreed structure.",
  },
];

export default function TransactionProcessPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Transaction Flow
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Gold Transaction Process
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            International gold sourcing discussions typically follow a
            structured transaction framework. Understanding this process helps
            buyers prepare for professional coordination and documentation flow.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-black">
                  {index + 1}
                </div>

                <div>
                  <h2 className="text-xl font-semibold">{step.title}</h2>
                  <p className="mt-3 text-white/70">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Serious Buyer Inquiry
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to discuss a gold transaction?
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-white/70">
            If you represent a refinery, trading company, bullion dealer, or
            investment group, submit your inquiry and our team will respond with
            more details regarding sourcing discussions.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-8 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Submit Buyer Inquiry
          </a>
        </div>
      </section>
    </main>
  );
}
