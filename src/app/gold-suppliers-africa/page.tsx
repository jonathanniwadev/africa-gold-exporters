import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Suppliers Africa",
  description:
    "Information for international buyers seeking gold suppliers in Africa including gold bars, nuggets, and gold dust sourcing discussions.",
  alternates: {
    canonical: "/gold-suppliers-africa",
  },
  openGraph: {
    title: "Gold Suppliers Africa | Africa Gold Exporters",
    description:
      "Information for international buyers seeking gold sourcing opportunities in Africa.",
    url: "https://africagoldexporters.com/gold-suppliers-africa",
    images: ["/opengraph-image.png"],
  },
};

export default function GoldSuppliersAfricaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            International Gold Market
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Gold Suppliers in Africa
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Africa is one of the world’s major regions for gold production.
            International buyers often explore sourcing discussions with
            suppliers and export facilitators across several African countries
            known for gold mining and trade.
          </p>
        </div>
      </section>

      {/* AFRICA GOLD REGION */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold producing regions in Africa
          </h2>

          <p className="mt-6 text-white/70 max-w-3xl leading-8">
            Several African countries contribute significantly to global gold
            production. International sourcing discussions often involve
            suppliers, mining networks, and export coordination across the
            region.
          </p>

          <p className="mt-6 text-white/70 max-w-3xl leading-8">
            Buyers may explore sourcing discussions depending on product form,
            refining requirements, and destination country regulations.
          </p>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold product forms available in sourcing discussions
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Bars</h3>
              <p className="mt-4 text-white/70">
                Gold bars are widely requested by international refineries and
                bullion dealers due to ease of refining and transport.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Nuggets</h3>
              <p className="mt-4 text-white/70">
                Natural gold nuggets may be available depending on mining
                sources and supplier networks.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Dust</h3>
              <p className="mt-4 text-white/70">
                Gold dust may be prepared for assay confirmation and refining
                depending on buyer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER PROCESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Structured sourcing discussions
          </h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Professional gold sourcing discussions typically involve buyer
            inquiries outlining quantity requirements, destination country, and
            product form. Documentation review, assay verification, and export
            coordination discussions may follow depending on the transaction
            structure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact us for sourcing discussions
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-white/70">
            International buyers interested in sourcing gold from Africa may
            submit inquiries for further information regarding product
            availability and sourcing discussions.
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
