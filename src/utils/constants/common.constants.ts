export const SOCIAL_ICON_LINKS = {
  TWITTER: "#",
  LINKEDIN: "#",
  YOUTUBE: "https://youtube.com/@ayushjha_?si=MZp6uQJJ-mQ0WufR",
  INSTAGRAM:
    "https://www.instagram.com/maavindhawasinienterprises?utm_source=qr&igsh=MXc2cjZleXptOWQwbw==",
  FACEBOOK: " https://www.facebook.com/share/1JNYFqHd9k/",
  WHATSAPP: "https://wa.me/917004294010",
};

export const WHATSAPP_NO = "917004294010";

export const getWhatsAppProductLink = (productName: string) => {
  const message = `Hello, I am interested in ${productName}. Please share more details.`;

  return `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(message)}`;
};
