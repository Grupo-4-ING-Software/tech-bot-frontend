import {FC} from 'react'
import NavBar from "../../components/nav-bar/NavBar"
import Banner from "./banner/Banner"
import Footer from '../../components/footer/Footer'
import Sections from './section/Sections'

const Landing: FC = () => {
    return (
        <div className="bg-landing-image bg-landing-primary bg-top bg-no-repeat text-landing-secondary font-landing">
            <NavBar />
            <Banner />
            <Sections />
            
            <Footer />
            
        </div>
    )
}

export default Landing;