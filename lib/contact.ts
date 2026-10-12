// Datos de contacto únicos: todos los botones y textos salen de acá.
export const WHATSAPP_NUMBER = "59898976924";
export const PHONE_DISPLAY = "+598 98 976 924";
export const DEFAULT_MESSAGE =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";

export const whatsappLink = (message: string = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MAPS_URL =
  "https://www.google.com/maps?q=Parada+8,+Barra+del+Chuy,+Uruguay";
