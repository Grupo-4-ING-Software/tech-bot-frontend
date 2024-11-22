import { FC } from 'react'
import footerLogo from '../../assets/icons/footer-logo.png'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer: FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-4">
            {/* Top Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left Side - Logo and Nav */}
                <div className="md:w-1/2 w-full">
                    <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
                    <ul className="flex flex-col md:flex-row gap-4">
                        <li><a href="#home" className="hover:text-primary">Inicio</a></li>
                        <li><a href="#us" className="hover:text-primary">Nosotros</a></li>
                        <li><a href="#how-it-works" className="hover:text-primary">Cómo funciona</a></li>
                        <li><a href="#services" className="hover:text-primary">Servicios</a></li>
                    </ul>
                </div>

                {/* Right Side - Newsletter */}
                <div className="md:w-1/2 w-full">
                    <p className="mb-4">
                        ¡Suscríbete a nuestra boletín de noticiar para recibir nuestras últimas actualizaciones!
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            className="w-full px-4 py-2 rounded-l-md text-black"
                        />
                        <button className="bg-blue px-6 py-2 rounded-r-md hover:bg-opacity-90">
                            Suscribirse
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
                {/* Left Side - Privacy Links */}
                <ul className="flex gap-6 mb-4 md:mb-0">
                    <li><a href="#privacy" className="hover:text-primary">Políticas de privacidad</a></li>
                    <li><a href="#terms" className="hover:text-primary">Términos y condiciones</a></li>
                </ul>

                {/* Right Side - Social Icons */}
                <div className="flex gap-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer