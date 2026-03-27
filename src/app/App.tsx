import { motion } from "motion/react";
import { Cloud } from "./components/Cloud";
import { Mountain } from "./components/Mountain";
import { FloatingWidget } from "./components/FloatingWidget";
import { StatCard } from "./components/StatCard";
import { BlobButton } from "./components/BlobButton";
import { DecorativeEye } from "./components/DecorativeEye";
import { Slime } from "./components/Slime";
import { Star } from "./components/Star";
import { Finn } from "./components/Finn";
import { Jake } from "./components/Jake";
import { PrincessBubblegum } from "./components/PrincessBubblegum";
import { BMO } from "./components/BMO";
import { Marceline } from "./components/Marceline";
import { HeartIcon } from "./components/HeartIcon";
import { CakeIcon } from "./components/CakeIcon";
import { Sparkles, Music, Cake } from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#7DD3FC] via-[#BAE6FD] to-[#E0F2FE]">
      {/* Decoración de fondo - Montañas */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <div className="flex items-end justify-around">
          <Mountain className="w-1/4 opacity-60" color="#86EFAC" />
          <Mountain className="w-1/3 opacity-80" color="#6EE7B7" />
          <Mountain className="w-1/4 opacity-60" color="#86EFAC" />
        </div>
      </div>

      {/* Pasto decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#86EFAC] border-t-4 border-black z-0">
        {/* Flores en el pasto */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-8"
            style={{ left: `${(i * 7) + 5}%` }}
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <div className="w-3 h-3 bg-[#FCA5F1] rounded-full border-2 border-black" />
            <div className="w-1 h-6 bg-[#10B981] border border-black mx-auto" />
          </motion.div>
        ))}
      </div>

      {/* Nubes flotantes */}
      <Cloud className="absolute top-10 left-10 z-10" delay={0} />
      <Cloud className="absolute top-20 right-20 z-10" delay={1} />
      <Cloud className="absolute top-40 left-1/3 z-10" delay={0.5} />

      {/* Estrellas y corazones decorativos */}
      <Star className="absolute top-16 right-1/4 w-8 h-8 z-10" delay={0} />
      <Star className="absolute top-32 left-1/4 w-6 h-6 z-10" delay={0.7} />
      <HeartIcon className="absolute top-24 right-1/3 w-10 h-10 z-10" delay={0.3} />
      <HeartIcon className="absolute top-52 left-1/5 w-8 h-8 z-10" delay={0.9} />

      {/* Personajes de Adventure Time flotando */}
      <FloatingWidget className="absolute top-1/4 left-8 z-10" delay={0.2}>
        <Finn className="w-20 h-24" />
      </FloatingWidget>
      
      <FloatingWidget className="absolute top-1/3 right-12 z-10" delay={0.5}>
        <Jake className="w-24 h-20" />
      </FloatingWidget>

      <FloatingWidget className="absolute bottom-1/3 left-16 z-10" delay={0.8}>
        <BMO className="w-16 h-20" />
      </FloatingWidget>

      {/* Contenedor principal */}
      <div className="relative z-20 container mx-auto px-4 py-8">
        
        {/* Hero Title - Mensaje de Cumpleaños */}
        <motion.div
          initial={{ scale: 0, y: -100, rotate: -180 }}
          animate={{ scale: 1, y: 0, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: 0.3,
          }}
          className="text-center mb-8"
        >
          <motion.div 
            className="inline-block px-12 py-8 bg-gradient-to-br from-[#FCA5F1] to-[#F9A8D4] border-4 border-black rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            animate={{
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Confetti decorativo */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: ['#FDE047', '#60A5FA', '#FCA5F1', '#86EFAC'][i % 4],
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <h1 
                  className="text-5xl md:text-7xl text-white mb-4"
                  style={{ 
                    fontFamily: "'Righteous', sans-serif",
                    textShadow: '5px 5px 0px rgba(0,0,0,0.3)'
                  }}
                >
                  ¡FELIZ CUMPLEAÑOS!
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-4 mt-4"
              >
                <CakeIcon className="w-16 h-16" />
                <span className="text-6xl font-bold text-white" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
                  20 AÑOS
                </span>
                <CakeIcon className="w-16 h-16" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mensaje romántico especial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-10 py-6 bg-white border-4 border-black rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl">
            <p className="text-2xl md:text-3xl font-bold text-[#1E293B] leading-relaxed">
              Para mi hermosa novia virtual que hace mi vida tan
              <span className="text-[#FCA5F1]"> matemática </span>
              como Hora de Aventura
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <HeartIcon className="w-8 h-8" />
              <HeartIcon className="w-8 h-8" delay={0.2} />
              <HeartIcon className="w-8 h-8" delay={0.4} />
            </div>
          </div>
        </motion.div>

        {/* Princesa Bubblegum y Marceline como decoración romántica */}
        <div className="flex justify-center gap-16 mb-12">
          <FloatingWidget delay={0.3}>
            <PrincessBubblegum className="w-24 h-32" />
          </FloatingWidget>
          
          <FloatingWidget delay={0.6}>
            <Marceline className="w-24 h-32" />
          </FloatingWidget>
        </div>

        {/* Grid de tarjetas especiales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <StatCard
            icon={<HeartIcon className="w-12 h-12" />}
            title="Te Amo"
            value="∞"
            bgColor="bg-gradient-to-br from-[#FCA5F1] to-[#F9A8D4]"
            iconBg="bg-white"
            delay={0.3}
          />
          
          <StatCard
            icon={<Sparkles className="w-12 h-12" strokeWidth={3} />}
            title="Momentos Mágicos"
            value="20 Años"
            bgColor="bg-gradient-to-br from-[#FDE047] to-[#FDBA74]"
            iconBg="bg-white"
            delay={0.4}
          />
          
          <StatCard
            icon={<Music className="w-12 h-12" strokeWidth={3} />}
            title="Aventuras Juntos"
            value="Siempre"
            bgColor="bg-gradient-to-br from-[#60A5FA] to-[#93C5FD]"
            iconBg="bg-white"
            delay={0.5}
          />
        </div>

        {/* Sección de deseos especiales */}
        <div className="relative flex flex-wrap justify-center items-stretch gap-8 mb-12">
          
          {/* Card de deseos */}
          <FloatingWidget delay={0.2} className="w-full md:w-96">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="h-full p-8 bg-gradient-to-br from-[#C084FC] to-[#D8B4FE] rounded-[2.5rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white rounded-full border-4 border-black">
                  <Cake className="w-10 h-10" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-bold text-white">Mis Deseos</h3>
              </div>
              
              <ul className="space-y-4 text-lg font-semibold text-white">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-start gap-3"
                >
                  <Star className="w-6 h-6 flex-shrink-0" />
                  <span>Que todos tus sueños se cumplan</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex items-start gap-3"
                >
                  <Star className="w-6 h-6 flex-shrink-0" />
                  <span>Que sigas siendo tan increíble</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-start gap-3"
                >
                  <Star className="w-6 h-6 flex-shrink-0" />
                  <span>Que este nuevo año esté lleno de magia</span>
                </motion.li>
              </ul>
            </motion.div>
          </FloatingWidget>

          {/* Card de por qué eres especial */}
          <FloatingWidget delay={0.5} className="w-full md:w-96">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="h-full p-8 bg-gradient-to-br from-[#86EFAC] to-[#6EE7B7] rounded-[2.5rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white rounded-full border-4 border-black">
                  <Sparkles className="w-10 h-10" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-bold text-white">Eres Especial</h3>
              </div>
              
              <p className="text-lg font-semibold text-white leading-relaxed">
                Como Finn y Jake en sus aventuras, tú haces que cada día sea una nueva historia increíble. 
                Eres mi Princesa Bubblegum, mi mejor aventura, y la razón por la que cada momento es matemático.
              </p>
              
              <div className="flex justify-center gap-4 mt-6">
                {[...Array(5)].map((_, i) => (
                  <HeartIcon key={i} className="w-8 h-8" delay={i * 0.2} />
                ))}
              </div>
            </motion.div>
          </FloatingWidget>

        </div>

        {/* Botones de acción románticos */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <BlobButton bgColor="bg-gradient-to-r from-[#FCA5F1] to-[#F9A8D4]">
            Mi Amor Por Ti
          </BlobButton>
          
          <BlobButton bgColor="bg-gradient-to-r from-[#FDE047] to-[#FDBA74]">
            Nuestras Aventuras
          </BlobButton>
          
          <BlobButton bgColor="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]">
            Feliz Cumple
          </BlobButton>
        </div>

      </div>

      {/* Elementos decorativos flotantes adicionales */}
      <DecorativeEye className="absolute top-1/2 right-8 z-10" />
      <DecorativeEye className="absolute bottom-40 left-8 z-10" />
      
      <FloatingWidget className="absolute bottom-24 right-32 z-10" delay={0.3}>
        <Slime className="w-20 h-20" color="#C084FC" />
      </FloatingWidget>
      
      <FloatingWidget className="absolute bottom-40 left-1/3 z-10" delay={0.8}>
        <Slime className="w-16 h-16" color="#FDBA74" />
      </FloatingWidget>

      {/* Mensaje final flotante */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="px-10 py-5 bg-gradient-to-r from-[#FCA5F1] to-[#C084FC] border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <p className="font-bold text-xl text-white flex items-center gap-3">
            <Star className="w-6 h-6" />
            ¡Eres la más matemática del Reino de Ooo!
            <Star className="w-6 h-6" />
          </p>
        </motion.div>
      </motion.div>

      {/* Corazones flotantes adicionales en los bordes */}
      {[...Array(8)].map((_, i) => (
        <FloatingWidget
          key={i}
          className="absolute"
          style={{
            top: `${(i * 12) + 10}%`,
            [i % 2 === 0 ? 'left' : 'right']: '2%',
          }}
          delay={i * 0.3}
        >
          <HeartIcon className="w-6 h-6" delay={i * 0.2} />
        </FloatingWidget>
      ))}

    </div>
  );
}
