import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import "../sass/quiz.scss";

const questions = [
  {
    title: "React is... ?",
    variants: ["library", "framework", "app"],
    correct: 0,
  },
  {
    title: "A component is... ",
    variants: [
      "application",
      "part of an application or page",
      "what I don't know what is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "This is plain HTML",
      "This is a function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
  {
    title: "What is useState?",
    variants: [
      "This is a function to store component data",
      "This is a global state",
      "This is when no one needs you",
    ],
    correct: 2,
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    if (questions[step].correct === index) setCorrect(correct + 1);
    setStep(step + 1);
  };
  const clear = ()=>{
    setStep(0);
    setCorrect(0);
  }
  return (
    <div className="project-section">
      <div className="quiz">
        {step < questions.length && (
          <QuizQuestion
            data={questions[step]}
            onClickVariant={onClickVariant}
            progress={((step+1)/questions.length)*100}
          />
        )}
        {step === questions.length && <QuizResult correct={correct} count={questions.length} clear={clear}/>}
      </div>
    </div>
  );
}
