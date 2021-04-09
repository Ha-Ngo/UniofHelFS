import React from "react";

export const Total = (props) => {
  return (
    <div>
      <strong>
      Total of{" "}
      {props.total
        .map((part) => part.exercises)
        .reduce((total, curVal) => {
          return total + curVal;
        })} exercises
        </strong>
    </div>
  );
};
