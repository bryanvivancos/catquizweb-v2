import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css"

const Footer = () => {
    return (
        <div className="footer-component">
            <div className="left-footer"> 
                <h4 className="footer-item">
                    Ayuda
                </h4>
                <a href="#" className="footer-item">
                    Garantía
                </a>
                <a href="#" className="footer-item">
                    Acerca de nosotros
                </a>
                <a href="#" className="footer-item">
                    ¿Cómo comprar?
                </a>
                <a href="#" className="footer-item">
                    Recomendaciones de uso
                </a>
                <a href="#" className="footer-item">
                    Libro de Reclamaciones
                </a>
            </div>
            <div className="right-footer">
                <h4 className="footer-item">
                    Contáctanos
                </h4>
                <p className="footer-item">
                    Instagram <FaInstagram/>:  
                    <a href="https://instagram.com/catquiz.pe" className="footer-link"
                    target="_blank">                    
                    catquiz.pe
                    </a>
                </p>
                <p className="footer-item">
                    Whatsapp <FaWhatsapp />: 
                    <a href="#" 
                    className="footer-link" 
                    target="_blank">
                        Número de Whatsapp
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer