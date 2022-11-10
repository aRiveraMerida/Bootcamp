import { useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, handleIncrement, handleDecrement };
};

export { useCounter };
