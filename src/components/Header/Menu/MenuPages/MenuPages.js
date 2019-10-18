import React from "react";
import Page from "../MenuPages/Page/Page";
import "./MenuPages.css";

const MenuPages = ({ pages, children }) => {
  const pageComponent = pages.map((id, index, pageNumber) => {
    return <Page key={id} pageNumber={pageNumber} index={index} />;
  });
  return (
    <div className="menu-pages-container">
      <div className="arrow"></div>
      {children}
      <div className="pages">{pageComponent}</div>
    </div>
  );
};

export default MenuPages;
