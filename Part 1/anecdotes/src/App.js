import React, { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [selected, setSelected] = useState(0);
  const [point, setPoint] = useState(new Array(anecdotes.length).fill(0));

  const getRandom = (max) => {
    setSelected(Math.floor(Math.random() * max));
  };
  //console.log(point)

  const increasePoint = (index) => {
    const copyPoint = [...point];
    copyPoint[index] += 1;
    setPoint(copyPoint);
  };
  const indexOfMostVote = point.indexOf(Math.max(...point));
  //console.log(indexOfMostVote)

  return (
    <div className="App">
      <h1>Anecdote of the date</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {point[selected]} votes</p>
      <button onClick={() => increasePoint(selected)}>vote</button>
      <button onClick={() => getRandom(anecdotes.length)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfMostVote]}</p>
      <p>has {point[indexOfMostVote]} votes</p>
    </div>
  );
}

export default App;
