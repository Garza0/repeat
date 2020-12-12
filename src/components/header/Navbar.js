import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <NavLink to="/" exact className="navbar-brand">
        Repeat
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink to="/" exact className="nav-link">
              Decks
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/add_deck" className="nav-link">
              Add Deck
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/cards" className="nav-link">
              Cards
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/add_card" className="nav-link">
              Add Card
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
