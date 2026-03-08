import { BUSINESS } from "@/utils/constants";
import { useLanguage } from "@/hooks/useLanguage";

export const Footer = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="section-shell grid gap-6 py-10 md:grid-cols-2 md:items-end">
        <div>
          <h2 className="font-display text-2xl text-stone-100">{BUSINESS.name}</h2>
          <p className="mt-2 text-sm text-stone-400">{BUSINESS.address}</p>
        </div>

        <div className="grid gap-2 text-sm text-stone-300 md:justify-end">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="transition hover:text-gold-300">
            {BUSINESS.phoneDisplay}
          </a>
          <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
            Instagram
          </a>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
            Google Maps
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="section-shell text-xs text-stone-500">
          {language === "en"
            ? `Copyright ${year} ${BUSINESS.name}. All rights reserved.`
            : `کاپی رائٹ ${year} ${BUSINESS.name}. جملہ حقوق محفوظ ہیں۔`}
        </p>
      </div>
    </footer>
  );
};
