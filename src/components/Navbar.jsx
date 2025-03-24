import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="header">
            {/* Icono de búsqueda */}
            <div className="navbar">
                <div className="nav-left">
                    <FaBars />
                </div>

                {/* Logo */}
                <div className="nav-center">
                    <a href="">
                    <img className="logo" src= "src\assets\CATQUIZ_Logo_Blanco.png" alt="logo CatQuiz" />
                    </a>
                </div>

                {/* Iconos de usuario y carrito */}
                <div className="nav-right">
                    <FaSearch/>
                    <FaUser/>
                    <FaShoppingCart/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar