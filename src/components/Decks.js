import React from 'react';
import { decks } from '../mock/decks';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CreateDeck from './CreateDeck';

export default function Decks() {
  const decksList = () => {
    return decks.map((currentDeck, i) => {
      return (
        <button
          key={i}
          type="button"
          className="list-group-item list-group-item-action"
        >
          {currentDeck.description}
        </button>
      );
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <div className="list-group">
              <Link to="/add_deck">
                <button
                  type="button"
                  className="list-group-item list-group-item-action bg-primary text-light mb-3"
                >
                  + Create New Deck
                </button>
              </Link>
            </div>
          </div>
          <div className="list-group">{decksList()}</div>
        </Route>
        <Route path="/add_deck">
          <CreateDeck />
        </Route>
      </Switch>
    </Router>
  );
}
