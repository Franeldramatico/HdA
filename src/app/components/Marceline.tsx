import { motion } from "motion/react";

interface MarcelineProps {
  className?: string;
}

export function Marceline({ className = "" }: MarcelineProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 130" className="w-full h-full">
        {/* Cuerpo */}
        <rect x="38" y="68" width="24" height="30" rx="4" fill="#374151" stroke="#000" strokeWidth="3" />
        
        {/* Brazos */}
        <ellipse cx="30" cy="75" rx="6" ry="16" fill="#9CA3AF" stroke="#000" strokeWidth="3" />
        <ellipse cx="70" cy="75" rx="6" ry="16" fill="#9CA3AF" stroke="#000" strokeWidth="3" />
        
        {/* Cuello */}
        <rect x="45" y="60" width="10" height="10" fill="#9CA3AF" stroke="#000" strokeWidth="2" />
        
        {/* Cabeza */}
        <ellipse cx="50" cy="42" rx="20" ry="22" fill="#9CA3AF" stroke="#000" strokeWidth="3" />
        
        {/* Cabello largo */}
        <path
          d="M32,35 Q30,20 35,15 Q40,12 50,12 Q60,12 65,15 Q70,20 68,35 L68,50 Q68,60 65,60 L60,80 L40,80 L35,60 Q32,60 32,50 Z"
          fill="#1E293B"
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Flequillo */}
        <ellipse cx="50" cy="28" rx="22" ry="12" fill="#1E293B" stroke="#000" strokeWidth="3" />
        
        {/* Ojos */}
        <ellipse cx="42" cy="42" rx="4" ry="5" fill="#000" />
        <ellipse cx="58" cy="42" rx="4" ry="5" fill="#000" />
        
        {/* Sonrisa con colmillos */}
        <path
          d="M40,50 Q50,56 60,50"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M45,50 L45,54" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M55,50 L55,54" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        
        {/* Bajo/Guitarra pequeña */}
        <g transform="translate(65, 70)">
          <rect x="0" y="0" width="8" height="25" rx="2" fill="#DC2626" stroke="#000" strokeWidth="2" />
          <ellipse cx="4" cy="28" rx="6" ry="8" fill="#DC2626" stroke="#000" strokeWidth="2" />
        </g>
        
        {/* Piernas */}
        <rect x="42" y="98" width="7" height="20" rx="3" fill="#1E293B" stroke="#000" strokeWidth="2" />
        <rect x="51" y="98" width="7" height="20" rx="3" fill="#1E293B" stroke="#000" strokeWidth="2" />
        
        {/* Botas */}
        <ellipse cx="45" cy="120" rx="6" ry="4" fill="#DC2626" stroke="#000" strokeWidth="2" />
        <ellipse cx="55" cy="120" rx="6" ry="4" fill="#DC2626" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}
