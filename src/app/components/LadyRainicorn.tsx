import { motion } from "motion/react";

interface LadyRainicornProps {
  className?: string;
}

export function LadyRainicorn({ className = "" }: LadyRainicornProps) {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 20, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 160 80" className="w-full h-full">
        {/* Cuerpo (Arcoiris) */}
        <path
          d="M10,40 Q40,10 80,40 Q120,70 150,40"
          fill="none"
          stroke="#FCA5F1"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          d="M10,40 Q40,10 80,40 Q120,70 150,40"
          fill="none"
          stroke="#FDE047"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M10,40 Q40,10 80,40 Q120,70 150,40"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        
        {/* Cabeza */}
        <ellipse cx="150" cy="40" rx="10" ry="12" fill="#fff" stroke="#000" strokeWidth="2" />
        
        {/* Cuerno */}
        <path d="M155,30 L160,15 L150,28 Z" fill="#FDE047" stroke="#000" strokeWidth="1" />
        
        {/* Ojos */}
        <circle cx="154" cy="38" r="1.5" fill="#000" />
        
        {/* Pelo/Crin */}
        <path d="M145,30 Q140,20 150,25" fill="none" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
