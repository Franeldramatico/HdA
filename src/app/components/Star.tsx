import { motion } from "motion/react";

interface StarProps {
  className?: string;
  delay?: number;
}

export function Star({ className = "", delay = 0 }: StarProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <path
          d="M25,5 L30,20 L45,20 L33,28 L38,43 L25,35 L12,43 L17,28 L5,20 L20,20 Z"
          fill="#FDE047"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
}
