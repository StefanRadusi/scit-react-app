import React from "react";
import "./PageNumberButton.css";

export default function PageNumberButton({
  pageNumber,
  renderPage,
  closeMenu,
  pageText
}) {
  return (
    <div onClick={closeMenu}>
      <p className="page-number-button" onClick={() => renderPage(pageText)}>
        Page {pageNumber}{" "}
      </p>
    </div>
  );
}
