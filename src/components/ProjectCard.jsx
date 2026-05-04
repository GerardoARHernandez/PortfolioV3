import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaUser, FaLock } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [showCredentials, setShowCredentials] = useState(false);

  return (
    <div className="group relative bg-linear-to-br from-gray-dark to-dark rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up">
      <div className="relative overflow-hidden h-56">
        <img 
          loading="lazy"
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-light transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Credenciales de Prueba - Solo si existen */}
        {project.testCredentials && (
          <div className="mb-4">
            <button
              onClick={() => setShowCredentials(!showCredentials)}
              className="text-xs text-purple-main hover:text-cyan-light transition-colors flex items-center gap-1 mb-2"
            >
              {showCredentials ? ' Ocultar credenciales' : ' Mostrar credenciales de prueba'}
            </button>
            
            {showCredentials && (
              <div className="bg-dark/80 rounded-lg p-3 space-y-1 border border-purple-main/30">
                <div className="flex items-center gap-2 text-xs">
                  <FaUser className="text-purple-main w-3 h-3" />
                  <span className="text-gray-300">Email:</span>
                  <code className="text-cyan-light bg-black/30 px-2 py-0.5 rounded">
                    {project.testCredentials.email}
                  </code>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <FaLock className="text-purple-main w-3 h-3" />
                  <span className="text-gray-300">Contraseña:</span>
                  <code className="text-cyan-light bg-black/30 px-2 py-0.5 rounded">
                    {project.testCredentials.password}
                  </code>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-purple-main/20 rounded-md text-xs text-purple-main font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-semibold transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Demo
          </a>
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white text-sm font-semibold transition-all duration-300"
            >
              <FaGithub className="w-3 h-3" />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;