import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gold Products",
  description:
    "Explore gold bars and gold nuggets presented for international buyer inquiries and export coordination.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Gold Products | Africa Gold Exporters",
    description:
      "View gold product categories including gold bars and gold nuggets for international sourcing discussions.",
    url: "https://africagoldexporters.com/products",
  },
};

const products = [
  {
    title: "Gold Bars",
    image: "/images/gold-bars.png",
    description:
      "Export-ready gold bars presented for international buyers, refinery-oriented transactions, and structured sourcing discussions.",
    details: [
      "Bulk buyer inquiries",
      "Refinery-oriented discussions",
      "Structured sourcing support",
    ],
  },
  {
    title: "Gold Nuggets",
    image: "/images/gold-granules.png",
    description:
      "Natural gold nuggets presented for serious buyer discussions, supplier coordination, and export-focused sourcing opportunities.",
    details: [
      "Supplier network access",
      "Professional buyer coordination",
      "Export process presentation",
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
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.title}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
