import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, easePremium } from '../lib/animations';
import imgHotel from '../assets/Hotel Sumaq.jpg';

const Emotional = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgHotel}
          alt="Vista del Valle Sagrado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown-deep/70" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 py-24 sm:py-28 lg:py-36 px-6 lg:px-12 max-w-4xl mx-auto text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-sand text-[11px] uppercase tracking-[0.4em] font-sans font-medium mb-8"
        >
          Imagina
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] italic"
        >
          Despertar rodeado de montañas,
          con el sonido del río Vilcanota
          como única alarma
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex justify-center"
        >
          <div className="w-16 h-px bg-sand/50" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-cream/60 text-base sm:text-lg font-sans font-light mt-8 max-w-lg mx-auto leading-relaxed"
        >
          En Apu Garden Lodge, cada amanecer es una invitación a reconectar
          contigo mismo y con la majestuosidad de los Andes.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="#contact"
          className="inline-block mt-12 border border-sand/40 text-sand text-[12px] uppercase tracking-[0.25em] px-10 py-4 hover:bg-sand hover:text-brown-deep transition-all duration-400"
        >
          Vive la experiencia
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Emotional;
