import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { FaSearch, FaGithub } from 'react-icons/fa';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  
  // Obtener todas las tecnologías únicas
  const allTechnologies = ['all', ...new Set(projectsData.flatMap(p => p.technologies))];
  
  // Filtrar proyectos
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });
  
  return (
    <div className="min-h-screen bg-gray-dark pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FaGithub className="text-4xl text-purple-main" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">Todos los Proyectos</h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora todos los proyectos en los que he trabajado, desde aplicaciones web hasta sistemas completos
          </p>
        </div>
        
        {/* Filtros */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-main transition-colors"
            />
          </div>
          
          {/* Technology Filter */}
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedTech === tech
                    ? 'bg-purple-main text-white'
                    : 'bg-dark text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tech === 'all' ? 'Todos' : tech}
              </button>
            ))}
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Mostrando {filteredProjects.length} de {projectsData.length} proyectos
          </p>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-slide-up"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No se encontraron proyectos que coincidan con tu búsqueda</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTech('all');
              }}
              className="mt-4 text-purple-main hover:text-cyan-light transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;