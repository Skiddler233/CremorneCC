import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import head from '../../Assets/img/header.png';
import logo from '../../Assets/img/logo.png';
import ridersMoving from '../../Assets/img/riders-moving.gif';
import ridersMovingFlipped from '../../Assets/img/riders-moving-flipped.gif';

export default function Header() {
  return (
    <div className="Header">
      <div>
        <img className="Logo" src={logo} alt='Logo' />
      </div>
      <div>
        <img className="Moving-Riders" src={ridersMoving} alt='riders moving' />
      </div>
      <div>
        <img className="Heading" src={head} alt='Header' />
      </div>
      <div>
        <img className="Moving-Riders" src={ridersMovingFlipped} alt='riders moving' />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

