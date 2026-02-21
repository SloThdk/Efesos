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
        right: 24,
        zIndex: 45,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        backgroundColor: "rgba(20,14,6,0.70)",
        backdropFilter: "blur(10px)",
        borderRadius: 12,
        padding: "8px 6px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {(["dk", "de"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          title={l === "dk" ? "Dansk" : "Deutsch"}
          style={{
            background: "none",
            border: lang === l
              ? "2px solid var(--ef-orange)"
              : "2px solid rgba(255,255,255,0.2)",
            borderRadius: 6,
            padding: "3px 4px",
            opacity: lang === l ? 1 : 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.2s, opacity 0.2s, transform 0.2s",
            transform: lang === l ? "scale(1.1)" : "scale(1)",
            cursor: "pointer",
          }}
        >
          {l === "dk" ? <DanishFlag size="sm" /> : <GermanFlag size="sm" />}
        </button>
      ))}
    </div>
  );
}
