import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FBLogin from "./components/FBLogin";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>To Learn more, Please login with Facebook</p>
        <FBLogin />
      </header>
    </div>
  );
}

export default App;
