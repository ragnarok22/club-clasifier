import { createContext, useMemo } from "react";

const AuthContext = createContext({
  auth: null,
  login: () => {},
  logout: () => {},
  setReloadUser: () => {},
});

export function AppWrapper({ children }) {
  const authData = useMemo(
    () => ({
      auth: null,
      login: () => {},
      logout: () => {},
      setReloadUser: () => {},
    }),
    []
  );

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
