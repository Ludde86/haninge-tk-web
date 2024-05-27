import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container-wrapper">
      <div className="navbar_container">
        <Link to={"tennisskolan"}>Tennisskola</Link>
        <Link to={"tavling"}>Tävling</Link>
        <Menu className="menu-btn" size={40} />
        <Link to={"tennisskolan"}>Medlemsskap</Link>
        <Link to={"tennisskolan"}>Boka bana</Link>
      </div>
    </div>
  );
};

export default Navbar;
