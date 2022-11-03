import { createContext, useState } from "react";

//Creamos el contexto
export const MyContext = createContext();

//Creamos el componente wrappeador que recibirá un children, así podrmeos bañar con el Provider a los elementos que queramos que tengan acceso al contexto
export const MyContextProvider = ({ children }) => {
  //Definimos la información que queremos compartir, esta información es la ORIGINAL
  const initialState = [
    {
      id: 1,
      title: "Batman",
    },
    {
      id: 2,
      title: "Smile",
    },
    {
      id: 3,
      title: "Barbarian",
    },
  ];
  const [movies, setMovies] = useState(initialState);
  const [user, setUser] = useState("Peter");

  //Retornamos una etiqueta pasandole los values que queramos utilizar a través del contexto y le indicamos el chidlren que serán los elementos hijos de este componente
  return (
    <MyContext.Provider value={{ movies, user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
