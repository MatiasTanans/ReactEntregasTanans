import "./Counter.css";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div>
        <button disabled={counter <= 1} onClick={() => setCounter(counter - 1)}>
          -
        </button>

        <h2>{counter}</h2>
        <button
          disabled={counter >= stock}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <br />
      <button onClick={() => agregarAlCarrito(counter)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Counter;
