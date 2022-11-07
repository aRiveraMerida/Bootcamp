import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ChangeUser = () => {
  const { setUser } = useContext(MyContext);
  return <input type="text" onChange={(e) => setUser(e.target.value)} />;
};

export default ChangeUser;
