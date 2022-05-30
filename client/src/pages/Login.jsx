import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Login = () => {

  const { loginUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      alert(("please enter all the required fields!"));
      return;
    }

    loginUser(credentials);
  };

  return (
    <>
     
      <div className="logo-container">Logo</div>
      {/* <div className="message-container">{message}</div> */}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="login_email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="User ID"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="login_password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
