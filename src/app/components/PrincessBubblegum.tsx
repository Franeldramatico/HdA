import { motion } from "motion/react";

interface PrincessBubblegumProps {
  className?: string;
}

export function PrincessBubblegum({ className = "" }: PrincessBubblegumProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 130" className="w-full h-full">
        {/* Vestido */}
        <path
          d="M35,75 L35,95 Q35,105 40,105 L60,105 Q65,105 65,95 L65,75 Z"
          fill="#FCA5F1"
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Cuerpo */}
        <rect x="40" y="65" width="20" height="15" rx="3" fill="#F9A8D4" stroke="#000" strokeWidth="3" />
        
        {/* Brazos */}
        <ellipse cx="32" cy="72" rx="6" ry="15" fill="#FFDAB3" stroke="#000" strokeWidth="3" />
        <ellipse cx="68" cy="72" rx="6" ry="15" fill="#FFDAB3" stroke="#000" strokeWidth="3" />
        
        {/* Cuello */}
        <rect x="45" y="58" width="10" height="8" fill="#FFDAB3" stroke="#000" strokeWidth="2" />
        
        {/* Cabeza */}
        <ellipse cx="50" cy="42" rx="20" ry="24" fill="#FFDAB3" stroke="#000" strokeWidth="3" />
        
        {/* Cabello/Corona */}
        <ellipse cx="50" cy="25" rx="22" ry="18" fill="#FCA5F1" stroke="#000" strokeWidth="3" />
        
        {/* Corona decorativa */}
        <path
          d="M32,28 L38,18 L44,28 L50,18 L56,28 L62,18 L68,28"
          fill="none"
          stroke="#FDE047"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="18" r="3" fill="#FDE047" stroke="#000" strokeWidth="2" />
        <circle cx="50" cy="18" r="3" fill="#FDE047" stroke="#000" strokeWidth="2" />
        <circle cx="62" cy="18" r="3" fill="#FDE047" stroke="#000" strokeWidth="2" />
        
        {/* Ojos */}
        <circle cx="42" cy="42" r="2.5" fill="#000" />
        <circle cx="58" cy="42" r="2.5" fill="#000" />
        
        {/* Mejillas rosadas */}
        <circle cx="35" cy="48" r="4" fill="#FCA5F1" opacity="0.4" />
        <circle cx="65" cy="48" r="4" fill="#FCA5F1" opacity="0.4" />
        
        {/* Sonrisa */}
        <path
          d="M43,50 Q50,54 57,50"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Piernas */}
        <rect x="42" y="105" width="6" height="15" rx="3" fill="#FCA5F1" stroke="#000" strokeWidth="2" />
        <rect x="52" y="105" width="6" height="15" rx="3" fill="#FCA5F1" stroke="#000" strokeWidth="2" />
        
        {/* Zapatos */}
        <ellipse cx="45" cy="122" rx="5" ry="3" fill="#1E293B" stroke="#000" strokeWidth="2" />
        <ellipse cx="55" cy="122" rx="5" ry="3" fill="#1E293B" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}
