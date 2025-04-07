import { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartButton from "./CartButton";

import "../../styles/sideBarMenu.css"

const SideBarMenu = ( {children, items} ) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        import("bootstrap/dist/css/bootstrap.min.css");
    }, []);

    console.log("show", show)
    console.log("handleClose", handleClose)
    console.log("handleShow", handleShow)

    return (
        <div>
            <Button variant="none"  onClick={handleShow}>
                {children}
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='start' >
                <Offcanvas.Header closeButton /> 

                <Offcanvas.Body>
                    <ul style={ {listStyle: "none", padding: 0} }>
                        {items.map((item) => (   
                            <li key={item.id} style={ {margin: "15px 0"}}>
                                <a 
                                href="" 
                                style= { {textDecoration: "none", color: "var(--rose-dark)"} }
                                >
                                    { item.name }
                                </a>
                            </li>
                            )
                        )}
                    </ul>

                    <div className="sideBar-HeadItems">
                        <a href="" >
                            <FaUser
                                color= "var(--rose-dark)"
                                title="Iniciar sesión"
                            />
                            Iniciar Sesion
                        </a>
                        <div>
                            <CartButton
                                text= "Carrito de Compras"
                                colorBtn= "var(--rose-dark)"
                                sizeBtn={15}
                            />
                        </div>

                    </div>
                </Offcanvas.Body>

            </Offcanvas>
        </div>
    )
}

export default SideBarMenu;