import { skillsData } from '../data/projectsData';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaSass, FaPhp, FaDatabase, FaReact 
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';

const iconMap = {
  'fa-html5': FaHtml5,
  'fa-css3-alt': FaCss3Alt,
  'fa-js': FaJs,
  'fa-sass': FaSass,
  'fa-php': FaPhp,
  'fa-database': FaDatabase,
  'fa-react': FaReact,
  'fa-css3-alt-tailwind': SiTailwindcss,
  'fa-typescript': SiTypescript,
  'fa-mongodb': SiMongodb
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Mis Habilidades</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear aplicaciones web modernas y eficientes
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || FaReact;
            const isTailwind = skill.name === 'Tailwind CSS';
            
            return (
              <div 
                key={skill.name}
                className="skill-card group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10 text-center">
                  {isTailwind ? (
                    <SiTailwindcss className="w-12 h-12 mx-auto mb-2 text-cyan-400" />
                  ) : (
                    <IconComponent 
                      className="w-12 h-12 mx-auto mb-2 transition-transform group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                  )}
                  <span className="text-white font-semibold block">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;