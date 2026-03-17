import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Suppliers in Africa | African Gold Bars & Nuggets",

  description:
    "Explore gold suppliers in Africa for international buyers seeking African gold bars and gold nuggets. Learn about sourcing discussions, verification procedures and secure export coordination.",

  keywords: [
    "gold suppliers Africa",
    "African gold suppliers",
    "buy gold Africa",
    "African gold bars suppliers",
    "African gold nuggets suppliers",
    "gold exporters Africa",
    "gold sourcing Africa",
    "international gold buyers",
  ],

  alternates: {
    canonical: "https://africagoldexporters.com/gold-suppliers-africa",
  },

  openGraph: {
    title: "Gold Suppliers in Africa | Africa Gold Exporters",

    description:
      "Information for international buyers seeking African gold bars and gold nuggets from trusted suppliers across Africa.",

    url: "https://africagoldexporters.com/gold-suppliers-africa",

    siteName: "Africa Gold Exporters",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gold Suppliers in Africa - Africa Gold Exporters",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gold Suppliers in Africa | Africa Gold Exporters",
    description:
      "Information for international buyers seeking African gold bars and nuggets.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const productItems = [
  {
    title: "Gold Bars",
    text: "Gold bars are widely requested by refineries, bullion dealers and international trading companies due to ease of handling, refining and transport.",
    href: "/gold-bars-for-sale-africa",
    linkText: "Explore gold bars information",
  },
  {
    title: "Gold Nuggets",
    text: "Natural gold nuggets may be discussed depending on mining regions, supplier networks and buyer transaction requirements.",
    href: "/products",
    linkText: "View product information",
  },
];

const sourcingPoints = [
  "Buyer submits inquiry with quantity requirement, product interest and destination country",
  "Initial supplier and sourcing discussions begin",
  "Documentation, verification and transaction expectations are reviewed",
  "Assay confirmation and export coordination discussions follow",
];

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

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Africa is one of the world’s major gold-producing regions.
            International buyers exploring{" "}
            <strong>gold suppliers in Africa</strong> often review sourcing
            opportunities involving <strong>African gold bars</strong> and{" "}
            <strong>gold nuggets</strong> through structured communication with
            suppliers and export facilitators across the continent.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers researching{" "}
            <Link href="/buy-gold-africa" className="text-[#f3d46b] underline">
              how to buy gold from Africa
            </Link>{" "}
            or comparing supplier regions such as{" "}
            <Link
              href="/gold-suppliers-uganda"
              className="text-[#f3d46b] underline"
            >
              Uganda
            </Link>{" "}
            and{" "}
            <Link
              href="/gold-suppliers-kenya"
              className="text-[#f3d46b] underline"
            >
              Kenya
            </Link>{" "}
            should understand the verification and export coordination process
            before beginning serious sourcing discussions.
          </p>
        </div>
      </section>

      {/* REGIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Gold-producing regions across Africa
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/70">
                Several African countries contribute significantly to global
                gold production. International sourcing discussions often
                involve supplier networks, mining relationships and export
                coordination across East, West and Central Africa depending on
                product availability and buyer preferences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                What buyers look for in African gold suppliers
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/70">
                Serious international buyers usually evaluate product form,
                supplier credibility, documentation flow, assay procedures and
                export structure before moving forward. Buyers exploring{" "}
                <Link
                  href="/buyer-requirements"
                  className="text-[#f3d46b] underline"
                >
                  buyer requirements
                </Link>{" "}
                and the{" "}
                <Link
                  href="/transaction-process"
                  className="text-[#f3d46b] underline"
                >
                  transaction process
                </Link>{" "}
                are often better prepared for structured sourcing discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold product forms available in sourcing discussions
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers exploring <strong>African gold suppliers</strong> typically
            focus on the product form required for refining, transport and
            transaction structure.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {productItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/70">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-block text-[#f3d46b] underline"
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER PROCESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Structured sourcing discussions with African gold suppliers
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Professional gold sourcing discussions normally begin with a buyer
            inquiry and continue through verification, documentation review and
            export coordination. Buyers interested in{" "}
            <Link
              href="/gold-bars-for-sale-africa"
              className="text-[#f3d46b] underline"
            >
              gold bars for sale in Africa
            </Link>{" "}
            often follow a structured process before any shipment or transaction
            progression is discussed.
          </p>

          <div className="mt-10 space-y-6">
            {sourcingPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER GUIDANCE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Guidance for international buyers
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers comparing <strong>gold suppliers in Africa</strong> should
            clarify product interest, quantity requirements, destination country
            and transaction expectations early in the discussion. A stronger
            inquiry normally leads to more efficient sourcing communication and
            clearer export planning.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            International buyers can also review{" "}
            <Link
              href="/how-to-buy-gold-africa"
              className="text-[#f3d46b] underline"
            >
              how to buy gold from Africa
            </Link>{" "}
            and explore{" "}
            <Link href="/products" className="text-[#f3d46b] underline">
              available product forms
            </Link>{" "}
            before beginning serious discussions with suppliers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a buyer inquiry
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            International buyers interested in sourcing African gold bars or
            gold nuggets may submit an inquiry for more information regarding
            supplier discussions, verification procedures and export
            coordination.
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
