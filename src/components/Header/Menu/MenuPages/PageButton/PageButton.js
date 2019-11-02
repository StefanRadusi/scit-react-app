import React from "react";
import "./PageButton.css";
import { Contact } from "../../../../Body/Pages/Contact/Contact";
import Events from "../../../../Body/Pages/Events/Events";
import Home from "../../../../Body/Pages/Home/Home";
import Useful from "../../../../Body/Pages/Useful/Useful";
import Users from "../../../../Body/Pages/Users/Users";

const PageButton = () => {
  return (
    <div className="bodyPages">
      <Contact />
      <Events />
      <Home />
      <Useful />
      <Users />
    </div>
  );
};

export default PageButton;
