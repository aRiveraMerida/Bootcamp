import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export const LoginPage = () => {
  const { login } = useAuth();
  const [userLogin, setUserLogin] = useState("");

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userLogin);
  };

  return (
    <div>
      <h1>This is the Login Page</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            required
            value={userLogin.name}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            required
            value={userLogin.name}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Login In!</button>
      </form>
      <Link to="/register">{"Don't have an account? Sign Up"}</Link>
    </div>
  );
};
