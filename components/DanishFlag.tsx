// CSS-drawn Danish flag — no emoji, renders consistently everywhere
type Props = { size?: "sm" | "md" | "lg" };

const sizes = {
  sm: { w: 22, h: 16 },
  md: { w: 30, h: 22 },
  lg: { w: 42, h: 30 },
};

export default function DanishFlag({ size = "md" }: Props) {
  const { w, h } = sizes[size];
  const cross = Math.round(h * 0.35);
  const crossW = Math.round(h * 0.2);

  return (
    <span
      style={{
        display: "inline-block",
        width: w,
        height: h,
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        flexShrink: 0,
      }}
      aria-label="Dansk"
      title="Dansk"
    >
      {/* Red background */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#C60C30",
        }}
      />
      {/* Vertical bar of cross */}
      <span
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: cross,
          width: crossW,
          backgroundColor: "#fff",
        }}
      />
      {/* Horizontal bar of cross */}
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: Math.round((h - crossW) / 2),
          height: crossW,
          backgroundColor: "#fff",
        }}
      />
    </span>
  );
}
