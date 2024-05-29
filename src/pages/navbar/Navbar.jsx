import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="navbar_container-wrapper">
        <div
          className="navbar_container"
          style={{
            height: navOpen && "20svh",
          }}
        >
          <div style={{ display: "flex" }}>
            <Link className="navbar_container-link" to={"tennisskolan"}>
              Tennisskola
            </Link>
            <Link className="navbar_container-link" to={"tavling"}>
              Tävling
            </Link>
            <div className="navbar_container-link" />
            <Link className="navbar_container-link" to={"/"}>
              Medlemsskap
            </Link>
            <Link className="navbar_container-link" to={"/"}>
              Boka bana
            </Link>
          </div>

          <div
            className="navbar_container-submenu"
            style={{
              opacity: navOpen ? 1 : 0,
            }}
          >
            <Link className="navbar_container-link" to={"/"}>
              Vision & Värdegrund
            </Link>
            <Link className="navbar_container-link" to={"/"}>
              Kontrakt/strötider
            </Link>

            <div className="navbar_container-link" />
            <Link className="navbar_container-link" to={"/"}>
              Kontakt
            </Link>
            <Link className="navbar_container-link" to={"/"}>
              Hitta hit
            </Link>
          </div>
        </div>
      </div>

      {!navOpen ? (
        <Menu onClick={() => setNavOpen(true)} className="menu-btn" size={40} />
      ) : (
        <X onClick={() => setNavOpen(false)} className="menu-btn" size={40} />
      )}
    </>
  );
};

export default Navbar;
