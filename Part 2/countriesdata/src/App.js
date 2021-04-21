import React, { useState, useEffect } from "react";
import axios from "axios";

import { SingleCountry } from "./components/SingleCountry";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [filterCountry, setFilterCountry] = useState(" ")

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  
  const handleChange = (event) => {
    const show = countries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCountriesToShow(show);
    console.log(`event value: ${event.target.value}`)
    setFilterCountry(event.target.value)
    console.log(`value: ${filterCountry}`)
  };

  const handleClick = (name) => {
    setFilterCountry(name)
  };

  console.log(`event value 1: ${filterCountry}`)
  return (
    <div className="App">
      <p>find country</p>
      <input type="text" onChange={handleChange}></input>
      {countriesToShow.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countriesToShow.length === 1 ? (
        <SingleCountry country={countriesToShow[0]}></SingleCountry>
      ) : (
        <ul>
          {countriesToShow.map((country) => (
            <li key={country.name}>
              {country.name}{" "}
              <a href={`/${country.name}`}>
                <button onClick={() => handleClick(country.name)}>show</button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
