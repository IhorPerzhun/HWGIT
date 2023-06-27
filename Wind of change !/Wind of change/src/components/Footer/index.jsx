import FeelsLike from "../../assets/images/weatherobjects/feels.png";
import Wind from "../../assets/images/weatherobjects/wind.png";
import Humidity from "../../assets/images/weatherobjects/humidity.png";


import './Footer.css'



const Footer = ({ todayWeather, loading, noData }) => {
    return (
        <>
            {loading || noData ? <section className="FooterBlock">{null}</section> : 
                <section className="FooterBlock">
                    <section className="DataSection">
                        <img className="Image" src={FeelsLike} alt="" aria-hidden="true" />
                        <h2>Feels like</h2>
                        <p>{todayWeather.feelsLike}&#8451;</p>
                    </section>
                    <section className="DataSection">
                        <img className="Image" src={Humidity} alt="" aria-hidden="true" />
                        <h2>Humidity</h2>
                        <p>{todayWeather.humidity}%</p>
                    </section>
                    <section className="DataSection">
                        <img className="Image" src={Wind} alt="" aria-hidden="true" />
                        <h2>Wind</h2>
                        <p>{todayWeather.wind} km/h</p>
                    </section>
                </section>
            }
        </>
    )
}

export default Footer;