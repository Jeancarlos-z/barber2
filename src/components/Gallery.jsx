import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1599351431247-f10b2181639d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621605815841-28d94471354e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1622286332618-f2803b9c8f8c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1634449591010-d24ef202c443?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section id="gallery" className="section-padding bg-bg-darker">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-widest font-medium mb-2">Galería</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase italic">Revive el <span className="text-gradient">fresh look</span></h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden glass relative group"
            >
              <img 
                src={img} 
                alt={`Barber Work ${index + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
