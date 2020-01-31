import React from "react";

export default function Header(props) {
  return (
    <div className="Header">
      <div>
        <h1 className="Header-heading">ZMDB</h1>
        <p>Zsofi's Movie App</p>
      </div>
      <div className="Header-menu" onClick={props.onClick}>
        <div className="Header-menu-line"></div>
      </div>
    </div>
  );
}
