import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass p-2">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" 
                alt="Barbershop Atmosphere" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Absolute element */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl hidden md:block">
              <span className="text-4xl font-display font-black text-secondary lowercase">#1estilo</span>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary">En Trujillo, Perú</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-secondary uppercase tracking-widest font-medium mb-4">Sobre Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase italic mb-8">Más que un corte, <span className="text-gradient">una cultura</span></h3>
            <div className="space-y-6 text-text-secondary">
              <p>
                RapBoys nace de la pasión por el estilo urbano y la estética moderna. Ubicados en el corazón de Trujillo, nos hemos convertido en el punto de encuentro para quienes buscan algo más que un simple arreglo de cabello.
              </p>
              <p>
                Nuestra filosofía se basa en la precisión técnica y la conexión con el cliente. Entendemos que cada fade, cada línea y cada perfilado cuenta una historia diferente. Por eso, nos tomamos el tiempo para perfeccionar cada detalle.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <span className="text-4xl font-display font-bold text-primary italic">5+</span>
                  <p className="text-xs uppercase tracking-widest">Años de experiencia</p>
                </div>
                <div>
                  <span className="text-4xl font-display font-bold text-secondary italic">2k+</span>
                  <p className="text-xs uppercase tracking-widest">Clientes felices</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
