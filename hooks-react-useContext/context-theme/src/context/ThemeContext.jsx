import React, {
    createContext,
    useCallback,
    useEffect,
    useState,
  } from 'react';
  
  // Creamos contexto del Theme - Red de seguridad
  export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => null,
  });
  
  // Definimos el provider: 
  export const ThemeContextProvider = ({ children, }) => {
    // Definimos el control que haremos sobre los datos del Provider
    const [theme, setTheme] = useState(
      // Inicializamos el state de forma lazy para leer localStorage primero
      () => (localStorage.getItem('theme')) || 'dark'
    );
  
    const toggleTheme = useCallback(() => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }, []);
  
    // Cada vez que theme cambie, lo guardo actualizado en localStorage
    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }