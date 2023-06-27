import Header from "../Header";
import CenterContainer from "../Container";
import Footer from "../Footer";

import './TodayWeather.css'


const TodayWeather = ({ todayWeather, handleSubmit, handleValidation, formValue, formError , loading, noData}) => {
    return (
        <main className="StyledWeatherContainer">
            <Header formError={formError} handleSubmit={handleSubmit} handleValidation={handleValidation} formValue={formValue} />
            <CenterContainer todayWeather={todayWeather} loading={loading} noData={noData}/>
            <Footer todayWeather={todayWeather} loading={loading} noData={noData}/>
        </main>
    )
}

export default TodayWeather;