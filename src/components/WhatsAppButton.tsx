export default function WhatsAppButton() {
  const phone = "256701523269";
  const message =
    "Hello, I am interested in your gold export services. Please share more details.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black shadow-2xl transition hover:scale-[1.02]"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
