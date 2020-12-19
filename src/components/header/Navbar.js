import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="navbar-item navbar-item--active"
            >
              Decks
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/cards"
              className="nav-link"
              activeClassName="navbar-item navbar-item--active"
            >
              Cards
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/add_card"
              className="nav-link"
              activeClassName="navbar-item navbar-item--active"
            >
              Add Card
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
