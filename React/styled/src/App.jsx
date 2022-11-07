import ButtonStyled from "./components/ButtonStyled";
import TextComponent from "./components/Text";
import TitleComponent from "./components/Title";
import FlexContainer from "./layout/Flex";
function App() {
  return (
    <FlexContainer>
      <ButtonStyled>Esto es un botón</ButtonStyled>
      <ButtonStyled backgroundColor="coral">
        Este tiene el color coral
      </ButtonStyled>
      <TextComponent>Hola</TextComponent>
      <TextComponent active="true">Adios</TextComponent>
      <TitleComponent>Esto es un titulo</TitleComponent>
      <TitleComponent primary>Esto es un titulo con primary</TitleComponent>
      <TitleComponent secondary>Esto es un titulo con secondary</TitleComponent>
      <FlexContainer direction="row">
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>4</h2>
      </FlexContainer>
      <FlexContainer direction="row">
        <h2>5</h2>
        <h2>6</h2>
        <h2>7</h2>
        <h2>8</h2>
      </FlexContainer>
    </FlexContainer>
  );
}

export default App;
