import { motion } from "motion/react";

interface HeartIconProps {
  className?: string;
  delay?: number;
}

export function HeartIcon({ className = "", delay = 0 }: HeartIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <path
          d="M25,45 L10,30 Q5,25 5,18 Q5,10 12,10 Q18,10 25,18 Q32,10 38,10 Q45,10 45,18 Q45,25 40,30 Z"
          fill="#FCA5F1"
          stroke="#000"
          strokeWidth="3"
        />
      </svg>
    </motion.div>
  );
}
