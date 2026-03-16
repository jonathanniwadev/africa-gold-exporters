import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  BadgeCheck,
  ShieldCheck,
  Scale,
  Truck,
  ScanSearch,
  Gem,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Africa Gold Exporters",
  description:
    "Structured gold sourcing and export coordination for international buyers across East Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Africa Gold Exporters",
    description:
      "Structured gold sourcing and export coordination for international buyers across East Africa.",
    url: "https://africagoldexporters.com",
    images: ["/opengraph-image.png"],
  },
};

const products = [
  {
    title: "Gold Bars",
    description:
      "Preferred by refineries, bullion dealers, and international buyers for structured sourcing discussions.",
    image: "/images/gold-bars.png",
  },
  {
    title: "Gold Nuggets",
    description:
      "Natural gold product form discussed depending on supplier availability and buyer requirements.",
    image: "/images/gold-granules.png",
  },
];

const trustPoints = [
  {
    title: "Licensed Export Framework",
    text: "Buyers need confidence that the transaction is being handled through a properly licensed export framework.",
    icon: BadgeCheck,
  },
  {
    title: "Insured Transaction Security",
    text: "For serious buyers, transaction security matters. High-value discussions are supported through insured transaction handling.",
    icon: ShieldCheck,
  },
  {
    title: "LBMA-Aligned Standards",
    text: "Buyer expectations are structured around internationally recognized gold market standards and professional transaction discipline.",
    icon: Scale,
  },
  {
    title: "Responsible Sourcing",
    text: "Serious buyers look for transparency. Our process reflects responsible sourcing discussions and fair commercial engagement.",
    icon: Gem,
  },
  {
    title: "Secure Export Logistics",
    text: "Shipment planning and export coordination are handled with security, clarity and international transaction awareness in mind.",
    icon: Truck,
  },
  {
    title: "Assay Verification",
    text: "Before buyers proceed, they need confidence in product quality. Assay and purity verification remain central to the process.",
    icon: ScanSearch,
  },
];

const processSteps = [
  "Buyer submits inquiry or Letter of Intent (LOI)",
  "Initial sourcing and product discussion begins",
  "Documentation and verification stages are reviewed",
  "Assay and export coordination discussions follow",
];

