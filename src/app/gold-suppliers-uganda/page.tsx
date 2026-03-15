import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Suppliers Uganda",
  description:
    "Information for international buyers interested in gold sourcing discussions in Uganda including gold bars, nuggets, and gold dust.",
  alternates: {
    canonical: "/gold-suppliers-uganda",
  },
  openGraph: {
    title: "Gold Suppliers Uganda | Africa Gold Exporters",
    description:
      "Information for international buyers interested in sourcing gold from Uganda.",
    url: "https://africagoldexporters.com/gold-suppliers-uganda",
    images: ["/opengraph-image.png"],
  },
};

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

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Uganda has become an important hub in regional gold trade within
            East Africa. International buyers often explore sourcing discussions
            with suppliers and export facilitators operating within the region.
          </p>
        </div>
      </section>

      {/* GOLD TRADE IN UGANDA */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Uganda and regional gold trade</h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Uganda has developed a growing role in regional gold trade,
            particularly within East and Central Africa. International buyers
            sometimes explore sourcing discussions through suppliers,
            intermediaries, and export facilitators operating in the region.
          </p>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Professional discussions typically involve documentation review,
            verification procedures, assay confirmation, and export coordination
            depending on the transaction structure.
          </p>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Gold products often discussed</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Bars</h3>
              <p className="mt-4 text-white/70">
                Gold bars are commonly requested by international buyers and
                refineries due to easier refining and transportation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Nuggets</h3>
              <p className="mt-4 text-white/70">
                Natural gold nuggets may be discussed depending on mining
                sources and supplier availability.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Dust</h3>
              <p className="mt-4 text-white/70">
                Gold dust may be prepared for assay confirmation and refining
                processes depending on buyer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER PROCESS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Sourcing discussion process</h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Buyers interested in sourcing gold typically begin discussions by
            outlining quantity requirements, destination country, and product
            form. Further steps may involve documentation review, verification,
            assay confirmation, and export coordination.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a sourcing inquiry
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-white/70">
            International buyers interested in sourcing gold through
            professional discussions in Uganda may submit an inquiry for further
            information.
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
