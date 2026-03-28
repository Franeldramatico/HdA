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
import { Gunter } from "./components/Gunter";
import { LSP } from "./components/LSP";
import { IceKing } from "./components/IceKing";
import { PeppermintButler } from "./components/PeppermintButler";
import { GrassSword } from "./components/GrassSword";
import { LadyRainicorn } from "./components/LadyRainicorn";
import { TreeTrunks } from "./components/TreeTrunks";
import { Sparkles, Music, Cake } from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#7DD3FC] font-sans selection:bg-[#FCA5F1] selection:text-white">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      {/* Decoración de fondo - Montañas */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <div className="flex items-end justify-around">
          <Mountain className="w-1/4 opacity-40 blur-[1px]" color="#86EFAC" />
          <Mountain className="w-1/3 opacity-60" color="#6EE7B7" />
          <Mountain className="w-1/4 opacity-40 blur-[1px]" color="#86EFAC" />
        </div>
      </div>

      {/* Pasto decorativo con gradiente */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#4ADE80] to-[#86EFAC] border-t-8 border-black z-0 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        {/* Gunter en el pasto */}
        <FloatingWidget className="absolute -top-12 left-1/4 z-10" delay={0.4}>
          <Gunter className="w-20 h-24 drop-shadow-2xl" />
        </FloatingWidget>

        <FloatingWidget className="absolute -top-8 right-1/4 z-10" delay={1.1}>
          <LadyRainicorn className="w-32 h-20 drop-shadow-xl" />
        </FloatingWidget>

        {/* Flores en el pasto mejoradas */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-12"
            style={{ left: `${(i * 5) + 2}%` }}
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          >
            <div className="w-4 h-4 bg-[#FCA5F1] rounded-full border-2 border-black shadow-sm" />
            <div className="w-1.5 h-10 bg-[#10B981] border-2 border-black mx-auto rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Nubes flotantes mejoradas */}
      <Cloud className="absolute top-10 left-[10%] z-10 w-40 opacity-90" delay={0} />
      <Cloud className="absolute top-32 right-[15%] z-10 w-32 opacity-80" delay={1.5} />
      <Cloud className="absolute top-52 left-[30%] z-10 w-48 opacity-70" delay={0.8} />
      <Cloud className="absolute top-20 right-[40%] z-10 w-36 opacity-85" delay={2.2} />

      {/* Estrellas y corazones decorativos con brillo */}
      <Star className="absolute top-16 right-1/4 w-10 h-10 z-10 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]" delay={0} />
      <Star className="absolute top-48 left-1/4 w-8 h-8 z-10 text-yellow-200 drop-shadow-[0_0_6px_rgba(253,224,71,0.6)]" delay={0.7} />
      <HeartIcon className="absolute top-24 right-1/3 w-12 h-12 z-10 text-pink-400 drop-shadow-[0_0_10px_rgba(252,165,241,0.8)]" delay={0.3} />
      <HeartIcon className="absolute top-64 left-[15%] w-10 h-10 z-10 text-pink-300 drop-shadow-[0_0_8px_rgba(252,165,241,0.6)]" delay={0.9} />

      {/* Personajes de Adventure Time flotando con mejores posiciones */}
      <FloatingWidget className="absolute top-[20%] left-12 z-10" delay={0.2}>
        <div className="relative group cursor-pointer">
          <Finn className="w-24 h-28 drop-shadow-2xl transition-transform group-hover:scale-110" />
          <GrassSword className="absolute -right-10 top-12 w-14 h-14 rotate-12 drop-shadow-lg" />
        </div>
      </FloatingWidget>
      
      <FloatingWidget className="absolute top-[25%] right-16 z-10" delay={0.5}>
        <div className="group cursor-pointer">
          <Jake className="w-28 h-24 drop-shadow-2xl transition-transform group-hover:scale-110" />
        </div>
      </FloatingWidget>

      <FloatingWidget className="absolute bottom-[35%] left-20 z-10" delay={0.8}>
        <div className="group cursor-pointer">
          <BMO className="w-20 h-24 drop-shadow-2xl transition-transform group-hover:rotate-12" />
        </div>
      </FloatingWidget>

      <FloatingWidget className="absolute top-[45%] left-[22%] z-10" delay={1.2}>
        <div className="relative group cursor-pointer">
          <LSP className="w-24 h-24 drop-shadow-2xl transition-transform group-hover:scale-110" />
          <IceKing className="absolute -left-20 top-0 w-20 h-20 drop-shadow-xl -rotate-12" />
        </div>
      </FloatingWidget>

      <FloatingWidget className="absolute top-[12%] right-[28%] z-10" delay={1.5}>
        <TreeTrunks className="w-20 h-20 drop-shadow-lg" />
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
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-block px-8 md:px-16 py-10 md:py-12 bg-gradient-to-br from-[#FCA5F1] to-[#F9A8D4] border-8 border-black rounded-[4rem] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            animate={{
              rotate: [-0.5, 0.5, -0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Confetti decorativo mejorado */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-sm"
                  style={{
                    background: ['#FDE047', '#60A5FA', '#FCA5F1', '#86EFAC', '#C084FC'][i % 5],
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 90, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <h1 
                  className="text-6xl md:text-8xl text-white mb-6 font-black italic"
                  style={{ 
                    fontFamily: "'Righteous', sans-serif",
                    textShadow: '8px 8px 0px rgba(0,0,0,0.2)'
                  }}
                >
                  ¡FELIZ CUMPLE!
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="flex items-center justify-center gap-6 mt-6"
              >
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <CakeIcon className="w-full h-full drop-shadow-lg" />
                </div>
                <span className="text-7xl md:text-9xl font-black text-white italic" style={{ textShadow: '6px 6px 0px rgba(0,0,0,0.2)' }}>
                  20
                </span>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <CakeIcon className="w-full h-full drop-shadow-lg" />
                </div>
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
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16">
          <FloatingWidget delay={0.3}>
            <div className="relative group">
              <PrincessBubblegum className="w-28 h-36 drop-shadow-lg transition-transform group-hover:scale-110" />
              <PeppermintButler className="absolute -left-12 bottom-0 w-14 h-14 drop-shadow-md" />
            </div>
          </FloatingWidget>
          
          <FloatingWidget delay={0.6}>
            <div className="relative group">
              <Marceline className="w-28 h-36 drop-shadow-lg transition-transform group-hover:scale-110" />
              <div className="absolute -right-8 bottom-4 w-12 h-12 rotate-12">
                <HeartIcon className="w-full h-full text-red-500" />
              </div>
            </div>
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
                  <div className="w-6 h-6 flex-shrink-0">
                    <Star className="w-full h-full" />
                  </div>
                  <span>Que todos tus sueños se cumplan</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <Star className="w-full h-full" />
                  </div>
                  <span>Que sigas siendo tan increíble</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <Star className="w-full h-full" />
                  </div>
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
              
              <div className="text-lg font-semibold text-white leading-relaxed">
                Como Finn y Jake en sus aventuras, tú haces que cada día sea una nueva historia increíble. 
                Eres mi Princesa Bubblegum, mi mejor aventura, y la razón por la que cada momento es matemático.
              </div>
              
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
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="px-8 py-4 bg-gradient-to-r from-[#FCA5F1] to-[#C084FC] border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center"
        >
          <div className="font-bold text-lg md:text-xl text-white flex items-center justify-center gap-3">
            <div className="w-6 h-6 flex-shrink-0">
              <Star className="w-full h-full" />
            </div>
            <span>¡Eres la más matemática del Reino de Ooo!</span>
            <div className="w-6 h-6 flex-shrink-0">
              <Star className="w-full h-full" />
            </div>
          </div>
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
