import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './User.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { auth } from '../login/firebase';

function User() {
  const [showUserModal, setShowUserModal] = useState(false);
  const { name, avatar } = useSelector((state) => state.userReducer.user);

  const usernameClickHandler = () => {
    setShowUserModal(!showUserModal);
  };

  const logoutHandler = () => {
    console.log(auth.signOut());
  };

  return (
    <div className="account">
      <div onClick={usernameClickHandler} className="username-main">
        {avatar ? (
          <img src={avatar} className="user_avatar" alt="user avatar" />
        ) : (
          <AccountCircleIcon fontSize="large" />
        )}
      </div>
      {showUserModal && (
        <div className="user-modal modal">
          {name}
          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default User;
