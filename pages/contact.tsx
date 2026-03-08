import { type FormEvent, useState } from "react";
import { SeoHead } from "@/components/seo/SeoHead";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PrimaryButton } from "@/components/ui/PrimaryActions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";
import { BUSINESS, type Language } from "@/utils/constants";
import { createContactMessage, openWhatsAppMessage } from "@/utils/whatsapp";

type ContactFormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  phone: "",
  message: "",
};

const getLabels = (language: Language) =>
  language === "en"
    ? {
        eyebrow: "Contact",
        title: "Get In Touch",
        description: "Call, chat on WhatsApp, follow Instagram, or send us details directly.",
        call: "Call Now",
        whatsapp: "WhatsApp Chat",
        instagram: "Instagram",
        mapTitle: "Visit Mir Tailors",
        formTitle: "Send Details On WhatsApp",
        name: "Name",
        phone: "Phone Number",
        message: "Message",
        submit: "Send To WhatsApp",
        placeholders: {
          name: "Your full name",
          phone: "Your mobile number",
          message: "Tell us what you need",
        },
      }
    : {
        eyebrow: "رابطہ",
        title: "ہم سے رابطہ کریں",
        description: "فون کریں، واٹس ایپ پر پیغام دیں، انسٹاگرام فالو کریں یا اپنی تفصیل بھیجیں۔",
        call: "ابھی کال کریں",
        whatsapp: "واٹس ایپ چیٹ",
        instagram: "انسٹاگرام",
        mapTitle: "میر ٹیلرز تشریف لائیں",
        formTitle: "واٹس ایپ پر تفصیل بھیجیں",
        name: "نام",
        phone: "فون نمبر",
        message: "پیغام",
        submit: "واٹس ایپ پر بھیجیں",
        placeholders: {
          name: "اپنا مکمل نام",
          phone: "اپنا موبائل نمبر",
          message: "اپنی ضرورت لکھیں",
        },
      };

export default function ContactPage() {
  const { language, isUrdu } = useLanguage();
  const labels = getLabels(language);
  const [form, setForm] = useState<ContactFormState>(initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = createContactMessage(form, language);
    openWhatsAppMessage(message);
  };

  return (
    <>
      <SeoHead
        title="Contact | Mir Tailors"
        description="Contact Mir Tailors in Sunsooma Achabal via phone, WhatsApp, Instagram, or map directions."
        path="/contact/"
      />

      <section className="section-shell py-8 sm:py-12">
        <Reveal>
          <SectionTitle eyebrow={labels.eyebrow} title={labels.title} description={labels.description} />
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <div className={`grid gap-6 lg:grid-cols-2 ${isUrdu ? "text-right" : "text-left"}`}>
            <div className="space-y-6">
              <div className="glass-card">
                <h3 className={`font-display text-2xl text-stone-100 ${isUrdu ? "font-urdu text-xl" : ""}`}>{labels.mapTitle}</h3>
                <p className="mt-2 text-sm text-stone-300">{BUSINESS.address}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="inline-flex min-h-12 items-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-stone-100 transition hover:border-gold-400/50 hover:text-gold-300"
                  >
                    {labels.call}
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center rounded-full border border-gold-400/60 bg-gold-400/20 px-5 text-sm font-semibold text-gold-300 transition hover:bg-gold-400/35"
                  >
                    {labels.whatsapp}
                  </a>
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-stone-100 transition hover:border-gold-400/50 hover:text-gold-300"
                  >
                    {labels.instagram}
                  </a>
                </div>
              </div>
              <MapEmbed title="Mir Tailors on Google Maps" />
            </div>

            <form onSubmit={onSubmit} className="glass-card space-y-5">
              <h3 className={`font-display text-2xl text-stone-100 ${isUrdu ? "font-urdu text-xl" : ""}`}>{labels.formTitle}</h3>

              <div>
                <label htmlFor="name" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                  {labels.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="form-input"
                  placeholder={labels.placeholders.name}
                />
              </div>

              <div>
                <label htmlFor="phone" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                  {labels.phone}
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  className="form-input"
                  placeholder={labels.placeholders.phone}
                />
              </div>

              <div>
                <label htmlFor="message" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                  {labels.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="form-input"
                  placeholder={labels.placeholders.message}
                />
              </div>

              <PrimaryButton type="submit" className="w-full sm:w-auto">
                {labels.submit}
              </PrimaryButton>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
