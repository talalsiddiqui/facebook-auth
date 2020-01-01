/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase";
import StyleFirebaseUI from "react-firebaseui/StyledFirebaseAuth";

function App() {
  const [isLoggedIn, setLoggedInState] = useState(false);
  const [userData, setUser] = useState();

  //let fireUI = new fireabseui.auth.AuthUI(firebase.auth());
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    callbacks: {
      onSignInSuccess: () => false
    }
  };

  const config = {
    apiKey: "AIzaSyBD5rTIt2md21qghfM6_6wIr4YzaLtq8TI",
    authDomain: "fir-auth-1d96d.firebaseapp.com"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      setUser(user);
      setLoggedInState(!!user);
    });
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>To Learn more, Please login with Facebook</p>
        {!isLoggedIn ? (
          <StyleFirebaseUI uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        ) : (
          <div>
            <p>You have logged in successfully</p>
            <h3>Welcome ! {userData && userData.displayName}</h3>
            <div>
              <img src={userData && userData.photoURL} alt='profile picture' />
            </div>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
