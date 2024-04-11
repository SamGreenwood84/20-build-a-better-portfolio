import React from 'react';
import './header.css'; // Import CSS file for header styles
import Nav from './Nav'; // Import Nav component

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Sam Greenwood</h1>
      <Nav />
    </header>
  );
};

export default Header;
