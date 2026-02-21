"use client";
import { useState } from "react";
import { menuCategories, noteText } from "@/lib/menu-data";
import DanishFlag from "@/components/DanishFlag";
import GermanFlag from "@/components/GermanFlag";

type Lang = "dk" | "de";

const categoryIcons: Record<string, string> = {
  pizza: "🍕",
  calzone: "🫓",
  mexicansk: "🌶️",
  salatpizza: "🥗",
  specialpizza: "⭐",
  born: "👶",
  durum: "🌯",
  brod: "🍞",
  salater: "🥗",
  grill: "🔥",
  specialitet: "🥩",
  pasta: "🍝",
};

export default function MenuPage() {
  const [lang, setLang] = useState<Lang>("dk");

  return (
    <main style={{ backgroundColor: "var(--ef-cream)", minHeight: "100vh" }}>
      {/* PAGE HEADER */}
      <div
        style={{
          backgroundColor: "var(--ef-dark2)",
          paddingTop: 112,
          paddingBottom: 56,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/photo12.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ef-gold)",
              marginBottom: 14,
            }}
          >
            Restaurant Efesos
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: 8,
            }}
          >
            Menukort
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
            {noteText[lang]}
          </p>
        </div>
      </div>

      {/* LANGUAGE TOGGLE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "28px 24px 4px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            backgroundColor: "#fff",
            border: "1px solid var(--ef-border)",
            borderRadius: 100,
            padding: 4,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <button
            onClick={() => setLang("dk")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 100,
              border: "none",
              backgroundColor: lang === "dk" ? "var(--ef-orange)" : "transparent",
              color: lang === "dk" ? "#fff" : "var(--ef-text)",
              fontWeight: 500,
              fontSize: 14,
              transition: "all 0.2s",
            }}
          >
            <DanishFlag size="sm" />
            Dansk
          </button>
          <button
            onClick={() => setLang("de")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 100,
              border: "none",
              backgroundColor: lang === "de" ? "var(--ef-orange)" : "transparent",
              color: lang === "de" ? "#fff" : "var(--ef-text)",
              fontWeight: 500,
              fontSize: 14,
              transition: "all 0.2s",
            }}
          >
            <GermanFlag size="sm" />
            Deutsch
          </button>
        </div>
      </div>

      {/* MENU CATEGORIES */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 80px" }}>
        {menuCategories.map((cat) => (
          <section key={cat.id} style={{ marginBottom: 52 }}>
            {/* Category header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 24,
                paddingBottom: 14,
                borderBottom: "2px solid var(--ef-orange)",
              }}
            >
              <span style={{ fontSize: 26 }}>{categoryIcons[cat.id] || "🍽️"}</span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 600,
                  color: "var(--ef-text)",
                  lineHeight: 1,
                }}
              >
                {cat.title[lang]}
              </h2>
            </div>

            {/* Items grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 12,
              }}
            >
              {cat.items.map((item) => (
                <div
                  key={item.number}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 12,
                    padding: "16px 20px",
                    border: "1px solid var(--ef-border)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Number badge */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: "var(--ef-orange)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.number}
                  </span>

                  {/* Name + desc */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 18,
                        fontWeight: 600,
                        color: "var(--ef-text)",
                        marginBottom: item.desc[lang] ? 4 : 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.name[lang]}
                    </p>
                    {item.desc[lang] && (
                      <p
                        style={{
                          fontSize: 13,
                          color: "var(--ef-muted)",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {item.desc[lang]}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-body)",
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--ef-orange)",
                      fontVariantNumeric: "tabular-nums",
                      marginLeft: 8,
                    }}
                  >
                    {item.price},-
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to order */}
        <div
          style={{
            textAlign: "center",
            marginTop: 16,
            padding: "40px 24px",
            backgroundColor: "var(--ef-dark2)",
            borderRadius: 16,
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 15,
              marginBottom: 20,
              lineHeight: 1.6,
            }}
          >
            {lang === "dk"
              ? "Ring til os for at bestille take-away eller reservere bord"
              : "Rufen Sie uns an für Bestellung zum Mitnehmen oder Tischreservierung"}
          </p>
          <a
            href="tel:+4575275722"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 30px",
              backgroundColor: "var(--ef-orange)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            📞 75 27 57 22
          </a>
        </div>
      </div>
    </main>
  );
}
