import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Africa Gold Exporters and our structured approach to gold sourcing, buyer coordination, documentation flow, and export process support across East Africa.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Africa Gold Exporters",
    description:
      "Discover the structure behind Africa Gold Exporters and how we support international gold buyers.",
    url: "https://africagoldexporters.com/about",
    images: ["/opengraph-image.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
            About Us
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            Professional gold sourcing and export facilitation
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Africa Gold Exporters connects international gold buyers with
            verified supplier networks across East Africa. We focus on
            professional communication, structured transaction support, and
            responsive buyer handling.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Who we work with</h2>
            <p className="mt-4 text-sm leading-8 text-white/70">
              We work with buyers seeking gold bars, nuggets, and dust through
              structured export channels and professional sourcing support.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "International gold buyers",
                "Refinery-linked inquiries",
                "Bulk and recurring buyer requests",
                "Professional sourcing support",
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

          <div className="rounded-[28px] border border-[#d4af37]/20 bg-gradient-to-br from-[#191919] to-[#101010] p-8">
            <h2 className="text-2xl font-bold">Our approach</h2>
            <p className="mt-4 text-sm leading-8 text-white/70">
              We believe presentation matters. Buyers trust businesses that
              communicate clearly, respond quickly, and explain the sourcing and
              export process in a professional way.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Responsive communication",
                "Professional buyer handling",
                "Mobile-friendly digital presence",
                "Clear transaction structure",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
