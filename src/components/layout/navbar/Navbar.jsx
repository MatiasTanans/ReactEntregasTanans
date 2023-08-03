import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3>StoreGames</h3>
      </Link>

      <ul className="listContainer">
        <Link to="/">Inicio</Link>
        <Link to="/category/acción">Acción</Link>
        <Link to="/category/deportes">Deportes</Link>
        <Link to="/category/estrategia">Estrategia</Link>
        <Link to="/category/lucha">Lucha</Link>
        <Link to="/category/terror">Terror</Link>
        <Link to="/category/simulación">Simulación</Link>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
