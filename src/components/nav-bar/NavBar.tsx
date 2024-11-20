import { FC } from 'react'
import { VscMenu } from "react-icons/vsc";

import { HiOutlineHeart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import UserPicture from '../user-picture/UserPicture';


const NavBar: FC = () => {

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* Lado Izquierdo */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <VscMenu className="size-6" />
                    </Link>
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