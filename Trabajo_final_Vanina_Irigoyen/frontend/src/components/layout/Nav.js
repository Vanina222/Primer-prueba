import { Link } from "react-router-dom";
import "../../styles/Nav.css";

const Nav = (props) => {
  return (
    <nav className="navegador">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/novedades">Novedades</Link>
        </li>
        <li>
          <Link to="/contactos">Contactos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
