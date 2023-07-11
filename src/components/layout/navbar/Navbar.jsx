import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>StoreGames</h3>
        </Link>

        <ul className="listContainer">
          <li>Inicio</li>
          <li>Acción</li>
          <li>Deportes</li>
          <li>Estrategia</li>
          <li>Lucha</li>
          <li>Terror</li>
        </ul>

        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
