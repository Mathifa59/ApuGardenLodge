import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Wifi, Sunrise, Mountain, MapPin, Leaf, UtensilsCrossed } from 'lucide-react';

const experiences = [
  {
    icon: Sunrise,
    title: 'Desayuno Andino Artesanal',
    desc: 'Ingredientes orgánicos del valle, preparados con recetas ancestrales cada mañana.',
  },
  {
    icon: Mountain,
    title: 'Vistas que Inspiran',
    desc: 'Despierta frente a los nevados y el río Vilcanota desde tu habitación.',
  },
  {
    icon: MapPin,
    title: 'Expediciones Privadas',
    desc: 'Rutas exclusivas a Machu Picchu, Moray y las salineras con guías expertos.',
  },
  {
    icon: Leaf,
    title: 'Jardines Medicinales',
    desc: 'Paseos entre plantas nativas y hierbas aromáticas del ecosistema andino.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Gastronomía de Altura',
    desc: 'Cocina de autor que fusiona tradición cusqueña con técnicas contemporáneas.',
  },
  {
    icon: Wifi,
    title: 'Conectividad sin Interrupciones',
    desc: 'Fibra óptica de alta velocidad para quienes necesitan estar conectados.',
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="bg-cream-dark py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-sand text-[11px] uppercase tracking-[0.4em] font-sans font-medium mb-4"
          >
            Experiencias
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-ink text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight"
          >
            Cada detalle, una
            <br />
            <span className="italic text-brown-deep">invitación a sentir</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-cream/80 rounded-xl p-8 lg:p-10 hover:bg-cream hover:shadow-xl transition-all duration-500 border border-transparent hover:border-sand/20"
            >
              <exp.icon
                size={28}
                strokeWidth={1.2}
                className="text-sand mb-6 group-hover:text-brown-deep transition-colors duration-300"
              />
              <h3 className="font-serif text-xl lg:text-2xl text-ink mb-3 font-medium">
                {exp.title}
              </h3>
              <p className="text-ink-muted text-[15px] leading-relaxed font-light">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
