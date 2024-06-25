import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import logo from "../../assets/images/logga-medium_nobg.png";

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
      <Link className="navbar_container-link" to={"/"}>
        Boka bana
      </Link>
      {!navOpen ? (
        <Menu onClick={() => setNavOpen(true)} className="menu-btn" size={40} />
      ) : (
        <X onClick={() => setNavOpen(false)} className="menu-btn" size={40} />
      )}
    </div>
  );
};

export default Navbar;
