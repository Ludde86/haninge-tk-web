import "./secbar.css";
import logo from "../../assets/images/logga-medium_nobg.png";
import { Link } from "react-router-dom";

const Secbar = ({ navOpen }) => {
  const links = [
    "Kontakta oss",
    "Vision & Värdegrund",
    "kontrakt/strötider",
    "Utebanor",
    "Hitta hit",
  ];
  return (
    <div className={"secbar " + (navOpen && "secbar-openSec")}>
      <div className="secbar-img_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="secbar-link_container">
        {links.map((item, index) => (
          <Link key={index}>
            <p>{item}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Secbar;
