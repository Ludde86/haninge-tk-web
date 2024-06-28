import "./cardsPage.css";

const CardsPage = () => {
  return (
    <div className="cards_container">
      <h1>Vår värdegrund och visioner</h1>
      <div className="cards_container-cards">
        <div id="card-2" className="cards_container-card">
          <h3>Vision</h3>
          <p>
            Haninge Tennisklubb ska vara den personliga tennisklubben där alla
            ska känna sig lika välkomna, engagemang och delaktighet uppmuntras,
            individen ges möjlighet till utveckling och efter sin egen
            ambitionsnivå uppnå sin högsta potential.
          </p>
          <div className="cards_container-card-vision">
            <h2>Glädje</h2>
            <h2>Gemenskap</h2>
            <h2>Utveckling</h2>
          </div>
        </div>

        <div id="card-3" className="cards_container-card">
          <h3>Glädje</h3>
          <p>
            Tennis är världens roligaste sport! Ur glädjen till sporten föds det
            motivation och ett gott självbefinnande. Glädje smittar och skapar
            en positiv kultur i klubben. Genom engagemang och glädje ska
            personalen ge av sitt kunnande så att alla känner sig välkomna i
            klubben.
          </p>
        </div>

        <div id="card-3" className="cards_container-card">
          <h3>Gemenskap</h3>
          <p>
            Klubben ska vara inkluderande! Alla som vill och kan ska kunna vara
            med utifrån sina förutsättningar. Vi bygger vår klubb på tillsammans
            och ingen ska känna sig ensam i klubben. Gemenskapen skapar öppenhet
            och transparens och därigenom delaktiga medlemmar. Nolltolerans mot
            all slags mobbing. Vi värnar om klubbkänslan.
          </p>
        </div>

        <div id="card-3" className="cards_container-card">
          <h3>Utveckling</h3>
          <p>
            Alla ska känna att dom utvecklas i vår tennisklubb! Oavsett
            ambitionsnivå och spelstyrka. Klubben ska aldrig slå sig till ro
            utan hela tiden sträva efter att utveckla organisationen,
            verksamheten och dess anläggning. Vi ska alltid ligga i framkant.
          </p>
        </div>

        <div id="card-1" className="cards_container-card">
          <h3>Mål</h3>
          <p>
            HTK ska bedriva breddtennis med Haninge kommun som huvudsakligt
            upptagningsområde. Verksamheten ska i huvudsak omfatta:
          </p>
          <div className="cards_container-card-vision">
            <h2>Träning</h2>
            <h2>Kontrakt- och strötidsspel</h2>
            <h2>Gruppspel</h2>
            <h2>Tävlingar</h2>
            <h2>Trivselaktiviteter, evenemang</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
