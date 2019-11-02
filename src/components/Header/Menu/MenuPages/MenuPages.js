import React from "react";
import "./MenuPages.css";
import PageButton from "./PageButton/PageButton";
import CloseMenuButton from "../MenuPages/CloseMenuButton/CloseMenuButton";

const MenuPages = ({ closeMenu, show }) => {
  return show ? (
    <div className="menu-pages">
      <div className="arrow"></div>
      <CloseMenuButton closeMenu={closeMenu} />
      <PageButton />
    </div>
  ) : null;
};

export default MenuPages;
