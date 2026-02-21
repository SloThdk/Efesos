import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function KontaktPage() {
  return (
    <main style={{ backgroundColor: "var(--ef-cream)", minHeight: "100vh" }}>
      {/* PAGE HEADER */}
      <div
        style={{
          backgroundColor: "var(--ef-dark2)",
          paddingTop: 112,
          paddingBottom: 52,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/photo4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.14,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ef-gold)",
              marginBottom: 14,
            }}
          >
            Vi er klar
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.05,
            }}
          >
            Kontakt os
          </h1>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 48,
        }}
      >
        {/* Contact info */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 34,
              fontWeight: 600,
              color: "var(--ef-text)",
              marginBottom: 28,
            }}
          >
            Find os
          </h2>

          {/* Info cards */}
          {[
            {
              icon: "📍",
              title: "Adresse",
              content: "Blåvandvej 31\n6857 Blåvand",
              link: "https://maps.google.com/?q=Blåvandvej+31+6857+Blåvand",
              linkText: "Se på kort →",
            },
            {
              icon: "📞",
              title: "Telefon",
              content: "+45 75 27 57 22",
              link: "tel:+4575275722",
              linkText: "Ring til os",
            },
            {
              icon: "✉️",
              title: "Email",
              content: "Shahnazheydary@gmail.com",
              link: "mailto:Shahnazheydary@gmail.com",
              linkText: "Send mail",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: "#fff",
                borderRadius: 12,
                padding: "20px 22px",
                marginBottom: 16,
                border: "1px solid var(--ef-border)",
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{card.icon}</span>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ef-muted)",
                      marginBottom: 4,
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--ef-text)",
                      whiteSpace: "pre-line",
                      marginBottom: 8,
                    }}
                  >
                    {card.content}
                  </p>
                  <a
                    href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : undefined}
                    rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      fontSize: 13,
                      color: "var(--ef-orange)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    {card.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Se kontrol rapport */}
          <div style={{ marginTop: 24 }}>
            <a
              href="http://www.findsmiley.dk/562043"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/kontrol.png"
                alt="Se kontrol rapport"
                width={130}
                height={42}
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 34,
              fontWeight: 600,
              color: "var(--ef-text)",
              marginBottom: 28,
            }}
          >
            Skriv til os
          </h2>

          <ContactForm />
        </div>
      </div>

      {/* Map */}
      <div style={{ height: 360, backgroundColor: "var(--ef-stone)", overflow: "hidden" }}>
        <iframe
          src="https://maps.google.com/maps?q=Blåvandvej+31,+6857+Blåvand,+Denmark&z=15&output=embed"
          width="100%"
          height="360"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Efesos på kort"
        />
      </div>
    </main>
  );
}
