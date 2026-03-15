import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Export Procedure",
  description:
    "Understand the gold export process including LOI, FCO, SPA, assay verification, and shipment coordination.",
  alternates: {
    canonical: "/export-procedure",
  },
  openGraph: {
    title: "Gold Export Procedure | Africa Gold Exporters",
    description:
      "Learn the structured gold export process for international buyers from inquiry to shipment.",
    url: "https://africagoldexporters.com/export-procedure",
    images: ["/opengraph-image.png"],
  },
};

const steps = [
  {
    title: "Buyer Inquiry",
    text: "International buyers submit an inquiry with their requirements including quantity, product type, and destination country. Our team reviews the request and responds with availability and next steps.",
  },
  {
    title: "Supplier Verification",
    text: "We work with verified suppliers and ensure that required company documentation and supplier credentials are available before proceeding.",
  },
  {
    title: "Agreement & Contract",
    text: "Both parties agree on quantity, purity, pricing terms and delivery conditions. A Sales and Purchase Agreement (SPA) is prepared outlining the transaction details.",
  },
  {
    title: "Gold Assay & Documentation",
    text: "Gold purity is verified through an assay process. Export documentation is prepared including export permits, certificate of origin, and commercial invoice.",
  },
  {
    title: "Payment Terms",
    text: "Payment methods vary depending on the agreement between buyer and supplier and may include bank transfer, escrow services, or refinery settlement.",
  },
  {
    title: "Secure Shipment",
    text: "Gold is shipped through secure logistics channels with international cargo handling procedures. Delivery is coordinated to the buyer's refinery, vault, or designated destination.",
  },
  {
    title: "Delivery & Settlement",
    text: "Upon arrival, final verification may take place and the transaction is completed. Many buyers establish long-term supply relationships after successful deliveries.",
  },
];

export default function ExportProcedurePage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Export Procedure
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            How Buying Gold From Africa Works
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Africa Gold Exporters facilitates connections between international
            buyers and verified gold suppliers across East Africa. The process
            follows internationally recognized export procedures and
            documentation standards.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-semibold text-[#d4af37]">
                  Step {index + 1}
                </div>

                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Why Buyers Work With Us</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5 text-sm text-white/70">
            <p>✔ Verified suppliers</p>
            <p>✔ Transparent documentation</p>
            <p>✔ Secure export procedures</p>
            <p>✔ Professional coordination</p>
            <p>✔ International buyer support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Source Gold From Africa?
          </h2>

          <p className="mt-4 text-white/70">
            Submit your buyer inquiry and our team will guide you through the
            sourcing and export process.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Submit Buyer Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
