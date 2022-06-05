







import  React, { useRef, createContext, useState } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);
  // const logininitial = {}


  //login req
  const loginUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });

      const result = await res.json();
      if (!result.error) {
        console.log(result);
        localStorage.setItem("token", result.token);
        setUser(result.userData);
        navigate("/contacts");
      } else {
        setError(result.message);
        setTimeout(()=> {
          setError(null);
        }, 3000);

      }
    } catch (err) {
      console.log(err);
      
    }
  };

  //signup req
  const signupUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });

      const result = await res.json();
      if (!result.error) {
        console.log(result);
        navigate("/", { replace: true });
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <AuthContext.Provider value={{ loginUser, signupUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;