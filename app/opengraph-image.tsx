import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CitationCore — AI Visibility for Shopify Stores";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(22,163,74,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #16a34a, #0ea5e9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span style={{ fontSize: "32px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
            CitationCore
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Your Shopify store is</span>
          <span
            style={{
              background: "linear-gradient(135deg, #4ade80, #38bdf8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            invisible to AI.
          </span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: "22px", color: "#94a3b8", marginTop: "20px", maxWidth: "650px", lineHeight: 1.5 }}>
          Get recommended by ChatGPT, Gemini, Claude & Perplexity. Track your AI visibility score and optimize your listings.
        </div>

        {/* AI badges */}
        <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
          {["ChatGPT", "Gemini", "Perplexity", "Claude"].map((name) => (
            <div
              key={name}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px",
                padding: "8px 20px",
                fontSize: "16px",
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #16a34a, #0ea5e9)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
