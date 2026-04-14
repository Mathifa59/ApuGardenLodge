import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ink pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-white/10"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-cream text-2xl font-light mb-2">
              Apu Garden
            </h3>
            <span className="text-sand text-[10px] uppercase tracking-[0.35em]">
              Lodge
            </span>
            <p className="text-cream/40 text-sm leading-relaxed mt-6 max-w-xs">
              Tu santuario de lujo en el corazón del Valle Sagrado.
              Donde la naturaleza y la exclusividad se encuentran.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-cream/60 text-[11px] uppercase tracking-[0.25em] mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <MapPin size={14} className="text-sand/60 shrink-0" />
                <span>Calle López Escobar n° 610, Urubamba</span>
              </div>
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <Phone size={14} className="text-sand/60 shrink-0" />
                <span>+51 (084) 9491</span>
              </div>
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <Mail size={14} className="text-sand/60 shrink-0" />
                <span>reservas@apugardenlodge.com</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-cream/60 text-[11px] uppercase tracking-[0.25em] mb-6">
              Explorar
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Inicio' },
                { href: '#about', label: 'Nosotros' },
                { href: '#experiences', label: 'Experiencias' },
                { href: '#gallery', label: 'Galería' },
                { href: '#contact', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/40 text-sm hover:text-sand transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-cream/25 text-xs">
            © 2025 Apu Garden Lodge. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-cream/30 hover:text-sand transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="text-cream/30 hover:text-sand transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
