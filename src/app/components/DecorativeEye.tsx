import { motion } from "motion/react";

interface DecorativeEyeProps {
  className?: string;
}

export function DecorativeEye({ className = "" }: DecorativeEyeProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Ojo estilo Adventure Time */}
      <div className="relative w-16 h-16">
        {/* Blanco del ojo */}
        <div className="absolute inset-0 bg-white rounded-full border-4 border-black" />
        
        {/* Pupila animada */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-6 h-6 bg-black rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 3, -3, 0],
            y: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Brillo en la pupila */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
