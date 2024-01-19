/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// output context API - in main.jsx
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
