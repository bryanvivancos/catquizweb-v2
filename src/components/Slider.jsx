import "../styles/slider.css"

const Slider = ({imgSource}) => {
    return (
        <div className="wrapper">
            <ul className="slider-list">
                <li className="slider-item">
                    <a href="" className="slider-link">
                        <img className="slider-img" src={imgSource} alt="imagen slider" />
                    </a>
                </li>
                <li className="slider-item">
                    <a href="" className="slider-link">
                        <img className="slider-img" src={imgSource} alt="imagen slider" />
                    </a>
                </li>
                <li className="slider-item">
                    <a href="" className="slider-link">
                        <img className="slider-img" src={imgSource} alt="imagen slider" />
                    </a>
                </li>
                <li className="slider-item">
                    <a href="" className="slider-link">
                        <img className="slider-img" src={imgSource} alt="imagen slider" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Slider