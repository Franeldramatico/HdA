import { motion } from "motion/react";

interface IceKingProps {
  className?: string;
}

export function IceKing({ className = "" }: IceKingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 120 120" className="w-full h-full">
        <rect width="76" height="60" x="22" y="48" fill="#52afff"></rect>
        <path fill="#a4e2f1" d="M22,59.99C29.982,67.808,44.012,73,60,73s30.018-5.192,38-13.01V30.01 C90.018,22.192,75.988,17,60,17s-30.018,5.192-38,13.01V59.99z"></path>
        <path fill="#a4e2f1" d="M42,32H22V20c0-5.523,4.477-10,10-10h0c5.523,0,10,4.477,10,10V32z"></path>
        <path fill="#a4e2f1" d="M98,32H78V20c0-5.523,4.477-10,10-10h0c5.523,0,10,4.477,10,10V32z"></path>
        <rect width="10" height="38" x="12" y="59" fill="#52afff"></rect>
        <rect width="10" height="13" x="12" y="95" fill="#ffc1bf"></rect>
        <ellipse cx="60" cy="43" fill="#ffc1bf" rx="30" ry="19"></ellipse>
        <path d="M60,28c15.502,0,28.255,7.447,29.834,17C89.942,44.343,90,43.676,90,43c0-10.493-13.431-19-30-19 s-30,8.507-30,19c0,0.676,0.058,1.343,0.166,2C31.745,35.447,44.498,28,60,28z" opacity=".35"></path>
        <path fill="#0037ff" d="M45,40c0,1.657-1.343,3-3,3s-3-1.343-3-3s1.343-3,3-3S45,38.343,45,40z M78,37c-1.657,0-3,1.343-3,3 s1.343,3,3,3s3-1.343,3-3S79.657,37,78,37z M73.562,44.25l-3.123-2.499C70.404,41.793,66.958,46,60,46 c-6.867,0-10.303-4.085-10.438-4.25l-3.123,2.499C46.626,44.484,51.141,50,60,50S73.374,44.484,73.562,44.25z"></path>
        <rect width="10" height="36" x="98" y="59" fill="#52afff" transform="rotate(-180 103 77)"></rect>
        <rect width="10" height="13" x="98" y="95" fill="#ffc1bf" transform="rotate(-180 103 101.5)"></rect>
        <path d="M22,91.026C14,84.052,12,70,12,62s10-7.859,10-7.859V91.026z M98,91.026C106,84.052,108,70,108,62 s-10-7.859-10-7.859V91.026z" opacity=".35"></path>
        <path fill="#85ff5e" d="M22,49.141c0,0-10-0.141-10,7.859s2,22.052,10,29.026V49.141z"></path>
        <path fill="#85ff5e" d="M98,49.141c0,0,10-0.141,10,7.859s-2,22.052-10,29.026V49.141z"></path>
        <rect width="10" height="4" x="98" y="95" opacity=".35"></rect>
        <rect width="96" height="4" x="12" y="108" opacity=".35"></rect>
        <rect width="10" height="4" x="12" y="95" opacity=".35"></rect>
      </svg>
    </motion.div>
  );
}
