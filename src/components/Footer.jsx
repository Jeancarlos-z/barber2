import React from 'react';
import { Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-darker py-12 border-t border-outline">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Scissors className="text-secondary w-6 h-6" />
            <span className="text-xl font-display font-bold tracking-tighter uppercase italic">
              Rap<span className="text-secondary">Boys</span>
            </span>
          </div>
          
          <div className="text-text-secondary text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} RapBoys Barbershop. Todos los derechos reservados.</p>
            <p className="mt-1">Jr Unión 271, Trujillo, Perú</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
