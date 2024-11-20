import {FC} from 'react'
import NavBar from "../components/nav-bar/NavBar"
import Banner from "../components/banner/Banner"
import Footer from '../components/footer/Footer'

const Landing: FC = () => {
    return (
        <div className="bg-background-landing text-landing-secondary">
            <NavBar />
            <Banner />
            <Footer />
        </div>
    )
}

export default Landing;