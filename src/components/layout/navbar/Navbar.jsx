import CartWidget from "../../common/CartWidget/CartWidget";
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
          <a href="./index.html">Juegos</a>
        </li>
        <li>
          <a href="./index.html">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
