import "../styles/hero.css"
import ProductBox from "./ProductBox"
import SwiperComponent from "./Swiper"

// import slides from '../assets/mock.json'

slidesImgs = [
    {
        "image": "https://drive.google.com/file/d/1-Z0KmQMrd-5eCzoIulQyjRG5a0kJck5Y/view?usp=sharing"
    },
    {
        "image": "https://drive.google.com/file/d/1-Z0KmQMrd-5eCzoIulQyjRG5a0kJck5Y/view?usp=sharing"
    }
]

const Hero = () => {
    return (
        <div className="content">
            <h1>Bienvenido a la Tienda Online
            </h1>
            <p>Proximamente... 
            </p>

            <SwiperComponent 
                slides= {slidesImgs}
            />

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