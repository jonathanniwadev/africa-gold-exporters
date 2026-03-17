import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Buy Gold From Africa | Gold Buyer Guide",

  description:
    "Learn how to buy gold from Africa through a structured process covering buyer inquiry, supplier discussions, documentation review, assay verification and export coordination for gold bars and gold nuggets.",

  keywords: [
    "how to buy gold from Africa",
    "buy gold Africa",
    "African gold buyer guide",
    "gold sourcing Africa",
    "gold bars Africa",
    "gold nuggets Africa",
    "African gold exporters",
    "gold export process Africa",
    "international gold buyers",
  ],

  alternates: {
    canonical: "https://africagoldexporters.com/how-to-buy-gold-africa",
  },

  openGraph: {
    title: "How to Buy Gold From Africa | Africa Gold Exporters",
    description:
      "A structured guide for international buyers exploring how gold sourcing from Africa works, including inquiry, verification, assay and export coordination.",
    url: "https://africagoldexporters.com/how-to-buy-gold-africa",
    siteName: "Africa Gold Exporters",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "How to Buy Gold From Africa - Africa Gold Exporters",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Buy Gold From Africa | Africa Gold Exporters",
    description:
      "A structured guide for international buyers exploring African gold sourcing.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const buyingSteps = [
  {
    title: "Submit a Buyer Inquiry",
    text: "The process usually starts with a buyer inquiry outlining product interest, quantity requirement, destination country and buyer profile.",
  },
  {
    title: "Begin Sourcing Discussion",
    text: "After the inquiry, sourcing discussions may begin around product form, supplier structure, documentation expectations and transaction direction.",
  },
  {
    title: "Review Documentation",
    text: "Professional gold transactions often involve documentation review, supplier verification and general compliance awareness before progressing further.",
  },
  {
    title: "Assay Verification",
    text: "Assay procedures are important in determining purity and helping buyers understand the refining stage and expected product quality.",
  },
  {
    title: "Export Coordination",
    text: "Export coordination discussions typically include logistics planning, destination requirements and transaction structure according to the agreed process.",
  },
];

const buyerPoints = [
  "Product interest such as gold bars or gold nuggets",
  "Required quantity",
  "Destination country",
  "Buyer type such as refinery, bullion dealer, trading company or investor",
  "Any assay, documentation or logistics expectations",
];

export default function HowToBuyGoldAfricaPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Buyer Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            How to Buy Gold From Africa
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            International buyers exploring how to buy gold from Africa should
            understand the typical sourcing process before beginning serious
            discussions. Professional gold sourcing normally involves buyer
            inquiry preparation, supplier discussions, documentation review,
            assay verification and export coordination.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Buyers reviewing{" "}
            <Link href="/buy-gold-africa" className="text-[#f3d46b] underline">
              how to buy gold from Africa
            </Link>{" "}
            often also compare{" "}
            <Link
              href="/gold-suppliers-africa"
              className="text-[#f3d46b] underline"
            >
              African gold suppliers
            </Link>{" "}
            and explore{" "}
            <Link
              href="/gold-bars-for-sale-africa"
              className="text-[#f3d46b] underline"
            >
              gold bars for sale in Africa
            </Link>{" "}
            before submitting a buyer inquiry.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">
              Understanding the African gold buying process
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              Buying gold from Africa is not simply about finding a supplier.
              Serious international buyers usually need a structured sourcing
              process that begins with clear communication and continues through
              verification, assay and export discussions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Why buyers need a structured approach
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              Buyers interested in African gold bars or gold nuggets need more
              than pricing information. They usually need clarity around product
              form, documentation expectations, supplier discussions and export
              coordination before moving toward a serious transaction path.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Typical steps when buying gold from Africa
          </h2>

          <div className="mt-10 space-y-6">
            {buyingSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-black">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-8 text-white/70">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT BUYERS SHOULD PREPARE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                What buyers should prepare before inquiry
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/70">
                Buyers interested in purchasing African gold should prepare key
                information before starting discussions. Reviewing{" "}
                <Link
                  href="/buyer-requirements"
                  className="text-[#f3d46b] underline"
                >
                  buyer requirements
                </Link>{" "}
                helps improve communication and makes the sourcing process more
                efficient.
              </p>
            </div>

            <div className="space-y-4">
              {buyerPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FORMS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Common product forms buyers explore
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Bars</h3>
              <p className="mt-4 leading-8 text-white/70">
                Gold bars are commonly requested by refineries, bullion dealers
                and trading companies because they simplify refining, transport
                and verification planning.
              </p>
              <Link
                href="/gold-bars-for-sale-africa"
                className="mt-4 inline-block text-[#f3d46b] underline"
              >
                Explore gold bars information
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Gold Nuggets</h3>
              <p className="mt-4 leading-8 text-white/70">
                Gold nuggets may also be discussed depending on mining origin,
                supplier availability and buyer requirements.
              </p>
              <Link
                href="/products"
                className="mt-4 inline-block text-[#f3d46b] underline"
              >
                View product information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL CONTEXT */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">
              Reviewing supplier regions across Africa
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              Buyers learning how to buy gold from Africa often compare supplier
              regions before proceeding. This may include reviewing{" "}
              <Link
                href="/gold-suppliers-uganda"
                className="text-[#f3d46b] underline"
              >
                gold suppliers in Uganda
              </Link>
              ,{" "}
              <Link
                href="/gold-suppliers-kenya"
                className="text-[#f3d46b] underline"
              >
                gold suppliers in Kenya
              </Link>{" "}
              and broader{" "}
              <Link
                href="/gold-suppliers-africa"
                className="text-[#f3d46b] underline"
              >
                gold suppliers across Africa
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Verification and transaction clarity
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              Buyers usually want clarity on documentation, verification,
              product purity and transaction direction before progressing. A
              stronger inquiry normally makes these discussions more efficient
              and helps both sides align early in the process.
            </p>
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
            Ready to begin a sourcing discussion?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            International buyers who understand the process can move forward
            with more clarity. Submit your inquiry with product interest,
            quantity requirement and destination country to begin structured
            sourcing discussions.
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
