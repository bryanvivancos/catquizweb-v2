import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="header">
            <div >
                {/* Icono de búsqueda */}
                <div className="head">
                    <div className="head-left">
                        <FaBars />
                    </div>

                    {/* Logo */}
                    <div className="head-center">
                        <a href="">
                        <img className="logo" src= "src\assets\images\CATQUIZ_Logo_Blanco.png" alt="logo CatQuiz" />
                        </a>
                    </div>

                    {/* Iconos de usuario y carrito */}
                    <div className="head-right">
                        <FaSearch/>
                        <FaUser/>
                        <FaShoppingCart/>
                    </div>

                </div>
            </div>
            <nav className="navbar">
                <a href="">
                    <p>Inicio</p>
                </a>
                <a href="">
                    <p>Colecciones</p>
                </a>
                <a href="">
                    <p>Productos</p>
                </a>
                <a href="">
                    <p>Regalos</p>
                </a>
            </nav>
        </div>
    )
}

export default Navbar