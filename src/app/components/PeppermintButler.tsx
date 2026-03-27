import { motion } from "motion/react";

interface PeppermintButlerProps {
  className?: string;
}

export function PeppermintButler({ className = "" }: PeppermintButlerProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [0, 5, -5, 0],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Cuerpo (Caramelo) */}
        <circle cx="50" cy="50" r="45" fill="#fff" stroke="#000" strokeWidth="4" />
        
        {/* Rayas rojas */}
        <path d="M50,5 Q55,5 60,50 Q65,95 50,95 Q45,95 40,50 Q35,5 50,5" fill="#EF4444" stroke="#000" strokeWidth="1" />
        <path d="M5,50 Q5,45 50,40 Q95,35 95,50 Q95,55 50,60 Q5,65 5,50" fill="#EF4444" stroke="#000" strokeWidth="1" />
        
        {/* Traje (Esmóquing) */}
        <path d="M30,80 Q50,75 70,80 L75,95 Q50,100 25,95 Z" fill="#1E293B" stroke="#000" strokeWidth="2" />
        
        {/* Ojos */}
        <circle cx="40" cy="45" r="4" fill="#000" />
        <circle cx="60" cy="45" r="4" fill="#000" />
        
        {/* Moño (Corbatín) */}
        <path d="M45,82 L55,82 L50,87 Z" fill="#EF4444" stroke="#000" strokeWidth="1" />
        <path d="M40,80 L50,85 L40,90 Z" fill="#EF4444" stroke="#000" strokeWidth="1" />
        <path d="M60,80 L50,85 L60,90 Z" fill="#EF4444" stroke="#000" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
