import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary opacity-5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary opacity-5 blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-secondary uppercase tracking-[0.3em] font-medium mb-4 text-sm md:text-base">
            Premium Barbershop Experience
          </h2>
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase italic leading-[0.9] mb-8">
            Rap<span className="text-secondary">Boys</span>
          </h1>
          <p className="max-w-xl mx-auto text-text-secondary text-lg md:text-xl mb-12">
            Cortes urbanos y modernos. Elevamos tu estilo con la precisión y el flow que te mereces.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#booking" className="btn-primary flex items-center gap-2 group">
              Reservar Cita
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#services" className="btn-secondary">
              Ver Servicios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative text */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none">
        <div className="inline-block animate-scroll text-8xl font-black uppercase italic">
          ESTILO URBANO &bull; CORTES MODERNOS &bull; RAPBOYS TRUJILLO &bull; FADES &bull; ESTILO URBANO &bull; CORTES MODERNOS &bull; 
        </div>
      </div>
    </section>
  );
};

export default Hero;
