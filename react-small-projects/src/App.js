import React from "react";
import './index.scss'
import Counter from "./components/Counter";
import ModalBlock from "./components/ModalBlock";

export default function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <ModalBlock/>
      </div>
    </div>
  );
}
