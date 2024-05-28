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
            <div />
            <Link className="navbar_container-link" to={"tennisskolan"}>
              Medlemsskap
            </Link>
            <Link className="navbar_container-link" to={"tennisskolan"}>
              Boka bana
            </Link>
          </div>

          <div
            className="navbar_container-submenu"
            style={{
              opacity: navOpen ? 1 : 0,
            }}
          >
            <Link className="navbar_container-link" to={"tennisskolan"}>
              Vision & Värdegrund
            </Link>
            <Link className="navbar_container-link" to={"tennisskolan"}>
              Kontrakt/strötider
            </Link>

            <div />
            <Link className="navbar_container-link" to={"tavling"}>
              Kontakt
            </Link>
            <Link className="navbar_container-link" to={"tennisskolan"}>
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
