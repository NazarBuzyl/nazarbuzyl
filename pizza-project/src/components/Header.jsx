import React from "react";
import { Link, useLocation } from "react-router-dom";

import logoSvg from "../assets/img/pizza-logo.svg";
import CartSvg from "../components/common/CartSvg";

export default function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo-link">
          <div className="header__logo">
            <img
              className="header__logo-img"
              width="38"
              src={logoSvg}
              alt="Pizza logo"
            />
            <div className="header__logo-content">
              <h1 className="header__logo-title">Pizza</h1>
              <div className="header__logo-description">
                The most delicious pizza in the universe
              </div>
            </div>
          </div>
        </Link>
        {location.pathname !== "/cart" ? (
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span className="button--cart__span">520 $</span>
              <div className="button--delimiter"></div>
              <div className="button--cart__logo">
                <CartSvg />
              </div>
              <span className="button--cart__span">3</span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}