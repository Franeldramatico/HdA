import { motion } from "motion/react";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  bgColor: string;
  iconBg: string;
  delay?: number;
}

export function StatCard({ 
  icon, 
  title, 
  value, 
  bgColor, 
  iconBg,
  delay = 0 
}: StatCardProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay,
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 2,
        transition: { duration: 0.2 }
      }}
      className={`relative p-6 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${bgColor} overflow-hidden cursor-pointer`}
    >
      {/* Decoración de fondo */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full" />
      <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-black/10 rounded-full" />
      
      <div className="relative z-10">
        {/* Ícono en burbuja */}
        <motion.div 
          className={`inline-flex p-4 rounded-full border-4 border-black ${iconBg} mb-4`}
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
        
        {/* Título */}
        <h3 className="mb-2 uppercase tracking-wide opacity-80">
          {title}
        </h3>
        
        {/* Valor */}
        <div className="text-5xl font-bold">
          {value}
        </div>
      </div>
    </motion.div>
  );
}
