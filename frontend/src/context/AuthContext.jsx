/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import axios from "../api/axios.js";
import Cookie from "js-cookie";
import { useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

  const signup = async (data) => {
    try {
      const response = await axios.post("/signup", data);
      setUser(response.data);
      setIsAuth((prevState) => !prevState);
      return response.data;
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }

      setErrors([error.response.data.message]);
    }
  };

  const signin = async (data) => {
    try {
      const response = await axios.post("/signin", data);
      setUser(response.data);
      setIsAuth((prevState) => !prevState);

      return response.data;
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }

      setErrors([error.response.data.message]);
    }
  };

  const signout = async () => {
    await axios.post("/signout");
    setIsAuth(false);
    setUser(null);
  };

  useEffect(() => {
    setLoading(true);
    if (Cookie.get("token")) {
      // get profile
      axios
        .get("/profile")
        .then((res) => {
          setUser(res.data);
          setIsAuth(true);
        })
        .catch((err) => {
          console.log(err);
          setUser(null);
          setIsAuth(false);
        });
    }
    setLoading(false);
  }, []);

  useEffect(() => {

    const clean = setTimeout(() => {
      setErrors(null)
    }, 2000) 

    return () => clearTimeout(clean);

  }, [errors])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
        signout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
