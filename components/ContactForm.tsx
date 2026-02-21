"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return sent ? (
    <div
      style={{
        padding: "32px 24px",
        backgroundColor: "#f0fdf4",
        border: "1.5px solid #86efac",
        borderRadius: 12,
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 600, color: "#15803d", fontFamily: "var(--font-heading)" }}>
        Besked sendt! ✓
      </p>
      <p style={{ fontSize: 14, color: "#166534", marginTop: 8 }}>
        Vi vender tilbage hurtigst muligt.
      </p>
    </div>
  ) : (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {[
        { name: "navn", label: "Navn", type: "text", placeholder: "Dit navn" },
        { name: "email", label: "Email", type: "email", placeholder: "din@email.dk" },
        { name: "telefon", label: "Telefon", type: "tel", placeholder: "+45 12 34 56 78" },
      ].map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--ef-text)",
              marginBottom: 6,
              letterSpacing: "0.04em",
            }}
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 8,
              border: "1.5px solid var(--ef-border)",
              backgroundColor: "#fff",
              fontSize: 14,
              color: "var(--ef-text)",
              outline: "none",
              fontFamily: "var(--font-body)",
            }}
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="besked"
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--ef-text)",
            marginBottom: 6,
            letterSpacing: "0.04em",
          }}
        >
          Besked
        </label>
        <textarea
          id="besked"
          name="besked"
          rows={5}
          placeholder="Din besked..."
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 8,
            border: "1.5px solid var(--ef-border)",
            backgroundColor: "#fff",
            fontSize: 14,
            color: "var(--ef-text)",
            resize: "vertical",
            outline: "none",
            fontFamily: "var(--font-body)",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "14px 28px",
          backgroundColor: "var(--ef-orange)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "0.03em",
          alignSelf: "flex-start",
        }}
      >
        Send besked
      </button>
    </form>
  );
}
