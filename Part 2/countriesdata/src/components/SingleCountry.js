import axios from "axios";
import React, { useState, useEffect } from "react";

export const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
    .then(res => setWeather(res.data.current))
  },[country.capital])

  console.log(weather)
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h4>Spoken languages</h4>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt="countryflag"
        width="200px"
        height="200px"
      ></img>
      <h4>Weather in {country.capital}</h4>
      <p><strong>temperature: </strong>{weather.temperature} Celcius</p>
      <img src={weather.weather_icons} alt='weather-icon'></img>
      <p><strong>wind: </strong>{weather.wind_speed}mph direction {weather.wind_dir}</p>
    </div>
  );
};
