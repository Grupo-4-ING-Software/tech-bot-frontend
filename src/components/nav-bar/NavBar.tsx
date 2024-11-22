import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/routes';
import useSmallScreenSize from '../../hooks/small-screen-size/useSmallScreenSize';
import logo from '../../assets/icons/logo.svg';

const NAV_ITEMS = [
    { label: 'Inicio', href: '#home' },
    { label: 'Nosotros', href: '#about-us' },
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Servicios', href: '#services' },
];

const NavBar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isSmallScreen = useSmallScreenSize();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : ''
            }`}>
            <nav className="max-w-screen-2xl mx-auto px-6 py-4">
                <div className="flex justify-center items-center relative">
                    {/* Logo (Left) */}
                    <div className="absolute left-0">
                        <Link to={ROUTES.LANDING} className="flex items-center gap-2">
                            <img src={logo} alt="TechBot Logo" className="h-6" />
                        </Link>
                    </div>

                    {/* Desktop Navigation (Center) */}
                    {!isSmallScreen && (
                        <div className="flex items-center">
                            {/* Navigation Links in White Container */}
                            <div className="bg-white px-8 py-3 rounded-2xl flex items-center gap-8">
                                {NAV_ITEMS.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-gray-500 hover:text-black transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Auth Buttons (Right) */}
                    {!isSmallScreen && (
                        <div className="absolute right-0 flex items-center gap-4">
                            <Link
                                to={ROUTES.REGISTER}
                                className="text-gray-400 hover:text-black transition-colors"
                            >
                                Regístrate
                            </Link>
                            <Link
                                to={ROUTES.LOGIN}
                                className="bg-blue text-white px-6 py-2 rounded-lg
                                         hover:bg-opacity-90 transition-all duration-300"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    {isSmallScreen && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="absolute right-0 text-gray-500 hover:text-black transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}
                {isSmallScreen && isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg">
                        <div className="flex flex-col p-4 space-y-4">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-500 hover:text-black transition-colors text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-4 space-y-3 border-t">
                                <Link
                                    to={ROUTES.REGISTER}
                                    className="block text-gray-400 hover:text-black transition-colors text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Regístrate
                                </Link>
                                <Link
                                    to={ROUTES.LOGIN}
                                    className="block bg-blue text-white py-2 px-4 rounded-lg
                                             text-center hover:bg-opacity-90 transition-all duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Iniciar sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default NavBar;