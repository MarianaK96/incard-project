import React from "react";
import { IAuthContext } from "src/interfaces";

const AuthContext = React.createContext<IAuthContext | null>(null);
const { Provider } = AuthContext;

interface ProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: ProviderProps) => {
  let storedJwt;
  if (typeof window !== "undefined")
    storedJwt = localStorage.getItem("auth-token");
  const [authState, setAuthState] = React.useState<{
    token: string | null | undefined | void;
  }>({
    token: storedJwt,
  });

  const setUserAuthInfo = (data: string | undefined) => {
    const token = localStorage.setItem(
      "auth-token",
      data !== undefined ? data : ""
    );

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
