import React from "react";
import firebase from "firebase/app";
import { auth } from "../Firebase";

// Icons
import google from "../assets/google.svg";

// Styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to BotoGram!</h2>
        <span>Turn on your vpn!</span>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
