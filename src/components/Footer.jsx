import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-dark border-t border-gray-700 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gerardo Antonio Ruelas Hernández. 
              Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/GerardoARHernandez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gerardo-antonio-ruelas-hern%C3%A1ndez-628b94289/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group relative w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-main transition-all duration-300"
          >
            <svg 
              className="w-5 h-5 text-white transform group-hover:-translate-y-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;