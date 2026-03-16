import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://africagoldexporters.com"),
  title: {
    default: "Africa Gold Exporters",
    template: "%s | Africa Gold Exporters",
  },
  description:
    "Africa Gold Exporters connects international buyers with verified gold suppliers across East Africa through structured sourcing, documentation flow, assay support, and export coordination.",
  keywords: [
    "Africa gold exporters",
    "gold exporters Africa",
    "buy gold from Africa",
    "Uganda gold suppliers",
    "Kenya gold suppliers",
    "gold suppliers Africa",
    "gold bars Africa",
    "gold nuggets Africa",
    "gold export procedure",
    "gold sourcing East Africa",
  ],
  applicationName: "Africa Gold Exporters",
  authors: [{ name: "Africa Gold Exporters" }],
  creator: "Africa Gold Exporters",
  publisher: "Africa Gold Exporters",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://africagoldexporters.com",
    title: "Africa Gold Exporters",
    description:
      "Structured gold sourcing and export coordination for international buyers across East Africa.",
    siteName: "Africa Gold Exporters",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Africa Gold Exporters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Gold Exporters",
    description:
      "Structured gold sourcing and export coordination for international buyers across East Africa.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Process", href: "/transaction-process" },
];

const footerCompanyLinks = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Purity Standards", href: "/purity-standards" },
  { name: "Buyer Requirements", href: "/buyer-requirements" },
  { name: "Transaction Process", href: "/transaction-process" },
];

const footerSupportLinks = [
  { name: "Export Procedure", href: "/export-procedure" },
  { name: "Verification & Compliance", href: "/verification-compliance" },
  { name: "Documentation", href: "/documentation" },
  { name: "Contact", href: "/contact" },
];

const footerSourcingLinks = [
  { name: "Buy Gold Africa", href: "/buy-gold-africa" },
  { name: "Gold Suppliers Africa", href: "/gold-suppliers-africa" },
  { name: "Gold Suppliers Uganda", href: "/gold-suppliers-uganda" },
  { name: "Gold Suppliers Kenya", href: "/gold-suppliers-kenya" },
  { name: "Gold Bars for Sale Africa", href: "/gold-bars-for-sale-africa" },
  { name: "How to Buy Gold Africa", href: "/how-to-buy-gold-africa" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#070707] font-sans text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-[#d4af37]/10 bg-black/75 backdrop-blur-xl">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="group flex items-center gap-3 sm:gap-4">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#d4af37]/25 bg-[#111111] shadow-[0_0_20px_rgba(212,175,55,0.10)] sm:h-12 sm:w-12">
                <Image
                  src="/images/agelogo.png"
                  alt="Africa Gold Exporters logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-[1.9rem]">
                  Africa{" "}
                  <span className="text-[#d4af37] transition group-hover:text-[#f3d46b]">
                    Gold Exporters
                  </span>
                </span>
                <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#d4af37]/80 sm:text-[11px]">
                  Premium Gold Trading
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/75 transition hover:text-[#f3d46b]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden border border-[#d4af37]/40 bg-gradient-to-r from-[#f3d46b] via-[#d4af37] to-[#b8871d] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(212,175,55,0.18)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(212,175,55,0.28)]"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
                <span className="relative">Submit Buyer Inquiry</span>
              </Link>
            </div>

            <MobileMenu />
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 xl:grid-cols-5 lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d4af37]/25 bg-[#111111] shadow-[0_0_20px_rgba(212,175,55,0.10)]">
                  <Image
                    src="/images/agelogo.png"
                    alt="Africa Gold Exporters logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-white">
                    Africa{" "}
                    <span className="text-[#d4af37]">Gold Exporters</span>
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[#d4af37]/70">
                    Premium Trading
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Structured gold sourcing and export coordination for
                international buyers across East Africa.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#d4af37]/30 px-4 py-2 text-sm font-medium text-[#f3d46b] transition hover:bg-[#d4af37]/10"
                >
                  Submit Buyer Inquiry
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                Company
              </h4>
              <div className="mt-4 space-y-3">
                {footerCompanyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-white/60 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                Support
              </h4>
              <div className="mt-4 space-y-3">
                {footerSupportLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-white/60 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                Gold Sourcing
              </h4>
              <div className="mt-4 space-y-3">
                {footerSourcingLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-white/60 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                Contact
              </h4>
              <div className="mt-4 space-y-3 text-sm text-white/60">
                <p>Kampala, Uganda</p>

                <a
                  href="mailto:info@africagoldexporters.com?subject=Buyer%20Inquiry"
                  className="block transition hover:text-[#f3d46b]"
                >
                  info@africagoldexporters.com
                </a>

                <a
                  href="tel:+256701523269"
                  className="block transition hover:text-[#f3d46b]"
                >
                  +256 701 523 269
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/40 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <p>© 2026 Africa Gold Exporters. All rights reserved.</p>
              <p>
                Premium sourcing presentation for serious international buyers.
              </p>
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </body>
    </html>
  );
}
