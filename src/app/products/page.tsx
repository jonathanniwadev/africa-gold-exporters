import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Products",
  description:
    "Explore gold bars, gold nuggets, and gold dust presented for international buyer inquiries and export coordination.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Gold Products | Africa Gold Exporters",
    description:
      "View gold product categories including gold bars, nuggets, and gold dust for international sourcing discussions.",
    url: "https://africagoldexporters.com/products",
    images: ["/opengraph-image.png"],
  },
};

const products = [
  {
    title: "Gold Bars",
    description:
      "Export-ready gold bars for international buyers and refinery-oriented transactions.",
    details: [
      "Bulk inquiries",
      "Structured sourcing",
      "Buyer-focused coordination",
    ],
  },
  {
    title: "Gold Nuggets",
    description:
      "Natural gold nuggets sourced through supplier networks in East Africa.",
    details: [
      "Sourcing support",
      "Professional coordination",
      "Export presentation",
    ],
  },
  {
    title: "Gold Dust",
    description:
      "Gold dust prepared for verification, refining, and export discussions.",
    details: [
      "Assay-oriented process",
      "Buyer communication",
      "Facilitated export flow",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
            Products
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Our Gold Products
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            We present gold products in a structured and professional format for
            serious buyer inquiries and sourcing discussions.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-6 h-48 rounded-2xl bg-gradient-to-br from-[#2a2413] to-[#141414]" />
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="mt-4 text-sm leading-8 text-white/70">
                  {product.description}
                </p>

                <div className="mt-6 space-y-3">
                  {product.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
