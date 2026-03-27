import { motion } from "motion/react";

interface GrassSwordProps {
  className?: string;
}

export function GrassSword({ className = "" }: GrassSwordProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Empuñadura (Mango) */}
        <rect x="45" y="80" width="10" height="25" rx="2" fill="#86EFAC" stroke="#000" strokeWidth="2" />
        
        {/* Guarda (La parte que protege la mano) */}
        <ellipse cx="50" cy="80" rx="15" ry="6" fill="#10B981" stroke="#000" strokeWidth="2" />
        
        {/* Hoja de pasto (Verde) */}
        <path
          d="M50,10 Q65,40 55,80 L45,80 Q35,40 50,10"
          fill="#4ADE80"
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Detalles de la hoja */}
        <path d="M50,15 L50,75" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
    </motion.div>
  );
}
