import {FC} from 'react'
import NavBar from "../components/nav-bar/NavBar"
import Banner from "../components/banner/Banner"

const Landing: FC = () => {
    return (
        <div>
            <NavBar />
            <Banner />
        </div>
    )
}

export default Landing;