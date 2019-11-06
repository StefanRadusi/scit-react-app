import React, { Component } from 'react';


import "./HideMenuButton.css";

const HideMenuButton = ({ hideMenu }) => {
  return (
    <div className="menu-pages-hideButton-div">
        <button className="menu-pages-hideButton" onClick={hideMenu} >x</button>
    </div>
  );
};
export default HideMenuButton;