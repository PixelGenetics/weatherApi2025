import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    async function weather() {
      try{
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.135538&lon=-86.220340&appid=7b55880c3f0e1b8fe767a1eb5dd79f01');
        setWeatherData(res.data);
        console.log(res.data)
      }catch(error){
        console.log(error);
      }
    }
    weather();
  }, [])

  return (
    <>
      <div>
        {weatherData && (
          <div>
            <div>Temp: {(weatherData.main.temp - 273.15).toFixed(2)} °C</div>
            <div>Coord: {(weatherData.main.temp)}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
