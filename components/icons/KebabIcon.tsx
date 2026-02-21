export default function KebabIcon({ size = 40, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wrap shape */}
      <path d="M12 10C12 8 14 7 16 7.5L24 9.5C26 10 27 11 27 13L25 30C24.5 32 23 33 21 32.5L15 31C13 30.5 12 29 12 27L12 10Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Filling layers */}
      <path d="M14 14L25 16.5" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M14 18L25 20.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M13 22L24 24.5" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      {/* Top fold */}
      <path d="M12 10C15 8.5 20 8 27 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
