import { useState } from "react";
import "./tavling.css";

const Tavling = () => {
  const [link, setLink] = useState("Hem");

  return (
    <>
      <div className="tavling_container">
        <div className="tavling_container-text">
          <h1>BÖRJA TÄVLA!</h1>
          <p>
            Att tävla i tennis är för många barn väldigt stimulerande, spännande
            och utmanande.
          </p>
        </div>

        <div className="tavling_container-button">
          <button className="tavling_container-button-act_button">
            Börja tävla
          </button>
        </div>
      </div>
      <div className="tavling_content">
        <div className="tavling_content-sidebar">
          <h3 onClick={() => setLink("Hem")}>Hem</h3>
          <h3 onClick={() => setLink("Klubbmästerskap")}>Klubbmästerskap</h3>
          <h3 onClick={() => setLink("Skinkdubbeln")}>Skinkdubbeln</h3>
          <h3 onClick={() => setLink("Lovcuper")}>Lovcuper</h3>
        </div>
        {link === "Hem" && (
          <div className="tavling_content-desc">
            <h1>Hur börjar man?</h1>
            <p>
              Att tävla i tennis är för många barn väldigt stimulerande,
              spännande och utmanande. En match utvecklar dessutom i regel en
              spelares tennis betydligt mer än en enskild träningstimme. Idag
              kan barn börja tävla redan vid 6 års ålder. Junior är man fram
              till man fyllt 18 år. Det finns ett stort utbud tävlingar för alla
              åldrar och kategorier.
            </p>
          </div>
        )}

        {link === "Klubbmästerskap" && (
          <div className="tavling_content-desc">
            <h1>Klubbmästerskap</h1>
            <p>
              KM hålls årligen oftast i samband med höstlovet. Följande
              kategorier spelas: 1 Singel 2 Juniorsingel (ålders/nivåindelat
              poolspel) 3 Dubbel 4 Motionssingel (för dig som vill komma igång
              och spela matcher) Alla matcher spelas i bäst av 3 set med super
              tiebreak i avgörande set. Vid lågt deltagarantal kan klasser
              strykas Alla som anmäler sig måste vara medlemmar i Haninge TK.
            </p>
          </div>
        )}

        {link === "Skinkdubbeln" && (
          <div className="tavling_content-desc">
            <h1>Skinkdubbeln</h1>
            <p>
              En rolig aktivitet för hela familjen och medlemmar som hålls
              årligen innan julen. För dem som inte är bekanta med vad
              skinkdubbeln så kan vi berätta att det är en dubbeltävling i
              vilken vinnarna får varsin julskinka. Anmälningslista kommer att
              finnas på anslagstavlan i hallen cirka 2-3 veckor innan
              höstterminens avslut. Alla matcher spelas i bäst av 3 tiebreaks
              såkallade ”sprint” matcher. Heldag med många matcher i hallen men
              kom gärna lite tidigare Alla medlemmar är välkomna att anmäla sig.
              Man kan välja att anmäla sig som lag eller som ensam deltagare då
              paras man ihop med någon på plats. Juniorer spelar en separat
              turnering Första pris är varsin julskinka
            </p>
          </div>
        )}

        {link === "Lovcuper" && (
          <div className="tavling_content-desc">
            <h1>Lovcuper</h1>
            <p>
              Klubben arrangerar aktiviter under loven där juniorer- och
              minitenniselever får prova på matchspel i enklare form. Tävlingars
              ändamål är att försöka få barnen att få mer vana i en matchmiljö
              än enbart bara enskilda träningstimmar.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tavling;
