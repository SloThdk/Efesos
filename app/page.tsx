"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { t, tx } from "@/lib/translations";
import PizzaIcon from "@/components/icons/PizzaIcon";
import SteakIcon from "@/components/icons/SteakIcon";
import KebabIcon from "@/components/icons/KebabIcon";
import TakeawayIcon from "@/components/icons/TakeawayIcon";
import PhotoSlideshow from "@/components/PhotoSlideshow";

const featureIcons = [PizzaIcon, SteakIcon, KebabIcon, TakeawayIcon];

const featuredImages = [
  "/images/photo2.jpg",
  "/images/photo7.jpg",
  "/images/photo12.jpg",
];

export default function HomePage() {
  const { lang } = useLanguage();
  const f = t.features;

  return (
    <main>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 580,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/photo1.jpg"
          alt="Blåvand"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(15,11,6,0.5) 0%, rgba(15,11,6,0.72) 55%, rgba(15,11,6,0.88) 100%)",
          }}
        />

        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: 780,
          }}
        >
          <div
            className="fade-up delay-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              padding: "6px 18px",
              border: "1px solid rgba(201,168,76,0.5)",
              borderRadius: 100,
              color: "var(--ef-gold)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {tx(t.hero.badge, lang)}
          </div>

          <h1
            className="fade-up delay-2"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(52px, 9vw, 96px)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.0,
              marginBottom: 22,
              letterSpacing: "-0.01em",
            }}
          >
            {tx(t.hero.title, lang)}
            <br />
            <em style={{ color: "var(--ef-gold)" }}>{tx(t.hero.titleItalic, lang)}</em>
          </h1>

          <p
            className="fade-up delay-3"
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.80)",
              marginBottom: 38,
              lineHeight: 1.65,
              whiteSpace: "pre-line",
            }}
          >
            {tx(t.hero.tagline, lang)}
          </p>

          <div
            className="fade-up delay-4"
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link
              href="/menu"
              prefetch={false}
              style={{
                padding: "15px 36px",
                backgroundColor: "var(--ef-orange)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                letterSpacing: "0.04em",
                boxShadow: "0 4px 20px rgba(200,89,30,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="btn-hover"
            >
              {tx(t.hero.cta1, lang)}
            </Link>
            <a
              href="tel:+4575275722"
              style={{
                padding: "15px 36px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.45)",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "background 0.2s, border-color 0.2s",
              }}
              className="btn-ghost-hover"
            >
              {tx(t.hero.cta2, lang)}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          <div style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))",
          }} />
          <div style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.5)",
          }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES STRIP
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "var(--ef-dark2)", padding: "64px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
          }}
        >
          {f.items.map((item, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={i}
                className="feature-card"
                style={{
                  textAlign: "center",
                  padding: "32px 20px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.3s, transform 0.3s",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "rgba(200,89,30,0.12)",
                  marginBottom: 18,
                }}>
                  <Icon size={34} color="var(--ef-orange)" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}
                >
                  {tx(item.title, lang)}
                </h3>
                <p style={{ fontSize: 14, color: "#8a7a6a", lineHeight: 1.6 }}>
                  {tx(item.desc, lang)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PHOTO SLIDESHOW
      ═══════════════════════════════════════════════════════ */}
      <section className="scroll-fade" style={{ backgroundColor: "var(--ef-stone)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ef-orange)",
                marginBottom: 12,
              }}
            >
              {tx(t.gallery.eyebrow, lang)}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 600,
                color: "var(--ef-text)",
                lineHeight: 1.1,
              }}
            >
              {tx(t.gallery.title, lang)}
            </h2>
          </div>
          <PhotoSlideshow />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURED DISHES
      ═══════════════════════════════════════════════════════ */}
      <section className="scroll-fade" style={{ backgroundColor: "var(--ef-cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ef-orange)",
                marginBottom: 12,
              }}
            >
              {tx(t.featured.eyebrow, lang)}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(30px, 5vw, 48px)",
                fontWeight: 600,
                color: "var(--ef-text)",
              }}
            >
              {tx(t.featured.title, lang)}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {t.featured.items.map((item, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              >
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <Image
                    src={featuredImages[i]}
                    alt={tx(item.name, lang)}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    className="card-img"
                  />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "var(--ef-text)",
                      }}
                    >
                      {tx(item.name, lang)}
                    </h3>
                    <span
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "var(--ef-orange)",
                        flexShrink: 0,
                        marginLeft: 8,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {i === 0 ? "245,-" : i === 1 ? "159,-" : "139,-"}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--ef-muted)", lineHeight: 1.6 }}>
                    {tx(item.desc, lang)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link
              href="/menu"
              prefetch={false}
              className="btn-hover"
              style={{
                display: "inline-block",
                padding: "14px 38px",
                backgroundColor: "var(--ef-orange)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                letterSpacing: "0.04em",
                boxShadow: "0 4px 20px rgba(200,89,30,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {tx(t.featured.cta, lang)}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════ */}
      <section
        className="scroll-fade"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--ef-dark2)",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/photo6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.14,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(34px, 5vw, 60px)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: 18,
              lineHeight: 1.1,
            }}
          >
            {tx(t.cta.title, lang)}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.68)",
              marginBottom: 40,
              maxWidth: 520,
              margin: "0 auto 40px",
              lineHeight: 1.75,
              whiteSpace: "pre-line",
            }}
          >
            {tx(t.cta.desc, lang)}
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+4575275722"
              className="btn-hover"
              style={{
                padding: "14px 38px",
                backgroundColor: "var(--ef-orange)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(200,89,30,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {tx(t.cta.call, lang)}
            </a>
            <Link
              href="/kontakt"
              prefetch={false}
              style={{
                padding: "14px 38px",
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 16,
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
              }}
              className="btn-ghost-hover"
            >
              {tx(t.cta.find, lang)}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }

        .feature-card:hover { border-color: rgba(200,89,30,0.3) !important; transform: translateY(-4px); }
        .card-hover:hover   { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.14) !important; }
        .card-hover:hover .card-img { transform: scale(1.06); }
        .btn-hover:hover    { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(200,89,30,0.45) !important; }
        .btn-ghost-hover:hover { background: rgba(255,255,255,0.1) !important; border-color: rgba(255,255,255,0.6) !important; }
      `}</style>
    </main>
  );
}
