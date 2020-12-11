import React from 'react'
import { useState} from 'react';
import WetherResults from './WeatherResults'
import axios from 'axios';

function Weather () {
    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState(null);
    const handleSubmit = (e) => {
       e.preventDefault()
       let url =`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
       axios.get(url)
       .then(result => {
           setWeather(result.data)
       }).catch((err)=>{console.log(err)});
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Find weather in your area in the United States</h1>
                <lavbe htmlFor="zip">zipCode</lavbe>
                <input type="text" name="zip" id="zip" onChange={(e => setZip(e.target.value))} />
                <input type="submit" value="findWeather" /> 
            </form>


        </div>
    )
}

export default Weather;