import styled, { css } from "styled-components";

const TitleStyled = styled.h1`
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  border: 0;
  ${({ primary }) =>
    primary &&
    css`
      background-color: indianred;
      border: 1px solid skyblue;
      font-size: 40px;
      font-weight: bolder;
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: red;
      border: 1px solid blue;
      font-size: 35px;
      font-weight: bolder;
    `}
  &:hover {
    background-color: mediumseagreen;
  }
`;

const TitleComponent = ({ children, primary, secondary }) => {
  return (
    <TitleStyled primary={primary} secondary={secondary}>
      {children}
    </TitleStyled>
  );
};

export default TitleComponent;
