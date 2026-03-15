import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Africa Gold Exporters",
  description:
    "Connect with Africa Gold Exporters for structured gold sourcing, documentation support, assay coordination, and export process guidance for international buyers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Africa Gold Exporters",
    description:
      "Structured gold sourcing, assay support, and export coordination for international buyers.",
    url: "https://africagoldexporters.com",
  },
};

const products = [
  {
    title: "Gold Bars",
    description:
      "High-value export-ready gold bars for international buyers and refinery delivery.",
  },
  {
    title: "Gold Nuggets",
    description:
      "Natural gold nuggets sourced through verified supplier networks across East Africa.",
  },
  {
    title: "Gold Dust",
    description:
      "Gold dust prepared for refining, assay verification, and export facilitation.",
  },
];

const processSteps = [
  "Buyer sends inquiry or Letter of Intent (LOI)",
  "Seller issues Full Corporate Offer (FCO)",
  "Sales & Purchase Agreement (SPA) is signed",
  "Gold is verified through assay / refinery process",
  "Shipment, delivery, and transaction completion",
];

const trustItems = [
  {
    title: "Supplier Verification",
    text: "Structured supplier coordination and professional buyer communication throughout the sourcing process.",
  },
  {
    title: "Export Documentation",
    text: "Clear transaction support with documentation flow and export-related process presentation.",
  },
  {
    title: "Assay Process",
    text: "Professional assay and purity confirmation procedures help create confidence for serious buyers.",
  },
  {
    title: "Secure Coordination",
    text: "Export handling, logistics communication, and transaction stages are presented in a professional format.",
  },
];

const buyerMarkets = [
  "United Arab Emirates",
  "India",
  "Turkey",
  "Switzerland",
  "China",
  "Europe",
  "United States",
  "Japan",
  "Global Traders",
  "International Refineries",
];

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_35%),linear-gradient(to_bottom,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d46b] sm:text-sm">
                Trusted Gold Export Facilitation
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Africa Gold Exporters
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                We connect international buyers with verified gold suppliers
                across East Africa through structured sourcing, export support,
                and professional transaction coordination.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 sm:text-base"
                >
                  Request a Gold Offer
                </Link>

                <Link
                  href="/export-procedure"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
                >
                  View Export Procedure
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#f3d46b]">92%–97%</p>
                  <p className="mt-1 text-sm text-white/65">
                    Typical purity range
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#f3d46b]">Global</p>
                  <p className="mt-1 text-sm text-white/65">
                    Buyer inquiry support
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#f3d46b]">Secure</p>
                  <p className="mt-1 text-sm text-white/65">
                    Structured transaction flow
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-[28px] border border-[#d4af37]/25 bg-white/5 p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#181818] to-[#101010] p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f3d46b]">
                    International Buyer Focus
                  </p>
                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Structured sourcing support for international buyers
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                    We help buyers understand product availability, transaction
                    flow, documentation stages, and export coordination through
                    a clear and organized process.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Buyer inquiry handling",
                      "Export process coordination",
                      "Documentation flow support",
                      "International transaction structure",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET BAR */}
      <section className="border-b border-white/10 bg-[#0f0f0f]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 text-center sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Buyer Markets
            </p>
            <p className="mt-2 text-sm text-white/70">
              UAE, India, Turkey, Europe
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Transaction Flow
            </p>
            <p className="mt-2 text-sm text-white/70">
              LOI, FCO, SPA, Assay, Shipment
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Product Forms
            </p>
            <p className="mt-2 text-sm text-white/70">Bars, Nuggets, Dust</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Buyer Support
            </p>
            <p className="mt-2 text-sm text-white/70">
              Structured communication and coordination
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Why International Buyers Work With Us
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Structured sourcing for serious buyer inquiries
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              We present gold sourcing and export coordination in a clear and
              organized format that helps buyers understand transaction stages,
              documentation flow, assay procedures, and shipment coordination.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Verified Supplier Coordination",
                text: "We work through structured supplier coordination and buyer communication.",
              },
              {
                title: "Clear Export Process",
                text: "Our process covers inquiry, documentation, assay, and shipment stages.",
              },
              {
                title: "Documentation Support",
                text: "Buyers are guided through documentation and transaction flow clearly.",
              },
              {
                title: "International Buyer Handling",
                text: "We support inquiries from refineries, traders, brokers, and serious investors.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFICATION SECTION */}
      <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
                Verification & Compliance
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Trust matters in every transaction
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Gold buyers need confidence before they proceed. A strong
                supplier presentation includes process clarity, verification
                support, structured documentation flow, and professional
                coordination from inquiry to shipment.
              </p>

              <div className="mt-8">
                <Link
                  href="/verification-compliance"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Explore Verification Page
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-[#d4af37]" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
                Product Categories
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Our gold products
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              View All Products
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#d4af37]/40"
              >
                <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-[#2a2413] to-[#141414]" />
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER MARKETS */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              International Buyers
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Serving serious inquiry markets
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              We structure our presentation and communication for international
              buyers, refineries, bullion dealers, trading companies, and
              serious investors seeking professional sourcing support.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buyerMarkets.map((market) => (
              <div
                key={market}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80"
              >
                {market}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT PROCEDURE */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
                Export Process
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                A simple structured process
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Buyers need a clear transaction path. Our process outlines the
                main stages from inquiry and documentation to assay, shipment,
                and final transaction coordination.
              </p>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-black">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-white/80 sm:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Serious Buyer Notice
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              We prioritize serious international buyers
            </h2>

            <p className="mt-4 text-white/70 leading-7">
              Due to the nature of international gold sourcing, we prioritize
              discussions with refineries, bullion dealers, trading companies,
              financial institutions, and verified investors.
            </p>

            <p className="mt-4 text-white/70 leading-7">
              Buyers should be prepared to communicate quantity requirements,
              destination country, and product interest to allow structured
              sourcing coordination.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Refineries</h3>
              <p className="mt-3 text-sm text-white/70">
                International refining companies seeking verified sourcing
                channels.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Trading Companies</h3>
              <p className="mt-3 text-sm text-white/70">
                Professional trading firms coordinating structured commodity
                sourcing.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Institutional Buyers</h3>
              <p className="mt-3 text-sm text-white/70">
                Banks, investment groups, and bullion dealers with genuine
                interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-r from-[#1a1a1a] via-[#141414] to-[#101010] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
                  Begin Buyer Coordination
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Ready to receive serious gold inquiries?
                </h2>
                <p className="mt-4 text-base leading-7 text-white/70">
                  Submit your inquiry to begin a structured discussion covering
                  product form, quantity, documentation flow, assay process, and
                  export coordination.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 sm:text-base"
                >
                  Go to Contact Page
                </Link>

                <Link
                  href="/verification-compliance"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
                >
                  View Verification
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
