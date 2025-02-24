import axios from 'axios';
import {useEffect, useState } from 'react';
import OIP from '../assets/OIP.jpg'
// import { Link } from 'react-router-dom';

function Home(){
    const [weatherData, setWeatherData] = useState('');
    const [weatherDataArreglo, setWeatherDataArreglo] = useState([]);

    const [imgBackground, setImgBackground] = useState('');

  useEffect(() => {
    async function weather() {
      try{
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=55.75222000&lon=37.61556000&units=metric&appid=7b55880c3f0e1b8fe767a1eb5dd79f01');
        setWeatherData(res.data);
        console.log(res.data.weather[0].main)
        setWeatherDataArreglo(res.data.weather[0].main)
        console.log('dasd',res.data)
        if(res.data.weather[0].main == 'Clouds'){
            // console.log('if 1')
            setImgBackground(OIP)
        }else{
            console.log('else')
        }

      }catch(error){
        console.log(error);
      }
    }
    weather();
  }, [weatherDataArreglo])

  return (
    <>
      <div className='container'>
        {weatherData && (
          //agregar imagen de nubes a weather dentro de la etiqueta
          //<p id='weather' img='imagen de nube'>Weather: {weatherData.weather[0].main}</p>
          <div className='body_container'>
            <div className='body_weather'>
            <div id='statusImage' style={{backgroundImage: imgBackground ? `url(${imgBackground})` : 'none'
              }}>
            </div>
              <p id='weather'>Weather: {weatherData.weather[0].description}</p>            
            </div>
            
            <p id='temp'>Temp: {weatherData.main.temp} °C</p>
            <p id='coord'>Coord: {(weatherData.coord.lon)} {(weatherData.coord.lat)}</p>
            <p id='windSpeed'>Wind speed: {(weatherData.wind.speed)} km/h</p>
            <p id='country'>Country: {weatherData.sys.country}</p>

          </div>
        )}
      </div>
    </>
  )
}

export default Home