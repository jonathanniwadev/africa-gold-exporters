import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Transaction Process",
  description:
    "Understand the structured transaction process for gold sourcing including LOI, FCO, SPA, assay verification, shipment coordination and transaction completion.",
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
    text: "The buyer submits an inquiry or Letter of Intent (LOI) outlining quantity requirements, destination country and product interest.",
  },
  {
    title: "Full Corporate Offer (FCO)",
    text: "The seller issues a Full Corporate Offer describing product details, indicative terms and initial transaction structure.",
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
    text: "Export procedures involve documentation preparation, logistics planning and coordination aligned with applicable regulations.",
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">
            Transaction Flow
          </p>

          <h1
            className={`${cormorant.className} mt-4 max-w-4xl text-5xl leading-[0.95] sm:text-2xl lg:text-[4.6rem]`}
          >
            Gold Transaction Process
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            International gold sourcing discussions typically follows a
            structured transaction framework. Understanding this process helps
            buyers prepare for professional coordination, verification and
            documentation flow.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group flex gap-5 rounded-[30px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-[#d4af37]/35 hover:bg-white/[0.06]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-lg font-bold text-black shadow-[0_0_25px_rgba(212,175,55,0.18)]">
                  {index + 1}
                </div>

                <div className="pt-1">
                  <h2 className="text-2xl font-semibold text-white">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-4xl text-base leading-8 text-white/70">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">
            Serious Buyer Inquiry
          </p>

          <h2
            className={`${cormorant.className} mt-4 text-4xl leading-tight sm:text-5xl`}
          >
            Ready to discuss a gold transaction?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            If you represent a refinery, trading company, bullion dealer or
            investment group, submit your inquiry and our team will respond with
            more details regarding sourcing discussions.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-none border border-[#d4af37]/40 bg-gradient-to-r from-[#f3d46b] via-[#d4af37] to-[#b8871d] px-8 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.18)] transition duration-300 hover:scale-[1.02]"
          >
            Submit Buyer Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
