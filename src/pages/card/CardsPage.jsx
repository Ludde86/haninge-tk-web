import { Link } from "react-router-dom";
import "./cardsPage.css";

const CardsPage = () => {
  return (
    <div className="cards_container">
      <div className="cards_container-card">
        <h3>Vision</h3>
        <p>
          Haninge Tennisklubb ska vara den personliga tennisklubben där alla ska
          känna sig lika välkomna, engagemang och delaktighet uppmuntras,
          individen ges möjlighet till utveckling och efter sin egen
          ambitionsnivå uppnå sin högsta potential.
        </p>
        <h2>Bli medlem</h2>
      </div>

      <a
        className="cards_container-card"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.matchi.se/facilities/haningetk"
      >
        <h3>Utveckling</h3>
        <p>
          Alla ska känna att dom utvecklas i vår tennisklubb! Oavsett
          ambitionsnivå och spelstyrka. Klubben ska aldrig slå sig till ro utan
          hela tiden sträva efter att utveckla organisationen, verksamheten och
          dess anläggning. Vi ska alltid ligga i framkant.
        </p>
        <h2>Boka bana</h2>
      </a>

      <Link className="cards_container-card" to={"tavling"}>
        <h3>Spelarprofil </h3>
        <p>
          Att tävla i tennis är för många barn väldigt stimulerande, spännande
          och utmanande. En match utvecklar dessutom i regel en spelares tennis
          betydligt mer än en enskild träningstimme. Idag kan barn börja tävla
          redan vid 6 års ålder. Junior är man fram till man fyllt 18 år. Det
          finns ett stort utbud tävlingar för alla åldrar och kategorier.
        </p>
        <h2>Börja tävla</h2>
      </Link>
    </div>
  );
};

export default CardsPage;
