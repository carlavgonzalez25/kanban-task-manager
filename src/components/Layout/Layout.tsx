import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import Board from "../Board/Board";
import Menu from "../Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";
import MobileMenu from "../MobileMenu/MobileMenu";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import "./layout.scss";

const Layout: React.FC = () => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`theme-${theme} layout`}>
      <Header />
      <div className="layout__inner-container">
        <Sidebar>
          <Menu />
        </Sidebar>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <button className="mobile-menu__button" onClick={() => setIsOpen(true)}>
          open
        </button>
        <Board />
      </div>
    </div>
  );
};

export default Layout;
