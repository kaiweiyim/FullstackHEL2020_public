import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Filter from './Filter'
import Results from './Results'


const App = () =>{
  const [countries,setCountries] = useState([])
  const [findCountry, setFindCountry ] = useState([countries])
  const [filteredCountry, setFilteredCountries] = useState([])
  const [filteredLength, setFilteredLength] = useState(0)
  const [weather, setWeather] = useState([])

  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  useEffect(()=>{
    if (filteredCountry.length ===1) {
      axios
      .get('http://api.weatherstack.com/current?access_key='+api_key+'&query='+filteredCountry.map(country => country.capital)+')')
      .then(response => {
        setWeather(response.data)
      })}

  })

  const handleFind = (event) =>{
    setFindCountry(event.target.value)
    const filteredObj = 
      countries.filter(country=> country.name.includes(event.target.value))
    if (filteredObj.length === 0){
      setFilteredCountries([])
      setFilteredLength(0)
    }
    else if (filteredObj.length <=10) {
      setFilteredCountries(filteredObj)
      setFilteredLength(filteredObj.length)
      

    } else {
      setFilteredCountries([])
      setFilteredLength(-1)

    }
  }

  const clickHandle = (event) =>{
    const filteredObj = 
      countries.filter(country=> country.name === (event.target.value))
    setFilteredCountries(filteredObj)
    setFilteredLength(1)
    setFindCountry(event.target.value)

  }



  return (
    <>
      <Filter findCountry = {findCountry} handleFind = {handleFind}/>
      <Results filteredCountry = {filteredCountry} 
        filteredLength = {filteredLength} 
        clickHandle ={clickHandle}
        weather = {weather}/>
    </>

  )
}


export default App
