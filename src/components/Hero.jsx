import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const titles = [
    'Ingeniero en Comunicaciones y Electrónica',
    'Desarrollador Web',
    'Programador Full Stack'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-dark via-dark to-gray-dark"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-main/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contenido Izq */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-linear-to-r from-cyan-light to-purple-main bg-clip-text text-transparent">
                Gerardo Antonio
              </span>
              <br />
              Ruelas Hernández
            </h1>
            
            <div className="h-16 mb-6">
              <p 
                className={`text-xl md:text-2xl text-gray-300 transition-opacity duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {titles[titleIndex]}
              </p>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Apasionado por crear soluciones innovadoras a través del código, 
              combinando la ingeniería con el desarrollo web moderno.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="/CV - Ruelas Hernandez.pdf" 
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                Descargar CV
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-cyan-light text-cyan-light font-semibold hover:bg-cyan-light hover:text-dark transition-all duration-300"
              >
                Contáctame
              </a>
            </div>
            
            {/* Redes Sociales */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              <a 
                href="https://github.com/GerardoARHernandez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/gerardo-antonio-ruelas-hern%C3%A1ndez-628b94289/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Imagen de Perfil */}
          <div className="flex-1 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-light to-purple-main rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img 
                loading="lazy"
                src="/img/hero.jpeg" 
                alt="Gerardo Ruelas" 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-main/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;