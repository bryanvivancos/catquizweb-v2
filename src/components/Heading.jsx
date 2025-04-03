import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import '../styles/heading.css'
import SideBarMenu from "./atoms/SideBarMenu.jsx";


const itemsNav = [
    { name: "Inicio", link: "#" },  
    { name: "Colecciones", link: "#" },
    { name: "Productos", link: "#" },
    { name: "Regalos", link: "#" },
];

const Heading = () => {
    return (
        <div className="header">
            <div className="head">
                <div className="head-left">
                    {/* <SideBarMenu /> */}

                    <SideBarMenu
                        items={itemsNav}
                    >
                        <FaBars 
                            color="white"
                            title="Menu"
                        />
                    </SideBarMenu>


                    {/* <a  href=""> 
                        <FaBars 
                            color="white"
                            title="Menu"
                        />
                    </a> */}
                </div>
                
                {/* Logo */}
                <a href="" className="head-center">
                    <img className="logo" src= "src\assets\images\CATQUIZ_Logo_Blanco.png" alt="logo CatQuiz" />
                </a>

                <div className="head-right">
                    <a href="" className="head-right-search">
                        <FaSearch
                            color="white"
                            title="Buscar"
                        />
                    </a>
                    <a href="" className="head-right-login">
                        <FaUser
                            color="white"
                            title="Iniciar sesión"
                        />
                    </a>
                    <a href="" className="head-right-cart">
                        <FaShoppingCart
                            color="white"
                            title="Carrito de compras"    
                        />
                    </a>
                </div>
                
            </div>
            <nav className="nav-bar">
                <ul>
                    {itemsNav.map((item) => (   
                        <li><a href="">{ item.name }</a></li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Heading