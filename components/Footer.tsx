"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { t, tx } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();

  const links = [
    { href: "/",        label: tx(t.nav.home, lang) },
    { href: "/menu",    label: tx(t.nav.menu, lang) },
    { href: "/kontakt", label: tx(t.nav.contact, lang) },
  ];

  return (
    <footer style={{ backgroundColor: "var(--ef-dark2)", color: "#c8b89a", paddingTop: 56, paddingBottom: 36 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, paddingBottom: 40,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Image src="/images/logo.jpg" alt="Restaurant Efesos" width={40} height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: "#fff" }}>
                Restaurant Efesos
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              {tx(t.footer.tagline, lang)}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {tx(t.footer.nav, lang)}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(l => (
                <Link key={l.href} href={l.href} prefetch={false}
                  style={{ color: "#c8b89a", textDecoration: "none", fontSize: 14 }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {tx(t.footer.contact, lang)}
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

          {/* Hours + smiley */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {tx(t.footer.hours, lang)}
            </h4>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              {tx(t.footer.hoursText, lang)}
            </p>
            <a href="http://www.findsmiley.dk/562043" target="_blank" rel="noopener noreferrer"
              title={tx(t.footer.smiley, lang)}
              style={{
                display: "inline-flex", alignItems: "center", marginTop: 20,
                padding: "8px 12px", borderRadius: 8,
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "background 0.2s",
              }}>
              <Image src="/images/kontrol.png" alt={tx(t.misc.smileyAlt, lang)} width={100} height={32}
                style={{ objectFit: "contain", display: "block" }} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: 24,
          display: "flex", flexWrap: "wrap", gap: 12,
          justifyContent: "space-between", alignItems: "center",
          fontSize: 12, color: "#6a5a48",
        }}>
          <span>© {new Date().getFullYear()} {tx(t.footer.copy, lang)}</span>
          <span>{tx(t.footer.tagline2, lang)}</span>
        </div>
      </div>
    </footer>
  );
}
