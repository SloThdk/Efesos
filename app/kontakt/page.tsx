"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";
import { t, tx } from "@/lib/translations";

export default function KontaktPage() {
  const { lang } = useLanguage();
  const k = t.kontakt;

  const infoCards = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ef-orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: tx(k.address, lang),
      content: "Blåvandvej 31\n6857 Blåvand",
      link: "https://maps.google.com/?q=Blåvandvej+31+6857+Blåvand",
      linkText: tx(k.mapLink, lang),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ef-orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7 2 2 0 011.98-2.18h3a2 2 0 012 1.72c.13 1 .38 1.97.74 2.9a2 2 0 01-.45 2.11L6.91 6.9a16 16 0 006.18 6.18l1.35-1.35a2 2 0 012.11-.45c.93.36 1.9.61 2.9.74A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: tx(k.phone, lang),
      content: "+45 75 27 57 22",
      link: "tel:+4575275722",
      linkText: tx(k.callUs, lang),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ef-orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: tx(k.email, lang),
      content: "Shahnazheydary@gmail.com",
      link: "mailto:Shahnazheydary@gmail.com",
      linkText: tx(k.sendMail, lang),
    },
  ];

  return (
    <main style={{ backgroundColor: "var(--ef-cream)", minHeight: "100vh" }}>
      {/* PAGE HEADER */}
      <div style={{
        backgroundColor: "var(--ef-dark2)",
        paddingTop: 112, paddingBottom: 52,
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/photo4.jpg')",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.14,
        }} />
        <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ef-gold)", marginBottom: 14 }}>
            {tx(k.eyebrow, lang)}
          </p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 600, color: "#fff", lineHeight: 1.05 }}>
            {tx(k.title, lang)}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "64px 24px 80px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48,
      }}>
        {/* Info side */}
        <div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 600, color: "var(--ef-text)", marginBottom: 26 }}>
            {tx(k.findUs, lang)}
          </h2>

          {infoCards.map((card) => (
            <div key={card.label} style={{
              backgroundColor: "#fff", borderRadius: 12, padding: "18px 20px", marginBottom: 14,
              border: "1px solid var(--ef-border)",
              boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
              transition: "border-color 0.2s",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{
                  width: 38, height: 38, borderRadius: 10, backgroundColor: "rgba(200,89,30,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {card.icon}
                </span>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ef-muted)", marginBottom: 4 }}>
                    {card.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 600, color: "var(--ef-text)", whiteSpace: "pre-line", marginBottom: 8 }}>
                    {card.content}
                  </p>
                  <a href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : undefined}
                    rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontSize: 13, color: "var(--ef-orange)", textDecoration: "none", fontWeight: 500 }}>
                    {card.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}

          <a href="http://www.findsmiley.dk/562043" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 20 }}>
            <Image src="/images/kontrol.png" alt="Se kontrol rapport" width={130} height={42} style={{ objectFit: "contain" }} />
          </a>
        </div>

        {/* Form side */}
        <div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 600, color: "var(--ef-text)", marginBottom: 26 }}>
            {tx(k.writeUs, lang)}
          </h2>
          <ContactForm lang={lang} />
        </div>
      </div>

      {/* Map */}
      <div style={{ height: 360, overflow: "hidden" }}>
        <iframe
          src="https://maps.google.com/maps?q=Bl%C3%A5vandvej+31,+6857+Bl%C3%A5vand,+Denmark&z=15&output=embed"
          width="100%" height="360"
          style={{ border: 0, display: "block" }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Efesos"
        />
      </div>
    </main>
  );
}
