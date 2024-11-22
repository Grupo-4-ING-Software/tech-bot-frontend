import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import bag from '../../../assets/icons/bag.svg'
import screen from '../../../assets/icons/screen.svg'
import star from '../../../assets/icons/star.svg'
import sun from '../../../assets/icons/sun.svg'

const Features = () => {
  return (
    <div className="px-10">
      <h2 className="text-6xl font-bold pb-6">¿Qué ofrecemos?</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper m-4"
      >
        <SwiperSlide>
          <div className="border rounded-lg bg-white min-h-[220px]">
            <img src={sun} className="bg-landing-primary p-2 m-4 rounded-md" />
            <h3 className="text-xl font-semibold mx-4 my-2">Acompañamiento 24/7</h3>
            <p className="text-gray-400 mx-4 mb-2 pb-6">Puede contar con nuestro producto a todas horas, todos los días</p>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="border rounded-lg bg-white min-h-[220px]">
            <img src={star} className="bg-landing-primary p-2 m-4 rounded-md" />
            <h3 className="text-xl font-semibold mx-4 my-2">Carreras especializadas</h3>
            <p className="text-gray-400 mx-4 mb-2 pb-6">Con un apoyo personalizado en las distintas áreas de especialización en desarrollo de software</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border rounded-lg bg-white min-h-[220px]">
            <img src={screen} className="bg-landing-primary p-2 m-4 rounded-md" />
            <h3 className="text-xl font-semibold mx-4 my-2">Historial de chats</h3>
            <p className="text-gray-400 mx-4 mb-2 pb-6">Almacena un registro con todas tus conversaciones para un mejor enfoque.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border rounded-lg bg-white min-h-[220px]">
            <img src={bag} className="bg-landing-primary p-2 m-4 rounded-md" />
            <h3 className="text-xl font-semibold mx-4 my-2">Sistema de recomendación</h3>
            <p className="text-gray-400 mx-4 mb-2 pb-6">Sugerencias a partir de tus preferencias, personalizado para cada usuario</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default Features;