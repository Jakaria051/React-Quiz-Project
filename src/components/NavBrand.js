import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import NavAccount from "./NavAccount";

export default function NavBrand() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Jakaria</h3>
          </a>
        </li>
      </ul>

      <NavAccount />
    </nav>
  );
}
