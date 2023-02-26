import React, { useState } from "react";
import ArrowTopSvg from "./common/ArrowTopSvg";

export default function Sort() {
  const [activeIndexSort, setActiveIndexSort] = useState(1);
  const [open, setOpen] = useState(false);

  const sortList = [
    "popularity",
    "price: high to low",
    "price: low to high",
    "alphabetical: A-Z",
    "alphabetical: Z-A",
  ];

  const onClickSortItem = (index) => {
    setActiveIndexSort(index);
    setOpen(!open);
  };

  return (
    <div className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <div className="sort__label-svg">
          <ArrowTopSvg />
        </div>
        <b className="sort__label-b">Sort by:</b>
        <span className="sort__label-span"> {sortList[activeIndexSort]}</span>
      </div>
      <div className={`sort__popup ${open ? "active" : ""}`}>
        <ul className="sort__popup-list">
          {sortList.map((item, index) => (
            <li
              key={index}
              className={`sort__popup-item ${
                activeIndexSort === index ? "active" : ""
              }`}
              onClick={() => onClickSortItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}