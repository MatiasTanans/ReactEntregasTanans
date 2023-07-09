import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h3>StoreGames</h3>
      <ul className="listContainer">
        <li>
          <a href="./index.html">Inicio</a>
        </li>
        <li>
          <a href="./index.html">Acción</a>
        </li>
        <li>
          <a href="./index.html">Deportes</a>
        </li>
        <li>
          <a href="./index.html">Estrategia</a>
        </li>
        <li>
          <a href="./index.html">Lucha</a>
        </li>
        <li>
          <a href="./index.html">Terror</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
