"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Forside" },
  { href: "/menu", label: "Menukort" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s, box-shadow 0.3s",
          backgroundColor:
            scrolled || !isHome
              ? "rgba(250,243,232,0.97)"
              : "rgba(15,11,6,0.0)",
          backdropFilter: scrolled || !isHome ? "blur(12px)" : "none",
          boxShadow:
            scrolled || !isHome ? "0 1px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" prefetch={false} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image
              src="/images/logo.jpg"
              alt="Restaurant Efesos"
              width={44}
              height={44}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: scrolled || !isHome ? "var(--ef-text)" : "#fff",
                transition: "color 0.3s",
              }}
            >
              Efesos
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden-mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color:
                    pathname === l.href
                      ? "var(--ef-orange)"
                      : scrolled || !isHome
                      ? "var(--ef-text)"
                      : "#fff",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+4575275722"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 18px",
                backgroundColor: "var(--ef-orange)",
                color: "#fff",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "background 0.2s",
              }}
            >
              📞 75 27 57 22
            </a>
          </nav>

          {/* Burger button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              padding: 8,
              color: scrolled || !isHome ? "var(--ef-text)" : "#fff",
              fontSize: 22,
            }}
            className="show-mobile"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            backgroundColor: "var(--ef-dark2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: 22,
              right: 24,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 26,
            }}
          >
            ✕
          </button>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 36,
                fontWeight: 600,
                color: pathname === l.href ? "var(--ef-gold)" : "#fff",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="tel:+4575275722"
            style={{
              marginTop: 8,
              padding: "12px 32px",
              backgroundColor: "var(--ef-orange)",
              color: "#fff",
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 600,
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Ring til os
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none; }
        @media (max-width: 700px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
