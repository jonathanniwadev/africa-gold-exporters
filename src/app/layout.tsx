import type { Metadata } from "next";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

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
    "gold dust Africa",
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
  { name: "Purity Standards", href: "/purity-standards" },
  { name: "Buyer Requirements", href: "/buyer-requirements" },
  { name: "Transaction Process", href: "/transaction-process" },
  { name: "Export Procedure", href: "/export-procedure" },
  { name: "Verification", href: "/verification-compliance" },
  { name: "Documentation", href: "/documentation" },
  // { name: "Contact", href: "/contact" },
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
    <html lang="en">
      <body className="bg-[#0b0b0b] text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-lg font-bold tracking-wide sm:text-xl"
            >
              <span className="text-white">Africa</span>{" "}
              <span className="text-[#d4af37]">Gold Exporters</span>
            </Link>

            <nav className="hidden items-center gap-5 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="rounded-xl bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Inquiry
              </Link>
            </div>

            <MobileMenu />
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 xl:grid-cols-5 lg:px-8">
            <div>
              <h3 className="text-lg font-bold text-[#d4af37]">
                Africa Gold Exporters
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Structured gold sourcing and export coordination for
                international buyers across East Africa.
              </p>
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
                <p>info@africagoldexporters.com</p>
                <p>+256 701 523 269</p>
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </body>
    </html>
  );
}
