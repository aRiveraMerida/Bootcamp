import "./App.css";
import { useState, createContext } from "react";
import Hello from "./components/Hello";
import Title from "./components/Title";

//Creamos el contexto y lo exportamos para utilizarlo con useContext en otro punto de la aplicación siempre y cuando sea parte del Provider
export const NameContext = createContext();

function App() {
  const [name, setName] = useState("Peter");
  return (
    <div className="App">
    {/* Envolvemos con el Provider del contexto todos los elementos de nuestra aplicación que quieran hacer uso de los values */}
      <NameContext.Provider value={{name, setName}}>
        <Hello />
      </NameContext.Provider>

    </div>
  );
}

export default App;
