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
        <button>Boka bana</button>
        <button>Bli medlem</button>
      </div>
    </div>
  );
};

export default HeroPage;
