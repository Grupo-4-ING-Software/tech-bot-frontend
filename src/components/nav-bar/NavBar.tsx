import { FC } from 'react'
import { Link } from 'react-router-dom';
import useSmallScreenSize from '../../hooks/small-screen-size/useSmallScreenSize';

import logo from '../../assets/icons/logo.svg'


const NavBar: FC = () => {
    const isSmallScreen = useSmallScreenSize();

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex flex-wrap justify-between items-center">
                {/* Lado Izquierdo */}
                <div className="flex items-center md:gap-16 gap-4 text-3xl">
                    <Link to="/" className="flex justify-start">
                        <img src={logo}/>
                    </Link>
                </div>

                {/* Centro */}
                {
                    isSmallScreen ?
                        (/*  Displays pequeños */
                            <>
                                {/* Centro */}
                                <div></div>
                                {/* Lado Derecho */}
                                <div></div>
                            </>
                        )
                        :
                        (/*  Otros displays */
                            <>
                                {/* Centro */}
                                <div className="flex items-center md:gap-16 gap-4 bg-gray-200 px-8 py-4 mx-1 rounded-2xl text-gray-400 font-semibold">
                                    <Link to="/" className="hover:text-black">Inicio</Link>
                                    <Link to="/about-us" className="hover:text-black">Nosotros</Link>
                                    <Link to="/how-it-works" className="hover:text-black">Cómo funciona</Link>
                                    <Link to="/services" className="hover:text-black">Servicios</Link>
                                </div>
                                {/* Lado Derecho */}
                                <div className="relative flex items-center md:space-x-3 space-x-2">
                                    <Link to="/register" className="text-gray-400 hover:text-black">Regístrate</Link>
                                    <Link to="/login" className="text-white rounded-lg bg-blue py-2 px-4 hover:text-gray-400">Iniciar sesión</Link>
                                </div>
                            </>
                        )
                }
            </nav>
        </header>
    );
};

export default NavBar;