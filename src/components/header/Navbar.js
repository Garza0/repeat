import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink
              to="/"
              exact
              activeClassName="navbar-item navbar-item--active"
            >
              Decks
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/cards"
              activeClassName="navbar-item navbar-item--active"
            >
              Cards
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
