import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [signedInUser, setSignedInUser] = useState(null);

  const handleLogin = (email) => {
    setSignedInUser(email); 
  };

  const handleLogout = () => {
    setSignedInUser(null); 
  };

  const handleSignUp = (email) => {
    setSignedInUser(email); 
  };

  return (
    <UserContext.Provider value={{ signedInUser, handleLogin, handleLogout, handleSignUp }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);