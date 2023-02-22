import React from "react";

export default function QuizQuestion(props) {
  const data = props.data;
  const onClickVariant = props.onClickVariant;
  const progress = props.progress   ;
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progress}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{data.title}</h1>
      <ul>
        {data.variants.map((element, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {element}
          </li>
        ))}
      </ul>
    </>
  );
}
