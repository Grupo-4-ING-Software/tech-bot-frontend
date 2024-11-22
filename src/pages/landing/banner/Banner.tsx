import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../shared/utils/routes'

const Banner: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl mx-auto 
                         bg-gradient-to-r from-black to-black bg-clip-text text-transparent
                         animate-fade-in">
                La mejor orientación automatizada para ti
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-600 animate-fade-in-delay">
                Descubre el camino perfecto para tu carrera en tecnología con ayuda de la IA
            </p>
            <Link 
                to={ROUTES.LOGIN}
                className="bg-black text-white font-bold py-4 px-10 rounded-xl
                         hover:bg-opacity-90 transition-all duration-300 transform
                         hover:scale-105 animate-fade-in-delay-2
                         shadow-lg hover:shadow-xl"
            >
                Pruébalo ahora
            </Link>
        </div>
    );
};


export default Banner