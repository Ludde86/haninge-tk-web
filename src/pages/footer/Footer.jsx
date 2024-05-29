import "./footer.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="htk3-footer_container">
      <div className="htk3-footer_container-contact_container">
        <p>Öppettider</p>
        <p>06.30 - 23.30</p>
        <div className="htk3-footer_container-contact_container-linebreak"></div>
        <p>Torvallavägen 14 13644 Handen</p>
        <div className="htk3-footer_container-contact_container-linebreak"></div>
        <p>kansliet@haningetk.se</p>
        <div className="htk3-footer_container-contact_container-linebreak"></div>
        <p>0700000000</p>
      </div>
      <div className="htk3-footer_container-social">
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaFacebookSquare />
        </a>
      </div>
      <p>© Haninge Tennisklubb 2024</p>
    </div>
  );
};

export default Footer;
