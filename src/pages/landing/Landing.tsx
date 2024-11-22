import {FC} from 'react'
import NavBar from "../../components/nav-bar/NavBar"
import Banner from "../../components/banner/Banner"
import Footer from '../../components/footer/Footer'
import Features from './features/Features'

const Landing: FC = () => {
    return (
        <div className="bg-landing-primary text-landing-secondary">
            <NavBar />
            <Banner />
            <Features />
            <Footer />
            
        </div>
    )
}

export default Landing;