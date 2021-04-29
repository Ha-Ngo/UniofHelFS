import React from "react";
import { Person } from "./Person";

export const Persons = ({ personToShow, handleClick }) => {
  return (
    <div>
      {personToShow.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          id={person.id}
          handleClick={handleClick}
        ></Person>
      ))}
    </div>
  );
};
