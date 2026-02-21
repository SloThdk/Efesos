import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--ef-dark2)",
        color: "#c8b89a",
        paddingTop: 56,
        paddingBottom: 36,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Image
                src="/images/logo.jpg"
                alt="Restaurant Efesos"
                width={40}
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Restaurant Efesos
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Pizza, Steak &amp; Kebab — lavet med friske råvarer midt i hjertet
              af Blåvand.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                marginBottom: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/", label: "Forside" },
                { href: "/menu", label: "Menukort" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  prefetch={false}
                  style={{ color: "#c8b89a", textDecoration: "none", fontSize: 14 }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                marginBottom: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Kontakt
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <span>Blåvandvej 31</span>
              <span>6857 Blåvand</span>
              <a href="tel:+4575275722" style={{ color: "var(--ef-gold)", textDecoration: "none", marginTop: 4 }}>
                +45 75 27 57 22
              </a>
              <a href="mailto:Shahnazheydary@gmail.com" style={{ color: "#c8b89a", textDecoration: "none" }}>
                Shahnazheydary@gmail.com
              </a>
            </div>
          </div>

          {/* Smiley + hours */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                marginBottom: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Åbningstider
            </h4>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              Se aktuelle åbningstider ved at ringe til os.
            </p>
            <a
              href="http://www.findsmiley.dk/562043"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: 20 }}
            >
              <Image
                src="/images/kontrol.png"
                alt="Se kontrol rapport"
                width={100}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "#6a5a48",
          }}
        >
          <span>© {new Date().getFullYear()} Restaurant Efesos — Blåvand</span>
          <span>Pizza • Steak • Kebab</span>
        </div>
      </div>
    </footer>
  );
}
