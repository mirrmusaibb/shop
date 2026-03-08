import { motion } from "framer-motion";
import { SeoHead } from "@/components/seo/SeoHead";
import { PrimaryLink } from "@/components/ui/PrimaryActions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";
import { withBasePath } from "@/utils/assetPath";
import { PORTFOLIO_ITEMS, getLocalizedText } from "@/utils/constants";

export default function PortfolioPage() {
  const { language, isUrdu } = useLanguage();
  const isEnglish = language === "en";

  return (
    <>
      <SeoHead
        title="Portfolio | Mir Tailors"
        description="View stitched garments by Mir Tailors: traditional pherans, modern kurtas, wedding sherwanis, ladies suits, uniform sets, and precision alterations."
        path="/portfolio/"
      />

      <section className="section-shell py-8 sm:py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Portfolio" : "پورٹ فولیو"}
            title={isEnglish ? "Stitched Garments Gallery" : "تیار شدہ ملبوسات کی گیلری"}
            description={
              isEnglish
                ? "Placeholder images are currently used and can be replaced by dropping new files into /public/images/portfolio."
                : "فی الحال پلیس ہولڈر تصاویر شامل ہیں، جنہیں /public/images/portfolio میں نئی فائلیں رکھ کر آسانی سے تبدیل کیا جا سکتا ہے۔"
            }
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <Reveal key={item.title.en} delay={index * 0.04}>
              <motion.figure
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-black/30"
              >
                <img src={withBasePath(item.src)} alt={item.title.en} className="h-52 w-full object-cover" loading="lazy" />
                <figcaption className={`space-y-1 px-4 py-4 ${isUrdu ? "text-right" : "text-left"}`}>
                  <h3 className={`text-base font-semibold text-stone-100 ${isUrdu ? "font-urdu" : ""}`}>
                    {getLocalizedText(item.title, language)}
                  </h3>
                  <p className={`text-xs uppercase tracking-[0.2em] text-gold-400 ${isUrdu ? "font-urdu normal-case tracking-normal" : ""}`}>
                    {getLocalizedText(item.category, language)}
                  </p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 sm:py-12">
        <PrimaryLink href="/booking">{isEnglish ? "Book Tailoring Appointment" : "ٹیلرنگ اپائنٹمنٹ بک کریں"}</PrimaryLink>
      </section>
    </>
  );
}


