import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CartButton = ( {text, colorBtn, sizeBtn} ) => {
    const [showCart, setShowCart] = useState(false);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    console.log("show", showCart)
    console.log("handleClose", handleCloseCart)
    console.log("handleShow", handleShowCart)

    return  (
        <>  
            <Button variant="none" onClick={handleShowCart} style={{padding: 0}}>
                <FaShoppingCart color={colorBtn} title="Carrito de compras" size={sizeBtn}/>
                {text}
            </Button>
                
            <Offcanvas show={showCart} onHide={handleCloseCart} placement='end'>
                <Offcanvas.Header closeButton /> 
                <Offcanvas.Body style={{ color: "var(--rose-dark)" }}>
                    <h2>Carrito de Compras</h2>
                    <p>Aquí puedes ver los productos que has agregado a tu carrito.</p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartButton;