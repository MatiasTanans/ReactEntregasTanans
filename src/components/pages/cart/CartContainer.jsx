import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let clear = () => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar todo?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminación exitosa", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Todo sigue igual", "", "info");
      }
    });
  };

  let totalPrice = getTotalPrice();
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

      {cart.length > 0 && (
        <button className="buttonReset" onClick={clear}>
          Resetear Carrito
        </button>
      )}

      <h2>Total a pagar: $ {totalPrice} </h2>
      {cart.length > 0 && <button>Finalizar compra</button>}
    </div>
  );
};

export default CartContainer;
