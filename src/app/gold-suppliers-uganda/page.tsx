import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Suppliers in Uganda | African Gold Bars & Nuggets",

  description:
    "Information for international buyers seeking gold suppliers in Uganda including African gold bars and gold nuggets. Learn about sourcing discussions, verification procedures and export coordination.",

  keywords: [
    "gold suppliers Uganda",
    "Uganda gold suppliers",
    "buy gold Uganda",
    "gold exporters Uganda",
    "African gold suppliers",
    "gold sourcing Uganda",
    "African gold bars",
    "African gold nuggets",
  ],

  alternates: {
    canonical: "https://africagoldexporters.com/gold-suppliers-uganda",
  },

  openGraph: {
    title: "Gold Suppliers in Uganda | Africa Gold Exporters",

    description:
      "Information for international buyers seeking African gold bars and nuggets through sourcing discussions connected to Uganda.",

    url: "https://africagoldexporters.com/gold-suppliers-uganda",

    siteName: "Africa Gold Exporters",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gold Suppliers Uganda - Africa Gold Exporters",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gold Suppliers Uganda | Africa Gold Exporters",
    description:
      "Information for international buyers seeking African gold bars and nuggets through Uganda.",
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
    text: "Gold bars are commonly requested by international buyers, refineries and bullion dealers due to easier handling during refining and transport.",
    href: "/gold-bars-for-sale-africa",
    linkText: "Explore gold bars information",
  },
  {
    title: "Gold Nuggets",
    text: "Natural gold nuggets may be discussed depending on regional mining sources, supplier availability and buyer transaction requirements.",
    href: "/products",
    linkText: "View product information",
  },
];

const sourcingPoints = [
  "Buyer submits inquiry with quantity requirement, product interest and destination country",
  "Initial sourcing discussion begins with supplier and transaction clarification",
  "Documentation review, verification procedures and buyer expectations are discussed",
  "Assay confirmation and export coordination follow depending on transaction structure",
];

export default function GoldSuppliersUgandaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            East Africa Gold Market
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Gold Suppliers in Uganda
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Uganda has become an important hub in regional gold trade within
            East Africa. International buyers exploring{" "}
            <strong>gold suppliers in Uganda</strong> often review sourcing
            discussions involving <strong>African gold bars</strong> and{" "}
            <strong>gold nuggets</strong> through supplier networks and export
            facilitators operating in the region.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers researching{" "}
            <Link href="/buy-gold-africa" className="text-[#f3d46b] underline">
              how to buy gold from Africa
            </Link>{" "}
            or comparing supplier options across{" "}
            <Link
              href="/gold-suppliers-africa"
              className="text-[#f3d46b] underline"
            >
              Africa
            </Link>{" "}
            often consider Uganda as part of broader East African sourcing
            discussions.
          </p>
        </div>
      </section>

      {/* UGANDA TRADE */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Uganda and regional gold trade
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/70">
                Uganda has developed a growing role in regional gold trade,
                particularly within East and Central Africa. International
                buyers may explore sourcing discussions through suppliers,
                facilitators and regional trade relationships operating around
                the Ugandan market.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                What buyers review before moving forward
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/70">
                Serious buyers normally evaluate supplier structure,
                documentation flow, verification procedures, assay expectations
                and export coordination before progressing discussions.
                Reviewing{" "}
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
                helps buyers prepare for clearer communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Gold products often discussed</h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers exploring <strong>gold sourcing in Uganda</strong> typically
            focus on the gold product form required for refining, transport and
            transaction planning.
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
          <h2 className="text-3xl font-bold">Sourcing discussion process</h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers interested in sourcing gold through Uganda typically begin by
            outlining quantity requirements, destination country and product
            interest. Many buyers reviewing{" "}
            <Link
              href="/gold-bars-for-sale-africa"
              className="text-[#f3d46b] underline"
            >
              gold bars for sale in Africa
            </Link>{" "}
            also seek clarity on supplier verification, assay procedures and
            export logistics before progressing.
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
            Buyers considering Uganda as part of their African sourcing review
            should clarify product type, required quantity, destination country
            and transaction expectations early in the discussion. Stronger
            inquiries typically support more efficient supplier communication
            and clearer export planning.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers may also explore{" "}
            <Link
              href="/gold-suppliers-kenya"
              className="text-[#f3d46b] underline"
            >
              gold suppliers in Kenya
            </Link>{" "}
            or broader{" "}
            <Link
              href="/gold-suppliers-africa"
              className="text-[#f3d46b] underline"
            >
              gold suppliers across Africa
            </Link>{" "}
            before deciding how to structure a sourcing discussion.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a sourcing inquiry
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            International buyers interested in sourcing African gold through
            professional discussions connected to Uganda may submit an inquiry
            for more information regarding product discussions, verification
            procedures and export coordination.
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
