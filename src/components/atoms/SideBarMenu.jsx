import { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

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

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton /> 

                <Offcanvas.Body>
                    <ul style={ {listStyle: "none", padding: 0} }>
                        {items.map((item) => (   
                            <li style={ {margin: "15px 0"}}>
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

                    <div style={ {margin: "100px 0"} }>
                        <a href="" style={ {textDecoration: "none", color: "var(--rose-dark)", display: "flex", alignItems: "center", gap: "10px", margin: "15px 0"} }>
                            <FaSearch
                                color= "var(--rose-dark)"
                                title="Buscar"
                            />
                            Buscar
                        </a>
                        <a href=""  style={ {textDecoration: "none", color: "var(--rose-dark)", display: "flex", alignItems: "center", gap: "10px", margin: "15px 0"} }>
                            <FaUser
                                color= "var(--rose-dark)"
                                title="Iniciar sesión"
                            />
                            Iniciar Sesion
                        </a>
                        <a href="" style={ {textDecoration: "none", color: "var(--rose-dark)", display: "flex", alignItems: "center", gap: "10px", margin: "15px 0"} }>
                            <FaShoppingCart
                                color= "var(--rose-dark)"
                                title="Carrito de compras"    
                            />
                            Carrito
                        </a>
                    </div>
                </Offcanvas.Body>

            </Offcanvas>
        </div>
    )
}

export default SideBarMenu;