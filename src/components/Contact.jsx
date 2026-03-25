import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-secondary uppercase tracking-widest font-medium mb-2">Contacto</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase italic text-gradient">Encuéntranos</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6 items-start">
              <div className="glass p-4 rounded-xl text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-display uppercase mb-2">Dirección</h4>
                <p className="text-text-secondary">Jr Unión 271, Trujillo, Perú</p>
                <p className="text-xs text-text-secondary/50 uppercase tracking-widest mt-1">Cerca a la plaza de armas</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="glass p-4 rounded-xl text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-display uppercase mb-2">Teléfono</h4>
                <p className="text-text-secondary">949 628 042</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="glass p-4 rounded-xl text-secondary">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="text-xl font-display uppercase mb-2">WhatsApp</h4>
                <a 
                  href="https://wa.me/51949628042" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 mt-2 inline-flex items-center gap-2"
                >
                  Enviar Mensaje
                </a>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="#" className="glass p-3 rounded-full hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="glass p-3 rounded-full hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-video rounded-2xl overflow-hidden glass p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.132115682881!2d-79.0305!3d-8.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9d3d9d3d9d%3A0x1d1d1d1d1d1d1d1d!2sJr%20Unión%20271%2C%20Trujillo%2C%20Peru!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              className="rounded-xl grayscale contrast-125 brightness-75 invert"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
