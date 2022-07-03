// src/context/auth-context.js
import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  let storedJwt;
  if (typeof window !== "undefined")
    storedJwt = localStorage.getItem("auth-token");
  const [authState, setAuthState] = React.useState({
    token: storedJwt,
  });

  const setUserAuthInfo = (data) => {
    const token = localStorage.setItem("auth-token", data);

    setAuthState({
      token,
    });
  };

  const logout = () => {
    if (typeof window !== "undefined") localStorage.removeItem("auth-token");
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    if (!authState.token) {
      return false;
    } else return true;
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        logout,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
