import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/utils/routes';

interface NavLink {
  text: string;
  href: string;
}

interface FeatureCard {
  title: string;
  description: string;
  icon: JSX.Element;
}

const navLinks: NavLink[] = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Nosotros', href: '#nosotros' },
  { text: 'Cómo funciona', href: '#como-funciona' },
  { text: 'Servicios', href: '#servicios' },
];

const featureCards: FeatureCard[] = [
  {
    title: 'Acompañamiento 24/7',
    description: 'Puede contar con nuestro producto a todas horas, todos los días.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    ),
  },
  {
    title: 'Carreras especializadas',
    description: 'Con un apoyo personalizado en las distintas áreas de especialización en desarrollo de software',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    ),
  },
  {
    title: 'Historial de chats',
    description: 'Almacena un registro con todas tus conversaciones para un mejor enfoque.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    ),
  },
  {
    title: 'Sistema de recomendación',
    description: 'Sugerencias a partir de tus preferencias, personalizado para cada usuario',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
  },
];

const Landing: FC = () => {
    return (
        <div className="min-h-screen bg-white relative">
           
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/assets/images/background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.8'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10">
                {/* Navigation */}
                <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-black p-2 rounded">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <span className="text-xl font-bold">TechBot</span>
                    </div>
                    
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href}
                                    className={`${index === 0 ? 'text-gray-900' : 'text-gray-500'}`}
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to={ROUTES.REGISTER} className="text-gray-500 hover:text-gray-700">
                                Regístrate
                            </Link>
                            <Link
                                to={ROUTES.LOGIN}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <main className="max-w-7xl mx-auto px-4">
                    <div className="text-center py-20">
                        <h1 className="text-6xl font-bold mb-8">
                            La mejor orientación
                            <br />
                            automatizada para ti
                        </h1>
                        <Link
                            to={ROUTES.LOGIN}
                            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Pruébalo ahora
                        </Link>
                    </div>

                    {/* Features Section */}
                    <section className="py-20">
                        <h2 className="text-4xl font-bold mb-16">¿Qué ofrecemos?</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {featureCards.map((feature, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            {feature.icon}
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Landing;