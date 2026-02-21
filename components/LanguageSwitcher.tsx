"use client";
import { useLanguage } from "@/components/LanguageProvider";
import DanishFlag from "@/components/DanishFlag";
import GermanFlag from "@/components/GermanFlag";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 80,
        right: 28,
        zIndex: 45,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
      }}
    >
      <button
        onClick={() => setLang("dk")}
        title="Dansk"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: lang === "dk" ? "2.5px solid var(--ef-orange)" : "2px solid rgba(255,255,255,0.3)",
          backgroundColor: "rgba(255,255,255,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: lang === "dk"
            ? "0 3px 14px rgba(200,89,30,0.35)"
            : "0 2px 10px rgba(0,0,0,0.15)",
          transition: "all 0.2s",
          transform: lang === "dk" ? "scale(1.08)" : "scale(1)",
          cursor: "pointer",
        }}
      >
        <DanishFlag size="sm" />
      </button>

      <button
        onClick={() => setLang("de")}
        title="Deutsch"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: lang === "de" ? "2.5px solid var(--ef-orange)" : "2px solid rgba(255,255,255,0.3)",
          backgroundColor: "rgba(255,255,255,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: lang === "de"
            ? "0 3px 14px rgba(200,89,30,0.35)"
            : "0 2px 10px rgba(0,0,0,0.15)",
          transition: "all 0.2s",
          transform: lang === "de" ? "scale(1.08)" : "scale(1)",
          cursor: "pointer",
        }}
      >
        <GermanFlag size="sm" />
      </button>
    </div>
  );
}
