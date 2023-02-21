import React, { useState } from "react";
import "../sass/counter.scss";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onClickAction = (action) => {
    if (action) setCount(count - 1);
    else setCount(count + 1);
  };

  return (
    <div className="project-section counter ">
      <h2 className="project-section__title">Counter:</h2>
      <h3 className="counter__title">{count}</h3>
      <div className="couunter__btn-block">
        <button
          className="counter__btn counter__btn_minus"
          onClick={()=>onClickAction(1)}
        >
          - Minus
        </button>
        <button
          className="counter__btn counter__btn_plus"
          onClick={()=>onClickAction(0)}
        >
          Plus +
        </button>
      </div>
    </div>
  );
}
