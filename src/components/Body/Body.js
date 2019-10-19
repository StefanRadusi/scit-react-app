import React from "react";
import Page from "./Page/Page";
import "./Body.css";

export default function Body({ currentPage }) {
  return (
    <div className="page-body">
      <Page currentPage={currentPage} />
    </div>
  );
}
