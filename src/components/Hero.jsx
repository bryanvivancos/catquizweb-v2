import "../styles/hero.css";
import ProductBox from "./ProductBox";
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

            <div className="catalog">
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\images\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Playa"
                    price="$50"
                    imgPath= "src\assets\images\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\images\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\images\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\images\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\images\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
            </div>
        </div>
    )
}
export default Hero