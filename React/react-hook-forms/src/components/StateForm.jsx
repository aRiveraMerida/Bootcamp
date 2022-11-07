import { useState } from "react";

const StateForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password==="" || username==="") {
      console.error("Formulario incompleto");
      return;
    }

    const formPayload = {
      username,
      password,
    };

    console.log("formPayload value:", formPayload);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StateForm;
