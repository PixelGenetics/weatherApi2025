import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Clouds(){

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

    return(<>
        {weatherInfo && (
            <div>
                <p>Clouds: {(weatherInfo.clouds.all)}</p>
                <Link to="/"><button>Home</button></Link>
            </div>
        )}
    </>)
}

export default Clouds