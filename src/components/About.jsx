import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from '../lib/animations';
import imgSala from '../assets/Sala Hotel.jpg';
import imgJardin from '../assets/Jardin Hotel.jpg';
import imgTerraza from '../assets/Terraza Hotel.jpg';
import imgEntrada from '../assets/Entrada Hotel.jpg';

const About = () => {
  return (
    <section id="about" className="bg-cream py-28 sm:py-36 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-sand text-[11px] uppercase tracking-[0.4em] font-sans font-medium mb-4"
          >
            Nuestra Esencia
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-ink text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight"
          >
            Un santuario donde la
            <br />
            <span className="italic text-brown-deep">naturaleza es protagonista</span>
          </motion.h2>
        </motion.div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p
              variants={slideInLeft}
              className="text-ink-light text-lg leading-[1.9] mb-8 font-light"
            >
              Apu Garden Lodge nació de un sueño: crear un espacio donde el lujo
              se mide en silencios, en amaneceres sobre las montañas y en la
              calidez de una cultura milenaria. Cada rincón ha sido diseñado para
              que sientas la conexión profunda con el Valle Sagrado.
            </motion.p>
            <motion.p
              variants={slideInLeft}
              className="text-ink-light text-lg leading-[1.9] mb-8 font-light"
            >
              Nuestra arquitectura respeta la estética andina, integrando
              materiales nobles con el confort contemporáneo. Aquí, el tiempo se
              detiene y cada momento se convierte en un recuerdo.
            </motion.p>
            <motion.p
              variants={slideInLeft}
              className="text-ink-muted leading-[1.9] mb-10 italic font-serif text-xl"
            >
              "Más que un hospedaje, es tu santuario personal en los Andes."
            </motion.p>
            <motion.a
              variants={slideInLeft}
              href="#experiences"
              className="inline-block border-b-2 border-sand text-brown-deep text-[13px] uppercase tracking-[0.2em] font-medium pb-1 hover:border-brown-deep transition-colors duration-300"
            >
              Descubre nuestras experiencias
            </motion.a>
          </motion.div>

          {/* Image Grid — Irregular / Editorial */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-12 grid-rows-[auto] gap-4"
          >
            {/* Large image top-left */}
            <motion.div variants={slideInRight} className="col-span-7 row-span-2">
              <div className="overflow-hidden rounded-lg h-full">
                <img
                  src={imgSala}
                  alt="Sala de estar del lodge"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            {/* Small image top-right */}
            <motion.div variants={slideInRight} className="col-span-5">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgTerraza}
                  alt="Terraza con vista a las montañas"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            {/* Small image bottom-right */}
            <motion.div variants={slideInRight} className="col-span-5">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgJardin}
                  alt="Jardines del lodge"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            {/* Wide image bottom */}
            <motion.div variants={fadeUp} className="col-span-12 mt-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgEntrada}
                  alt="Entrada principal"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
