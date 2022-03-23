import { createContext, useMemo, useState, useEffect } from "react";
import { getAuth, getToken, getUser, setUser } from "../config/storage";

const AuthContext = createContext({
  auth: null,
  login: () => {},
  logout: () => {},
  setReloadUser: () => {},
});

export function AppWrapper({ children }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    const user = getUser();
    if (user) {
      setAuth(user);
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  const login = (user) => {
    setAuth(user);
    setUser(user);
  };

  const logout = () => {
    setAuth(null);
    setUser(null);
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
