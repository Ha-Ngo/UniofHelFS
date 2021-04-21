import axios from "axios";
import React from "react";

export const Person = ({ name, number, id }) => {
  const handleClick = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`);
    }
  };
  return (
    <ul>
      <li>
        {name} {number}{" "}
        <button onClick={() => handleClick(id, name)}>delete</button>
      </li>
    </ul>
  );
};
