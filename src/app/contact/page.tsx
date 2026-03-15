import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Submit a buyer inquiry to Africa Gold Exporters for gold sourcing, export coordination, assay process support, and documentation guidance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Africa Gold Exporters",
    description:
      "Send your gold buyer inquiry for product details, quantity discussion, documentation flow, and export coordination.",
    url: "https://africagoldexporters.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d46b]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Send your buyer inquiry
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Share your requirements and our team will respond with more details.
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
