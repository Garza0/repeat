import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, provider } from './firebase';

function Signup() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const [loading, setLoading] = useState(false);

  // const handleSubmit = () => {};
  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => console.log(e));
  };

  return (
    <>
      <button onClick={signIn}>Sig In</button>
      {/* <h2 className="signup-header">Sign Up</h2> */}

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" ref={emailRef} id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" ref={passwordRef} id="password" />
        <button type="submit" disabled={loading}>
          Log In
        </button>
      </form> */}
      <div className="login">
        Already have an account? <Link to="/login"> Log In</Link>
      </div>
    </>
  );
}

export default Signup;
