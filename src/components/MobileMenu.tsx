"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Process", href: "/transaction-process" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
      >
        <span className="text-lg">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-[#050505] backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/85 transition hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#f3d46b] via-[#d4af37] to-[#b8871d] px-5 py-3 text-sm font-semibold text-black shadow-[0_8px_25px_rgba(212,175,55,0.2)] transition hover:scale-[1.02]"
            >
              Request Gold Offer
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
