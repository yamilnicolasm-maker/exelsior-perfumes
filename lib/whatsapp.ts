const WHATSAPP_NUMBER = "542975286617";

export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const generateProductMessage = (productName: string): string => {
  return `Hola, quiero consultar por el perfume ${productName} de EXELSIOR.`;
};

export const generateRecommendationMessage = (
  name: string,
  answers: { question: string; answer: string }[],
): string => {
  const answersText = answers
    .map((a) => `- ${a.question}: ${a.answer}`)
    .join("\n");
  return `Hola EXELSIOR! Soy ${name} y estoy buscando un perfume.\n\nMis preferencias:\n${answersText}\n\nMe gustaria que me recomienden una fragancia ideal para mi.`;
};

export const generateContactMessage = (): string => {
  return `Hola EXELSIOR, quiero mas informacion sobre sus perfumes arabes premium.`;
};

export const openWhatsApp = (message: string): void => {
  const link = generateWhatsAppLink(message);
  window.open(link, "_blank");
};
