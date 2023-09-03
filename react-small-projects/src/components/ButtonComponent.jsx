import React from "react";

export default function ButtonComponent({
  activeProject,
  setActiveProject,
  data,
}) {
  return (
    <li
      className={`categories__list-item ${
        data.name === activeProject.name ? "active" : ""
      }`}
      onClick={() => setActiveProject(data)}
    >
      {data.name}
    </li>
  );
}
