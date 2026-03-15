import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy Gold From Africa",
  description:
    "International buyers interested in sourcing gold bars, nuggets, or gold dust from Africa can submit inquiries for structured sourcing discussions.",
  alternates: {
    canonical: "/buy-gold-africa",
  },
  openGraph: {
    title: "Buy Gold From Africa | Africa Gold Exporters",
    description:
      "Information for international buyers interested in sourcing gold from Africa.",
    url: "https://africagoldexporters.com/buy-gold-africa",
    images: ["/opengraph-image.png"],
  },
};

export default function BuyGoldAfricaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            International Buyers
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Buy Gold From Africa
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Africa remains one of the world's important regions for gold
            production. International buyers seeking gold bars, nuggets, or gold
            dust often explore sourcing opportunities through structured
            communication with suppliers and export facilitators.
          </p>
        </div>
      </section>

      {/* GOLD SOURCING SECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold sourcing opportunities in Africa
          </h2>

          <p className="mt-6 text-white/70 max-w-3xl leading-8">
            Gold sourcing discussions in Africa typically involve coordination
            between buyers, suppliers, and export facilitators. International
            buyers may seek gold bars, nuggets, or gold dust depending on
            refining requirements and transaction structure.
          </p>

          <p className="mt-6 text-white/70 max-w-3xl leading-8">
            Professional sourcing discussions normally involve documentation
            review, verification procedures, assay confirmation, and export
            coordination before shipment.
          </p>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Common gold product forms</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Bars</h3>
              <p className="mt-4 text-white/70">
                Gold bars are commonly requested by international buyers and
                refineries due to ease of transport and refining procedures.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Nuggets</h3>
              <p className="mt-4 text-white/70">
                Natural gold nuggets may be available depending on supplier
                networks and mining sources.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Dust</h3>
              <p className="mt-4 text-white/70">
                Gold dust may be prepared for assay verification and refining
                processes depending on buyer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER PROCESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Typical sourcing discussion process
          </h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Buyer submits inquiry outlining quantity requirements and
              destination country.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Supplier communication and sourcing discussions begin.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Documentation and verification procedures may be reviewed.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Assay confirmation and export coordination discussions follow.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a buyer inquiry
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            If you represent a refinery, trading company, bullion dealer, or
            investment group interested in sourcing gold from Africa, submit
            your inquiry and our team will respond with more information.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-8 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Submit Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
