import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const About = () => {

    const birthDate = new Date("2000-06-14");
    const age = Math.floor((new Date() - birthDate) / 31557600000);

    return (
        <section id="about" className="py-20 bg-gray-dark">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
            <h2 className="section-title">Sobre Mí</h2>
            </div>
            
            <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="bg-dark/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="text-cyan-light font-semibold">¡Hola, bienvenido! </span>
                Soy Gerardo, tengo {age} años, soy ingeniero en comunicaciones y electrónica, 
                también un desarrollador web apasionado que disfruta aprendiendo nuevas tecnologías 
                y resolviendo problemas con código.
                </p>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                Me encanta crear sitios web hermosos y funcionales para personas que quieren 
                marcar la diferencia. Cada proyecto es una oportunidad para innovar y superar 
                expectativas.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-semibold text-cyan-light mb-4">Datos Personales</h3>
                    <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                        <FaPhone className="text-purple-main" />
                        <span>55-7385-8588</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                        <FaEnvelope className="text-purple-main" />
                        <span>gahdz14@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-purple-main" />
                        <span>Ecatepec de Morelos, Estado de México</span>
                    </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-cyan-light mb-4">Intereses</h3>
                    <div className="flex flex-wrap gap-2">
                    {['Desarrollo Web', 'Inteligencia Artificial', 'Cloud Computing', 'DevOps', 'UI/UX'].map((interest) => (
                        <span key={interest} className="px-3 py-1 bg-purple-main/20 rounded-full text-sm text-purple-main">
                        {interest}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
                
                <div className="text-center">
                <a 
                    href="/Curriculum_RuelasHernandez.pdf" 
                    download
                    className="inline-flex items-center gap-2 bg-cyan-light px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                >
                    <FaDownload />
                    Descargar CV
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default About;