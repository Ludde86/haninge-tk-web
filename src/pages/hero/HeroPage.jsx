import { ChevronsDown } from "lucide-react";
import "./heroPage.css";

const HeroPage = () => {
  return (
    <div className="hero_container">
      <div className="hero_container-text">
        <h2>Välkommen till</h2>
        <h1>HANINGE</h1>
        <h1>TENNISKLUBB</h1>
      </div>

      <div className="hero_container-button">
        <button className="hero_container-button-act_button">Boka bana</button>
        <button className="hero_container-button-sub_button">Bli medlem</button>
      </div>
      <a className="hero_container-icon_down" href="#landing">
        <ChevronsDown size={60} />
      </a>
    </div>
  );
};

export default HeroPage;
