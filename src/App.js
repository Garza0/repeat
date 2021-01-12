import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Decks from './components/decks/Decks';
import Cards from './components/cards/Cards';
import EditDeck from './components/decks/EditDeck';
import Signup from './components/login/Signup';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './components/login/firebase';
import { actionCreator } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const userData = {
          _id: authUser.uid,
          name: authUser.displayName,
          avatar: authUser.photoURL,
          decks: [],
          cards: [],
        };
        dispatch(actionCreator.userLogin(userData));
        dispatch(actionCreator.initUser(userData));
      } else {
        dispatch(actionCreator.userLogout());
      }
    });
  }, [dispatch]);

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
