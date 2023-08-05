import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ agregarAlCarrito, stock, quantityCart = 1 }) => {
  const [counter, setCounter] = useState(quantityCart);

  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer;
