import { ImageResponse } from "next/og";

export const alt = "Cabañas Parada 8 · Barra del Chuy, Uruguay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen para cuando se comparte el link (WhatsApp, Facebook, etc.)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "#1f2021",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#f7f6f3",
            color: "#7a1e24",
            borderRadius: 24,
            padding: "24px 44px 16px",
          }}
        >
          <div style={{ fontSize: 28, letterSpacing: 4 }}>Parada</div>
          <div style={{ fontSize: 220, lineHeight: 1 }}>8</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 76, lineHeight: 1 }}>Cabañas Parada 8</div>
          <div style={{ fontSize: 36, color: "rgba(255,255,255,0.8)" }}>Barra del Chuy, Uruguay</div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.6)" }}>A media cuadra de la playa</div>
        </div>
      </div>
    ),
    size,
  );
}
