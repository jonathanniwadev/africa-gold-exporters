import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Buyer Resources | Africa Gold Exporters",
  description:
    "Read gold buyer resources covering African gold sourcing, buyer safety, export procedures, verification, assay and transaction guidance for international buyers.",
  keywords: [
    "gold buyer resources",
    "buy gold Africa guide",
    "African gold sourcing articles",
    "gold export Uganda guide",
    "gold buyer safety",
    "gold verification Africa",
  ],
  alternates: {
    canonical: "https://africagoldexporters.com/resources",
  },
  openGraph: {
    title: "Gold Buyer Resources | Africa Gold Exporters",
    description:
      "Buyer guides and educational resources about African gold sourcing, export coordination and safer transaction discussions.",
    url: "https://africagoldexporters.com/resources",
    siteName: "Africa Gold Exporters",
    images: ["/opengraph-image.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const resourceItems = [
  {
    title: "Is It Safe to Buy Gold From Africa?",
    description:
      "A buyer guide explaining common risks, verification awareness and how structured sourcing discussions improve safety.",
    href: "/is-it-safe-to-buy-gold-from-africa",
  },
  {
    title: "How Gold Export From Uganda Works",
    description:
      "A structured explanation of sourcing discussions, documentation review, assay and export coordination in Uganda.",
    href: "/how-gold-export-uganda-works",
  },
  {
    title: "How to Buy Gold From Africa",
    description:
      "A complete guide for international buyers exploring product selection, verification and export coordination.",
    href: "/how-to-buy-gold-africa",
  },
  {
    title: "Buyer Requirements",
    description:
      "Understand what international buyers should prepare before beginning gold sourcing discussions.",
    href: "/buyer-requirements",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Buyer Resources
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Gold Buyer Resources and Guides
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Explore educational resources created for international buyers
            seeking African gold bars and gold nuggets. These guides explain
            sourcing discussions, buyer safety, verification, assay and export
            coordination.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {resourceItems.map((item) => (
              <div
                key={item.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-4 leading-8 text-white/70">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Read Guide
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Serious Buyer Inquiry
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Need more clarity before moving forward?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Review our buyer guides, understand the sourcing process and submit
            your inquiry when you are ready to begin a structured discussion.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-8 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Submit Buyer Inquiry
            </Link>

            <Link
              href="/buyer-requirements"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-8 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              View Buyer Requirements
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
