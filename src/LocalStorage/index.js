export function setSession(value) {
  return sessionStorage.setItem("fbUser", JSON.stringify(value));
}

export function getUserSession() {
  return sessionStorage.getItem("fbUser");
}

export function removeUser() {
  return sessionStorage.removeItem("fbUser");
}

export function isLoggedIn() {
  if (sessionStorage.key("fbUser") !== null) {
    return true;
  } else {
    return false;
  }
}
