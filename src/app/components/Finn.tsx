import { motion } from "motion/react";

interface FinnProps {
  className?: string;
}

export function Finn({ className = "" }: FinnProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Cuerpo */}
        <ellipse cx="50" cy="85" rx="20" ry="25" fill="#60A5FA" stroke="#000" strokeWidth="3" />
        
        {/* Brazos */}
        <ellipse cx="30" cy="80" rx="8" ry="20" fill="#E0F2FE" stroke="#000" strokeWidth="3" />
        <ellipse cx="70" cy="80" rx="8" ry="20" fill="#E0F2FE" stroke="#000" strokeWidth="3" />
        
        {/* Cabeza/Gorro */}
        <ellipse cx="50" cy="50" rx="28" ry="32" fill="#E0F2FE" stroke="#000" strokeWidth="3" />
        
        {/* Gorro de oso */}
        <path
          d="M22,45 Q22,20 50,20 Q78,20 78,45 L78,55 Q78,60 73,60 L27,60 Q22,60 22,55 Z"
          fill="#fff"
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Orejas del gorro */}
        <circle cx="25" cy="30" r="12" fill="#fff" stroke="#000" strokeWidth="3" />
        <circle cx="75" cy="30" r="12" fill="#fff" stroke="#000" strokeWidth="3" />
        
        {/* Cara */}
        <ellipse cx="50" cy="55" rx="22" ry="18" fill="#FFDAB3" stroke="#000" strokeWidth="3" />
        
        {/* Ojos */}
        <circle cx="42" cy="52" r="3" fill="#000" />
        <circle cx="58" cy="52" r="3" fill="#000" />
        
        {/* Nariz pequeña */}
        <circle cx="50" cy="58" r="1.5" fill="#000" />
        
        {/* Sonrisa */}
        <path
          d="M43,62 Q50,66 57,62"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Piernas */}
        <rect x="40" y="105" width="8" height="12" rx="4" fill="#1E293B" stroke="#000" strokeWidth="2" />
        <rect x="52" y="105" width="8" height="12" rx="4" fill="#1E293B" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}
