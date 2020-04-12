import React from 'react';
import Button from './Button';
import View from './View';


const Results = ({filteredCountry,filteredLength,clickHandle,weather}) => {

    if (filteredLength === -1){
      return (
      <p>
        Too many matches, specify another filter
      </p>)
    }
    else if (filteredLength === 0){
      return (
        <p>
        </p>
      )
  
    }
    else if (filteredLength === 1){
      return (
        <View filteredCountry = {filteredCountry} weather = {weather}/>
      )
    }
    else {
      return (
      <ul>
        {filteredCountry.map(country =>
        <li key = {country.name}>
          {country.name} <Button name = {country.name} clickHandle ={clickHandle}/>
        </li>
        )}
      </ul>
      )
    }
  }

export default Results;