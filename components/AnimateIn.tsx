"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  delay?: number;           // ms
  direction?: "up" | "left" | "right" | "fade";
  distance?: number;        // px
  style?: CSSProperties;
  className?: string;
};

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  style,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const from: CSSProperties = {
    opacity: 0,
    transform:
      direction === "up"    ? `translateY(${distance}px)` :
      direction === "left"  ? `translateX(-${distance}px)` :
      direction === "right" ? `translateX(${distance}px)` :
      "none",
  };
  const to: CSSProperties = { opacity: 1, transform: "none" };
  const transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

  return (
    <div
      ref={ref}
      style={{ ...style, ...(visible ? to : from), transition }}
      className={className}
    >
      {children}
    </div>
  );
}
