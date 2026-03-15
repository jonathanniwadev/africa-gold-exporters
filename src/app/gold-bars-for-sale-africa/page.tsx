import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Bars for Sale Africa",
  description:
    "Information for international buyers interested in gold bars sourcing discussions in Africa including export coordination, verification procedures, and assay confirmation.",
  alternates: {
    canonical: "/gold-bars-for-sale-africa",
  },
  openGraph: {
    title: "Gold Bars for Sale Africa | Africa Gold Exporters",
    description:
      "Information for international buyers exploring gold bar sourcing opportunities in Africa.",
    url: "https://africagoldexporters.com/gold-bars-for-sale-africa",
    images: ["/opengraph-image.png"],
  },
};

export default function GoldBarsForSaleAfricaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            International Gold Market
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Gold Bars for Sale in Africa
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Africa remains one of the world's important regions for gold
            production. International buyers sometimes explore sourcing
            discussions involving gold bars depending on refining requirements
            and transaction structures.
          </p>
        </div>
      </section>

      {/* GOLD BARS SECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold bars in international trade
          </h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Gold bars are among the most common product forms requested by
            international refineries, bullion dealers, and trading companies.
            Buyers often prefer gold bars because they simplify refining,
            transport logistics, and assay verification.
          </p>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Professional sourcing discussions typically involve documentation
            review, verification procedures, assay confirmation, and export
            coordination before shipment.
          </p>
        </div>
      </section>

      {/* PURITY SECTION */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Typical gold bar purity ranges</h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Gold bars discussed in international sourcing conversations may vary
            in purity depending on mining origin, refining stage, and supplier
            networks. Assay confirmation is typically required to determine
            precise purity levels before final refining.
          </p>
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
            International buyers interested in sourcing gold bars from Africa
            may submit inquiries for further information regarding sourcing
            discussions and product availability.
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
