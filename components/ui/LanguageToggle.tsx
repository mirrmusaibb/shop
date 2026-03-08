import { useLanguage } from "@/hooks/useLanguage";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex min-h-10 items-center rounded-full border border-white/20 bg-white/5 px-4 text-xs font-semibold uppercase tracking-wide text-stone-200 transition hover:border-gold-400/60 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
      aria-label="Toggle language"
    >
      {language === "en" ? "اردو" : "EN"}
    </button>
  );
};
