import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Icono de búsqueda */}
            <div className="nav-left">
                <FaSearch />
            </div>

            {/* Logo */}
            <div className="nav-center">
                <img className="logo" src= "src\assets\CATQUIZ_Logo_Blanco.png" alt="logo CatQuiz" />
            </div>

            {/* Iconos de usuario y carrito */}
            <div className="nav-right">
                <FaUser />
                <FaShoppingCart />
            </div>
        </nav>
    )
}

export default Navbar