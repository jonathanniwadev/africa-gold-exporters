import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "African Gold Exporters",
  description:
    "Information for international buyers exploring gold sourcing discussions with African gold exporters.",
  alternates: {
    canonical: "/african-gold-exporters",
  },
  openGraph: {
    title: "African Gold Exporters | Africa Gold Exporters",
    description:
      "Structured gold sourcing and export coordination for international buyers exploring African gold exporters.",
    url: "https://africagoldexporters.com/african-gold-exporters",
    images: ["/opengraph-image.png"],
  },
};

export default function AfricanGoldExportersPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            International Gold Market
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            African Gold Exporters
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/70">
            International buyers often explore sourcing discussions with African
            gold exporters for gold bars, nuggets, and gold dust depending on
            product requirements, verification procedures, and export
            coordination structure.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Gold export discussions in Africa
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Africa remains one of the world’s important gold-producing regions.
            Buyers, refineries, bullion dealers, and trading companies often
            explore sourcing discussions with exporters, suppliers, and regional
            facilitators across the continent.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Professional sourcing discussions typically involve product form,
            quantity requirements, documentation review, assay confirmation, and
            export coordination before shipment.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Common product forms</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Bars</h3>
              <p className="mt-4 text-white/70">
                Gold bars are commonly requested in international sourcing
                discussions because they are easier to refine, transport, and
                verify through assay procedures.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Nuggets</h3>
              <p className="mt-4 text-white/70">
                Gold nuggets may be available depending on mining origin,
                supplier networks, and the structure of the sourcing discussion.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Dust</h3>
              <p className="mt-4 text-white/70">
                Gold dust may be discussed for assay confirmation and refining
                depending on buyer requirements and export preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Submit a buyer inquiry
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-white/70">
            If you represent a refinery, bullion dealer, trading company, or
            investment group, submit your inquiry for structured sourcing
            discussions.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-8 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Submit Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
