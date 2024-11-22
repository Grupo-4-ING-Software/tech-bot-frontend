import { FC } from 'react';
import bag from '../../../assets/icons/bag.svg';
import screen from '../../../assets/icons/screen.svg';
import star from '../../../assets/icons/star.svg';
import sun from '../../../assets/icons/sun.svg';

const FEATURES = [
    {
        icon: sun,
        title: "Acompañamiento 24/7",
        description: "Puede contar con nuestro producto a todas horas, todos los días."
    },
    {
        icon: star,
        title: "Carreras especializadas",
        description: "Con un apoyo personalizado en las distintas áreas de especialización en desarrollo de software"
    },
    {
        icon: screen,
        title: "Historial de chats",
        description: "Almacena un registro con todas tus conversaciones para un mejor enfoque."
    },
    {
        icon: bag,
        title: "Sistema de recomendación",
        description: "Sugerencias a partir de tus preferencias, personalizado para cada usuario"
    }
];

const Sections: FC = () => {
    return (
        <div className="container mx-auto px-4 py-16 space-y-32">
            {/* Qué ofrecemos Section */}
            <section id="home" className="text-center pt-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">¿Qué ofrecemos?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow
                                     border border-gray-100 flex flex-col items-start"
                        >
                            <div className="bg-landing-primary p-3 rounded-lg mb-6">
                                <img 
                                    src={feature.icon} 
                                    alt={feature.title}
                                    className="w-8 h-8"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Nosotros Section */}
            <section id="about-us" className="max-w-4xl mx-auto pt-24">
                <h2 className="text-3xl font-bold mb-8">Nosotros</h2>
                <p className="text-gray-600 leading-relaxed">
                    Somos un equipo apasionado por la tecnología y la educación. 
                    Nuestra misión es hacer que el aprendizaje de tecnología sea 
                    más accesible y personalizado para todos.
                </p>
            </section>

            {/* Cómo funciona Section */}
            <section id="how-it-works" className="max-w-4xl mx-auto pt-24">
                <h2 className="text-3xl font-bold mb-8">Cómo funciona</h2>
                <p className="text-gray-600 leading-relaxed">
                    Utilizamos inteligencia artificial avanzada para analizar tus intereses
                    y objetivos profesionales, creando un plan de aprendizaje personalizado
                    que se adapta a tus necesidades específicas.
                </p>
            </section>

            {/* Servicios Section */}
            <section id="services" className="max-w-4xl mx-auto ">
                <h2 className="text-3xl font-bold mb-8">Servicios</h2>
                <p className="text-gray-600 leading-relaxed">
                    Ofrecemos una plataforma integral que combina IA, recursos educativos
                    y seguimiento personalizado para ayudarte a alcanzar tus metas en
                    el mundo de la tecnología.
                </p>
            </section>
        </div>
    );
};

export default Sections;