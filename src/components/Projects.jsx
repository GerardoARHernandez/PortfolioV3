import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 6);
  
  return (
    <section id="projects" className="py-20 bg-gray-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una selección de mis mejores trabajos que demuestran mi pasión por el desarrollo web
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 bg-cyan-light px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 group"
          >
            <span>Ver todos los proyectos</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;