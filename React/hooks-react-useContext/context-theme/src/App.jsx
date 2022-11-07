import React, { useContext } from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App color-${theme}`}>
      <header>
        <ThemeSwitcher />
      </header>
      <h2>Este es el Theme Switcher</h2>
    </div>
  );
}

export default App;
