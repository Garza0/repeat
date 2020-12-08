import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Decks from './components/Decks';
import Cards from './components/Cards';
import CreateCard from './components/CreateCard';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Decks} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/add_card" component={CreateCard} />
      </div>
    </Router>
  );
}

export default App;
