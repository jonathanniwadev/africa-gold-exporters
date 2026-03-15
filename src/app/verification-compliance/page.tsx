import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verification & Compliance",
  description:
    "Review supplier verification procedures, assay confirmation, and compliance steps for gold sourcing and export coordination.",
  alternates: {
    canonical: "/verification-compliance",
  },
  openGraph: {
    title: "Verification & Compliance | Africa Gold Exporters",
    description:
      "Supplier verification, assay processes, and export documentation coordination for international buyers.",
    url: "https://africagoldexporters.com/verification-compliance",
    images: ["/opengraph-image.png"],
  },
};

const verificationItems = [
  {
    title: "Supplier Verification",
    text: "We work with verified supplier networks and ensure that key business and supplier identification documents are available during the transaction process.",
  },
  {
    title: "Export Documentation",
    text: "Transactions are supported with relevant export documentation such as export permits, commercial invoices, and certificate of origin where applicable.",
  },
  {
    title: "Assay & Purity Confirmation",
    text: "Gold purity is verified through assay procedures before shipment or final settlement, depending on the agreement structure.",
  },
  {
    title: "Transaction Compliance",
    text: "Transaction stages are handled in a structured manner with clear communication, documentation flow, and professional coordination.",
  },
  {
    title: "Secure Logistics Coordination",
    text: "Shipment and delivery processes are coordinated through secure logistics channels suitable for international precious metals transactions.",
  },
  {
    title: "Buyer Transparency",
    text: "Buyers are guided through the process step by step, helping them understand the sourcing, documentation, verification, and export stages clearly.",
  },
];

const trustPoints = [
  "Verified supplier coordination",
  "Structured export documentation",
  "Professional assay process support",
  "Transparent buyer communication",
  "International transaction workflow",
  "Secure delivery coordination",
];

export default function VerificationCompliancePage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Verification & Compliance
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
            Building buyer trust through verification and professional process
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            International buyers need confidence before entering any gold
            transaction. Our process is designed to support supplier
            verification, documentation presentation, assay procedures, and
            structured export coordination.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {verificationItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-[#d4af37]" />
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-4 text-sm leading-8 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Why It Matters
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Serious buyers need clarity before they commit
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              A strong verification and compliance page shows buyers that your
              process is organized, professional, and prepared for international
              transaction standards.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80"
              >
                ✔ {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need more details about our process?
          </h2>

          <p className="mt-4 text-base leading-8 text-white/70">
            Send your inquiry and our team will guide you through supplier
            coordination, process explanation, and transaction stages.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
