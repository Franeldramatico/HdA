import { motion } from "motion/react";

interface CakeIconProps {
  className?: string;
}

export function CakeIcon({ className = "" }: CakeIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* Base del pastel */}
        <rect x="10" y="50" width="60" height="20" rx="3" fill="#FCA5F1" stroke="#000" strokeWidth="3" />
        
        {/* Capa media */}
        <rect x="15" y="35" width="50" height="18" rx="3" fill="#F9A8D4" stroke="#000" strokeWidth="3" />
        
        {/* Capa superior */}
        <rect x="20" y="22" width="40" height="16" rx="3" fill="#FCA5F1" stroke="#000" strokeWidth="3" />
        
        {/* Decoración con crema */}
        <path
          d="M10,50 Q15,48 20,50 Q25,48 30,50 Q35,48 40,50 Q45,48 50,50 Q55,48 60,50 Q65,48 70,50"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        
        {/* Velas */}
        <rect x="28" y="12" width="4" height="12" fill="#60A5FA" stroke="#000" strokeWidth="2" />
        <rect x="48" y="12" width="4" height="12" fill="#60A5FA" stroke="#000" strokeWidth="2" />
        
        {/* Llamas */}
        <ellipse cx="30" cy="10" rx="3" ry="5" fill="#FDE047" stroke="#000" strokeWidth="2" />
        <ellipse cx="50" cy="10" rx="3" ry="5" fill="#FDE047" stroke="#000" strokeWidth="2" />
        <ellipse cx="30" cy="8" rx="2" ry="3" fill="#FDBA74" />
        <ellipse cx="50" cy="8" rx="2" ry="3" fill="#FDBA74" />
        
        {/* Cereza en el medio */}
        <circle cx="40" cy="18" r="4" fill="#DC2626" stroke="#000" strokeWidth="2" />
        <path d="M40,18 Q42,14 44,12" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
