import React from "react";

export const Person = ({ name, number }) => {
  return (
    <ul>
      <li>
        {name} {number}
      </li>
    </ul>
  );
};
