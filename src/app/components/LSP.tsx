import { motion } from "motion/react";

interface LSPProps {
  className?: string;
}

export function LSP({ className = "" }: LSPProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Cuerpo (Lumps) */}
        <path
          d="M60,10 
             Q75,10 85,25 
             Q105,30 110,50 
             Q115,75 100,90 
             Q85,110 60,110 
             Q35,110 20,90 
             Q5,75 10,50 
             Q15,30 35,25 
             Q45,10 60,10"
          fill="#D8B4FE"
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Estrella en la frente */}
        <polygon
          points="60,20 63,30 73,30 65,37 68,47 60,40 52,47 55,37 47,30 57,30"
          fill="#FDE047"
          stroke="#000"
          strokeWidth="1.5"
        />
        
        {/* Ojos */}
        <circle cx="45" cy="55" r="3" fill="#000" />
        <circle cx="75" cy="55" r="3" fill="#000" />
        
        {/* Boca (Oh my glob!) */}
        <ellipse cx="60" cy="65" rx="8" ry="4" fill="#000" />
        
        {/* Brazos pequeños */}
        <path d="M25,60 Q15,65 20,75" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M95,60 Q105,65 100,75" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
