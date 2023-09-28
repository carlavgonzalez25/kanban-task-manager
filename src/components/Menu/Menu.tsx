import React, { useContext } from "react";
import "./menu.scss";
import "../../theme/variables.scss";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { TOGGLE_THEME } from "../../contexts/ThemeContext/actionTypes";

const boards = ["Daily tasks", "Roadmap", "Marketing plan"];
const Menu: React.FC = () => {
  const { dispatch } = useContext(ThemeContext);

  const handleSwitchThemes = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <div className="menu">
      <h4 className="menu__title"> ALL BOARDS</h4>
      <div className="menu__buttons-container">
        {boards.map((board) => (
          <button className="menu__item" key={board}>
            <img src="src/assets/icon-board.svg" className="menu__item__icon" />
            <h4 className="menu__item__title">{board}</h4>
          </button>
        ))}
        <button className="menu__item">
          <img src="src/assets/icon-board.svg" className="menu__item__icon" />
          <h4 className="menu__item__title">Create New Board</h4>
        </button>
      </div>
      <div className="menu__toggle-container">
        <img
          className="menu__toggle-container__icon"
          src="src/assets/icon-light-theme.svg"
        />
        <Switch onChange={handleSwitchThemes} />
        <img
          className="menu__toggle-container__icon"
          src="src/assets/icon-dark-theme.svg"
        />
      </div>
    </div>
  );
};

export default Menu;
