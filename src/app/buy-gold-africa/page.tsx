import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy Gold From Africa | Gold Bars & Nuggets Supplier",
  description:
    "Buy gold from Africa through a structured export process. Africa Gold Exporters supports international buyers seeking African gold bars and gold nuggets with assay verification, documentation review and secure logistics.",
  keywords: [
    "buy gold from Africa",
    "buy gold Africa",
    "African gold bars",
    "African gold nuggets",
    "gold suppliers Africa",
    "gold bars for sale Africa",
    "African gold exporters",
    "gold sourcing Africa",
    "buy African gold",
  ],
  alternates: {
    canonical: "https://africagoldexporters.com/buy-gold-africa",
  },
  openGraph: {
    title: "Buy Gold From Africa | Africa Gold Exporters",
    description:
      "Structured sourcing discussions for international buyers seeking African gold bars and gold nuggets.",
    url: "https://africagoldexporters.com/buy-gold-africa",
    siteName: "Africa Gold Exporters",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Buy Gold From Africa - Africa Gold Exporters",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Gold From Africa | Africa Gold Exporters",
    description:
      "Structured sourcing discussions for international buyers seeking African gold bars and gold nuggets.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BuyGoldAfricaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            International Gold Buyers
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Buy Gold From Africa
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Africa remains one of the world's most important regions for gold
            production. International buyers looking to{" "}
            <strong>buy gold from Africa</strong>
            often explore sourcing opportunities involving{" "}
            <strong>gold bars, gold nuggets and raw gold supply</strong> through
            structured export coordination and professional communication with
            suppliers.
          </p>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Buyers interested in sourcing African gold should also review our{" "}
            <Link
              href="/buyer-requirements"
              className="text-[#f3d46b] underline"
            >
              buyer requirements
            </Link>{" "}
            and understand the{" "}
            <Link
              href="/transaction-process"
              className="text-[#f3d46b] underline"
            >
              transaction process
            </Link>{" "}
            before submitting a sourcing inquiry.
          </p>
        </div>
      </section>

      {/* GOLD SOURCING */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            African gold sourcing opportunities
          </h2>

          <p className="mt-6 text-white/70 max-w-3xl leading-8">
            Buyers searching for <strong>African gold suppliers</strong> may
            explore sourcing discussions involving gold bars or natural gold
            nuggets depending on refining requirements and commercial
            arrangements. Many international buyers including refineries,
            bullion dealers, trading companies and jewelry manufacturers look
            toward Africa due to its established mining regions and global gold
            supply contribution.
          </p>

          <p className="mt-6 text-white/70 max-w-3xl leading-8">
            Professional sourcing discussions normally include supplier
            verification, documentation review, assay confirmation and export
            coordination before any shipment discussions occur.
          </p>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold products commonly sourced by international buyers
          </h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Buyers seeking to <strong>buy gold from Africa</strong> typically
            explore several gold product forms depending on their refining or
            trading requirements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Bars</h3>

              <p className="mt-4 text-white/70 leading-7">
                Gold bars remain one of the most commonly requested products by
                international buyers and bullion dealers due to easier handling
                during refining and international logistics.
              </p>

              <Link
                href="/gold-bars-for-sale-africa"
                className="mt-4 inline-block text-[#f3d46b] underline"
              >
                View gold bars information
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Nuggets</h3>

              <p className="mt-4 text-white/70 leading-7">
                Natural gold nuggets may be available depending on mining
                regions and supplier networks across East Africa and other gold
                producing areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER PROCESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Typical process when buying gold from Africa
          </h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            International buyers exploring African gold sourcing normally follow
            a structured communication process before any transaction decisions
            are made.
          </p>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Buyer submits an inquiry outlining gold product interest, quantity
              requirements and destination country.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Initial sourcing discussions begin with clarification of product
              availability and supplier structure.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Documentation review and verification procedures may be discussed
              to establish clarity for both parties.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Assay verification and export logistics coordination discussions
              typically follow during later stages.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a gold buyer inquiry
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70 leading-8">
            If you represent a refinery, bullion dealer, trading company,
            jewelry manufacturer or investment group interested in sourcing
            African gold, you may submit a buyer inquiry to begin a structured
            sourcing discussion.
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
