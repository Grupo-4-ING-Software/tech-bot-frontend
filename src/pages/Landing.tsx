import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Banner from './landing/banner/Banner';
import Footer from '../components/footer/Footer';
import Sections from './landing/section/Sections';
import NavBar from '../components/nav-bar/NavBar';
import { ROUTES } from '../shared/utils/routes';
import {useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Landing: FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Verifica si el usuario ya está autenticado
        const token = localStorage.getItem('access_token');
        if (token) {
          navigate(ROUTES.APP.CHAT);
        }
      }, [navigate]);

    return (
        <div className="min-h-screen bg-landing-image bg-landing-primary bg-top bg-no-repeat 
                      text-landing-secondary font-landing overflow-hidden">
            {/* NavBar */}
            <NavBar />

            {/* Hero Section with Swiper */}
            <section className="relative h-screen">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="h-full"
                >
                    <SwiperSlide>
                        <Banner />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full text-center px-4">
                            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                                Descubre tu camino tech
                            </h2>
                            <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
                                Encuentra la ruta perfecta para tu carrera en tecnología
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full text-center px-4">
                            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                                IA a tu servicio
                            </h2>
                            <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
                                Utiliza la inteligencia artificial para planificar tu desarrollo profesional
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* Main Content */}
            <main className="relative z-10">
                <Sections />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Landing;