import { BUSINESS, type Language } from "@/utils/constants";

export type BookingPayload = {
  bookingType: string;
  name: string;
  phone: string;
  address: string;
  garmentType: string;
  preferredDate: string;
  notes: string;
};

export type ContactPayload = {
  name: string;
  phone: string;
  message: string;
};

const sectionLabels = {
  en: {
    booking: "New Booking Request",
    contact: "New Contact Inquiry",
    bookingType: "Booking Type",
    name: "Name",
    phone: "Phone",
    address: "Address",
    garmentType: "Garment Type",
    preferredDate: "Preferred Date",
    notes: "Additional Notes",
    message: "Message",
  },
  ur: {
    booking: "نئی بکنگ درخواست",
    contact: "نیا رابطہ پیغام",
    bookingType: "بکنگ کی قسم",
    name: "نام",
    phone: "فون",
    address: "پتہ",
    garmentType: "لباس کی قسم",
    preferredDate: "پسندیدہ تاریخ",
    notes: "اضافی نوٹس",
    message: "پیغام",
  },
};

const buildLines = (language: Language, entries: Array<[string, string]>): string => {
  const heading = language === "ur" ? "سلام، میر ٹیلرز" : "Hello Mir Tailors,";
  return [heading, "", ...entries.map(([label, value]) => `*${label}:* ${value || "-"}`)].join("\n");
};

export const createBookingMessage = (payload: BookingPayload, language: Language): string => {
  const labels = sectionLabels[language];

  return buildLines(language, [
    [labels.booking, ""],
    [labels.bookingType, payload.bookingType],
    [labels.name, payload.name],
    [labels.phone, payload.phone],
    [labels.address, payload.address],
    [labels.garmentType, payload.garmentType],
    [labels.preferredDate, payload.preferredDate],
    [labels.notes, payload.notes],
  ]);
};

export const createContactMessage = (payload: ContactPayload, language: Language): string => {
  const labels = sectionLabels[language];

  return buildLines(language, [
    [labels.contact, ""],
    [labels.name, payload.name],
    [labels.phone, payload.phone],
    [labels.message, payload.message],
  ]);
};

export const openWhatsAppMessage = (message: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};
