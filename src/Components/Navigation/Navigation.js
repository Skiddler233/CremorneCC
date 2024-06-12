import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container') && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

  return (
    <div className="menu-container">
      <img
        className="menu-icon"
        src="img/menu.png"
        alt="Menu Icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <div className={`menu-dropdown ${menuOpen ? 'show' : ''}`} id="menuDropdown">
        <div onClick={() => scrollToElement('home')}>
          <img src="img/home.png" alt="Home" />
        </div>
        <div onClick={() => scrollToElement('group-rides')}>
          <img src="img/group-rides.png" alt="Group rides text" />
        </div>
        <div onClick={() => scrollToElement('races')}>
          <img src="img/race-times.png" alt="Race times text" />
        </div>
        <div onClick={() => scrollToElement('join-us')}>
          <img src="img/join-us.png" alt="Join us text" />
        </div>
      </div>
    </div>
  );
  };

export default Navigation;
