import ClipLoader from "react-spinners/ClipLoader";
import NotFound from "../../assets/images/not-found.png";

import './Container.css'

const CenterContainer = ({ todayWeather, loading, noData }) => {
    return (
        <>
            {loading ?<ClipLoader
                className="loader"
                color="black"
                loading={loading}
                size={190}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : noData ?           <section className="CenterContainerBlock"><img src={NotFound} alt="" aria-hidden="true"/> <p>No such country found! Please try again </p></section> :
                <section className="CenterContainerBlock">
                    <section>
                        <h2 className="city">{todayWeather.name}, {todayWeather.country}</h2>
                        <p className="Temperature">{todayWeather.temp}&deg;</p>
                        <p className="WeatherDesc">{todayWeather.weatherDesc}</p>
                    </section>
                    <section className="HighLow">
                        <p>H: {todayWeather.highest}&deg;</p>
                        <p>L: {todayWeather.lowest}&deg;</p>
                    </section>
                </section>}
        </>
    )
}

export default CenterContainer;