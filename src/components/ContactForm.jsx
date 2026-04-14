import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from '../lib/animations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: MapPin, label: 'Dirección', value: 'Calle López Escobar n° 610, Urubamba' },
  { icon: Phone, label: 'Teléfono', value: '+51 (084) 9491' },
  { icon: Mail, label: 'Email', value: 'reservas@apugardenlodge.com' },
  { icon: Clock, label: 'Recepción', value: '24 horas, los 7 días' },
];

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setSending(false);
        },
        () => {
          setStatus('error');
          setSending(false);
        }
      );
  };

  const inputClasses =
    'w-full bg-transparent border border-ink/10 rounded-xl px-5 py-4 text-ink font-sans text-[15px] focus:outline-none focus:border-sand transition-colors duration-300 placeholder:text-ink-muted/50';

  return (
    <section id="contact" className="bg-cream py-20 sm:py-24 lg:py-28">
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
            Contacto
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-ink text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight"
          >
            Estamos listos para
            <br />
            <span className="italic text-brown-deep">recibirte</span>
          </motion.h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={slideInLeft}
              className="text-ink-light text-lg leading-[1.9] font-light mb-12"
            >
              Ya sea que busques planificar tu estadía, consultar disponibilidad
              o simplemente saber más sobre nuestras experiencias, estaremos
              encantados de ayudarte.
            </motion.p>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={slideInLeft}
                  className="flex items-start gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={18} strokeWidth={1.5} className="text-sand" />
                  </div>
                  <div>
                    <p className="text-ink-muted text-[11px] uppercase tracking-[0.2em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-ink text-[15px]">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="bg-cream-dark/50 border border-ink/5 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-ink-muted text-[11px] uppercase tracking-[0.2em] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-ink-muted text-[11px] uppercase tracking-[0.2em] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-ink-muted text-[11px] uppercase tracking-[0.2em] mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Consulta de disponibilidad"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-ink-muted text-[11px] uppercase tracking-[0.2em] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Cuéntanos sobre tu viaje ideal..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-brown-deep text-cream font-sans text-[13px] uppercase tracking-[0.2em] font-medium py-4 rounded-xl hover:bg-brown-warm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {sending ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-center text-green-700 text-sm mt-3">
                    ¡Mensaje enviado con éxito! Te responderemos pronto.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-red-600 text-sm mt-3">
                    Hubo un error. Por favor, intenta nuevamente.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
