import React from "react";
import "./index.scss";
import ButtonComponent from "./components/ButtonComponent";
import Counter from "./components/Counter";
import Quiz from "./components/Quiz/";
import Invitation from "./components/Invitation/";
import ModalWindow from "./components/Modal/";
import Dropdown from "./components/Dropdown";
import Coffee from "./components/Coffee";

export default function App() {
  const [activeProject, setActiveProject] = React.useState({
    name: "Initation",
    component: <Invitation />,
  });

  const projects = [
    {
      name: "Initation",
      component: <Invitation />,
    },
    {
      name: "Counter",
      component: <Counter />,
    },
    {
      name: "ModalWindow",
      component: <ModalWindow />,
    },
    {
      name: "Quiz",
      component: <Quiz />,
    },
    {
      name: "Dropdown",
      component: <Dropdown />,
    },
    {
      name: "Coffee",
      component: <Coffee />,
    },
  ];

  return (
    <div className="App">
      <div className="categories">
        <ul className="categories__list">
          {projects.map((item, index) => (
            <ButtonComponent
              activeProject={activeProject}
              setActiveProject={setActiveProject}
              data={item}
              key={index}
            />
          ))}
        </ul>
      </div>

      {activeProject.component}
    </div>
  );
}
