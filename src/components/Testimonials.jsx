import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Un lugar mágico. Despertar con esa vista de las montañas y el silencio absoluto fue la experiencia más restauradora que hemos vivido.',
    name: 'Camille Dubois',
    origin: 'Lyon, Francia',
    stars: 5,
  },
  {
    quote:
      'La atención al detalle es extraordinaria. Desde el desayuno andino hasta las recomendaciones de rutas, todo fue impecable.',
    name: 'James & Sarah Mitchell',
    origin: 'Melbourne, Australia',
    stars: 5,
  },
  {
    quote:
      'Buscábamos desconectar y encontramos mucho más. Apu Garden Lodge es ese lugar al que siempre quieres volver.',
    name: 'Alejandro Reyes',
    origin: 'Ciudad de México, México',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-brown-deep py-20 sm:py-24 lg:py-28">
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
            Testimonios
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-cream text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight"
          >
            Lo que dicen
            <br />
            <span className="italic text-sand-light">nuestros huéspedes</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 lg:p-10 hover:bg-white/8 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-sand fill-sand"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-cream/80 text-lg lg:text-xl italic leading-relaxed mb-8">
                "{t.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="text-cream text-sm font-medium">{t.name}</p>
                <p className="text-cream/40 text-[13px] mt-1">{t.origin}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
