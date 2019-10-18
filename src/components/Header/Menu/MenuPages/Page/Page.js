import React from "react";
import "./Page.css";

export default function Page({ index, pageNumber }) {
  return <p>Page {pageNumber[index]} </p>;
}
