import styled from "styled-components";

const TextStyled = styled.h2`
  background-color: ${(props) => (props.active === "true" ? "green" : "white")};
  color: black;
  font-size: 30px;
  font-weight: bold;
  padding: 2px;
`;

const TextComponent = ({ children, active }) => {
  return <TextStyled active={active}>{children}</TextStyled>;
};

export default TextComponent;
