
import React from 'react';


const Weather = ({filteredCountry,weather}) => {

    if (weather.current !== undefined ){
        return (
            <>
            <picture alt = 'pic'>
                <img src = {filteredCountry.map(country => country.flag)} alt = 'pic' height="42" width="42"/>
            </picture>
            <h2>
            Weather in {filteredCountry.map(country => country.name)}
            </h2>
            <p>
            <strong>temperature:</strong> {weather.current.temperature}
            </p>
            <div>
                {weather.current.weather_icons.map(icon =>
                    <picture key ={icon}  alt = 'pic'>
                        <img src = {icon} alt = 'pic' height="42" width="42"/>
                    </picture>  
                    )}
                
            </div>
            <p>
                <strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
            </p>
            </>
        )
    } else{
        return (<></>)
    }

}

export default Weather;