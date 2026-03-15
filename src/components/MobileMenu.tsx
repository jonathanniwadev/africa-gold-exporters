"use client";

import Link from "next/link";
import { useState } from "react";

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
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white"
      >
        <span className="text-lg">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-black/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-white/85 transition hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#d4af37] px-4 py-3 text-sm font-semibold text-black"
            >
              Inquiry
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
