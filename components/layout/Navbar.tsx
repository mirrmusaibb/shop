import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { BUSINESS, NAV_ITEMS, getLocalizedText } from "@/utils/constants";
import { useLanguage } from "@/hooks/useLanguage";

export const Navbar = () => {
  const router = useRouter();
  const { language, isUrdu } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const whatsappHref = `https://wa.me/${BUSINESS.whatsappNumber}`;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label={BUSINESS.name}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/60 bg-gold-400/10 text-sm font-semibold text-gold-300">
            MT
          </span>
          <div className="leading-tight">
            <span className="block font-display text-2xl text-stone-100">Mir Tailors</span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-stone-400">Tailoring Studio</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const active = router.pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-gold-300 ${
                  active ? "text-gold-300" : "text-stone-300"
                }`}
              >
                {getLocalizedText(item.label, language)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center rounded-full border border-gold-400/60 bg-gold-400/20 px-4 text-xs font-semibold uppercase tracking-wide text-gold-300 transition hover:bg-gold-400/30"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-sm text-stone-100 lg:hidden"
          aria-expanded={isOpen}
          aria-label="Open menu"
        >
          {isOpen ? "X" : "Menu"}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/80 lg:hidden">
          <nav className={`section-shell flex flex-col gap-4 py-4 ${isUrdu ? "text-right" : "text-left"}`}>
            {NAV_ITEMS.map((item) => {
              const active = router.pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 text-base transition ${
                    active ? "bg-white/10 text-gold-300" : "text-stone-200 hover:bg-white/5"
                  }`}
                >
                  {getLocalizedText(item.label, language)}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-2">
              <LanguageToggle />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-gold-400/60 bg-gold-400/20 px-4 text-xs font-semibold uppercase tracking-wide text-gold-300"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};
