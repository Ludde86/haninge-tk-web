import "./desc2Page.css";
const Desc2Page = () => {
  return (
    <div className="desc2_container">
      <div className="desc2_container-desc">
        <p>
          Haninge TK är en ideell tennisklubb belägen intill Torvalla
          idrottsanläggning. Vi har två nymålade banor med Plexipave beläggning.
          Dessutom har vi två grusbanor vid Sågen i Vendelsö.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.matchi.se/facilities/haningetk"
        >
          <button className="hero_container-button-act_button">
            Boka bana
          </button>
        </a>
      </div>
      <div className="desc2_container-empty"></div>
    </div>
  );
};

export default Desc2Page;
