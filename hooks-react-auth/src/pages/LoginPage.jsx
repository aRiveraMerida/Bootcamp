import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [userLogin, setUserLogin] = useState("");

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(userLogin);
  };

  return (
    <div>
      <h1>This is the Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            required
            value={userLogin.email}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={userLogin.password}
          onChange={handleInput}
        />
        <button type="submit">Login!</button>
      </form>
      <Link to="/register">Don't you have an account? Sign Up!</Link>
    </div>
  );
};

export default LoginPage;
