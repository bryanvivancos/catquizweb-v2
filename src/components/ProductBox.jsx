import { useState } from "react";
import '../styles/productBox.css';

const ProductBox = ({ product, price, imgPath }) => {

    const [cantidad, setCantidad] = useState(0);

    return (
        <div className="product-box">
            <img src={imgPath} alt={`product ${product}`}/>

            <div className="product-details">
                <h2>{product}</h2>

                <div className="product-pricexq">
                    <p>{price}</p>
                    <div className="product-quantity">
                        <button onClick={() => setCantidad(q => q===0 ? 0 : q - 1)}>
                            -
                        </button>
                        <p>{cantidad}</p>
                        <button onClick={() => setCantidad(q => q + 1)}>
                            +
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductBox;