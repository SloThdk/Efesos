"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { t, tx } from "@/lib/translations";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();

  const links = [
    { href: "/",       label: tx(t.nav.home, lang) },
    { href: "/menu",   label: tx(t.nav.menu, lang) },
    { href: "/kontakt",label: tx(t.nav.contact, lang) },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === "/";
  const light = !scrolled && isHome;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "background 0.3s, box-shadow 0.3s",
          backgroundColor: light ? "transparent" : "rgba(250,243,232,0.97)",
          backdropFilter: light ? "none" : "blur(14px)",
          boxShadow: light ? "none" : "0 1px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200, margin: "0 auto",
            padding: "0 24px", height: 68,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" prefetch={false} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image
              src="/images/logo.jpg"
              alt="Restaurant Efesos"
              width={42} height={42}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{
              fontFamily: "var(--font-heading)",
              fontSize: 20, fontWeight: 600, letterSpacing: "0.04em",
              color: light ? "#fff" : "var(--ef-text)",
              transition: "color 0.3s",
            }}>
              Efesos
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
                style={{
                  fontSize: 13, fontWeight: 500,
                  letterSpacing: "0.07em", textTransform: "uppercase",
                  textDecoration: "none",
                  color: pathname === l.href
                    ? "var(--ef-orange)"
                    : light ? "#fff" : "var(--ef-text)",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+4575275722"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 18px",
                backgroundColor: "var(--ef-orange)",
                color: "#fff", borderRadius: 6,
                fontSize: 13, fontWeight: 600,
                textDecoration: "none", letterSpacing: "0.04em",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7 2 2 0 011.98-2.18h3a2 2 0 012 1.72c.13 1 .38 1.97.74 2.9a2 2 0 01-.45 2.11L6.91 6.9a16 16 0 006.18 6.18l1.35-1.35a2 2 0 012.11-.45c.93.36 1.9.61 2.9.74A2 2 0 0122 16.92z"/>
              </svg>
              {tx(t.misc.callBtn, lang)}
            </a>
          </nav>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="nav-burger"
            style={{
              display: "none",
              background: "none", border: "none", padding: 8,
              color: light ? "#fff" : "var(--ef-text)", cursor: "pointer",
            }}
          >
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 60,
            backgroundColor: "var(--ef-dark2)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 40,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", top: 22, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 36, fontWeight: 600,
                color: pathname === l.href ? "var(--ef-gold)" : "#fff",
                textDecoration: "none", letterSpacing: "0.04em",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+4575275722"
            style={{
              marginTop: 8, padding: "12px 32px",
              backgroundColor: "var(--ef-orange)", color: "#fff",
              borderRadius: 8, fontSize: 18, fontWeight: 600, textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {tx(t.misc.callMobile, lang)} — 75 27 57 22
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
