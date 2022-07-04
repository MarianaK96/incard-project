import React, { ReactNode } from "react";
import { IAuthContext } from "src/interfaces";

const AuthContext = React.createContext<IAuthContext | null>(null);
const { Provider } = AuthContext;

interface ProviderProps {
  children?: ReactNode;
}

const AuthProvider = ({ children }: ProviderProps) => {
  let storedJwt;
  if (typeof window !== "undefined")
    storedJwt = localStorage.getItem("auth-token");
  const [authState, setAuthState] = React.useState<{
    token: void | string | null | undefined;
  }>({
    token: storedJwt,
  });

  const setUserAuthInfo = (data: string) => {
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
        setAuthState: (userAuthInfo: string) => setUserAuthInfo(userAuthInfo),
        logout,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
