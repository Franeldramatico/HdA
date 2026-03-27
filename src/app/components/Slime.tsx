import { motion } from "motion/react";

interface SlimeProps {
  className?: string;
  color?: string;
}

export function Slime({ className = "", color = "#86EFAC" }: SlimeProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        scaleY: [1, 1.1, 1],
        scaleX: [1, 0.95, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 80" className="w-full h-full">
        {/* Cuerpo del slime */}
        <path
          d="M10,60 Q10,30 30,30 Q40,35 50,30 Q60,35 70,30 Q90,30 90,60 L90,70 Q90,75 85,75 L15,75 Q10,75 10,70 Z"
          fill={color}
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Ojos */}
        <circle cx="35" cy="50" r="5" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="65" cy="50" r="5" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="36" cy="50" r="2" fill="#000" />
        <circle cx="66" cy="50" r="2" fill="#000" />
        
        {/* Boca */}
        <path
          d="M40,60 Q50,65 60,60"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
