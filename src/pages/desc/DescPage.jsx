import "./descPage.css";
const DescPage = () => {
  return (
    <div className="desc_container">
      <div className="desc_container-empty"></div>
      <div className="desc_container-desc">
        <p>
          Haninge Tennisklubb är den personliga tennisklubben där alla ska känna
          sig lika välkomna, här uppmuntras engagemang och delaktighet,
          individen ges möjlighet till utveckling och efter sin egen
          ambitionsnivå uppnå sin högsta potential!
        </p>
        <button>Bli medlem</button>
      </div>
    </div>
  );
};

export default DescPage;
