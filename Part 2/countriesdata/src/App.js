import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

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
  };

  return (
    <div className="App">
      <p>find country</p>
      <input type="text" onChange={handleChange}></input>
      {countriesToShow.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countriesToShow.length === 1 ? (
        <div>
          <h1>{countriesToShow[0].name}</h1>
          <p>capital {countriesToShow[0].capital}</p>
          <p>population {countriesToShow[0].population}</p>
          <h4>languages</h4>
          <ul>
            {countriesToShow[0].languages.map((language) => (
              <li key={language.iso639_1}>{language.name}</li>
            ))}
          </ul>
          <img
            src={countriesToShow[0].flag}
            alt="countryflag"
            width="200px"
            height="200px"
          ></img>
        </div>
      ) : (
        <ul>
          {countriesToShow.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
