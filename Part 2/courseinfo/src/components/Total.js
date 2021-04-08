import React from "react";

export const Total = (props) => {
  return (
    <div>
      Total of{" "}
      {props.total
        .map((part) => part.exercises)
        .reduce((total, curVal) => {
          return total + curVal;
        })}
    </div>
  );
};
