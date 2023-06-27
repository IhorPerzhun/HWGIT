import './App.scss';
import TopButtons from '../TopButtons/TopButtons';
import Search from '../Search/Search';
import TimeAndLocation from '../TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from '../TemperatureAndDetails/TemperatureAndDetails';
import Forecast from '../Forecast/Forecast';
import getFormattedWeatherData from '../../ApiData/ApiData';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [query, setQuery] = useState({q: 'Kyiv'});
const [units, setUnits] = useState('metric');
const [weather, setWeather] = useState(null)

useEffect(()=>{
  const fetchWeather = async () =>{
    const message = query.q ? query.q : 'current location'

    toast.info('Fetching weather for ' + message);
    (await getFormattedWeatherData({...query,units}).then(
      (data) =>{
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`)
        setWeather(data);
      }
    ));
     
   };
   
   fetchWeather();
},[query,units]);

const formatBackground = () =>{
  if(!weather) return 'from-cyan-400 to-blue-200'
  const threshold = units === 'metric' ? 20 : 60
  if(weather.temp <= threshold) return 'from-cyan-400 to-blue-200'

  return 'from-yellow-700 to-orange-700'
}

  return (
    <div className="backgroundApp" >
      <div className={`containerr mx-auto   py-5 px-32 bg-gradient-to-br from-yellow-800 to-yellow-600 h-fit shadow-xl shadow-gray-600 ${formatBackground()}`}>
        <section className="title">
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="logo" />
            <p>with</p>
            <h1>Wind of change</h1>
        </section>
        <TopButtons className="defaultCity" setQuery={setQuery}/>
        <Search setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather && (
          <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather}/>
        <Forecast title='hourly forecast' items={weather.hourly}/>
        <Forecast className="pb-10" title='5 day forecast' items={weather.daily}/>
          </div>
        )}
        <ToastContainer autoClose={2000} theme='colored' newestOnTop={true}/>
     </div>
    </div>


  );
}

export default App;
