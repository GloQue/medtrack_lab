import logo from "../../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-data">
        <img src={logo} alt="" className="logo" />
        <ul className="navLinks">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/drug"}>
            <li>Pharmacy</li>
          </Link>

          <Link to={"/drug"}>
            <li>Labs</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
