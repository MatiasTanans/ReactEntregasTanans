import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Input } from "@mui/material";
import "./Checkout.css";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const [userData, setUserData] = useState({ name: "", phone: "", email: "" });

  let total = getTotalPrice();

  let date = serverTimestamp();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    // Creando variable con los datos que quiero obtener para realizar la órden

    let order = {
      buyer: userData,
      items: cart,
      total,
      date,
    };

    // Creando órden de compra

    let ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

    // Modificar stock del producto

    cart.forEach((elemento) => {
      let refDoc = doc(db, "products", elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div className="formContainer">
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <Input
            color="primary"
            type="text"
            placeholder="Ingresar Nombre"
            name="name"
            onChange={handleChange}
          />
          <Input
            type="number"
            placeholder="Ingresar teléfono"
            name="phone"
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Ingresar su email"
            name="email"
            onChange={handleChange}
          />
          <button className="buttonBuy">Comprar</button>
        </form>
      ) : (
        <h3 className="comprobante">
          {" "}
          Número de comprobante: {orderId} <br />
          Por favor, guarde su ID para cualquier reclamo.
        </h3>
      )}
    </div>
  );
};

export default CheckoutContainer;
