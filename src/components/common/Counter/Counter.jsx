const Counter = ({ counter, setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      <button>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
