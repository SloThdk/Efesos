// CSS-drawn German flag — no emoji, renders consistently everywhere
type Props = { size?: "sm" | "md" | "lg" };

const sizes = {
  sm: { w: 22, h: 16 },
  md: { w: 30, h: 22 },
  lg: { w: 42, h: 30 },
};

export default function GermanFlag({ size = "md" }: Props) {
  const { w, h } = sizes[size];
  const stripeH = Math.round(h / 3);

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        width: w,
        height: h,
        borderRadius: 2,
        overflow: "hidden",
        flexShrink: 0,
      }}
      aria-label="Deutsch"
      title="Deutsch"
    >
      <span style={{ flex: 1, backgroundColor: "#000000" }} />
      <span style={{ flex: 1, backgroundColor: "#DD0000" }} />
      <span style={{ flex: 1, backgroundColor: "#FFCE00" }} />
    </span>
  );
}
