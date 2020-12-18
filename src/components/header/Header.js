import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <NavLink to="/" exact className="navbar-brand">
        repeat
      </NavLink>
      <Navbar />
    </div>
  );
}

export default Header;
