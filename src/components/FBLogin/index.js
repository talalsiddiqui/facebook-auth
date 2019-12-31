import React, { useEffect, useState } from "react";

import Facebook from "react-facebook-login";

import { isLoggedIn, setSession, removeUser } from "../../LocalStorage";
import FbUserInfo from "../FBUserInfo";

const FBLogin = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {}, [userData]);

  const responseFacebook = response => {
    if (response.status === "unknown") {
      return;
    }
    setSession(response);
    setUserData(response);
  };
  const componentClicked = () => {
    console.log("component clicked");
  };

  const logoutUser = () => {
    removeUser();
    setUserData(null);
  };

  return (
    <div>
      {isLoggedIn() ? (
        <div>
          <p>You have loggedIn successfully.</p>
          <button onClick={logoutUser}>Logout</button>
          <FbUserInfo />
        </div>
      ) : (
        <Facebook
          appId='2499175477066923'
          autoLoad={false}
          reAuthenticate={false}
          cookie={true}
          fields='name,email,picture'
          onClick={componentClicked}
          callback={responseFacebook}
        />
      )}
    </div>
  );
};

export default FBLogin;
