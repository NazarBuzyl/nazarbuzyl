import React from "react";
import "./index.scss";
import Counter from "./components/Counter";
import ModalBlock from "./components/ModalBlock";
import Quiz from "./components/Quiz";
import InvitationBlock from "./components/InvitationBlock";

export default function App() {
  return (
    <div className="App">
        <InvitationBlock />
        <Counter />
        <ModalBlock />
        <Quiz />
    </div>
  );
}
