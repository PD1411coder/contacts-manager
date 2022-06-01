import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";


const Signup = () => {

  const { signupUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials)

    

    if (credentials.password !== credentials.confirmPassword) {
      alert(("Password does not match!"));
      return;
    }

    if (credentials.password.length <8) {
      alert("Password lenght should be atleast 8 characters!");
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    signupUser(userData);
  };

  return (
    <>
      
      <div className="logo-container">Logo</div>
      <div className="message-container"></div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="signup_email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="Mail ID"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="signup_password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={credentials.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default Signup;
