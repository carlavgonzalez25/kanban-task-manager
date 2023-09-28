import "./sidebar.scss";
import React, { ReactNode, useState } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleSidebarVisibility = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className={`sidebar ${isHidden ? "sidebar--is-hidden" : ""}`}>
      {children}
      <button
        className="sidebar__hide-button"
        onClick={handleSidebarVisibility}
      >
        <img src="src/assets/icon-hide-sidebar.svg" />
        <span className="sidebar__hide-button__text">hide sidebar</span>
        <img
          src="src/assets/icon-show-sidebar.svg"
          className={`sidebar__hide-button__show-icon ${
            !isHidden ? "sidebar__hide-button__show-icon--is-hidden" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default Sidebar;
