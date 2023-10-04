import React, { Dispatch, SetStateAction, useContext } from "react";
import "./mobileMenu.scss";
import { Modal } from "@mui/material";
import Menu from "../Menu/Menu";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen} onClose={handleClose} className={`theme-${theme}`}>
      <div className="mobile-menu">
        <Menu />
      </div>
    </Modal>
  );
};

export default MobileMenu;
