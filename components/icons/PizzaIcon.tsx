export default function PizzaIcon({ size = 40, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C28.84 36 36 28.84 36 20C36 11.16 28.84 4 20 4Z" fill={color} fillOpacity="0.12"/>
      <path d="M20 6L22 18L34 16L20 6Z" fill={color} fillOpacity="0.25"/>
      <path d="M20 6L10 24L26 30L20 6Z" fill={color} fillOpacity="0.18"/>
      <path d="M20 6L34 16L26 30L10 24L20 6Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <circle cx="18" cy="18" r="2" fill={color}/>
      <circle cx="24" cy="22" r="1.5" fill={color}/>
      <circle cx="15" cy="23" r="1.5" fill={color}/>
      <line x1="20" y1="6" x2="34" y2="16" stroke={color} strokeWidth="1.2" strokeDasharray="2 2"/>
      <line x1="20" y1="6" x2="10" y2="24" stroke={color} strokeWidth="1.2" strokeDasharray="2 2"/>
      <line x1="20" y1="6" x2="26" y2="30" stroke={color} strokeWidth="1.2" strokeDasharray="2 2"/>
    </svg>
  );
}
