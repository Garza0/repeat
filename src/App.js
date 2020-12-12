import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header/Navbar';
import Decks from './components/decks/Decks';
import Cards from './components/cards/Cards';
import CreateCard from './components/cards/CreateCard';
import CreateDeck from './components/decks/CreateDeck';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Decks} />
        <Route path="/add_deck" component={CreateDeck} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/add_card" component={CreateCard} />
      </div>
    </Router>
  );
}

export default App;
