import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import NavAccount from "./NavAccount";

export default function NavBrand() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with jac Logo" />
            <h3>Learn with Jakaria</h3>
          </Link>
        </li>
      </ul>

      <NavAccount />
    </nav>
  );
}
