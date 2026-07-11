import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "AI Web Studio - Web design and development, engineered for outcomes";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.35), transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            AI
          </div>
          <div style={{ color: "#f5f5f6", fontSize: "44px", fontWeight: 700 }}>
            AI Web Studio
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "56px",
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-2px",
          }}
        >
          <div>Web design, engineered</div>
          <div>for business outcomes.</div>
        </div>
        <div
          style={{
            marginTop: "36px",
            color: "#a8abb2",
            fontSize: "30px",
          }}
        >
          Corporate sites / Landing pages / E-commerce / SEO / AI
        </div>
        <div
          style={{
            position: "absolute",
            left: "80px",
            right: "80px",
            bottom: "64px",
            height: "4px",
            borderRadius: "2px",
            backgroundColor: "#2563eb",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
