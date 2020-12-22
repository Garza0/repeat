import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Decks from './components/decks/Decks';
import Cards from './components/cards/Cards';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br />
        <Route path="/" exact component={Decks} />
        <Route path="/cards" exact component={Cards} />
      </div>
    </Router>
  );
}

export default App;
