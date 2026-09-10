// Shared, non-translatable site facts.
// Booking link: create a Cal.com (or Calendly) event, then set BOOKING_URL —
// the contact page and all "Book a call" CTAs pick it up automatically.
export const BOOKING_URL: string | null = null;

export const site = {
  name: 'Nino Genio',
  url: 'https://nino.id',
  email: 'contact@nino.id',
  phoneDisplay: '+62 819-7979-6767-5',
  phoneHref: 'tel:+628197967675',
  whatsapp:
    'https://wa.me/628197967675?text=' +
    encodeURIComponent("Hi Nino Genio! I'd like to talk about AI for my business."),
  office: 'Plaza Aminta Lt. 5 / 504\nJl. Let. Jen. TB Simatupang Kav. 10\nPondok Pinang, Jakarta Selatan 12310',
  github: 'https://github.com/NinoGenio',
  linkedin: 'https://www.linkedin.com/in/gentra/',
  hainaya: 'https://hainaya.id',
  legal: 'PT Nino Genio Indonesia',
  legalDetail: 'NIB 2603260080941 · NPWP 1000.000.008.578.941',
};
