import { Link } from "react-router-dom";

const Labs = () => {
  return (
    <div>
      <nav>
        <div className="nav-data">
          <ul className="navLinks">
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <Link to={"/drug"}>
              <li>Pharmacy</li>
            </Link>
          </ul>
        </div>
      </nav>

      <h2> Labs Table</h2>
    </div>
  );
};

export default Labs;
