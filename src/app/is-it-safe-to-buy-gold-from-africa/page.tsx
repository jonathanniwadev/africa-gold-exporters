import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is It Safe to Buy Gold From Africa? | Buyer Guide",
  description:
    "Learn whether it is safe to buy gold from Africa, including common risks, verification procedures, assay confirmation, documentation review and secure export coordination for international buyers.",
  keywords: [
    "is it safe to buy gold from Africa",
    "buy gold from Africa safely",
    "African gold buyer guide",
    "gold sourcing Africa",
    "gold verification Africa",
    "gold export Africa",
    "African gold suppliers",
    "gold buyer safety",
  ],
  alternates: {
    canonical:
      "https://africagoldexporters.com/is-it-safe-to-buy-gold-from-africa",
  },
  openGraph: {
    title: "Is It Safe to Buy Gold From Africa? | Africa Gold Exporters",
    description:
      "A buyer guide explaining risks, verification procedures and how international buyers can approach African gold sourcing more safely.",
    url: "https://africagoldexporters.com/is-it-safe-to-buy-gold-from-africa",
    siteName: "Africa Gold Exporters",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Is It Safe to Buy Gold From Africa?",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is It Safe to Buy Gold From Africa?",
    description:
      "A buyer guide on risks, verification and safer sourcing discussions for African gold.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const safetyPoints = [
  "Work through structured communication from the beginning",
  "Clarify product form, quantity requirement and destination country early",
  "Review documentation expectations before progressing discussions",
  "Understand assay and purity verification procedures",
  "Use a clear transaction structure before shipment coordination",
];

const riskPoints = [
  "Unclear communication about product availability or transaction structure",
  "No clear documentation flow or verification path",
  "No discussion of assay, purity confirmation or export process",
  "Pressure to move too fast without clarity",
  "Lack of buyer preparation before beginning sourcing discussions",
];

export default function SafetyArticlePage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Buyer Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Is It Safe to Buy Gold From Africa?
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Yes, buying gold from Africa can be safe when international buyers
            approach the process with care, verification awareness and
            structured communication. The real issue is not the region itself,
            but whether the sourcing discussion follows a professional process.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Many international buyers ask whether it is safe to{" "}
              <Link
                href="/buy-gold-africa"
                className="text-[#f3d46b] underline"
              >
                buy gold from Africa
              </Link>
              . This is a normal question because gold is a high-value product
              and buyers need confidence before moving forward.
            </p>

            <p>
              In practice, safer gold sourcing depends on structured buyer
              communication, documentation review, assay verification and clear
              export coordination. Buyers who understand the process are far
              more likely to have productive sourcing discussions.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CONCERNS EXIST */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Why buyers ask this question</h2>

          <div className="mt-6 space-y-6 text-base leading-8 text-white/70">
            <p>
              Gold buyers often worry about risk because gold transactions
              involve significant value, cross-border coordination and multiple
              steps before shipment. Buyers want to know that the process is
              clear, professional and supported by proper verification.
            </p>

            <p>
              That is why many serious buyers first review{" "}
              <Link
                href="/buyer-requirements"
                className="text-[#f3d46b] underline"
              >
                buyer requirements
              </Link>
              , the{" "}
              <Link
                href="/transaction-process"
                className="text-[#f3d46b] underline"
              >
                transaction process
              </Link>{" "}
              and product-specific pages such as{" "}
              <Link
                href="/gold-bars-for-sale-africa"
                className="text-[#f3d46b] underline"
              >
                gold bars for sale in Africa
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT SAFER */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            What makes buying gold from Africa safer?
          </h2>

          <p className="mt-6 text-base leading-8 text-white/70">
            Buyers reduce risk when they work through a structured process
            rather than informal or rushed discussions. Safer sourcing normally
            includes the following:
          </p>

          <div className="mt-8 space-y-4">
            {safetyPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON RISKS */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Common risk signs buyers should avoid
          </h2>

          <p className="mt-6 text-base leading-8 text-white/70">
            Buyers should be cautious when sourcing discussions lack structure
            or when there is no clear explanation of verification and export
            flow.
          </p>

          <div className="mt-8 space-y-4">
            {riskPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT AND REGION CONTEXT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Product form and supplier region also matter
          </h2>

          <div className="mt-6 space-y-6 text-base leading-8 text-white/70">
            <p>
              Safety and clarity also depend on the product being discussed.
              Buyers may be considering{" "}
              <Link
                href="/gold-bars-for-sale-africa"
                className="text-[#f3d46b] underline"
              >
                gold bars
              </Link>{" "}
              or{" "}
              <Link href="/products" className="text-[#f3d46b] underline">
                gold nuggets
              </Link>
              , and each may involve slightly different sourcing discussions.
            </p>

            <p>
              Some buyers also compare supplier regions by reviewing{" "}
              <Link
                href="/gold-suppliers-africa"
                className="text-[#f3d46b] underline"
              >
                gold suppliers in Africa
              </Link>
              ,{" "}
              <Link
                href="/gold-suppliers-uganda"
                className="text-[#f3d46b] underline"
              >
                Uganda
              </Link>{" "}
              and{" "}
              <Link
                href="/gold-suppliers-kenya"
                className="text-[#f3d46b] underline"
              >
                Kenya
              </Link>
              . The more clearly buyers understand the sourcing path, the safer
              and more informed the discussion becomes.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL ANSWER */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Final answer</h2>

          <p className="mt-6 text-base leading-8 text-white/70">
            Buying gold from Africa can be safe when buyers use a structured,
            verification-aware and professionally coordinated process. Safety
            comes from clarity, not guesswork. Buyers who prepare well, review
            documentation expectations and understand assay and export
            procedures are in a much stronger position.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Buyer Inquiry
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to begin a structured sourcing discussion?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">
            If you are a refinery, bullion dealer, trading company or investor,
            you can submit your inquiry with product interest, quantity
            requirement and destination country.
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
