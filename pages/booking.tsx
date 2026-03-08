import { type FormEvent, useMemo, useState } from "react";
import { SeoHead } from "@/components/seo/SeoHead";
import { PrimaryButton } from "@/components/ui/PrimaryActions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";
import { BOOKING_TYPES, type Language, getLocalizedText } from "@/utils/constants";
import { createBookingMessage, openWhatsAppMessage } from "@/utils/whatsapp";

type BookingFormState = {
  bookingType: string;
  name: string;
  phone: string;
  address: string;
  garmentType: string;
  preferredDate: string;
  notes: string;
};

const initialState: BookingFormState = {
  bookingType: "",
  name: "",
  phone: "",
  address: "",
  garmentType: "",
  preferredDate: "",
  notes: "",
};

const getLabels = (language: Language) =>
  language === "en"
    ? {
        eyebrow: "Booking",
        title: "Book A Tailoring Appointment",
        description: "Fill in your details and continue on WhatsApp with a pre-filled booking message.",
        bookingType: "Booking Type",
        name: "Name",
        phone: "Phone Number",
        address: "Address",
        garmentType: "Garment Type",
        preferredDate: "Preferred Date",
        notes: "Additional Notes",
        submit: "Continue To WhatsApp",
        placeholder: {
          name: "Your full name",
          phone: "Your mobile number",
          address: "Your address",
          garmentType: "Example: Wedding sherwani",
          notes: "Share fabric, fitting, or timing details",
        },
      }
    : {
        eyebrow: "بکنگ",
        title: "ٹیلرنگ اپائنٹمنٹ بک کریں",
        description: "اپنی تفصیل درج کریں اور واٹس ایپ پر پری فل پیغام کے ساتھ آگے بڑھیں۔",
        bookingType: "بکنگ کی قسم",
        name: "نام",
        phone: "فون نمبر",
        address: "پتہ",
        garmentType: "لباس کی قسم",
        preferredDate: "پسندیدہ تاریخ",
        notes: "اضافی نوٹس",
        submit: "واٹس ایپ پر جاری رکھیں",
        placeholder: {
          name: "اپنا مکمل نام",
          phone: "اپنا موبائل نمبر",
          address: "اپنا پتہ",
          garmentType: "مثال: ویڈنگ شیروانی",
          notes: "کپڑا، فٹنگ یا وقت کی تفصیل لکھیں",
        },
      };

export default function BookingPage() {
  const { language, isUrdu } = useLanguage();
  const [form, setForm] = useState<BookingFormState>(initialState);
  const labels = getLabels(language);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = createBookingMessage(form, language);
    openWhatsAppMessage(message);
  };

  const onFieldChange = (field: keyof BookingFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SeoHead
        title="Book Appointment | Mir Tailors"
        description="Book stitching orders, measurement appointments, home visits, and alteration pickups from Mir Tailors via WhatsApp."
        path="/booking/"
      />

      <section className="section-shell py-8 sm:py-12">
        <Reveal>
          <SectionTitle eyebrow={labels.eyebrow} title={labels.title} description={labels.description} />
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <form onSubmit={onSubmit} className={`glass-card space-y-5 ${isUrdu ? "text-right" : "text-left"}`}>
            <div>
              <label htmlFor="bookingType" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                {labels.bookingType}
              </label>
              <select
                id="bookingType"
                value={form.bookingType}
                onChange={(event) => onFieldChange("bookingType", event.target.value)}
                required
                className="form-input"
              >
                <option value="">{language === "en" ? "Select" : "منتخب کریں"}</option>
                {BOOKING_TYPES.map((type) => (
                  <option key={type.en} value={getLocalizedText(type, language)}>
                    {getLocalizedText(type, language)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                  {labels.name}
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => onFieldChange("name", event.target.value)}
                  required
                  className="form-input"
                  placeholder={labels.placeholder.name}
                />
              </div>
              <div>
                <label htmlFor="phone" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                  {labels.phone}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => onFieldChange("phone", event.target.value)}
                  required
                  className="form-input"
                  placeholder={labels.placeholder.phone}
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                {labels.address}
              </label>
              <input
                id="address"
                type="text"
                value={form.address}
                onChange={(event) => onFieldChange("address", event.target.value)}
                required
                className="form-input"
                placeholder={labels.placeholder.address}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="garmentType" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                  {labels.garmentType}
                </label>
                <input
                  id="garmentType"
                  type="text"
                  value={form.garmentType}
                  onChange={(event) => onFieldChange("garmentType", event.target.value)}
                  required
                  className="form-input"
                  placeholder={labels.placeholder.garmentType}
                />
              </div>
              <div>
                <label htmlFor="preferredDate" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                  {labels.preferredDate}
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  min={minDate}
                  value={form.preferredDate}
                  onChange={(event) => onFieldChange("preferredDate", event.target.value)}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className={`mb-2 block text-sm font-medium text-stone-200 ${isUrdu ? "font-urdu" : ""}`}>
                {labels.notes}
              </label>
              <textarea
                id="notes"
                rows={4}
                value={form.notes}
                onChange={(event) => onFieldChange("notes", event.target.value)}
                className="form-input"
                placeholder={labels.placeholder.notes}
              />
            </div>

            <PrimaryButton type="submit" className="w-full sm:w-auto">
              {labels.submit}
            </PrimaryButton>
          </form>
        </Reveal>
      </section>
    </>
  );
}
