import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import imgSala from '../assets/Sala Hotel.jpg';
import imgJardin from '../assets/Jardin Hotel.jpg';
import imgTerraza from '../assets/Terraza Hotel.jpg';
import imgEntrada from '../assets/Entrada Hotel.jpg';
import imgCusco from '../assets/Cusco.jpg';
import imgUrubamba from '../assets/Urubamba.jpg';

const images = [
  { src: imgTerraza, alt: 'Terraza con vista a los Andes', span: 'col-span-2 row-span-2' },
  { src: imgSala, alt: 'Sala de estar', span: 'col-span-1 row-span-1' },
  { src: imgJardin, alt: 'Jardines del lodge', span: 'col-span-1 row-span-1' },
  { src: imgCusco, alt: 'Ciudad del Cusco', span: 'col-span-1 row-span-2' },
  { src: imgEntrada, alt: 'Entrada principal', span: 'col-span-1 row-span-1' },
  { src: imgUrubamba, alt: 'Valle de Urubamba', span: 'col-span-1 row-span-1' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-sand text-[11px] uppercase tracking-[0.4em] font-sans font-medium mb-4"
          >
            Galería
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-ink text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight"
          >
            Momentos que
            <br />
            <span className="italic text-brown-deep">hablan por sí solos</span>
          </motion.h2>
        </motion.div>

        {/* Dynamic Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-3 md:gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`${img.span} overflow-hidden rounded-lg group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
