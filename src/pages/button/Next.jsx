import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

function Next(){

    const [weatherInfo,setWeatherInfo] = useState('');
    useEffect(() => {
        async function weather(){
            try{
                const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.135538&lon=-86.220340&appid=7b55880c3f0e1b8fe767a1eb5dd79f01');
                setWeatherInfo(res.data);
                console.log('dentro de next',res.data);
            }catch(error){
                console.log(error);
            }
        }
        weather();
    }, [])

    return(
        <>
        {weatherInfo && (
            <div>
                <p>Lat: {(weatherInfo.coord.lat)}</p>
                <p>Long: {(weatherInfo.coord.lon)}</p>
            </div>
        )}
        <Link to="/"><button>Home</button></Link>
        <Link to="/clouds"> <button>Clouds</button></Link>
        </>
    )

}

export default Next