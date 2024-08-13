import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();

  function signin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const username = user.displayName;
        const email = user.email;
        console.log(username, email);
        props.setLoggedIn(true);

        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  }

  return (
    <div className="login">
      <button onClick={signin} type="button" className="btn btn-primary">
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
