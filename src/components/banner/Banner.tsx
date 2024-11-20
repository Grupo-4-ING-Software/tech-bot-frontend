import { FC } from 'react'
import bannerImg from "../../assets/banner.png"
import { Link } from 'react-router-dom'

const Banner: FC = () => {
    return (
        <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12">
            <div className="md:w-1/2 content-center">
                <h1 className="md:text-5xl text-2xl font-bold mb-7 ">La mejor orientación automatizada para ti</h1>

                <Link to="/login">
                    <button className="w-full flex flex-wrap gap-1 items-center justify-center bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Pruébalo ahora</button>
                </Link>

            </div>


        </div>
    )
}

export default Banner