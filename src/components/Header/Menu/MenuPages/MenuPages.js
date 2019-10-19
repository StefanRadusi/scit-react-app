import React from "react";
import PageNumberButoon from "./PageNumberButoon/PageNumberButton";
import "./MenuPages.css";

const MenuPages = ({ pages, children, renderPage, closeMenu }) => {
  const pageComponent = pages.map(({ id, pageNumber, pageText }) => {
    return (
      <PageNumberButoon
        key={id}
        pageNumber={pageNumber}
        pageText={pageText}
        renderPage={renderPage}
        closeMenu={closeMenu}
      />
    );
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
