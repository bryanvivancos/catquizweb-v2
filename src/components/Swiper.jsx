import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

import '../styles/swiper.css'


const SwiperComponent = ({ slides }) => {
    return (
        <Swiper
            className='custom-swiper'
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}  
            autoplay= {{ delay: 5000 }}
        >

            {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <img className="swiper-img" src={slide.image} alt="imagen promos" />
                </SwiperSlide>
            ))}
        </Swiper>
    )

{/*             
            <SwiperSlide>
                <img className="swiper-img" src={imgSource} alt='imagen de ${imgSource}' />
            </SwiperSlide>
            <SwiperSlide>
                <img className="swiper-img" src={imgSource} alt='imagen de ${imgSource}' />
            </SwiperSlide>
            <SwiperSlide>
                <img className="swiper-img" src={imgSource} alt='imagen de ${imgSource}' />
            </SwiperSlide>
            <SwiperSlide>
                <img className="swiper-img" src={imgSource} alt='imagen de ${imgSource}' />
            </SwiperSlide> */}
        
    
}

export default SwiperComponent;