import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import './Header.css';
import User from './User';

function Header() {
  return (
    <div className="header">
      <NavLink to="/" exact className="navbar-brand">
        repeat
      </NavLink>
      <Navbar />
      <User />
    </div>
  );
}

export default Header;
