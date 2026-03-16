import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Purity Standards",
  description:
    "Learn about gold purity ranges, assay verification procedures, and product presentation for international gold buyers.",
  alternates: {
    canonical: "/purity-standards",
  },
  openGraph: {
    title: "Gold Purity Standards | Africa Gold Exporters",
    description:
      "Information on gold purity, assay verification, and export product standards.",
    url: "https://africagoldexporters.com/purity-standards",
    images: ["/opengraph-image.png"],
  },
};

const products = [
  {
    title: "Gold Bars",
    text: "Gold bars are the most preferred form for international buyers because they are easier to assay, transport, and present for export discussions.",
    image: "/images/gold-bars.jpg",
  },
  {
    title: "Gold Nuggets",
    text: "Gold nuggets are a natural form of raw gold and may be presented during sourcing discussions depending on supplier availability and transaction structure.",
    image: "/images/gold-nuggets.jpeg",
  },
  {
    title: "Gold Dust",
    text: "Gold dust is another common raw form and is usually discussed together with assay and refining expectations before any export arrangement.",
    image: "/images/gold-dust.jpeg",
  },
];

const standards = [
  {
    title: "Purity Range",
    text: "Gold purity is commonly expressed as a percentage or karat value. Final purity is confirmed through assay testing before shipment or settlement.",
  },
  {
    title: "Assay Confirmation",
    text: "Professional assay procedures help buyers understand the actual gold content and support confidence in the transaction process.",
  },
  {
    title: "Export Presentation",
    text: "Proper presentation of gold products with clear product descriptions and process details makes discussions with buyers more professional.",
  },
  {
    title: "Buyer Expectations",
    text: "Serious international buyers usually expect clear communication regarding form, purity, assay method, packaging, and documentation flow.",
  },
];

export default function PurityStandardsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Gold Products & Purity Standards
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
            Understanding product forms and purity expectations
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            International gold buyers usually want clear information about the
            form of gold available, expected purity range, assay process, and
            export presentation. This page helps present those details in a
            professional way.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-[#2a2413] to-[#141414]" />
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="mt-4 text-sm leading-8 text-white/70">
                  {product.text}
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
              Purity Standards
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Clear product communication builds buyer confidence
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              Buyers are more likely to engage when product form, assay process,
              and purity expectations are explained clearly and professionally.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {standards.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need product details for your inquiry?
          </h2>

          <p className="mt-4 text-base leading-8 text-white/70">
            Send your buyer request and our team will guide you through product
            forms, purity expectations, and sourcing discussions.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Submit Buyer Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
