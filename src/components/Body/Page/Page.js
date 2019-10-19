import React from "react";
import "./Page.css";

export default function Page({ currentPage }) {
  return <h1 className="content">{currentPage}</h1>;
}
