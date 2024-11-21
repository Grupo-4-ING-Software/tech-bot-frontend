import { FC } from 'react'
import { TbBolt } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import UserPicture from '../user-picture/UserPicture';


const NavBar: FC = () => {

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* Lado Izquierdo */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/" className="flex justify-start">
                        <TbBolt className="size-6 bg-landing-secondary px-2 py-2 mx-1 rounded-md" />
                        <h1 className="font-bold">Tech-Bot</h1>
                    </Link>
                </div>

                <div className="flex items-center md:gap-16 gap-4 bg-gray-200 px-6 py-4 mx-1 rounded-md text-gray-400 ">
                    <Link to="/" className="hover:text-black">Inicio</Link>
                    <Link to="/about-us" className="hover:text-black">Nosotros</Link>
                    <Link to="/how-it-works" className="hover:text-black">Cómo funciona</Link>
                    <Link to="/services" className="hover:text-black">Servicios</Link>
                </div>

                {/* Lado Derecho */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <UserPicture />

                    <button className="hidden sm:block">
                        <HiOutlineHeart className="size-6" />
                    </button>


                </div>
            </nav>
        </header>
    );
}

export default NavBar;