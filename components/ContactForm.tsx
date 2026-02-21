"use client";
import { useState } from "react";
import { t, tx, type Lang } from "@/lib/translations";

export default function ContactForm({ lang = "dk" }: { lang?: Lang }) {
  const [sent, setSent] = useState(false);
  const f = t.kontakt.form;

  const fields = [
    { name: "navn",    label: tx(f.name, lang),  type: "text",  ph: tx(f.namePH, lang) },
    { name: "email",   label: tx(f.email, lang), type: "email", ph: tx(f.emailPH, lang) },
    { name: "telefon", label: tx(f.phone, lang), type: "tel",   ph: tx(f.phonePH, lang) },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 8,
    border: "1.5px solid var(--ef-border)",
    backgroundColor: "#fff", fontSize: 14, color: "var(--ef-text)",
    outline: "none", fontFamily: "var(--font-body)",
    transition: "border-color 0.2s",
  };

  if (sent) return (
    <div style={{
      padding: "32px 24px", backgroundColor: "#f0fdf4",
      border: "1.5px solid #86efac", borderRadius: 12, textAlign: "center",
    }}>
      <p style={{ fontSize: 18, fontWeight: 600, color: "#15803d", fontFamily: "var(--font-heading)" }}>
        {tx(f.successTitle, lang)}
      </p>
      <p style={{ fontSize: 14, color: "#166534", marginTop: 8 }}>
        {tx(f.successDesc, lang)}
      </p>
    </div>
  );

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} style={{
            display: "block", fontSize: 13, fontWeight: 500,
            color: "var(--ef-text)", marginBottom: 6, letterSpacing: "0.04em",
          }}>
            {field.label}
          </label>
          <input
            id={field.name} name={field.name}
            type={field.type} placeholder={field.ph}
            style={inputStyle}
          />
        </div>
      ))}

      <div>
        <label htmlFor="besked" style={{
          display: "block", fontSize: 13, fontWeight: 500,
          color: "var(--ef-text)", marginBottom: 6, letterSpacing: "0.04em",
        }}>
          {tx(f.message, lang)}
        </label>
        <textarea
          id="besked" name="besked" rows={5}
          placeholder={tx(f.messagePH, lang)}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button type="submit" style={{
        padding: "14px 28px",
        backgroundColor: "var(--ef-orange)", color: "#fff",
        border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600,
        letterSpacing: "0.03em", alignSelf: "flex-start",
        transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer",
      }}>
        {tx(f.submit, lang)}
      </button>
    </form>
  );
}