const testimonialItems = [
  {
    quote:
      "Our sourcing discussion was handled professionally and the process structure was clear from the beginning.",
    name: "Ahmed Al-Mansoori",
    role: "Bullion Trader • United Arab Emirates",
  },
  {
    quote:
      "The strength of the process presentation gave confidence in moving forward with serious discussions.",
    name: "Lukas Schneider",
    role: "Jewelry Manufacturer • Switzerland",
  },
  {
    quote:
      "Clear buyer communication and export coordination made the inquiry process much easier to understand.",
    name: "Chen Wei",
    role: "Gold Investor • China",
  },
  {
    quote:
      "The documentation flow and export coordination process were presented clearly during the sourcing discussions.",
    name: "Rajesh Mehta",
    role: "Jewelry Manufacturer • India",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/gold-hero.png"
            alt="Gold bars and gold nuggets"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.20),_transparent_30%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="gold-pulse inline-flex rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f3d46b] sm:text-xs">
                Premium Gold Sourcing
              </p>

              <h1
                className={`${cormorant.className} mt-5 max-w-5xl text-5xl leading-[0.9] sm:text-6xl lg:text-[5.8rem] xl:text-[6.4rem]`}
              >
                <span className="block whitespace-nowrap">Trusted Gold.</span>
                <span className="block whitespace-nowrap text-[#f3d46b] italic">
                  Global Reach.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-[1.02rem]">
                Africa’s premier source for high-purity African gold. Licensed,
                insured and delivered globally through secure CIF logistics.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-7 py-4 text-sm font-semibold text-black transition hover:opacity-90 sm:text-base"
                >
                  Submit Buyer Inquiry
                </Link>

                <Link
                  href="/transaction-process"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
                >
                  View Transaction Process
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                  <p className="text-xl font-bold text-[#f3d46b]">
                    95% to 99.9%
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Typical raw purity range
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                  <p className="text-xl font-bold text-[#f3d46b]">Licensed</p>
                  <p className="mt-1 text-sm text-white/70">
                    Export-ready framework
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                  <p className="text-xl font-bold text-[#f3d46b]">Secure</p>
                  <p className="mt-1 text-sm text-white/70">
                    Buyer-first transaction process
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-1">
              <div className="rounded-[30px] border border-[#d4af37]/20 bg-black/35 p-5 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f3d46b]">
                  Serious Buyer Notice
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight lg:text-[2rem]">
                  Professional inquiries only
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  This platform is designed for professional gold buyers
                  including refineries, bullion dealers, trading companies,
                  brokers and investors seeking structured gold transactions.
                  All inquiries are handled through clear communication,
                  documentation review, assay verification and secure export
                  coordination.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Gold bars and nuggets sourcing discussions",
                    "Licensed and insured transaction framework",
                    "Assay, purity and verification awareness",
                    "Secure export and logistics coordination",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-3 text-sm text-[#f3d46b]">
                  Minimum discussion quantity and transaction structure can be
                  clarified during buyer inquiry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY TICKER BAR */}
      <section className="border-b border-white/10 bg-[#0c0c0c]">
        <div className="overflow-hidden py-5">
          <div className="ticker-track flex min-w-max items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-[0.28em] text-[#f3d46b]/90">
            <span>Licensed Export Framework</span>
            <span>•</span>
            <span>Insured Transaction Security</span>
            <span>•</span>
            <span>LBMA-Aligned Standards</span>
            <span>•</span>
            <span>Responsible Sourcing</span>
            <span>•</span>
            <span>Secure Export Logistics</span>
            <span>•</span>
            <span>Assay Verification</span>
            <span>•</span>
            <span>East Africa Sourcing</span>
            <span>•</span>
            <span>Serious Buyer Inquiries</span>

            <span className="ml-10">Licensed Export Framework</span>
            <span>•</span>
            <span>Insured Transaction Security</span>
            <span>•</span>
            <span>LBMA-Aligned Standards</span>
            <span>•</span>
            <span>Responsible Sourcing</span>
            <span>•</span>
            <span>Secure Export Logistics</span>
            <span>•</span>
            <span>Assay Verification</span>
            <span>•</span>
            <span>East Africa Sourcing</span>
            <span>•</span>
            <span>Serious Buyer Inquiries</span>
          </div>
        </div>
      </section>

      {/* TRUST & SECURITY */}
      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Trust & Transaction Security
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Why serious buyers trust our process
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              International buyers need clarity before moving forward. Our
              process is designed to communicate trust, verification, security
              and transaction structure from the very first inquiry.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                    <Icon className="h-7 w-7 text-[#f3d46b] transition duration-300 group-hover:rotate-3" />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
                Product Categories
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Gold products presented for structured discussions
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View All Products
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.title}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/35 hover:shadow-[0_0_35px_rgba(212,175,55,0.08)]"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Transaction Flow
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A premium buyer process starts with clarity
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              International buyers need a transaction path that feels serious,
              structured and commercially ready. We present the main process
              stages clearly so buyers understand how inquiries progress.
            </p>

            <div className="mt-8">
              <Link
                href="/export-procedure"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore Export Procedure
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-black">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-white/85 sm:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER CONFIDENCE */}
      <section className="border-b border-white/10 bg-[#080808] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
              Buyer Confidence
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Serious inquiries begin with trust
            </h2>
          </div>

          <div className="mt-14 overflow-hidden">
            <div className="ticker-track flex gap-6">
              {[...testimonialItems, ...testimonialItems].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="min-w-[320px] max-w-[320px] rounded-3xl border border-[#d4af37]/20 bg-gradient-to-b from-[#0d0d0d] to-[#090909] p-8"
                >
                  <p className="text-base italic leading-8 text-white/80">
                    “{item.quote}”
                  </p>

                  <div className="mt-8">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-[#f3d46b]">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-r from-[#1a1a1a] via-[#141414] to-[#101010] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
                  Serious Buyer Inquiry
                </p>
                <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                  Ready to request a gold offer?
                </h2>
                <p className="mt-5 text-base leading-8 text-white/70">
                  Submit your inquiry with product interest, quantity
                  requirement and destination country to begin a structured
                  sourcing discussion with a premium buyer-focused process.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 sm:text-base"
                >
                  Submit Buyer Inquiry
                </Link>

                <Link
                  href="/buyer-requirements"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
                >
                  View Buyer Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
