import { useContext } from "react";
import { NameContext } from "../App";

const ChangeName = () => {
  const { setName } = useContext(NameContext);
  return <input type="text" onChange={(e) => setName(e.target.value)} />;
};

export default ChangeName;
