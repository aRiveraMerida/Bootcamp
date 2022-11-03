import { useContext } from "react";
import { NameContext } from "../App";

const Title = () => {
const {name} = useContext(NameContext)
  return <h2>{name}</h2>;
};

export default Title;
