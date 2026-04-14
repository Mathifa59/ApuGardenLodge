import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, easePremium } from '../lib/animations';

const BASE = import.meta.env.BASE_URL;

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${BASE}video-hero.mp4`} type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60 z-1" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-2 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          className="text-sand text-[11px] sm:text-[13px] uppercase tracking-[0.4em] font-sans font-medium mb-6"
        >
          Urubamba · Cusco · Perú
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-light leading-[1.05] max-w-4xl"
        >
          Despierta en el corazón
          <br />
          <span className="italic">del Valle Sagrado</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-cream/70 text-base sm:text-lg font-sans font-light max-w-xl mt-6 leading-relaxed"
        >
          Una experiencia de descanso, naturaleza y exclusividad
          donde los Andes abrazan tu despertar
        </motion.p>

        {/* Booking Widget — Glassmorphism */}
        <motion.div
          variants={fadeUp}
          className="mt-12 w-full max-w-2xl"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-end">
              <div className="flex-1 w-full">
                <label className="block text-cream/60 text-[11px] uppercase tracking-[0.2em] font-sans mb-2">
                  Llegada
                </label>
                <input
                  type="date"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-sand/50 transition-colors placeholder:text-cream/30"
                />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-cream/60 text-[11px] uppercase tracking-[0.2em] font-sans mb-2">
                  Salida
                </label>
                <input
                  type="date"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-sand/50 transition-colors placeholder:text-cream/30"
                />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-cream/60 text-[11px] uppercase tracking-[0.2em] font-sans mb-2">
                  Huéspedes
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-sand/50 transition-colors appearance-none">
                  <option value="1" className="text-ink">1 Huésped</option>
                  <option value="2" className="text-ink">2 Huéspedes</option>
                  <option value="3" className="text-ink">3 Huéspedes</option>
                  <option value="4" className="text-ink">4 Huéspedes</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 bg-sand text-brown-deep font-sans text-[13px] uppercase tracking-[0.2em] font-semibold py-4 rounded-xl hover:bg-sand-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg">
              Consultar Disponibilidad
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-[10px] uppercase tracking-[0.3em] font-sans">
          Descubre
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-linear-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
