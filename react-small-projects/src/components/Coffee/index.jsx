import React from "react";
import "../../sass/coffee.scss";

const coffee = [
  "americano",
  "au_lait",
  "capuccino",
  "corretto",
  "espresso",
  "latte",
  "lungo",
  "macchiato",
  "mocha",
  "ristretto",
];
const ingredients = [
  "coffee",
  "water",
  "liquor",
  "milk",
  "whipped_cream",
  "milk_foam",
  "steamed_milk",
  "chocolate",
];

const Coffee = () => {
  const [currentCoffee, setCurrentCoffee] = React.useState("");

  return (
    <div className="coffee-component">
      <div className="options">
        {coffee.map((item, index) => (
          <button
            onClick={() => setCurrentCoffee(item)}
            className={currentCoffee === item ? "selected" : ""}
            id={item}
            key={index}
          >
            {item.replace(/_/g, " ")}
          </button>
        ))}
      </div>
      <div className="container">
        <h1 className="coffee_name">Choose your coffee</h1>
        <div className="cup">
          <div className={"filling reset " + currentCoffee}>
            {ingredients.map((item, index) => (
              <div className={item} key={index}>
                {item.replace(/_/g, " ")}
              </div>
            ))}
          </div>
          <div className="plate"></div>
        </div>
      </div>
    </div>
  );
};
export default Coffee;
