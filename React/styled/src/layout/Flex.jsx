import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: aquamarine;
  color: black;
  gap: 2rem;
  flex-direction: ${(props) => (props.direction == "row" ? "row" : "column")};
`;

const FlexContainer = ({ children, direction }) => {
  return <StyledDiv direction={direction}>{children}</StyledDiv>;
};

export default FlexContainer;
