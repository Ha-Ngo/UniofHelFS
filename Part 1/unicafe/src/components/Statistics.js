import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  if (totalFeedback <= 0) {
    return <p>No feed back given</p>;
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}></Statistic>
        <Statistic text="neutral" value={neutral}></Statistic>
        <Statistic text="bad" value={bad}></Statistic>
        <Statistic text="all" value={totalFeedback}></Statistic>
        <Statistic
          text="average"
          value={(good - bad) / totalFeedback}
        ></Statistic>
        <Statistic
          text="positive"
          value={`${(good / totalFeedback) * 100} %`}
        ></Statistic>
      </tbody>
    </table>
  );
};

export default Statistics;
