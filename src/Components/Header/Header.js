import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <div className="Header">
      <div>
        <img className="Logo" src="img/logo.png" alt='Logo' />
      </div>
      <div>
        <img className="Moving-Riders" src='img/riders-moving.gif' alt='riders moving'  />
      </div>
      <div>
          <img className="Heading" src="img/header.png" alt='Header' />
      </div>
      <div>
        <img className="Moving-Riders" src='img/riders-moving-flipped.gif' alt='riders moving'  />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}
