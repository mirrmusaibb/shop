import { SeoHead } from "@/components/seo/SeoHead";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryLink } from "@/components/ui/PrimaryActions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";
import { withBasePath } from "@/utils/assetPath";
import { DELIVERY_OPTIONS, PAYMENT_OPTIONS, SERVICES, getLocalizedText } from "@/utils/constants";

export default function ServicesPage() {
  const { language, isUrdu } = useLanguage();
  const isEnglish = language === "en";

  return (
    <>
      <SeoHead
        title="Services | Mir Tailors"
        description="Explore stitching services from Mir Tailors in Sunsooma Achabal: pheran, kurta, suits, shalwar kameez, wedding sherwani, alterations, and uniform tailoring."
        path="/services/"
      />

      <section className="section-shell py-8 sm:py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Services & Pricing" : "سروسز اور قیمت"}
            title={isEnglish ? "Tailoring Services" : "ٹیلرنگ سروسز"}
            description={
              isEnglish
                ? "Transparent starting prices for common garments. Wedding and custom design orders are priced after consultation."
                : "عام ملبوسات کے لیے واضح ابتدائی قیمتیں۔ ویڈنگ اور کسٹم ڈیزائن آرڈرز کی قیمت مشاورت کے بعد طے ہوتی ہے۔"
            }
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.name.en} delay={index * 0.05}>
              <GlassCard className={isUrdu ? "text-right" : "text-left"}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className={`text-xl font-semibold text-stone-100 ${isUrdu ? "font-urdu" : ""}`}>
                    {getLocalizedText(service.name, language)}
                  </h3>
                  <span className={`rounded-full border border-gold-400/50 bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-300 ${
                    isUrdu ? "font-urdu" : ""
                  }`}>
                    {getLocalizedText(service.price, language)}
                  </span>
                </div>
                {service.note ? (
                  <p className={`mt-4 text-sm text-stone-300 ${isUrdu ? "font-urdu leading-[2]" : "leading-relaxed"}`}>
                    {getLocalizedText(service.note, language)}
                  </p>
                ) : null}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 sm:py-12">
        <Reveal>
          <SectionTitle
            eyebrow={isEnglish ? "Delivery & Service Options" : "ڈیلیوری اور سہولیات"}
            title={isEnglish ? "Flexible Ordering Experience" : "سہل اور لچکدار سروس"}
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {DELIVERY_OPTIONS.map((option, index) => (
            <Reveal key={option.title.en} delay={index * 0.07}>
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

      <section className="section-shell py-8 sm:py-12">
        <Reveal>
          <div className={`glass-card ${isUrdu ? "text-right" : "text-left"}`}>
            <SectionTitle
              eyebrow={isEnglish ? "Payment Information" : "ادائیگی کی معلومات"}
              title={isEnglish ? "Payment Methods" : "ادائیگی کے طریقے"}
              description={
                isEnglish
                  ? "Advance via UPI is available. You can also pay directly at the shop when collecting your garment."
                  : "UPI کے ذریعے ایڈوانس ادائیگی دستیاب ہے۔ آپ لباس وصول کرتے وقت شاپ پر بھی ادائیگی کر سکتے ہیں۔"
              }
            />
            <ul className={`mt-6 grid gap-3 text-sm text-stone-300 ${isUrdu ? "font-urdu leading-[2]" : ""}`}>
              {PAYMENT_OPTIONS.map((option) => (
                <li key={option.en} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {getLocalizedText(option, language)}
                </li>
              ))}
            </ul>
            <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
              <img src={withBasePath("/images/upi-qr-placeholder.svg")} alt="UPI QR placeholder" className="h-auto w-full" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-8 sm:py-12">
        <PrimaryLink href="/booking">{isEnglish ? "Book Appointment" : "اپائنٹمنٹ بک کریں"}</PrimaryLink>
      </section>
    </>
  );
}


