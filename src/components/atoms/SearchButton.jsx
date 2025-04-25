import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const SearchButton = ( {text, colorBtn, sizeBtn} ) => {
    const [showCart, setShowCart] = useState(false);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    console.log("show", showCart)
    console.log("handleClose", handleCloseCart)
    console.log("handleShow", handleShowCart)

    return  (
        <>  
            <Button variant="none" onClick={handleShowCart} style={{padding: 0}}>
                <FaSearch color={colorBtn} title="Busqueda" size={sizeBtn}/>
                {text}
            </Button>
                
            <Offcanvas show={showCart} onHide={handleCloseCart} placement='top'>
                <Offcanvas.Header closeButton /> 
                <Offcanvas.Body style={{ color: "var(--rose-dark)" }}>
                    <h2>Ingresa tu busqueda</h2>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SearchButton;