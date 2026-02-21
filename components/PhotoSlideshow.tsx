"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/photo12.jpg", alt: "Pizza" },
  { src: "/images/photo13.jpg", alt: "Calzone" },
  { src: "/images/photo7.jpg",  alt: "Barbecue Spareribs" },
  { src: "/images/photo11.jpg", alt: "Burger menu" },
  { src: "/images/photo3.jpg",  alt: "Dürum kebab" },
  { src: "/images/photo2.jpg",  alt: "Stegt kylling" },
  { src: "/images/photo10.jpg", alt: "Kebab & frites" },
  { src: "/images/photo15.jpg", alt: "Calzone åben" },
  { src: "/images/photo4.jpg",  alt: "Döner frites" },
  { src: "/images/photo9.jpg",  alt: "Schnitzel" },
];

export default function PhotoSlideshow() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setPrev(active);
    setActive(idx);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 700);
  }, [active, transitioning]);

  const next = useCallback(() => {
    goTo((active + 1) % photos.length);
  }, [active, goTo]);

  const prev2 = useCallback(() => {
    goTo((active - 1 + photos.length) % photos.length);
  }, [active, goTo]);

  // Auto-advance every 4s
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", borderRadius: 20, overflow: "hidden", backgroundColor: "var(--ef-dark2)" }}>
      {/* Previous image (fading out) */}
      {prev !== null && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            animation: "slideOut 0.7s ease forwards",
          }}
        >
          <Image
            src={photos[prev].src}
            alt={photos[prev].alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Active image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          animation: prev !== null ? "slideIn 0.7s ease forwards" : "none",
        }}
      >
        <Image
          src={photos[active].src}
          alt={photos[active].alt}
          fill
          style={{ objectFit: "cover" }}
          priority={active === 0}
        />
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.25) 100%)",
          }}
        />
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={prev2}
        style={{
          position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
          width: 40, height: 40, borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 18,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 2, transition: "background 0.2s", cursor: "pointer",
        }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
          width: 40, height: 40, borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 18,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 2, transition: "background 0.2s", cursor: "pointer",
        }}
        aria-label="Next"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 8, zIndex: 2,
        }}
      >
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === active ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: i === active ? "var(--ef-orange)" : "rgba(255,255,255,0.5)",
              border: "none",
              transition: "all 0.35s ease",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }
      `}</style>
    </div>
  );
}
