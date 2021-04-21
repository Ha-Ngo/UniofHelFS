import React from "react";

export const SingleCountry = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h4>languages</h4>
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
    </div>
  );
};
