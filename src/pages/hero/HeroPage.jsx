import "./heroPage.css";

const HeroPage = () => {
  return (
    <div className="hero_container center-end-row">
      <div className="hero_container-text center-start-col">
        <h2>Välkommen till</h2>
        <h1>HANINGE</h1>
        <h1>TENNISKLUBB</h1>
      </div>

      <div className="hero_container-button center-around-row">
        <button>Boka bana</button>
        <button>Bli medlem</button>
      </div>
    </div>
  );
};

export default HeroPage;
