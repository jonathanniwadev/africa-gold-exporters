import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Suppliers Kenya",
  description:
    "Information for international buyers interested in gold sourcing discussions in Kenya including gold bars, nuggets, and gold dust.",
  alternates: {
    canonical: "/gold-suppliers-kenya",
  },
  openGraph: {
    title: "Gold Suppliers Kenya | Africa Gold Exporters",
    description:
      "Information for international buyers interested in sourcing gold through Kenya.",
    url: "https://africagoldexporters.com/gold-suppliers-kenya",
    images: ["/opengraph-image.png"],
  },
};

export default function GoldSuppliersKenyaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            East Africa Gold Market
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Gold Suppliers in Kenya
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Kenya is part of the wider East African trade environment where
            international buyers may explore sourcing discussions involving gold
            bars, nuggets, and gold dust through regional supplier networks and
            export facilitators.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Kenya and regional sourcing discussions
          </h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            International buyers sometimes look to Kenya within broader East
            African sourcing discussions because of its regional trade links and
            logistics position. Professional sourcing conversations usually
            involve product form, destination requirements, verification, and
            export coordination.
          </p>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Buyers exploring opportunities in the region typically expect clear
            communication regarding documentation flow, assay procedures, and
            shipment coordination before any structured transaction moves
            forward.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold product forms often discussed
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Bars</h3>
              <p className="mt-4 text-white/70">
                Gold bars are commonly requested by international refineries and
                bullion dealers due to easier refining and logistics handling.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Nuggets</h3>
              <p className="mt-4 text-white/70">
                Gold nuggets may be discussed depending on regional supplier
                networks and sourcing availability.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Dust</h3>
              <p className="mt-4 text-white/70">
                Gold dust may be prepared for assay confirmation and refining
                depending on buyer expectations and transaction structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Sourcing discussion process</h2>

          <p className="mt-6 max-w-3xl text-white/70 leading-8">
            Buyers usually begin by outlining quantity requirements, destination
            country, and preferred product form. Further stages may include
            documentation review, verification procedures, assay confirmation,
            and export coordination depending on the sourcing structure.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a sourcing inquiry
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-white/70">
            International buyers interested in sourcing discussions involving
            Kenya and the wider East African region may submit an inquiry for
            more information.
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
