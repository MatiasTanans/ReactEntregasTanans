import CounterContainer from "../../common/Counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, agregarAlCarrito, quantityCart }) => {
  return (
    <>
      <div className="detailContainer">
        <h1 className="titleProduct">{product.title}</h1>
        <img src={`${product.img}`} alt="Portada" />
        <h3 className="price">$ {product.price}</h3>
        <h3 className="description">{product.description}</h3>
      </div>

      <div className="counterContainer">
        <CounterContainer
          quantityCart={quantityCart}
          stock={product.stock}
          agregarAlCarrito={agregarAlCarrito}
        />
      </div>
    </>
  );
};

export default ItemDetail;
