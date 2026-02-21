"use client";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { t, tx } from "@/lib/translations";
import { menuCategories } from "@/lib/menu-data";
import AnimateIn from "@/components/AnimateIn";
import type { Lang } from "@/lib/translations";

// Real food photos mapped to each category — one real photo per category
const categoryPhotos: Record<string, string> = {
  pizza:        "/images/photo13.jpg",   // pizza
  calzone:      "/images/photo15.jpg",   // calzone open
  mexicansk:    "/images/photo12.jpg",   // loaded spicy pizza
  salatpizza:   "/images/photo14.jpg",   // pizza (not salad — it's a pizza variant!)
  specialpizza: "/images/photo14.jpg",   // pizza
  born:         "/images/photo5.jpg",    // fries — simple, kid-friendly
  durum:        "/images/photo3.jpg",    // dürum wrap
  brod:         "/images/photo6.jpg",    // flatbread/lahmacun
  salater:      "/images/photo8.jpg",    // salad
  grill:        "/images/photo7.jpg",    // BBQ ribs
  specialitet:  "/images/photo9.jpg",    // schnitzel
  pasta:        "/images/photo10.jpg",   // plate with fries & kebab
};

export default function MenuPage() {
  const { lang } = useLanguage();

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
          <p style={{
            fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--ef-gold)", marginBottom: 14,
          }}>
            Restaurant Efesos
          </p>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 600,
            color: "#fff", lineHeight: 1.05, marginBottom: 8,
          }}>
            {tx(t.menu.pageTitle, lang)}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
            {tx(t.menu.noteText, lang)}
          </p>
        </div>
      </div>

      {/* MENU — no inline language toggle, it's global now */}
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 24px 80px" }}>
        {menuCategories.map((cat, catIdx) => (
          <AnimateIn key={cat.id} delay={catIdx < 3 ? catIdx * 60 : 0}>
          <section style={{ marginBottom: 56 }}>

            {/* Category header with REAL food photo */}
            <div style={{
              display: "flex", alignItems: "center", gap: 16, marginBottom: 22,
              paddingBottom: 16, borderBottom: "2px solid var(--ef-orange)",
            }}>
              {/* Food photo thumbnail */}
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                overflow: "hidden", flexShrink: 0,
                boxShadow: "0 3px 12px rgba(0,0,0,0.18)",
                position: "relative",
              }}>
                <Image
                  src={categoryPhotos[cat.id] || "/images/photo12.jpg"}
                  alt={cat.title[lang]}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 600,
                color: "var(--ef-text)", lineHeight: 1,
              }}>
                {cat.title[lang]}
              </h2>
            </div>

            {/* Items grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 10,
            }}>
              {cat.items.map((item) => (
                <div
                  key={item.number}
                  style={{
                    backgroundColor: "#fff", borderRadius: 12, padding: "14px 18px",
                    border: "1px solid var(--ef-border)",
                    display: "flex", alignItems: "flex-start", gap: 12,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                  }}
                  className="menu-item-card"
                >
                  {/* Number badge */}
                  <span style={{
                    flexShrink: 0, width: 30, height: 30, borderRadius: 8,
                    backgroundColor: "var(--ef-orange)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.02em",
                  }}>
                    {item.number}
                  </span>

                  {/* Name + description */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 17, fontWeight: 600, color: "var(--ef-text)",
                      marginBottom: item.desc[lang] ? 3 : 0, lineHeight: 1.2,
                    }}>
                      {item.name[lang]}
                    </p>
                    {item.desc[lang] && (
                      <p style={{
                        fontSize: 12.5, color: "var(--ef-muted)",
                        lineHeight: 1.5, margin: 0,
                      }}>
                        {item.desc[lang]}
                      </p>
                    )}
                  </div>

                  {/* Price */}
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
          </AnimateIn>
        ))}

        {/* Bottom call CTA */}
        <div style={{
          textAlign: "center", padding: "40px 28px",
          backgroundColor: "var(--ef-dark2)", borderRadius: 16,
          marginTop: 8,
        }}>
          <p style={{
            color: "rgba(255,255,255,0.65)", fontSize: 15,
            marginBottom: 22, lineHeight: 1.65,
          }}>
            {tx(t.menu.orderCta, lang)}
          </p>
          <a
            href="tel:+4575275722"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 32px", backgroundColor: "var(--ef-orange)",
              color: "#fff", borderRadius: 8, fontWeight: 600,
              fontSize: 16, textDecoration: "none",
              boxShadow: "0 4px 18px rgba(200,89,30,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            className="btn-hover"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7 2 2 0 011.98-2.18h3a2 2 0 012 1.72c.13 1 .38 1.97.74 2.9a2 2 0 01-.45 2.11L6.91 6.9a16 16 0 006.18 6.18l1.35-1.35a2 2 0 012.11-.45c.93.36 1.9.61 2.9.74A2 2 0 0122 16.92z"/>
            </svg>
            75 27 57 22
          </a>
        </div>
      </div>

      <style>{`
        .menu-item-card:hover {
          border-color: rgba(200,89,30,0.35) !important;
          box-shadow: 0 4px 18px rgba(0,0,0,0.09) !important;
          transform: translateY(-1px);
        }
        .btn-hover:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 28px rgba(200,89,30,0.45) !important;
        }
      `}</style>
    </main>
  );
}
