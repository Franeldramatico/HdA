import { motion } from "motion/react";

interface JakeProps {
  className?: string;
}

export function Jake({ className = "" }: JakeProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scaleX: [1, 1.1, 1],
        scaleY: [1, 0.95, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 120 100" className="w-full h-full">
        {/* Cuerpo principal */}
        <ellipse cx="60" cy="60" rx="45" ry="35" fill="#FDBA74" stroke="#000" strokeWidth="3" />
        
        {/* Patas delanteras */}
        <ellipse cx="35" cy="85" rx="12" ry="18" fill="#FB923C" stroke="#000" strokeWidth="3" />
        <ellipse cx="85" cy="85" rx="12" ry="18" fill="#FB923C" stroke="#000" strokeWidth="3" />
        
        {/* Patas traseras */}
        <ellipse cx="25" cy="70" rx="10" ry="15" fill="#FB923C" stroke="#000" strokeWidth="3" />
        <ellipse cx="95" cy="70" rx="10" ry="15" fill="#FB923C" stroke="#000" strokeWidth="3" />
        
        {/* Cabeza */}
        <ellipse cx="60" cy="45" rx="35" ry="30" fill="#FDBA74" stroke="#000" strokeWidth="3" />
        
        {/* Orejas caídas */}
        <ellipse cx="35" cy="35" rx="10" ry="18" fill="#FB923C" stroke="#000" strokeWidth="3" transform="rotate(-20 35 35)" />
        <ellipse cx="85" cy="35" rx="10" ry="18" fill="#FB923C" stroke="#000" strokeWidth="3" transform="rotate(20 85 35)" />
        
        {/* Ojos grandes */}
        <ellipse cx="48" cy="42" rx="10" ry="12" fill="#fff" stroke="#000" strokeWidth="3" />
        <ellipse cx="72" cy="42" rx="10" ry="12" fill="#fff" stroke="#000" strokeWidth="3" />
        
        {/* Pupilas */}
        <circle cx="48" cy="44" r="4" fill="#000" />
        <circle cx="72" cy="44" r="4" fill="#000" />
        
        {/* Brillos en ojos */}
        <circle cx="50" cy="40" r="2" fill="#fff" />
        <circle cx="74" cy="40" r="2" fill="#fff" />
        
        {/* Nariz redonda */}
        <ellipse cx="60" cy="52" rx="6" ry="5" fill="#1E293B" stroke="#000" strokeWidth="2" />
        
        {/* Boca sonriente */}
        <path
          d="M45,58 Q60,68 75,58"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
