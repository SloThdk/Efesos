export default function TakeawayIcon({ size = 40, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bag body */}
      <path d="M10 16H30L28 34H12L10 16Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Bag top fold */}
      <path d="M10 16L12 13H28L30 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Handle */}
      <path d="M16 13C16 10 18 8 20 8C22 8 24 10 24 13" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Stripes on bag */}
      <path d="M14 21H26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <path d="M14 25H26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}
