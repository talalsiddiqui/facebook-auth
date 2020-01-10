import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientID =
  "13700578596-bqhct1anj93g1hrs8qs62sdpsrnm0vd0.apps.googleusercontent.com";

const GoogleAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("User: ", user);
  }, [user]);

  const onSuccessLogin = response => {
    console.log(response.profileObj);
    if (response.error) {
      return;
    }

    setLoggedIn(true);
    setUser(response.profileObj);
  };

  const onFailedLogin = response => {
    console.log(response);
    if (response.error) {
      return;
    }
  };

  const onLogout = () => {
    setLoggedIn(false);
  };

  const googleButton = !isLoggedIn ? (
    <GoogleLogin
      clientId={clientID}
      buttonText='Login With Google'
      onSuccess={onSuccessLogin}
      onFailure={onFailedLogin}
      cookiePolicy={"single_host_origin"}
    />
  ) : (
    <GoogleLogout
      clientId={clientID}
      buttonText='Logout'
      onLogoutSuccess={onLogout}
    />
  );

  return (
    <div>
      {googleButton}{" "}
      {isLoggedIn ? (
        <div>
          <h2>{user && user.name}</h2>
          <img src={user && user.imageUrl} alt='profile' />
        </div>
      ) : null}{" "}
    </div>
  );
};

export default GoogleAuth;
