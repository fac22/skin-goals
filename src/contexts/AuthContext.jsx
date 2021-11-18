import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const cleanup = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return cleanup;
  }, []);

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
