import { useRef } from "react";

const RefForm = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!password || !username) {
      console.error("Formulario incompleto");
      return;
    }

    const formPayload = {
      username,
      password,
    };

    console.log(formPayload);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" ref={usernameRef} />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" ref={passwordRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RefForm;
