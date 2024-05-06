import { Menu } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container-wrapper">
      <div className="navbar_container">
        <a href="/">Tennisskola</a>
        <a href="/">Medlemsskap</a>
        <Menu className="menu-btn" size={40} />
        <a href="/">Om oss</a>
        <a href="/">Boka bana</a>
      </div>
    </div>
  );
};

export default Navbar;
