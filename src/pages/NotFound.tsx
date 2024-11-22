import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/utils/routes';
import logo from '../assets/icons/logo.svg'

const NotFound: FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/assets/images/background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.8'
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <div className="space-y-6 max-w-lg mx-auto">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <Link to={ROUTES.LANDING}>
                            <img src={logo} className="hover:shadow-sm"/>
                        </Link>
                    </div>

                    {/* Error Number */}
                    <h1 className="text-9xl font-bold text-black transparent bg-clip-text">
                        404
                    </h1>

                    {/* Message */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-black">
                            ¡Ups! Página no encontrada
                        </h2>
                        <p className="text-gray-600">
                            Lo sentimos, la página que estás buscando no existe o ha sido movida.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Link
                            to={ROUTES.LANDING}
                            className="px-8 py-3 bg-white text-black border-2 border-black rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            Volver al inicio
                        </Link>
                        <Link
                            to={ROUTES.APP.CHAT}
                            className="px-8 py-3 bg-black text-white rounded-xl hover:bg-opacity-90 transition-colors"
                        >
                            Ir al chat
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound; 