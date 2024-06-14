import React, { useState, useEffect } from 'react';
import './Navigation.css';
import MenuIcon from '../../Assets/img/menu.png';
import Home from '../../Assets/img/home.png';
import GroupRides from '../../Assets/img/group-rides.png';
import RaceTimes from '../../Assets/img/race-times.png';
import JoinUs from '../../Assets/img/join-us.png';

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
      const offset = 200; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setMenuOpen(false); 
    }
  }

  return (
    <div className="menu-container">
      <img
        className="menu-icon"
        src={MenuIcon}
        alt="Menu Icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <div className={`menu-dropdown ${menuOpen ? 'show' : ''}`} data-testid="menu-dropdown">
        <div onClick={() => {scrollToElement('home'); setMenuOpen(false);}}>
          <img src={Home} alt="Home" />
        </div>
        <div onClick={() => {scrollToElement('group-rides'); setMenuOpen(false);}}>
          <img src={GroupRides} alt="Group rides text" />
        </div>
        <div onClick={() => {scrollToElement('races'); setMenuOpen(false);}}>
          <img src={RaceTimes} alt="Race times text" />
        </div>
        <div onClick={() => {scrollToElement('join-us'); setMenuOpen(false);}}>
          <img src={JoinUs} alt="Join us text" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
