import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import logo from "../../assets/images/logga-medium_nobg.png";
import Secbar from "../secbar/Secbar";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar_container">
      <Link className="navbar_container-link" to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <Link className="navbar_container-link" to={"tennisskolan"}>
        Tennisskola
      </Link>
      <Link className="navbar_container-link" to={"tavling"}>
        Tävling
      </Link>

      <Link className="navbar_container-link" to={"/"}>
        Medlemsskap
      </Link>
      <a
        className="navbar_container-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.matchi.se/facilities/haningetk"
      >
        Boka bana
      </a>

      {!navOpen ? (
        <Menu onClick={() => setNavOpen(true)} className="menu-btn" size={40} />
      ) : (
        <>
          <X
            onClick={() => setNavOpen(false)}
            className="menu-btn"
            size={40}
            color="#fff"
          />
        </>
      )}
      <Secbar navOpen={navOpen} />
    </div>
  );
};

export default Navbar;
