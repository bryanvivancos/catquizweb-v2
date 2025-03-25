import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import '../styles/swiper.css'


const SwiperComponent = ({ slides, isEnabled, classComponent, classImg, slidesPV, spaceBtwn }) => {
    console.log(slides)
    console.log("classComponent:", classComponent, "Type:", typeof classComponent);
    console.log("classImg:", classImg, "Type:", typeof classImg);

    return (
        <Swiper
            className={classComponent}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={spaceBtwn}
            slidesPerView={slidesPV}
            loop={true}
            navigation
            pagination={{ clickable: true }}  
            autoplay={{ delay: 5000, enabled: isEnabled }}
        >
            {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <a href="">
            <img src={slide.image} alt="imagen promos" className={classImg}/>
          </a>
        </SwiperSlide>
      ))}

        </Swiper>
    )    
}

export default SwiperComponent;