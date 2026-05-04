import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Abre directamente el cliente de correo
    window.location.href = `mailto:gahdz14@gmail.com?subject=Contacto desde Portfolio - ${formData.name}&body=${formData.message}%0A%0A---%0ADe: ${formData.email}`;
    
    // Opcional: limpiar el formulario después de enviar
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Contacto</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharte!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Información de Contacto */}
            <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-main/20 rounded-full flex items-center justify-center group-hover:bg-purple-main transition-colors duration-300">
                    <FaPhone className="text-purple-main group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Teléfono</p>
                    <p className="text-white font-semibold">55-7385-8588</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-main/20 rounded-full flex items-center justify-center group-hover:bg-purple-main transition-colors duration-300">
                    <FaEnvelope className="text-purple-main group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Correo Electrónico</p>
                    <p className="text-white font-semibold">gahdz14@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-main/20 rounded-full flex items-center justify-center group-hover:bg-purple-main transition-colors duration-300">
                    <FaMapMarkerAlt className="text-purple-main group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Ubicación</p>
                    <p className="text-white font-semibold">Ecatepec de Morelos, Estado de México</p>
                  </div>
                </div>
              </div>
              
              {/* Redes Sociales */}
              <div>
                <h4 className="text-white font-semibold mb-4">Sígueme en</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/GerardoARHernandez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-main transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaGithub className="text-white w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/gerardo-antonio-ruelas-hern%C3%A1ndez-628b94289/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-main transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaLinkedin className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Formulario de Contacto */}
            <form onSubmit={handleSubmit} className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-main transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-main transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-main transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;