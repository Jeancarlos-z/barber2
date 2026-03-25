import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle, Clock, Calendar, User, Phone, Scissors } from 'lucide-react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Corte Clásico',
    fecha: '',
    hora: '',
    comprobante: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const services = ['Corte Clásico', 'Fades / Degradados', 'Barba & Perfilado'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, comprobante: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.comprobante) {
      setError('Por favor sube el comprobante de pago');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const data = new FormData();
      data.append('nombre', formData.nombre);
      data.append('telefono', formData.telefono);
      data.append('servicio', formData.servicio);
      data.append('fecha', formData.fecha);
      data.append('hora', formData.hora);
      data.append('file', formData.comprobante);

      await axios.post('https://jeanxz.app.n8n.cloud/webhook-test/nuevo-lead', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setIsSuccess(true);
      setFormData({
        nombre: '',
        telefono: '',
        servicio: 'Corte Clásico',
        fecha: '',
        hora: '',
        comprobante: null
      });
    } catch (err) {
      console.error(err);
      // Even if it fails (webhook-test sometimes does), we'll show success for UX in this demo if desired, 
      // but let's be honest and show error if it actually fails.
      setError('Hubo un error al enviar tu reserva. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-2xl text-center max-w-2xl mx-auto"
      >
        <CheckCircle className="text-secondary w-20 h-20 mx-auto mb-6" />
        <h3 className="text-3xl font-display uppercase italic mb-4">¡Reserva Enviada!</h3>
        <p className="text-text-secondary mb-8">
          Tu cita ha sido registrada. Nos pondremos en contacto contigo pronto vía WhatsApp para confirmar.
        </p>
        <button onClick={() => setIsSuccess(false)} className="btn-primary">
          Hacer otra reserva
        </button>
      </motion.div>
    );
  }

  return (
    <section id="booking" className="section-padding bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-secondary uppercase tracking-widest font-medium mb-4">Reservar Cita</h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase italic mb-8">Asegura <span className="text-gradient">tu espacio</span></h3>
            
            <div className="glass p-8 rounded-2xl mb-8">
              <div className="flex gap-6 items-center mb-8">
                <div className="w-32 h-32 flex-shrink-0 glass p-2 rounded-xl">
                  <img 
                    src="https://i.postimg.cc/TPd7t9YM/yapmy.jpg" 
                    alt="Yape QR" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-display uppercase mb-2">Pago vía Yape</h4>
                  <p className="text-sm text-text-secondary">
                    Realiza el pago antes de reservar tu cita y sube el comprobante.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-text-secondary">
                  <CheckCircle size={18} className="text-secondary" />
                  <span className="text-sm">Escanea el código QR</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary">
                  <CheckCircle size={18} className="text-secondary" />
                  <span className="text-sm">Realiza el depósito según el servicio</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary">
                  <CheckCircle size={18} className="text-secondary" />
                  <span className="text-sm">Toma una captura de pantalla</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                  <User size={14} className="text-secondary" /> Nombre Completo
                </label>
                <input 
                  type="text" 
                  name="nombre" 
                  value={formData.nombre} 
                  onChange={handleChange} 
                  placeholder="Ej. Juan Pérez" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                  <Phone size={14} className="text-secondary" /> Teléfono / WhatsApp
                </label>
                <input 
                  type="tel" 
                  name="telefono" 
                  value={formData.telefono} 
                  onChange={handleChange} 
                  placeholder="Ej. 949 628 042" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                  <Scissors size={14} className="text-secondary" /> Servicio
                </label>
                <select name="servicio" value={formData.servicio} onChange={handleChange} required>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    <Calendar size={14} className="text-secondary" /> Fecha
                  </label>
                  <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    <Clock size={14} className="text-secondary" /> Hora
                  </label>
                  <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                  <Upload size={14} className="text-secondary" /> Comprobante de Pago
                </label>
                <div className="relative group">
                  <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="hidden" 
                    id="file-upload" 
                    accept="image/*"
                    required 
                  />
                  <label 
                    htmlFor="file-upload" 
                    className="flex flex-col items-center justify-center border-2 border-dashed border-outline rounded-xl p-8 hover:border-secondary hover:bg-secondary/5 transition-all cursor-pointer"
                  >
                    <Upload className="text-text-secondary group-hover:text-secondary mb-2" />
                    <span className="text-sm text-text-secondary">
                      {formData.comprobante ? formData.comprobante.name : "Subir imagen (JPG, PNG)"}
                    </span>
                  </label>
                </div>
              </div>

              {error && <p className="text-error text-xs italic">{error}</p>}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Procesando...' : 'Confirmar Reserva'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
