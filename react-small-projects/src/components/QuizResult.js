import React from "react";

export default function QuizResult(props) {
  const correct = props.correct;
  const count = props.count;
  const clear = props.clear;
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>You guessed {correct} answers out of {count}</h2>
      <button onClick={clear}>Try again</button>
    </div>
  );
}
