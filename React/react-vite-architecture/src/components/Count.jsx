import { useCounter } from "../hooks/useCounter";

const Count = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Sumar</button>
      <button onClick={handleDecrement}>Restar</button>
    </div>
  );
};

export default Count;
