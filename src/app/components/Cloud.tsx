import { motion } from "motion/react";

interface CloudProps {
  className?: string;
  delay?: number;
}

export function Cloud({ className = "", delay = 0 }: CloudProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Nube con cara estilo Adventure Time */}
      <div className="relative w-32 h-20">
        {/* Cuerpo de la nube */}
        <div className="absolute top-6 left-0 w-full h-14 bg-white rounded-[50%] border-4 border-black" />
        <div className="absolute top-2 left-8 w-16 h-16 bg-white rounded-[50%] border-4 border-black" />
        <div className="absolute top-4 left-16 w-12 h-12 bg-white rounded-[50%] border-4 border-black" />
        
        {/* Cara */}
        <div className="absolute top-8 left-10 z-10">
          {/* Ojos */}
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-black rounded-full" />
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          {/* Boca */}
          <div className="mt-1 w-6 h-1 bg-black rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}
