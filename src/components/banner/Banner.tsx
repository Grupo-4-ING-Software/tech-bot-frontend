import { FC } from 'react'
import { Link } from 'react-router-dom'

const Banner: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-7xl w-auto md:text-6xl font-bold mb-7 pb-6 max-w-xl">
                    La mejor orientación automatizada para ti
                </h1>
                <Link to="/login">
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                        Pruébalo ahora
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default Banner