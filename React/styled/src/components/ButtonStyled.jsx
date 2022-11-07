import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.backgroundColor === "coral" ? "coral" : "skyblue"};
  color: white;
  font-size: 20px;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
`;

export default ButtonStyled;
