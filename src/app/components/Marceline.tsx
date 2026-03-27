import { motion } from "motion/react";

interface MarcelineProps {
  className?: string;
}

export function Marceline({ className = "" }: MarcelineProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-full h-full">
        <linearGradient id="marceline_gradient" x1="43.948" x2="13.289" y1="53.586" y2="14.817" gradientUnits="userSpaceOnUse">
          <stop offset=".374" stopColor="#101334"></stop>
          <stop offset=".663" stopColor="#12173d"></stop>
          <stop offset="1" stopColor="#1a2258"></stop>
        </linearGradient>
        <path fill="url(#marceline_gradient)" d="M42,24c0,9.9-8.1,18-18,18S6,33.9,6,24S14.1,6,24,6S42,14.1,42,24z"></path>
        <path fill="#ffffff" d="M24,14c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S29.5,14,24,14z M24,30c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S27.3,30,24,30z" opacity=".2"></path>
        <circle cx="20" cy="22" r="2" fill="#ffffff" opacity=".8"></circle>
        <circle cx="28" cy="22" r="2" fill="#ffffff" opacity=".8"></circle>
        <path fill="#ff4d4d" d="M22,28c0,0,1,2,2,2s2-2,2-2" fillOpacity="0" stroke="#ff4d4d" strokeWidth="1" strokeLinecap="round" opacity=".8"></path>
      </svg>
    </motion.div>
  );
}
