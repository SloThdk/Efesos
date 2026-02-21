import Image from "next/image";
import Link from "next/link";

const galleryPhotos = [
  { src: "/images/photo12.jpg", alt: "Pizza" },
  { src: "/images/photo13.jpg", alt: "Pizza med fyld" },
  { src: "/images/photo7.jpg", alt: "Barbecue spareribs" },
  { src: "/images/photo11.jpg", alt: "Burger menu" },
  { src: "/images/photo3.jpg", alt: "Dürum kebab" },
  { src: "/images/photo2.jpg", alt: "Stegt kylling" },
  { src: "/images/photo10.jpg", alt: "Kebab over fries" },
  { src: "/images/photo15.jpg", alt: "Calzone" },
];

const features = [
  { icon: "🍕", title: "Håndlavet pizza", desc: "Frisk dej og gode råvarer — hver gang" },
  { icon: "🥩", title: "Saftige steaks", desc: "250 gr. oksefilet eller skinkesteak" },
  { icon: "🌯", title: "Dürum & kebab", desc: "Autentisk smag, lavet med kærlighed" },
  { icon: "🥡", title: "Tag-away", desc: "Bestil og afhent — hurtigt og nemt" },
];

const featured = [
  { name: "Mixed Grill", desc: "Oksefilet + kyllingebrystfilet med salat og pommes frites", price: 245, img: "/images/photo2.jpg" },
  { name: "Barbecue Spareribs", desc: "Slow-cooked ribben med cremefraiche dressing og pommes frites", price: 159, img: "/images/photo7.jpg" },
  { name: "Lav Selv Pizza", desc: "Vælg 5 ingredienser til din perfekte pizza", price: 139, img: "/images/photo12.jpg" },
];

export default function HomePage() {
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
        {/* Background photo */}
        <Image
          src="/images/photo1.jpg"
          alt="Blåvand strand"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(15,11,6,0.55) 0%, rgba(15,11,6,0.70) 60%, rgba(15,11,6,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              padding: "6px 16px",
              border: "1px solid rgba(201,168,76,0.5)",
              borderRadius: 100,
              color: "var(--ef-gold)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
            }}
          >
            Blåvandvej 31 · 6857 Blåvand
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: 20,
              letterSpacing: "-0.01em",
            }}
          >
            Restaurant
            <br />
            <em>Efesos</em>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.82)",
              marginBottom: 36,
              lineHeight: 1.6,
              fontFamily: "var(--font-body)",
            }}
          >
            Pizza • Steak • Kebab — friske råvarer, god service,
            <br />
            midt i hjertet af Blåvand
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/menu"
              prefetch={false}
              style={{
                padding: "14px 32px",
                backgroundColor: "var(--ef-orange)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Se menukort
            </Link>
            <a
              href="tel:+4575275722"
              style={{
                padding: "14px 32px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.55)",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Ring: 75 27 57 22
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.45)",
            fontSize: 22,
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          ↓
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES STRIP
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "var(--ef-dark2)", padding: "52px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 32,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                textAlign: "center",
                padding: "28px 16px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: "#8a7a6a", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PHOTO GALLERY — horizontal scroll
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "var(--ef-stone)", padding: "72px 0" }}>
        <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 40 }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ef-orange)",
              marginBottom: 12,
              fontFamily: "var(--font-body)",
            }}
          >
            Vores mad
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              color: "var(--ef-text)",
              lineHeight: 1.1,
            }}
          >
            Fra vores køkken til dit bord
          </h2>
        </div>

        <div
          style={{
            overflowX: "auto",
            display: "flex",
            gap: 16,
            padding: "0 32px 8px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {galleryPhotos.map((p, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 280,
                height: 210,
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                scrollSnapAlign: "start",
                boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURED DISHES
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "var(--ef-cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ef-orange)",
                marginBottom: 12,
                fontFamily: "var(--font-body)",
              }}
            >
              Udvalgte retter
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(30px, 5vw, 48px)",
                fontWeight: 600,
                color: "var(--ef-text)",
              }}
            >
              Populære valg
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {featured.map((item) => (
              <div
                key={item.name}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                }}
              >
                <div style={{ position: "relative", height: 200 }}>
                  <Image src={item.img} alt={item.name} fill style={{ objectFit: "cover" }} />
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
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "var(--ef-orange)",
                        fontFamily: "var(--font-body)",
                        fontVariantNumeric: "tabular-nums",
                        flexShrink: 0,
                        marginLeft: 8,
                      }}
                    >
                      {item.price},-
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--ef-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link
              href="/menu"
              prefetch={false}
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
              }}
            >
              Hele menukortet →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--ef-dark2)",
          padding: "80px 24px",
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
            opacity: 0.18,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Vi glæder os til at se dig
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 36,
              maxWidth: 500,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            Ring til os for at bestille bord eller tag-away.
            Vi er klar til at servicere dig.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+4575275722"
              style={{
                padding: "14px 36px",
                backgroundColor: "var(--ef-orange)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Ring: 75 27 57 22
            </a>
            <Link
              href="/kontakt"
              prefetch={false}
              style={{
                padding: "14px 36px",
                border: "1.5px solid rgba(255,255,255,0.4)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Find os
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </main>
  );
}
