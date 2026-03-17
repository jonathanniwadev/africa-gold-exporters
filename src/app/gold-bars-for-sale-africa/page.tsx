import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Bars for Sale Africa | African Gold Bars Supplier",

  description:
    "Gold bars for sale in Africa for international buyers including refineries, bullion dealers and trading companies. Learn about African gold bars sourcing, assay verification, documentation review and export coordination.",

  keywords: [
    "gold bars for sale Africa",
    "African gold bars",
    "buy gold bars Africa",
    "gold bars Africa suppliers",
    "African gold exporters",
    "gold bars Africa export",
    "buy gold Africa",
    "African gold suppliers",
    "gold sourcing Africa",
  ],

  alternates: {
    canonical: "https://africagoldexporters.com/gold-bars-for-sale-africa",
  },

  openGraph: {
    title: "Gold Bars for Sale Africa | Africa Gold Exporters",

    description:
      "Information for international buyers exploring African gold bar sourcing including verification procedures and export coordination.",

    url: "https://africagoldexporters.com/gold-bars-for-sale-africa",

    siteName: "Africa Gold Exporters",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gold Bars for Sale Africa - Africa Gold Exporters",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gold Bars for Sale Africa | Africa Gold Exporters",
    description:
      "Information for international buyers exploring African gold bars sourcing.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const sourcingSteps = [
  "Buyer submits inquiry with product interest, quantity requirement and destination country",
  "Initial supplier communication and sourcing discussions begin",
  "Documentation review and verification procedures may be discussed",
  "Assay confirmation and export coordination discussions follow",
];

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

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Africa remains one of the world's major gold producing regions.
            International buyers searching for{" "}
            <strong>gold bars for sale in Africa</strong> often explore sourcing
            discussions with suppliers and export facilitators across the
            continent.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers researching{" "}
            <Link href="/buy-gold-africa" className="text-[#f3d46b] underline">
              how to buy gold from Africa
            </Link>{" "}
            or comparing
            <Link
              href="/gold-suppliers-africa"
              className="text-[#f3d46b] underline"
            >
              {" "}
              African gold suppliers
            </Link>{" "}
            often focus on gold bars due to easier refining, transport logistics
            and assay verification.
          </p>
        </div>
      </section>

      {/* GOLD BARS SECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold bars in international gold trade
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Gold bars are among the most commonly requested product forms by
            international refineries, bullion dealers, trading companies and
            investment groups. Buyers exploring{" "}
            <strong>African gold bars</strong>
            often prefer this format because it simplifies refining procedures,
            transport logistics and purity verification.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers reviewing{" "}
            <Link
              href="/gold-suppliers-uganda"
              className="text-[#f3d46b] underline"
            >
              gold suppliers in Uganda
            </Link>{" "}
            or
            <Link
              href="/gold-suppliers-kenya"
              className="text-[#f3d46b] underline"
            >
              {" "}
              Kenya
            </Link>{" "}
            often consider gold bars as the primary product form discussed
            during sourcing conversations.
          </p>
        </div>
      </section>

      {/* PURITY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Typical gold bar purity ranges</h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Gold bars discussed in sourcing conversations may vary in purity
            depending on mining origin, refining stage and supplier networks.
            Assay verification is normally used to determine precise purity
            levels before final refining or international trade discussions
            progress further.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Typical sourcing discussion process
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            International buyers exploring{" "}
            <strong>gold bars for sale in Africa</strong> usually follow a
            structured sourcing process before progressing into detailed
            transaction discussions.
          </p>

          <div className="mt-10 space-y-6">
            {sourcingSteps.map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER GUIDANCE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Guidance for international gold buyers
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers reviewing African gold sourcing opportunities should clarify
            product form, required quantity, destination country and buyer
            profile when submitting an inquiry. Stronger buyer inquiries usually
            lead to more efficient sourcing discussions and clearer export
            coordination planning.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers may also review{" "}
            <Link
              href="/buyer-requirements"
              className="text-[#f3d46b] underline"
            >
              buyer requirements
            </Link>{" "}
            and the
            <Link
              href="/transaction-process"
              className="text-[#f3d46b] underline"
            >
              {" "}
              transaction process
            </Link>{" "}
            before starting serious sourcing discussions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a gold buyer inquiry
          </h2>

          <p className="mt-6 mx-auto max-w-2xl leading-8 text-white/70">
            International buyers interested in sourcing African gold bars may
            submit an inquiry for more information regarding sourcing
            discussions, verification procedures and export coordination.
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
