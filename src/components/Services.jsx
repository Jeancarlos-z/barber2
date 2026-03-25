import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Zap, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Corte Clásico',
      price: '10 soles',
      description: 'Corte tradicional con tijera o máquina, acabado limpio y profesional.',
      icon: <Scissors className="text-primary w-6 h-6" />,
      tag: 'Popular'
    },
    {
      title: 'Fades / Degradados',
      price: '15 soles',
      description: 'Técnicas modernas de desvanecido (Low, Mid, High Fade) con navaja.',
      icon: <Zap className="text-secondary w-6 h-6" />,
      tag: 'Trending'
    },
    {
      title: 'Barba & Perfilado',
      price: '8 soles',
      description: 'Diseño y perfilado de barba con toalla caliente y productos premium.',
      icon: <Star className="text-primary-dim w-6 h-6" />,
      tag: 'Style'
    }
  ];

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-secondary uppercase tracking-widest font-medium mb-2">Nuestros Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase italic">Cortes que definen <span className="text-gradient">tu identidad</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-lg relative group hover:bg-surface-high transition-all"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold bg-secondary/10 text-secondary px-2 py-1 rounded">
                  {service.tag}
                </span>
              )}
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-2xl font-display uppercase mb-2">{service.title}</h4>
              <p className="text-text-secondary mb-6 text-sm">
                {service.description}
              </p>
              <div className="text-3xl font-display font-bold text-secondary">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
