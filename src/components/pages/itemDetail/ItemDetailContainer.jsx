import { useState } from "React";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({
    id: 1
    name: "Undertale",
    price: 90,
    stock: 6,
  });

const agregarAlCarrito = (cantidad) => {
    let data = {
        ...product,
        quantity: cantidad,
    };
console.log(data);
};

 return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />
};

export default ItemDetailContainer;
