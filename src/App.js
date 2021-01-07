import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Decks from './components/decks/Decks';
import Cards from './components/cards/Cards';
import EditDeck from './components/decks/EditDeck';
import Signup from './components/login/Signup';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Router>
        {!user ? (
          <Signup />
        ) : (
          <div className="container">
            <Header />
            <br />
            <Route path="/" exact component={Decks} />
            <Route path="/cards" exact component={Cards} />
            <Route path="/edit/:id" component={EditDeck} />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
