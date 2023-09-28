import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import "./board.scss";

const Board: React.FC = () => {
  const { state } = useContext(ThemeContext);

  return <div className="board">{state.theme}</div>;
};

export default Board;
