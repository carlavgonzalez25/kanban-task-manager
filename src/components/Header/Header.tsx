import React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <img
          className="header__logo--dark header__logo"
          src="src/assets/logo-dark.svg"
        />
        <img
          className="header__logo--light header__logo"
          src="src/assets/logo-light.svg"
        />
        <img
          className="header__logo--mobile header__logo"
          src="src/assets/logo-mobile.svg"
        />
      </div>
      <h1 className="header__title">Platform Launch</h1>

      <button className="header__button"> + Add new task</button>
    </div>
  );
};

export default Header;
