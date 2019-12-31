import React, { useEffect, useState } from "react";
import { getUserSession } from "../../LocalStorage";

const FbUserInfo = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    picture: ""
  });

  useEffect(() => {
    const user = JSON.parse(getUserSession());
    setUserData({
      name: user.name,
      email: user.email,
      picture: user.picture.data.url
    });
  }, []);

  return (
    <div>
      <h2>Welcome {userData.name}</h2>
      <img src={userData.picture} alt='profile pic' />
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default FbUserInfo;
