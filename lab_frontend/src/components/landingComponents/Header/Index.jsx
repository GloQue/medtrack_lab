import logo from "../../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-data">
        <img src={logo} alt="" className="logo" />
        <ul className="navLinks">
          <Link to={"/pharmacy"}>
            <span>Pharmacy</span>
          </Link>

          <Link to={"/labs"}>
            <span>Labs</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
