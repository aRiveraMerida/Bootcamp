import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const List = () => {
  const { movies } = useContext(MyContext);
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
