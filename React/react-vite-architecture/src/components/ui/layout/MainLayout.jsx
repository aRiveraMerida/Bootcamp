import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MainLayoutStyled = styled("div")(
  ({ theme }) => `
  display: grid;
  height: 100vh;
  border: 6px solid ${theme.palette.button.border};
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 70vh 20vh;
  ${theme.mediaquery.mobile}{
    grid-template-rows: 40vh 10vh 60vh;
  }
`
);
const MainLayout = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>;
};

export default MainLayout;
