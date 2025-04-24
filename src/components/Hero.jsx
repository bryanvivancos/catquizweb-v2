import "../styles/hero.css";
import SwiperComponent from "./atoms/Swiper";
import slides from '../assets/slides-promos.json';
import slideCategory from '../assets/slides-category.json';

const Hero = () => {
    return (
        <div className="content">

            <SwiperComponent 
                slides={slides}
                isEnabled={true}
                classComponent="custom-swiper"
                classImg='swiper-img'
                slidesPV="auto"
                spaceBtwn={50}
            />

            <h2>Tendencias</h2>

            <SwiperComponent
                slides={slideCategory}
                isEnabled={false}
                classComponent="custom-swiper-categories"
                classImg='swiper-img-categories'
                slidesPV= {5}
                spaceBtwn={150}
            />

            
        </div>
    )
}
export default Hero