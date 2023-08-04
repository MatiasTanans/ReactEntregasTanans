import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <h1></h1>

      {cart.map((elemento) => {
        return (
          <div className="cardContainer" key={elemento.id}>
            <h3 className="cardTitle">{elemento.title}</h3>
            <h3 className="cardPrice">$ {elemento.price}</h3>
            <h4 className="cardQuantity">Cantidad: {elemento.quantity}</h4>
            <button
              className="buttonRemove"
              onClick={() => deleteById(elemento.id)}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      <button className="buttonReset" onClick={clearCart}>
        Resetear Carrito
      </button>
    </div>
  );
};

export default CartContainer;
