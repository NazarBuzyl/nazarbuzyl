import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlusMinusCrossSvg from "../common/PlusMinusCrossSvg";

import { addItem } from "../../redux/cartSlice";

export default function PizzaBlock({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
}) {
  const dispatch = useDispatch();
  const [activeIndexType, setActiveIndexType] = useState(types[0]);
  const [activeIndexSize, setActiveIndexSize] = useState(0);
  const addedCount = useSelector((state) =>
    state.cartReducer.items.find(
      (obj) => obj.id === `${id}#${activeIndexType}#${activeIndexSize}`
    )
  );
  const typesName = ["thin", "standart"];

  const onClickAdd = () => {
    const item = {
      id: `${id}#${activeIndexType}#${activeIndexSize}`,
      name,
      price,
      imageUrl,
      type: activeIndexType,
      size: sizes[activeIndexSize],
    };
    dispatch(addItem(item));
  };

  const onAddCart = () => {};

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <div className="pizza-block_image-block">
          <img className="pizza-block__image" src={imageUrl} alt={name} />
        </div>
        <h4 className="pizza-block__title">{name}</h4>
        <div>
          <div className="pizza-block__selector">
            <ul className="pizza-block__selector-list">
              {types.map((type, index) => (
                <li
                  onClick={() => setActiveIndexType(type)}
                  key={index}
                  className={`pizza-block__selector-item ${
                    activeIndexType === type ? "active" : ""
                  }`}
                >
                  {typesName[type]}
                </li>
              ))}
            </ul>
            <ul className="pizza-block__selector-list">
              {sizes.map((size, index) => {
                return (
                  <li
                    onClick={() => setActiveIndexSize(index)}
                    key={index}
                    className={`pizza-block__selector-item ${
                      activeIndexSize === index ? "active" : ""
                    }`}
                  >
                    {size}
                  </li>
                );
              })}
            </ul>
          </div>
          <div onClick={onClickAdd} className="pizza-block__bottom">
            <div className="pizza-block__price">{price} $</div>
            <div
              onClick={() => onAddCart()}
              className="button button--outline button--add"
            >
              <PlusMinusCrossSvg />
              <span>Add</span>
              {addedCount && <i>{addedCount.count}</i>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
