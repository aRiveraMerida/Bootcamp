import { useEffect, useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect run count', count)
  }, [count])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}