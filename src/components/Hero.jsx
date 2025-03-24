import "../styles/hero.css"
import ProductBox from "./ProductBox"
import Slider from "./slider"
import SwiperComponent from "./Swiper"

const Hero = () => {
    return (
        <div className="content">
            <h1>Bienvenido a la Tienda Online
                Balqis
            </h1>
            <p>Proximamente... 
            </p>

            {/* <Slider 
                imgSource="src\assets\f886ffb4-7ce1-4dc8-b611-05c8ee23ed1a.webp"
            /> */}
            <div className="swiper">
                <SwiperComponent 
                    imgSource= "src\assets\f886ffb4-7ce1-4dc8-b611-05c8ee23ed1a.webp"
                />
            </div>
            

            
            <div className="catalog">
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Playa"
                    price="$50"
                    imgPath= "src\assets\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
                <ProductBox
                    product="Anillo dorado Verano"
                    price="$100"
                    imgPath= "src\assets\da1028a6-9558-43d7-b599-26aad63cd362.webp"
                />
            </div>
            
        </div>
    )
}
export default Hero