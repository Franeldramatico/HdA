interface MountainProps {
  className?: string;
  color?: string;
}

export function Mountain({ className = "", color = "#86EFAC" }: MountainProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 150" className="w-full h-full">
        {/* Montaña principal */}
        <ellipse cx="100" cy="120" rx="90" ry="60" fill={color} stroke="#000" strokeWidth="4" />
        {/* Pico de la montaña */}
        <ellipse cx="100" cy="60" rx="50" ry="40" fill="#fff" stroke="#000" strokeWidth="4" />
        {/* Detalles de sombra */}
        <ellipse cx="100" cy="65" rx="40" ry="30" fill={color} opacity="0.3" />
      </svg>
    </div>
  );
}
