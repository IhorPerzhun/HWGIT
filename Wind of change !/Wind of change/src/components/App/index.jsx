
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultWeather, clouds, rain, clear, thunderstorm, snow, drizzle, mist, smoke, fog, haze } from "../../Theme/Themes.weathers";
import { Analytics } from '@vercel/analytics/react';
import TodayWeather from "../TodayWeather";
import FiveDaysWeather from "../FiveDaysWeather";

function App() {

  const [todayWeather, setTodayWeather] = useState({ name: "", country: "", temp: "", icon: "03d", weather: "", weatherDesc: "", feelsLike: "", humidity: "", wind: "", highest: "", lowest: "" });
  const [fivedayWeather, setFivedayWeather] = useState({ name: "", country: "", temp: "", icon: "03d", weather: "", weatherDesc: "", feelsLike: "", humidity: "", wind: "", highest: "", lowest: "" });
  const [searchedLocation, setSearchedLocation] = useState("Kyiv");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [theme, setTheme] = useState('clear');
  const [loading, setLoading] = useState("");
  const [formValue, setFormValue] = useState({ searchedLocation: "" });
  const [formError, setFormError] = useState({});
  const [noData, setNoData] = useState(false);
  
  const handleSubmit = (e) => {

    e.preventDefault();
    setFormError(validateForm(formValue));
    // setSubmit(true);
    setSearchedLocation(formValue.searchedLocation);
    setFormValue({ searchedLocation: "" });
  }
  const handleValidation = async (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {};
    if (!value.searchedLocation) {
      errors.searchedLocation = "Please enter a city name"
    }
    return errors;
  }

  const API_KEY = "aa3b70851ff3cfaab595923162142fe3"

  const setWeather = theme === "rain" ? rain : theme === "clouds" ? clouds : theme === "clear" ? clear : theme === "thunderstorm" ? thunderstorm : theme === "snow" ? snow : theme === "drizzle" ? drizzle : theme === "mist" ? mist : theme === "smoke" ? smoke : theme === "haze" ? haze : theme === "fog" ? fog : defaultWeather;

  //GEODATA

  useEffect(() => {
    setLoading(true);
    setNoData(false);
    
    const fetchGeodata = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${API_KEY}`);
        const data = await response.json();

        setLat(data[0]?.lat);
        setLon(data[0]?.lon);
        setSearchDone(true);

        fetchTodayWeather(prev => { return { ...prev, name: data[0]?.local_names?.en, country: data[0]?.country } })
        fetchFivedayWeather(prev => { return { ...prev, name: data[0]?.local_names?.en, country: data[0]?.country } })

      } catch(err)  {
        console.log(err.message);
      }
    }

    fetchGeodata();

  }, [searchedLocation]);

  const fetchTodayWeather = async ({ lat, lon }) => {
    if (searchDone) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        
        setTodayWeather({ ...todayWeather,  temp: Math.ceil(data?.main?.temp), icon: data.weather[0].icon, weather: data.weather[0].main.toLowerCase(), weatherDesc: data.weather[0].description, feelsLike: data.main.feels_like, humidity: data.main.humidity, wind: data.wind.speed, highest: data.main.temp_max, lowest: data.main.temp_min });
        setLoading(false);
      } catch (err)  {
        setLoading(false);
        setNoData(true);
        console.log(err.message, "error");
      }
    }
    const toggleTheme = () => {
      if (todayWeather.weather === '' || todayWeather.weather === 'clear') {
        setTheme('default');
      }else if (todayWeather.weather === 'rain') {
        setTheme('rain');
      }else if (todayWeather.weather === 'thunderstorm') {
        setTheme('thunderstorm');
      }else if (todayWeather.weather === 'drizzle') {
        setTheme('drizzle');
      }else if (todayWeather.weather === 'mist' || todayWeather.weather === 'fog') {
        setTheme('mist');
      }else if (todayWeather.weather === 'haze') {
        setTheme('haze');
      }else if (todayWeather.weather === 'snow') {
        setTheme('snow');
      }else if (todayWeather.weather === 'smoke') {
        setTheme('smoke');
      }else if (todayWeather.weather === 'clouds') {
        setTheme('clouds');
      }else {
        setTheme('default');
      }
    }

    toggleTheme();
    return () => setSearchDone(false);

  };


  const fetchFivedayWeather = async ({ lat, lon }) => {
    if (searchDone) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        
        setFivedayWeather({ ...fivedayWeather,  temp: Math.ceil(data?.main?.temp), icon: data.weather[0].icon, weather: data.weather[0].main.toLowerCase(), weatherDesc: data.weather[0].description, feelsLike: data.main.feels_like, humidity: data.main.humidity, wind: data.wind.speed, highest: data.main.temp_max, lowest: data.main.temp_min });

        setLoading(false);
      } catch (err)  {
        setLoading(false);
        setNoData(true);
        console.log(err.message, "error");
      }
    }
    const toggleTheme = () => {
      if (fivedayWeather.weather === '' || fivedayWeather.weather === 'clear') {
        setTheme('default');
      }else if (fivedayWeather.weather === 'rain') {
        setTheme('rain');
      }else if (fivedayWeather.weather === 'thunderstorm') {
        setTheme('thunderstorm');
      }else if (fivedayWeather.weather === 'drizzle') {
        setTheme('drizzle');
      }else if (fivedayWeather.weather === 'mist' || fivedayWeather.weather === 'fog') {
        setTheme('mist');
      }else if (fivedayWeather.weather === 'haze') {
        setTheme('haze');
      }else if (fivedayWeather.weather === 'snow') {
        setTheme('snow');
      }else if (fivedayWeather.weather === 'smoke') {
        setTheme('smoke');
      }else if (fivedayWeather.weather === 'clouds') {
        setTheme('clouds');
      }else {
        setTheme('default');
      }
    }

    toggleTheme();
    return () => setSearchDone(false);

  };

  






  return (
    <ThemeProvider theme={setWeather}>
     <BrowserRouter>
     <Analytics />
       <Routes>
          <Route path="/" element={<TodayWeather noData={noData} loading={loading} formError={formError} formValue={formValue} todayWeather={todayWeather} handleSubmit={handleSubmit} handleValidation={handleValidation} />} />
          <Route path="fiveday" element={<FiveDaysWeather noData={noData} loading={loading} formError={formError} formValue={formValue} fivedayWeather={fivedayWeather} handleSubmit={handleSubmit} handleValidation={handleValidation} />} />
        </Routes>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;



{/*
  useEffect(() => {
    setLoading(true);
    setNoData(false);
    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setLat(data[0]?.lat);
        setLon(data[0]?.lon);
        setSearchDone(true);
        setTodayWeather(prev => { return { ...prev, name: data[0]?.local_names?.en, country: data[0]?.country } })
       
      }).catch((err) => {
        console.log(err.message);
      });

  }, [searchedLocation]);

  const setWeather = theme === "rain" ? rain : theme === "clouds" ? clouds : theme === "clear" ? clear : theme === "thunderstorm" ? thunderstorm : theme === "snow" ? snow : theme === "drizzle" ? drizzle : theme === "mist" ? mist : theme === "smoke" ? smoke : theme === "haze" ? haze : theme === "fog" ? fog : defaultWeather;

  useEffect(() => {
    if (searchDone) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
          setTodayWeather({ ...todayWeather,  temp: Math.ceil(data?.main?.temp), icon: data.weather[0].icon, weather: data.weather[0].main.toLowerCase(), weatherDesc: data.weather[0].description, feelsLike: data.main.feels_like, humidity: data.main.humidity, wind: data.wind.speed, highest: data.main.temp_max, lowest: data.main.temp_min });
          setFivedayWeather({ ...todayWeather,  temp: Math.ceil(data?.main?.temp), icon: data.weather[0].icon, weather: data.weather[0].main.toLowerCase(), weatherDesc: data.weather[0].description, feelsLike: data.main.feels_like, humidity: data.main.humidity, wind: data.wind.speed, highest: data.main.temp_max, lowest: data.main.temp_min });
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setNoData(true);
          console.log(err.message, "error");
        });
    }
    const toggleTheme = () => {
      if (todayWeather.weather === '' || todayWeather.weather === 'clear') {
        setTheme('default');
      }else if (todayWeather.weather === 'rain') {
        setTheme('rain');
      }else if (todayWeather.weather === 'thunderstorm') {
        setTheme('thunderstorm');
      }else if (todayWeather.weather === 'drizzle') {
        setTheme('drizzle');
      }else if (todayWeather.weather === 'mist' || todayWeather.weather === 'fog') {
        setTheme('mist');
      }else if (todayWeather.weather === 'haze') {
        setTheme('haze');
      }else if (todayWeather.weather === 'snow') {
        setTheme('snow');
      }else if (todayWeather.weather === 'smoke') {
        setTheme('smoke');
      }else if (todayWeather.weather === 'clouds') {
        setTheme('clouds');
      }else {
        setTheme('default');
      }
    }

    toggleTheme();
    return () => setSearchDone(false);

  }, [todayWeather,searchedLocation,searchDone, lat, lon]);


  useEffect(() => {
    if (searchDone) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
          setFivedayWeather({ ...fivedayWeather,  temp: Math.ceil(data?.main?.temp), icon: data.weather[0].icon, weather: data.weather[0].main.toLowerCase(), weatherDesc: data.weather[0].description, feelsLike: data.main.feels_like, humidity: data.main.humidity, wind: data.wind.speed, highest: data.main.temp_max, lowest: data.main.temp_min });
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setNoData(true);
          console.log(err.message, "error");
        });
    }
    const toggleTheme = () => {
      if (fivedayWeather.weather === '' || fivedayWeather.weather === 'clear') {
        setTheme('default');
      }else if (fivedayWeather.weather === 'rain') {
        setTheme('rain');
      }else if (fivedayWeather.weather === 'thunderstorm') {
        setTheme('thunderstorm');
      }else if (fivedayWeather.weather === 'drizzle') {
        setTheme('drizzle');
      }else if (fivedayWeather.weather === 'mist' || fivedayWeather.weather === 'fog') {
        setTheme('mist');
      }else if (fivedayWeather.weather === 'haze') {
        setTheme('haze');
      }else if (fivedayWeather.weather === 'snow') {
        setTheme('snow');
      }else if (fivedayWeather.weather === 'smoke') {
        setTheme('smoke');
      }else if (fivedayWeather.weather === 'clouds') {
        setTheme('clouds');
      }else {
        setTheme('default');
      }
    }

    toggleTheme();
    return () => setSearchDone(false);

  }, [fivedayWeather,searchedLocation,searchDone, lat, lon]);
*/}