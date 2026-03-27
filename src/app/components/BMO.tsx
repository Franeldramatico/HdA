import { motion } from "motion/react";

interface BMOProps {
  className?: string;
}

export function BMO({ className = "" }: BMOProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 80 100" className="w-full h-full">
        {/* Cuerpo principal */}
        <rect x="15" y="20" width="50" height="65" rx="5" fill="#86EFAC" stroke="#000" strokeWidth="3" />
        
        {/* Pantalla */}
        <rect x="22" y="28" width="36" height="28" rx="2" fill="#6EE7B7" stroke="#000" strokeWidth="2" />
        
        {/* Cara en la pantalla */}
        <g>
          {/* Ojos cuadrados */}
          <rect x="30" y="38" width="6" height="6" fill="#000" />
          <rect x="44" y="38" width="6" height="6" fill="#000" />
          
          {/* Sonrisa pixelada */}
          <rect x="32" y="48" width="3" height="3" fill="#000" />
          <rect x="36" y="50" width="3" height="3" fill="#000" />
          <rect x="41" y="50" width="3" height="3" fill="#000" />
          <rect x="45" y="48" width="3" height="3" fill="#000" />
        </g>
        
        {/* Botones */}
        <circle cx="28" cy="68" r="4" fill="#FDE047" stroke="#000" strokeWidth="2" />
        <circle cx="40" cy="68" r="4" fill="#60A5FA" stroke="#000" strokeWidth="2" />
        <circle cx="52" cy="68" r="4" fill="#FCA5F1" stroke="#000" strokeWidth="2" />
        
        {/* D-pad */}
        <g transform="translate(25, 73)">
          <rect x="0" y="3" width="3" height="9" fill="#1E293B" stroke="#000" strokeWidth="1" />
          <rect x="-3" y="6" width="9" height="3" fill="#1E293B" stroke="#000" strokeWidth="1" />
        </g>
        
        {/* Botones laterales */}
        <g transform="translate(48, 73)">
          <circle cx="0" cy="3" r="2.5" fill="#C084FC" stroke="#000" strokeWidth="1" />
          <circle cx="5" cy="6" r="2.5" fill="#C084FC" stroke="#000" strokeWidth="1" />
        </g>
        
        {/* Brazos */}
        <rect x="8" y="45" width="7" height="15" rx="3" fill="#6EE7B7" stroke="#000" strokeWidth="2" />
        <rect x="65" y="45" width="7" height="15" rx="3" fill="#6EE7B7" stroke="#000" strokeWidth="2" />
        
        {/* Piernas */}
        <rect x="25" y="85" width="10" height="12" rx="2" fill="#6EE7B7" stroke="#000" strokeWidth="2" />
        <rect x="45" y="85" width="10" height="12" rx="2" fill="#6EE7B7" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}
