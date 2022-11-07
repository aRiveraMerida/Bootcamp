import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const HelloUser = () => {
    const {user} = useContext(MyContext)
  return <h2>{user}</h2>;
};

export default HelloUser;
