/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import axios from "axios";
export const AuthContext = createContext();

// create hook to use context
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

  const signup = async (data) => {
    const response = await axios.post(
      "http://localhost:3000/api/signup",
      data,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    setUser(response.data);
  };

  const signin = async (data) => {
    const response = await axios.post(
      "http://localhost:3000/api/signin",
      data,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    setUser(response.data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
