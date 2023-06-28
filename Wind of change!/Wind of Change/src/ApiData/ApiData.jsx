import { DateTime } from "luxon";

const API_KEY = '0733a9a36ed76b4d2bc109a42a04b414';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

//дані  з API
const getGeoData = (infoType, searchParams) =>{
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url).then((res) => res.json())
};

//формат поточної погоди
const formatCurrentWeather = (data) =>{
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys:{country, sunrise, sunset},
        weather,
        wind:{speed}
    } = data;

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt,country, sunrise,
         sunset, details, icon, speed}
};

//формат  погоди на 5 днів
const formatForecastWeather = (data) =>{
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map(d=>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1,6).map(d=>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });

    return {daily,hourly,timezone};
}


const getFormattedWeatherData = async (searchParams) => {
   //current 
    const formattedCurrentWeather = await getGeoData('weather',searchParams)
    .then(formatCurrentWeather)

    const {lat,lon} = formattedCurrentWeather
    //5 days
    const formattedForecastWeather = await getGeoData('onecall',{
        lat, lon, exclude: 'current, minutely, alerts', units: searchParams.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const formatToLocalTime = (secs,zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;
export {formatToLocalTime, iconUrlFromCode};
