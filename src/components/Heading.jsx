import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import '../styles/heading.css'
import SideBarMenu from "./atoms/SideBarMenu.jsx";
import CartButton from "./atoms/CartButton.jsx";
import SearchButton from "./atoms/SearchButton.jsx";


const itemsNav = [
    { id: 0, name: "Inicio", link: "#" },  
    { id: 1, name: "Colecciones", link: "#" },
    { id: 2, name: "Productos", link: "#" },
    { id: 3, name: "Regalos", link: "#" },
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

                </div>
                
                {/* Logo */}
                <div className="head-center">
                    <a href="" >
                        <img className="logo" src= "src\assets\images\CATQUIZ_Logo_Blanco.png" alt="logo CatQuiz" />
                    </a>
                </div>

                <div className="head-right">
                    <div className="head-right-OfButton">
                        <SearchButton 
                            colorBtn="white"
                            sizeBtn={20}
                        />
                    </div>
                    <a href="" className="head-right-login">
                        <FaUser
                            color="white"
                            title="Iniciar sesión"
                        />
                    </a>
                    <div className="head-right-OfButton" >
                        <CartButton 
                            colorBtn="white"
                            sizeBtn={20}
                        />
                    </div>
                </div>
                
            </div>
            <nav className="nav-bar">
                <ul>
                    {itemsNav.map((item) => (   
                        <li key={item.id}><a href="">{ item.name }</a></li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Heading