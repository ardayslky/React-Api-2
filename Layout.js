import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <div className="layoutmain">
      <h1>Coctails</h1>
      <nav>
        <ul>
          <li>
            <Link className="link1" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link1" to="/blogs">
              Favorite
            </Link>
          </li>
          <li>
            <Link className="link1" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
