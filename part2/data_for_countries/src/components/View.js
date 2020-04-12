import React from 'react';
import Weather from './Weather';

const View = ({filteredCountry,weather}) =>(
    
    <>
        <h2>
            {filteredCountry.map(country => country.name)}
        </h2>
        <p>
            capital {filteredCountry.map(country => country.capital)}
        </p>
        <p>
            population {filteredCountry.map(country => country.population)}
        </p>
        <h2>
            languages
        </h2>
        <ul>
            {filteredCountry.map(country=>
            country.languages.map(
            language =>
            <li key = {language.name}>
              {language.name}
            </li>
        ))}
        </ul>
        <Weather filteredCountry={filteredCountry} weather = {weather}/>
    </>

)

export default View;