import { motion } from "motion/react";
import { ReactNode } from "react";

interface BlobButtonProps {
  children: ReactNode;
  onClick?: () => void;
  bgColor?: string;
  className?: string;
}

export function BlobButton({ 
  children, 
  onClick, 
  bgColor = "bg-[#FDE047]",
  className = "" 
}: BlobButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-4 rounded-[2rem] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${bgColor} overflow-hidden ${className}`}
      whileHover={{ 
        scale: 1.1,
        rotate: -2,
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
      }}
      whileTap={{ 
        scale: 0.95,
        boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-white/30"
        animate={{
          x: [-100, 200],
          skewX: [-20, -20],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        style={{ width: '50%' }}
      />
      
      <span className="relative z-10 font-bold uppercase tracking-wider">
        {children}
      </span>
    </motion.button>
  );
}
