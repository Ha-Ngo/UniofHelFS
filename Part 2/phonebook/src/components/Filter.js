import React from "react";

export const Filter = ({handleSearch, searchTerm}) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={handleSearch} value={searchTerm}></input>
    </div>
  );
};
