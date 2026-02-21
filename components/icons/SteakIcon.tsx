export default function SteakIcon({ size = 40, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Plate */}
      <ellipse cx="20" cy="26" rx="14" ry="6" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.2"/>
      {/* Steak shape */}
      <path d="M10 24C10 19 13 15 20 15C27 15 30 19 30 24" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Bone */}
      <path d="M25 13C25 13 27 11 29 13C31 15 29 17 29 17" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="29" cy="17.5" r="1.5" fill={color}/>
      <circle cx="29" cy="12.5" r="1.5" fill={color}/>
      {/* Grill lines */}
      <path d="M14 21C16 19 18 20 20 19C22 18 24 20 26 19" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M13 23C15 21 18 22 20 21C22 20 25 22 27 21" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
    </svg>
  );
}
