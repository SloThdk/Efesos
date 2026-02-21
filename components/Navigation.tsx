"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { t, tx } from "@/lib/translations";
import DanishFlag from "@/components/DanishFlag";
import GermanFlag from "@/components/GermanFlag";
import type { Lang } from "@/lib/translations";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const isHome = pathname === "/";

  const links = [
    { href: "/",        label: tx(t.nav.home, lang) },
    { href: "/menu",    label: tx(t.nav.menu, lang) },
    { href: "/kontakt", label: tx(t.nav.contact, lang) },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  // On home page: dark transparent → solid white on scroll
  // On other pages: always solid white
  const solid = scrolled || !isHome;

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.35s ease, box-shadow 0.35s ease",
        backgroundColor: solid ? "rgba(250,243,232,0.97)" : "rgba(10,8,4,0.35)",
        backdropFilter: solid ? "blur(14px)" : "blur(6px)",
        boxShadow: solid ? "0 1px 24px rgba(0,0,0,0.08)" : "none",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "0 24px", height: 68,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16,
        }}>

          {/* ── LOGO ── */}
          <Link href="/" prefetch={false} style={{
            display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none", padding: "6px 0",
            minWidth: 0, flexShrink: 0,
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: "50%",
              overflow: "hidden", flexShrink: 0, position: "relative",
            }}>
              <Image src="/images/logo.jpg" alt="Restaurant Efesos" fill
                style={{ objectFit: "cover" }} />
            </div>
            <span style={{
              fontFamily: "var(--font-heading)", fontSize: 20,
              fontWeight: 600, letterSpacing: "0.04em",
              color: solid ? "var(--ef-text)" : "#fff",
              transition: "color 0.35s",
              whiteSpace: "nowrap",
            }}>
              Efesos
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="nav-desktop" style={{
            display: "flex", alignItems: "center", gap: 28, flex: 1, justifyContent: "flex-end",
          }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} prefetch={false} style={{
                fontSize: 13, fontWeight: 500,
                letterSpacing: "0.07em", textTransform: "uppercase",
                textDecoration: "none",
                color: pathname === l.href
                  ? "var(--ef-orange)"
                  : solid ? "var(--ef-text)" : "rgba(255,255,255,0.9)",
                transition: "color 0.2s",
              }}>
                {l.label}
              </Link>
            ))}

            {/* Language flags */}
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {(["dk", "de"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} style={{
                  width: 32, height: 32, borderRadius: "50%",
                  border: lang === l
                    ? "2px solid var(--ef-orange)"
                    : "2px solid rgba(128,128,128,0.25)",
                  backgroundColor: "rgba(255,255,255,0.92)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: 0, transition: "border-color 0.2s, transform 0.2s",
                  transform: lang === l ? "scale(1.1)" : "scale(1)",
                }}>
                  {l === "dk" ? <DanishFlag size="sm" /> : <GermanFlag size="sm" />}
                </button>
              ))}
            </div>

            {/* Call button */}
            <a href="tel:+4575275722" style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 16px",
              backgroundColor: "var(--ef-orange)", color: "#fff",
              borderRadius: 6, fontSize: 13, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7 2 2 0 011.98-2.18h3a2 2 0 012 1.72c.13 1 .38 1.97.74 2.9a2 2 0 01-.45 2.11L6.91 6.9a16 16 0 006.18 6.18l1.35-1.35a2 2 0 012.11-.45c.93.36 1.9.61 2.9.74A2 2 0 0122 16.92z"/>
              </svg>
              {tx(t.misc.callBtn, lang)}
            </a>
          </nav>

          {/* ── BURGER ── */}
          <button onClick={() => setMobileOpen(v => !v)} aria-label="Menu"
            className="nav-burger"
            style={{
              display: "none", background: "none", border: "none", padding: 8,
              color: solid ? "var(--ef-text)" : "#fff",
            }}>
            {mobileOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 60,
          backgroundColor: "var(--ef-dark2)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 36,
        }}>
          <button onClick={() => setMobileOpen(false)} style={{
            position: "absolute", top: 22, right: 24,
            background: "none", border: "none", color: "#fff",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {links.map((l) => (
            <Link key={l.href} href={l.href} prefetch={false} onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-heading)", fontSize: 34, fontWeight: 600,
                color: pathname === l.href ? "var(--ef-gold)" : "#fff",
                textDecoration: "none", letterSpacing: "0.04em",
              }}>
              {l.label}
            </Link>
          ))}

          {/* Language in mobile menu */}
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            {(["dk", "de"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 8, border: "none",
                backgroundColor: lang === l ? "var(--ef-orange)" : "rgba(255,255,255,0.1)",
                color: "#fff", fontSize: 15, fontWeight: 500,
              }}>
                {l === "dk" ? <DanishFlag size="sm" /> : <GermanFlag size="sm" />}
                {l === "dk" ? "Dansk" : "Deutsch"}
              </button>
            ))}
          </div>

          <a href="tel:+4575275722" onClick={() => setMobileOpen(false)} style={{
            padding: "12px 32px", backgroundColor: "var(--ef-orange)", color: "#fff",
            borderRadius: 8, fontSize: 17, fontWeight: 600, textDecoration: "none",
          }}>
            {tx(t.misc.callMobile, lang)} — 75 27 57 22
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
