"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { t, tx } from "@/lib/translations";
import { menuCategories } from "@/lib/menu-data";
import DanishFlag from "@/components/DanishFlag";
import GermanFlag from "@/components/GermanFlag";
import type { Lang } from "@/lib/translations";

const categoryIcons: Record<string, string> = {
  pizza:       "pizza",
  calzone:     "calzone",
  mexicansk:   "chilli",
  salatpizza:  "salad",
  specialpizza:"star",
  born:        "kids",
  durum:       "wrap",
  brod:        "bread",
  salater:     "leaf",
  grill:       "flame",
  specialitet: "steak",
  pasta:       "pasta",
};

// Minimal SVG icons per category
function CategorySVG({ type, color = "var(--ef-orange)" }: { type: string; color?: string }) {
  const s = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "pizza":   return <svg {...s}><path d="M12 2L22 19H2L12 2Z"/><circle cx="12" cy="10" r="1.5" fill={color}/><circle cx="8" cy="15" r="1" fill={color}/><circle cx="16" cy="15" r="1" fill={color}/></svg>;
    case "calzone": return <svg {...s}><path d="M4 12C4 7 8 4 12 4C16 4 20 7 20 12"/><path d="M4 12C4 17 8 20 12 20C16 20 20 17 20 12"/><path d="M4 12H20"/></svg>;
    case "chilli":  return <svg {...s}><path d="M12 2C14 2 16 4 15 7C14 10 16 14 14 18C13 20 11 20 10 18C8 14 10 10 9 7C8 4 10 2 12 2Z"/><path d="M12 2C12 2 14 0 16 2"/></svg>;
    case "salad":   return <svg {...s}><circle cx="12" cy="12" r="9"/><path d="M8 12C8 9 10 7 12 8C14 9 14 12 12 14C10 16 8 15 8 12Z"/></svg>;
    case "star":    return <svg {...s}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case "kids":    return <svg {...s}><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a6 6 0 0112 0v2"/></svg>;
    case "wrap":    return <svg {...s}><path d="M3 6C3 4 5 3 7 4L17 7C19 8 20 10 19 12L15 21C14 23 12 23 10 22L5 18C3 17 3 15 4 13L3 6Z"/><path d="M7 10L17 13"/><path d="M6 14L16 17"/></svg>;
    case "bread":   return <svg {...s}><rect x="2" y="10" width="20" height="10" rx="5"/><path d="M6 10C6 7 8 5 12 5C16 5 18 7 18 10"/></svg>;
    case "leaf":    return <svg {...s}><path d="M11 20A7 7 0 0118 7H4C4 7 3 14 11 20Z"/><path d="M11 20L11 8"/></svg>;
    case "flame":   return <svg {...s}><path d="M8.5 14C8.5 11 11 8 12 5C13 8 16 10 16 14C16 17.3 14.2 20 12 20C9.8 20 8.5 17.3 8.5 14Z"/><path d="M10 17C10 15 11 14 12 12C13 14 14 15 14 17"/></svg>;
    case "steak":   return <svg {...s}><path d="M3 17C3 13 6 10 12 10C18 10 21 13 21 17"/><ellipse cx="12" cy="18" rx="9" ry="3"/><path d="M17 7C17 7 19 5 21 7"/><circle cx="21" cy="7.5" r="1.5" fill={color}/><circle cx="21" cy="4.5" r="1.5" fill={color}/></svg>;
    case "pasta":   return <svg {...s}><path d="M4 9C4 9 8 7 12 9C16 11 20 9 20 9"/><path d="M4 13C4 13 8 11 12 13C16 15 20 13 20 13"/><path d="M4 17C4 17 8 15 12 17C16 19 20 17 20 17"/></svg>;
    default:        return <svg {...s}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

export default function MenuPage() {
  const { lang, setLang } = useLanguage();

  return (
    <main style={{ backgroundColor: "var(--ef-cream)", minHeight: "100vh" }}>
      {/* PAGE HEADER */}
      <div style={{
        backgroundColor: "var(--ef-dark2)",
        paddingTop: 112, paddingBottom: 56,
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/photo12.jpg')",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12,
        }} />
        <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ef-gold)", marginBottom: 14 }}>
            Restaurant Efesos
          </p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 600, color: "#fff", lineHeight: 1.05, marginBottom: 8 }}>
            {tx(t.menu.pageTitle, lang)}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
            {tx(t.menu.noteText, lang)}
          </p>
        </div>
      </div>

      {/* LANGUAGE TOGGLE */}
      <div style={{ display: "flex", justifyContent: "center", padding: "28px 24px 4px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          backgroundColor: "#fff", border: "1px solid var(--ef-border)",
          borderRadius: 100, padding: 4,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}>
          {(["dk", "de"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 18px", borderRadius: 100, border: "none",
                backgroundColor: lang === l ? "var(--ef-orange)" : "transparent",
                color: lang === l ? "#fff" : "var(--ef-text)",
                fontWeight: 500, fontSize: 14, transition: "all 0.2s", cursor: "pointer",
              }}
            >
              {l === "dk" ? <DanishFlag size="sm" /> : <GermanFlag size="sm" />}
              {l === "dk" ? "Dansk" : "Deutsch"}
            </button>
          ))}
        </div>
      </div>

      {/* MENU */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 80px" }}>
        {menuCategories.map((cat) => (
          <section key={cat.id} style={{ marginBottom: 52 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 22,
              paddingBottom: 12, borderBottom: "2px solid var(--ef-orange)",
            }}>
              <span style={{
                width: 36, height: 36, borderRadius: 10,
                backgroundColor: "rgba(200,89,30,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <CategorySVG type={categoryIcons[cat.id] || "star"} />
              </span>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 600,
                color: "var(--ef-text)", lineHeight: 1,
              }}>
                {cat.title[lang]}
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 12 }}>
              {cat.items.map((item) => (
                <div
                  key={item.number}
                  style={{
                    backgroundColor: "#fff", borderRadius: 12, padding: "16px 18px",
                    border: "1px solid var(--ef-border)",
                    display: "flex", alignItems: "flex-start", gap: 12,
                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  className="menu-item-hover"
                >
                  <span style={{
                    flexShrink: 0, width: 30, height: 30, borderRadius: 8,
                    backgroundColor: "var(--ef-orange)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700,
                  }}>
                    {item.number}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 17, fontWeight: 600, color: "var(--ef-text)",
                      marginBottom: item.desc[lang] ? 4 : 0, lineHeight: 1.2,
                    }}>
                      {item.name[lang]}
                    </p>
                    {item.desc[lang] && (
                      <p style={{ fontSize: 12.5, color: "var(--ef-muted)", lineHeight: 1.5, margin: 0 }}>
                        {item.desc[lang]}
                      </p>
                    )}
                  </div>
                  <span style={{
                    flexShrink: 0, fontSize: 16, fontWeight: 700,
                    color: "var(--ef-orange)", marginLeft: 6,
                    fontVariantNumeric: "tabular-nums",
                  }}>
                    {item.price},-
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call CTA */}
        <div style={{
          textAlign: "center", padding: "40px 24px",
          backgroundColor: "var(--ef-dark2)", borderRadius: 16,
        }}>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, marginBottom: 20, lineHeight: 1.6 }}>
            {tx(t.menu.orderCta, lang)}
          </p>
          <a href="tel:+4575275722" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 30px", backgroundColor: "var(--ef-orange)", color: "#fff",
            borderRadius: 8, fontWeight: 600, fontSize: 16, textDecoration: "none",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7 2 2 0 011.98-2.18h3a2 2 0 012 1.72c.13 1 .38 1.97.74 2.9a2 2 0 01-.45 2.11L6.91 6.9a16 16 0 006.18 6.18l1.35-1.35a2 2 0 012.11-.45c.93.36 1.9.61 2.9.74A2 2 0 0122 16.92z"/>
            </svg>
            75 27 57 22
          </a>
        </div>
      </div>

      <style>{`
        .menu-item-hover:hover {
          border-color: rgba(200,89,30,0.3) !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
        }
      `}</style>
    </main>
  );
}
