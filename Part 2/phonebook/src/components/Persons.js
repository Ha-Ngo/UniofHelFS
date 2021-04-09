import React from "react";
import { Person } from "./Person";

export const Persons = ({ personToShow }) => {
  return (
    <div>
      {personToShow.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          number={person.number}
        ></Person>
      ))}
    </div>
  );
};
