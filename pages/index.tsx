import Link from "next/link";
import { motion } from "framer-motion";
import { SeoHead } from "@/components/seo/SeoHead";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PrimaryLink } from "@/components/ui/PrimaryActions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";
import { withBasePath } from "@/utils/assetPath";
import {
  ABOUT_CONTENT,
  BUSINESS,
  CTA,
  DELIVERY_OPTIONS,
  HERO_CONTENT,
  PAYMENT_OPTIONS,
  PORTFOLIO_ITEMS,
  SERVICES,
  TESTIMONIALS,
  WHY_CHOOSE_US,
  getLocalizedText,
} from "@/utils/constants";

export default function HomePage() {
  const { language, isUrdu } = useLanguage();
  const isEnglish = language === "en";

  return (
    <>
      <SeoHead
        title="Mir Tailors | Premium Tailoring In Sunsooma Achabal, Kashmir"
        description="Mir Tailors offers premium tailoring for men and women in Sunsooma Achabal, Kashmir. Pheran stitching, sherwani design, alterations, and appointment booking via WhatsApp."
        path="/"
      />

      <section className="section-shell pb-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.03] to-gold-400/10 px-6 py-14 shadow-glow sm:px-10 sm:py-20">
          <div className="absolute inset-0 bg-kashmir-pattern bg-[length:18px_18px] opacity-25" />
          <div className={`relative grid items-center gap-10 lg:grid-cols-2 ${isUrdu ? "text-right" : "text-left"}`}>
            <Reveal>
              <p className="mb-4 text-xs uppercase tracking-[0.26em] text-gold-400/80">{getLocalizedText(HERO_CONTENT.label, language)}</p>
              <h1 className={`font-display text-4xl leading-tight text-stone-100 sm:text-5xl lg:text-6xl ${isUrdu ? "font-urdu leading-[1.8]" : ""}`}>
                {getLocalizedText(HERO_CONTENT.title, language)}
              </h1>
              <p className={`mt-6 max-w-xl text-base text-stone-300 sm:text-lg ${isUrdu ? "font-urdu leading-[2.05]" : "leading-relaxed"}`}>
                {getLocalizedText(HERO_CONTENT.subtitle, language)}
              </p>
              <div className={`mt-8 flex flex-wrap gap-3 ${isUrdu ? "justify-end" : "justify-start"}`}>
                <PrimaryLink href="/booking">{getLocalizedText(HERO_CONTENT.ctaPrimary, language)}</PrimaryLink>
                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-gold-400/50 hover:text-gold-300"
                >
                  {getLocalizedText(HERO_CONTENT.ctaSecondary, language)}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                <img
                  src={withBasePath("/images/hero-tailoring.svg")}
                  alt="Tailoring setup for Mir Tailors"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Our Story" : "ہماری پہچان"}
            title={getLocalizedText(ABOUT_CONTENT.title, language)}
            description={getLocalizedText(ABOUT_CONTENT.body, language)}
            className={isUrdu ? "font-urdu leading-[2.05]" : ""}
          />
        </Reveal>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Services" : "سروسز"}
            title={isEnglish ? "Tailoring Services" : "ٹیلرنگ سروسز"}
            description={
              isEnglish
                ? "Discover craftsmanship for everyday wear, formal dressing, and wedding garments."
                : "روزمرہ، فارمل اور شادی کے ملبوسات کے لیے نفیس درزی کاری دریافت کریں۔"
            }
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((service, index) => (
            <Reveal key={service.name.en} delay={index * 0.06}>
              <GlassCard className={isUrdu ? "text-right" : "text-left"}>
                <h3 className={`text-lg font-semibold text-stone-100 ${isUrdu ? "font-urdu" : ""}`}>
                  {getLocalizedText(service.name, language)}
                </h3>
                <p className={`mt-2 text-sm text-gold-300 ${isUrdu ? "font-urdu" : ""}`}>{getLocalizedText(service.price, language)}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <PrimaryLink href="/services">{isEnglish ? "View Full Services" : "تمام سروسز دیکھیں"}</PrimaryLink>
        </div>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Why Mir Tailors" : "کیوں میر ٹیلرز"}
            title={isEnglish ? "Why Choose Us" : "ہمیں کیوں منتخب کریں"}
            description={
              isEnglish
                ? "A premium tailoring experience that stays simple, transparent, and dependable."
                : "پریمیم درزی کاری کا ایسا تجربہ جو سادہ، واضح اور قابلِ اعتماد ہو۔"
            }
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => (
            <Reveal key={item.title.en} delay={index * 0.08}>
              <GlassCard className={isUrdu ? "text-right" : "text-left"}>
                <h3 className={`font-display text-2xl text-stone-100 ${isUrdu ? "font-urdu text-xl" : ""}`}>
                  {getLocalizedText(item.title, language)}
                </h3>
                <p className={`mt-3 text-sm text-stone-300 ${isUrdu ? "font-urdu leading-[2]" : "leading-relaxed"}`}>
                  {getLocalizedText(item.description, language)}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Portfolio" : "پورٹ فولیو"}
            title={isEnglish ? "Recent Stitched Garments" : "حالیہ تیار شدہ ملبوسات"}
            description={
              isEnglish
                ? "A quick look at our tailoring finish and style range."
                : "ہماری درزی کاری کی نفاست اور مختلف انداز کا مختصر جائزہ۔"
            }
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.slice(0, 3).map((item, index) => (
            <Reveal key={item.title.en} delay={index * 0.1}>
              <motion.figure whileHover={{ y: -4 }} className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                <img src={withBasePath(item.src)} alt={item.title.en} className="h-56 w-full object-cover" loading="lazy" />
                <figcaption className={`space-y-1 px-4 py-4 ${isUrdu ? "text-right" : "text-left"}`}>
                  <h3 className={`text-base font-semibold text-stone-100 ${isUrdu ? "font-urdu" : ""}`}>
                    {getLocalizedText(item.title, language)}
                  </h3>
                  <p className={`text-xs uppercase tracking-[0.18em] text-gold-400 ${isUrdu ? "font-urdu normal-case tracking-normal" : ""}`}>
                    {getLocalizedText(item.category, language)}
                  </p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <PrimaryLink href="/portfolio">{isEnglish ? "Open Full Portfolio" : "مکمل پورٹ فولیو دیکھیں"}</PrimaryLink>
        </div>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Testimonials" : "آراء"}
            title={isEnglish ? "What Customers Say" : "صارفین کی رائے"}
            description={
              isEnglish
                ? "Trusted by families, professionals, and wedding clients across the region."
                : "خطے بھر کے خاندان، پروفیشنلز اور ویڈنگ کلائنٹس کا اعتماد۔"
            }
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.07}>
              <GlassCard className={isUrdu ? "text-right" : "text-left"}>
                <p className={`text-sm text-stone-200 ${isUrdu ? "font-urdu leading-[2]" : "leading-relaxed"}`}>
                  {`\u201C${getLocalizedText(item.quote, language)}\u201D`}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-gold-400">{item.name}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Delivery & Service Options" : "ڈیلیوری اور سہولیات"}
            title={isEnglish ? "Flexible Service Options" : "لچکدار سروس آپشنز"}
            description={
              isEnglish
                ? "Choose the most convenient way to get stitched garments and fittings."
                : "سلائی اور فٹنگ کے لیے اپنی سہولت کے مطابق بہترین طریقہ منتخب کریں۔"
            }
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {DELIVERY_OPTIONS.map((option, index) => (
            <Reveal key={option.title.en} delay={index * 0.08}>
              <GlassCard className={isUrdu ? "text-right" : "text-left"}>
                <h3 className={`text-lg font-semibold text-stone-100 ${isUrdu ? "font-urdu" : ""}`}>
                  {getLocalizedText(option.title, language)}
                </h3>
                <p className={`mt-2 text-sm text-stone-300 ${isUrdu ? "font-urdu leading-[2]" : "leading-relaxed"}`}>
                  {getLocalizedText(option.description, language)}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <div className={`glass-card ${isUrdu ? "text-right" : "text-left"}`}>
            <SectionTitle
              eyebrow={isEnglish ? "Payment Information" : "ادائیگی کی معلومات"}
              title={isEnglish ? "Simple Payment Methods" : "سادہ ادائیگی کے طریقے"}
              description={
                isEnglish
                  ? "Secure your order with advance payment through UPI or pay directly at the shop."
                  : "اپنے آرڈر کو UPI ایڈوانس ادائیگی سے کنفرم کریں یا شاپ پر براہِ راست ادائیگی کریں۔"
              }
            />
            <ul className={`mt-6 grid gap-3 text-sm text-stone-300 ${isUrdu ? "font-urdu leading-[2]" : ""}`}>
              {PAYMENT_OPTIONS.map((option) => (
                <li key={option.en} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {getLocalizedText(option, language)}
                </li>
              ))}
            </ul>
            <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4">
              <img src={withBasePath("/images/upi-qr-placeholder.svg")} alt="UPI QR placeholder" className="h-auto w-full" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <div className="glass-card text-center">
            <h2 className={`font-display text-3xl text-stone-100 sm:text-4xl ${isUrdu ? "font-urdu text-2xl" : ""}`}>
              {getLocalizedText(CTA.title, language)}
            </h2>
            <p className={`mx-auto mt-4 max-w-2xl text-sm text-stone-300 sm:text-base ${isUrdu ? "font-urdu leading-[2]" : "leading-relaxed"}`}>
              {getLocalizedText(CTA.description, language)}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold-400/70 bg-gold-400/20 px-6 py-3 text-sm font-semibold text-gold-300 transition hover:bg-gold-400/35"
              >
                {getLocalizedText(CTA.primary, language)}
              </a>
              <PrimaryLink href="/booking">{isEnglish ? "Book Appointment" : "اپائنٹمنٹ بک کریں"}</PrimaryLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Visit Us" : "ہماری لوکیشن"}
            title={isEnglish ? "Mir Tailors Location" : "میر ٹیلرز کا مقام"}
            description={BUSINESS.city}
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-8">
          <MapEmbed title="Mir Tailors map" />
        </Reveal>
      </section>
    </>
  );
}



