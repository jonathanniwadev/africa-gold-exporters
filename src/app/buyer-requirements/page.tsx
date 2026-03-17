import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Buyer Requirements | Africa Gold Exporters",

  description:
    "Requirements for international buyers seeking African gold bars or gold nuggets. Learn about buyer inquiry preparation, documentation expectations, verification procedures and structured sourcing discussions.",

  keywords: [
    "gold buyer requirements",
    "buy gold Africa requirements",
    "international gold buyers",
    "gold sourcing Africa",
    "African gold exporters",
    "gold bars buyers",
    "gold nuggets buyers",
    "how to buy gold Africa",
    "gold export process Africa",
  ],

  alternates: {
    canonical: "https://africagoldexporters.com/buyer-requirements",
  },

  openGraph: {
    title: "Gold Buyer Requirements | Africa Gold Exporters",

    description:
      "Important information for serious international gold buyers including inquiry preparation, verification procedures and sourcing discussions.",

    url: "https://africagoldexporters.com/buyer-requirements",

    siteName: "Africa Gold Exporters",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gold Buyer Requirements - Africa Gold Exporters",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gold Buyer Requirements | Africa Gold Exporters",
    description:
      "Guidelines for international buyers seeking African gold bars or nuggets.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const requirementItems = [
  {
    title: "Minimum Order Consideration",
    text: "Most sourcing discussions begin from a minimum quantity that supports structured logistics, documentation handling and professional transaction coordination.",
  },
  {
    title: "Serious Buyer Profile",
    text: "We prioritize inquiries from refineries, bullion dealers, trading companies, jewelry manufacturers, brokers and serious investors with genuine sourcing interest.",
  },
  {
    title: "Clear Communication",
    text: "Buyers should communicate quantity requirements, destination country, product form and buyer profile clearly to support efficient sourcing discussions.",
  },
  {
    title: "Verification Procedures",
    text: "Professional gold transactions typically involve documentation review, assay verification, supplier due diligence and a clear understanding of the transaction structure.",
  },
  {
    title: "Export Coordination",
    text: "Export discussions involve documentation preparation, logistics planning, regulatory awareness and transaction progression according to the agreed structure.",
  },
  {
    title: "Professional Process",
    text: "Our goal is to maintain a buyer-focused sourcing process built around clarity, professional communication and structured gold transaction coordination.",
  },
];

export default function BuyerRequirementsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Buyer Information
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Gold Buyer Requirements
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Buyers interested in{" "}
            <Link href="/buy-gold-africa" className="text-[#f3d46b] underline">
              buying gold from Africa
            </Link>{" "}
            should review these requirements before submitting a buyer inquiry.
            To maintain professional transactions and serious sourcing
            discussions, buyers should understand the basic expectations
            involved in gold sourcing, verification and export coordination.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                What international gold buyers should prepare
              </h2>
              <p className="mt-6 max-w-3xl text-white/70 leading-8">
                Serious international buyers are encouraged to prepare clear
                inquiry information before entering sourcing discussions. This
                usually includes product interest, required quantity,
                destination country, buyer type and transaction expectations.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Why buyer requirements matter
              </h2>
              <p className="mt-6 max-w-3xl text-white/70 leading-8">
                Gold sourcing discussions require clarity from the beginning.
                Buyers reviewing the{" "}
                <Link
                  href="/transaction-process"
                  className="text-[#f3d46b] underline"
                >
                  transaction process
                </Link>{" "}
                or exploring{" "}
                <Link
                  href="/gold-bars-for-sale-africa"
                  className="text-[#f3d46b] underline"
                >
                  gold bars for sale in Africa
                </Link>{" "}
                should understand that strong inquiries improve communication,
                verification planning and export coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS GRID */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {requirementItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-4 leading-8 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER READINESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Key information buyers should include in an inquiry
          </h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Product interest such as gold bars or gold nuggets.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Quantity requirement and intended destination country.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Buyer type such as refinery, bullion dealer, trading company,
              jewelry manufacturer, broker or investor.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Any transaction, assay or documentation expectations relevant to
              the sourcing discussion.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Serious Buyer Inquiry
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to discuss a gold purchase?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            If you are a refinery, trading company, bullion dealer, jewelry
            manufacturer, broker or investor, you can review these requirements
            and then{" "}
            <Link href="/contact" className="text-[#f3d46b] underline">
              submit a buyer inquiry
            </Link>{" "}
            to begin structured sourcing discussions.
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
