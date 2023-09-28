import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import Board from "../Board/Board";
import Menu from "../Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";

const Layout: React.FC = () => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme} general-container`}>
      <Sidebar>
        <Menu />
      </Sidebar>
      <Board />
    </div>
  );
};

export default Layout;
