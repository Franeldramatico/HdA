import { motion } from "motion/react";

interface TreeTrunksProps {
  className?: string;
}

export function TreeTrunks({ className = "" }: TreeTrunksProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Cuerpo (Elefante pequeño) */}
        <ellipse cx="50" cy="65" rx="35" ry="25" fill="#EAB308" stroke="#000" strokeWidth="3" />
        
        {/* Cabeza */}
        <circle cx="50" cy="45" r="22" fill="#EAB308" stroke="#000" strokeWidth="3" />
        
        {/* Trompa (Trunk) */}
        <path d="M50,55 Q50,75 65,75" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        
        {/* Orejas */}
        <ellipse cx="30" cy="45" rx="10" ry="12" fill="#EAB308" stroke="#000" strokeWidth="2" />
        <ellipse cx="70" cy="45" rx="10" ry="12" fill="#EAB308" stroke="#000" strokeWidth="2" />
        
        {/* Ojos */}
        <circle cx="42" cy="42" r="2.5" fill="#000" />
        <circle cx="58" cy="42" r="2.5" fill="#000" />
        
        {/* Chapitas (Blushes) */}
        <circle cx="40" cy="50" r="3" fill="#FCA5F1" opacity="0.6" />
        <circle cx="60" cy="50" r="3" fill="#FCA5F1" opacity="0.6" />
        
        {/* Patitas */}
        <rect x="30" y="85" width="10" height="8" rx="2" fill="#EAB308" stroke="#000" strokeWidth="2" />
        <rect x="60" y="85" width="10" height="8" rx="2" fill="#EAB308" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}
