/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const handleLogOut = () => {
    sessionStorage.removeItem("user");
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
