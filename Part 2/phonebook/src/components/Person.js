import React from "react";

export const Person = ({ name, number, id, handleClick }) => {

  return (
    <ul>
      <li>
        {name} {number}{" "}
        <button onClick={() => handleClick(id, name)}>delete</button>
      </li>
    </ul>
  );
};
