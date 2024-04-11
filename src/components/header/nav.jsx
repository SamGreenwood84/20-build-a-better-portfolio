import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Nav;
