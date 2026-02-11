import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - different speeds for depth
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yName = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yProfession = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scalePhoto = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing effect for professions
  const [text] = useTypewriter({
    words: ['Data Scientist', 'AI Engineer', 'ML Engineer', 'Gen-AI Specialist'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 60,
    delaySpeed: 2000,
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background - slowest parallax */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 bg-gradient-to-br from-[#050505] via-gray-900 to-indigo-950"
      >
        {/* Neural network pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 243, 255, 0.2) 2%, transparent 0%),
                             radial-gradient(circle at 75px 75px, rgba(188, 19, 254, 0.2) 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-neonCyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neonPurple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.div>

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 max-w-7xl w-full"
      >
        {/* Profile Photo with parallax and zoom */}
        <motion.div
          style={{ y: yPhoto, scale: scalePhoto }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Glowing ring */}
          <div className="absolute -inset-4 bg-gradient-to-r from-neonCyan via-blue-500 to-neonPurple rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          
          {/* Photo container */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm">
            <img
              src="/assets/profile.png"
              alt="Shivansh Mahajan"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=Shivansh+Mahajan&size=512&background=0077b5&color=fff&bold=true';
              }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute top-10 -right-4 w-3 h-3 bg-neonCyan rounded-full animate-ping" />
          <div className="absolute bottom-20 -left-4 w-2 h-2 bg-neonPurple rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </motion.div>

        {/* Text content */}
        <div className="text-center lg:text-left max-w-2xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6"
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neonCyan/10 text-neonCyan border border-neonCyan/20 text-xs sm:text-sm font-display tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-neonCyan rounded-full animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Main name - fastest parallax */}
          <motion.h1
            style={{ y: yName }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight tracking-tighter mb-6"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Shivansh Mahajan
            </span>
          </motion.h1>

          {/* Cycling professions - medium parallax */}
          <motion.div
            style={{ y: yProfession }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              <span className="text-white">I am a </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-blue-500 to-neonPurple">
                {text}
              </span>
              <Cursor cursorColor="#00f3ff" />
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-sans font-light mb-8 sm:mb-10 max-w-xl px-2"
          >
            Building intelligent systems | Machine Learning | Generative AI | RAG Pipelines
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-white text-black font-display font-bold text-sm sm:text-base tracking-wider transition-all duration-300 hover:bg-neonCyan hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] flex items-center gap-2"
            >
              View Work
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-transparent border border-white/20 text-white font-display font-bold text-sm sm:text-base tracking-wider hover:border-neonPurple/50 hover:text-neonPurple hover:shadow-[0_0_20px_rgba(188,19,254,0.2)] transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('experience')}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};
