import Header from "../Header";
import "./FiveDaysWeather.css"
import FivedayContainer from "../FivedayContainer";


const FiveDaysWeather = ({ fivedayWeather, handleSubmit, handleValidation, formValue, formError , loading, noData}) => {
  return (
    <div className="StyledWeatherContainer">
        <Header formError={formError} handleSubmit={handleSubmit} handleValidation={handleValidation} formValue={formValue} />
        <FivedayContainer fivedayWeather={fivedayWeather} loading={loading} noData={noData}/>
    </div>
  )
}

export default FiveDaysWeather