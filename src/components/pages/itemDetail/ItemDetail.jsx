import CounterContainer from "../../common/Counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
