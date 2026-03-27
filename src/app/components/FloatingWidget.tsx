import { motion } from "motion/react";
import { ReactNode } from "react";

interface FloatingWidgetProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FloatingWidget({ 
  children, 
  className = "", 
  delay = 0,
  duration = 3 
}: FloatingWidgetProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
