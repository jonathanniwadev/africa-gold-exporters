import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer Requirements",
  description:
    "Requirements for international buyers interested in sourcing gold including inquiry preparation, communication expectations, and transaction coordination.",
  alternates: {
    canonical: "/buyer-requirements",
  },
  openGraph: {
    title: "Buyer Requirements | Africa Gold Exporters",
    description:
      "Important information for serious gold buyers including inquiry preparation, communication clarity, and sourcing discussions.",
    url: "https://africagoldexporters.com/buyer-requirements",
    images: ["/opengraph-image.png"],
  },
};

export default function BuyerRequirementsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Buyer Information
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Buyer Requirements
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            To maintain professional transactions and serious discussions,
            buyers should understand the basic requirements involved in gold
            sourcing and export coordination.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Minimum Order</h2>
              <p className="mt-4 text-white/70">
                Most export discussions start from a minimum quantity that
                allows structured logistics and professional transaction
                coordination.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Serious Buyers</h2>
              <p className="mt-4 text-white/70">
                We prioritize discussions with refineries, trading companies,
                financial institutions, and serious investors with genuine
                sourcing interest.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Clear Communication</h2>
              <p className="mt-4 text-white/70">
                Buyers should clearly communicate quantity needs, destination
                country, and product form to help coordinate the sourcing
                process efficiently.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Verification Process</h2>
              <p className="mt-4 text-white/70">
                Transactions typically involve documentation review, assay
                confirmation, and structured export coordination before
                shipment.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Export Coordination</h2>
              <p className="mt-4 text-white/70">
                Export procedures depend on documentation preparation, logistics
                planning, and compliance with applicable regulations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Professional Process</h2>
              <p className="mt-4 text-white/70">
                Our goal is to facilitate structured communication between
                buyers and suppliers while maintaining professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Serious Buyer Inquiry
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to discuss a gold purchase?
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-white/70">
            If you are a refinery, trading company, bullion dealer, or investor,
            submit your inquiry and our team will respond with more details
            regarding sourcing discussions.
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
