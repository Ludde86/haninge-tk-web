import { useEffect } from "react";
import "./tennisskolan.css";

const Tennisskolan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="tennisskolan_container">
        <div className="tennisskolan_container-text">
          <h1>TENNISSKOLAN</h1>
          <p>
            Tennisskolan är öppen för både nybörjare och mer vana spelare av
            varierande åldrar - allt från minitennis till vuxengrupper.
          </p>
        </div>

        <div className="tennisskolan_container-button">
          <button className="tennisskolan_container-button-act_button">
            Anmäl dig
          </button>
        </div>
      </div>
      <div className="tennisskolan_content">
        <div className="tennisskolan_content-desc">
          <h1>Tennisskolan</h1>
          <p>
            Tennisskolan löper terminsvis och pågår alla dagar i veckan, dock
            med uppehåll för skollov. Träningen pågår i regel under en timme per
            gång och standarduppsättningen är en tränare och 4-6 elever. Varje
            elev tränar en eller flera tillfällen per vecka enligt önskemål.
            Schemat läggs med avsikt att så långt det går skapa jämna grupper
            efter ålder och spelerfarenhet. För att anmäla dig till tennisskolan
            eller vuxentennis, klicka då här!
          </p>
        </div>

        <div className="tennisskolan_content-desc">
          <h1>Prislista</h1>
          <p>
            Terminsavgifter för tennisskolan för juniorer omfattar ca 15
            tillfällen, gäller från HT 2019.
          </p>
          <p>
            <strong>Tennisskola</strong>
          </p>
          <p>1 träningstimme/vecka 1725kr</p>
          <p>2 träningstimmar/vecka 2975kr</p>
          <p>3 träningstimmar/vecka 3795kr</p>
          <p>4 träningstimmar/vecka 4475kr</p>
          <p>5 träningstimmar/vecka 5125kr</p>
          <p>6 träningstimmar/vecka 5875kr</p>
          <p>
            <strong>Vuxengrupp (15 tillfällen)</strong>
          </p>
          <p>Träningstid antal personer/grupp</p>
          <p>3-4 personer 2295kr/1h 2995kr/1,5h 3695kr/2h</p>
          <p>2 personer 3295kr/1h</p>
          <p>1 personer 6495kr/1h</p>
          <p>
            <strong>Minitennis (15 tillfällen)</strong>
          </p>
          <p>
            <i>Grundkurs</i>
          </p>
          <p>
            3-5 åringar, max 12 spelare på bana, 1300kr per/termin. I avgiften
            ingår inför hösten ett racket och inför våren en ryggsäck. Båda från
            Babolat. I grundkursen är målet att barnen under lekande former ska
            lära sig den grundläggande slagtekniken. Grundkursen är 2 terminer,
            höst/vår.
          </p>
          <p>
            T-skolans höst- och vårtermin omfattar c a 15 veckor vardera
            (bollar, tränare och omklädningsrum med duschar ingår i priset)
          </p>
        </div>

        <div className="tennisskolan_content-desc">
          <h1>Tränarna</h1>
          <p>Nenad Markovic nenad.markovic@skandiamaklarna.se 073-734 40 60</p>
          <p>Slobodan Antic 070-293 78 73</p>
          <p>Gabriel Gliori 073-096 07 25</p>
          <p>Ludvig Ekelund ludvigekelundhtk@gmail.com 076-164 42 14</p>
        </div>

        <div className="tennisskolan_content-desc">
          <h1>Ungdomssektion</h1>
          <p>Philip B Paluchiewicz paluchiewicz@gmail.com 076-255 45 21</p>
        </div>

        <div className="tennisskolan_content-desc">
          <h1>Allmänna bestämmelser för tennisskolan</h1>
          <p>
            <strong>Haninge Tennisklubb</strong>
          </p>
          <p>Rev 2013-06-14</p>
          <p>
            Haninge Tennisklubb består av minitennis, tennisskola och
            vuxentennis.
          </p>
          <p>
            Tennisskolan består av två terminer, en hösttermin som pågår
            september-december och en vårtermin som pågår januari-maj. I maj
            fortsätter vårterminen för de som vill i ytterligare 3 veckor
            utomhus. Ingen nyanmälan görs inför varje termin,{" "}
            <strong>
              anmälan till tennisskolan fortsätter löpande ända tills uppsägning
              sker. OBS! Detta måste ske skriftligen!
            </strong>{" "}
            Undantag för detta är träningen som förlänger vårterminen med 3
            veckor (se ovan), anmälan till dessa veckor sker på separat lapp.
          </p>
          <p>
            Uppsägning av platsen för vårterminen i tennisskolan skall alltid
            göras skriftligen senast sista december och för höstterminen{" "}
            <strong>senast</strong> sista juni. Har platsen inte sagts upp
            förutsätts att träningen fortsätter även under påföljande termin.
          </p>
          <p>
            Sker uppsägningen efter sista december för vårterminen respektive
            efter sista juni för höstterminen har planeringen för respektive
            termin redan påbörjats. Klubben tar då ut en administrativ{" "}
            <strong>avgift på 250 kr</strong> för omplacering av grupper och
            tränartimmar.{" "}
            <strong>
              Har terminen påbörjats och pågått i mer än två veckor utgår full
              avgift. Detta är helt utan undantag.
            </strong>
          </p>
          <p>
            <strong>
              Om man blir borta en längre tid kan man få kompensation i form av
              att hoppa in i passande grupp i slutet av terminen. Detta sker
              dock endast i mån av plats.
            </strong>
          </p>
          <p>Träningstider för respektive termin:</p>
          <p>
            Höstterminens tider återfinns på tennisskolans anslagstavla i hallen
            och på klubbens hemsida, www.haningetk.se, söndagen innan terminen
            börjar. Vårens tider är samma som höstterminens träningstider om
            inget annat meddelas. Följande generella regler gäller för
            tennisträning: Angående frågor om tennisskolan, ring kansliet
            vardagar på tfn 08-777 43 43 alt. tränare. Medlemskap krävs för att
            vara med i tennisskolan alla kategorier. Medlemsavgiften som är 210
            kr för juniorer debiteras ut löpande varje år i januari.
            Medlemsfakturans förfallodag är sista januari. Första
            medlemsavgiften debiteras när Du går in som medlem. Medlemskapet
            räknas kalenderår. Träningstiden för tennisskolan börjar varje halv
            timme. De första tio minuterna används till uppvärmning innan
            träningen påbörjas. Vid sjukdom ska Du ringa till kansliet på
            telefon 08-777 43 43 eller meddelar din tränare direkt senast samma
            dag och anmäla dig sjuk. Din tränare som leder träningen på banan
            får inte störas. Endast tränaren och eleverna i gruppen får vistas
            på banan under träningen om man inte fått medgivande av tränaren
            innan att sitta med. Om tränaren blir sjuk ordnas ersättare. I de
            fall som ersättare inte kan ordnas slås gruppen ihop med en annan
            grupp beroende på spelstyrka och ålder. Självständig träning
            tillämpas på de grupper som har uppnått viss spelstyrka med tillsyn
            av tränare på banan intill. Sista alternativet är att träningen
            ställs in helt. Detta meddelas av kansliet. Ställs träningen in helt
            kompenseras junioren med ny träningstid en annan dag som meddelas av
            kansliet. Du som har tre eller flera träningstimmar per vecka har
            fått en kraftig subventionering av priset. Klubben förväntar sig att
            Du tar ansvar för din träning och tennisutbildning och har full
            närvaro på träningen, fysträningen och övriga aktiviteter som din
            tränare kallar dig till. Detta gäller funktionärshjälp vid
            tävlingar/aktiviteter. Grupperna består av 3-6 spelare (ej
            minitennis, kan förekomma fler än 6 deltagare). Tennisskoleavgiften
            för de olika grupperna har satts av styrelsen och mer information om
            dessa får ni av Philip eller Nenad på kansliet. Ordningsregler: HTK
            förväntar sig att man uppför sig korrekt, dvs enligt Svenska
            tennisförbundets regler. Detta innebär att man uppför sig kamratligt
            mot spelare/tränare, uppför sig sportsligt, dvs enligt SvTF’s
            normer. Mer om detta finner Ni i SvTF’s tävlingsbestämmelser
            (www.tennis.se). För juniorer som bryter mot detta är regelverket
            utformat enligt följande: Tillsägelse Varning (tränaren ringer till
            föräldrarna) Avstängning från träningen under en period bestämd av
            Chefstränaren Uteslutning ur klubben, detta besluts tar styrelsen
            Vid skadegörelse på klubbens egendom, så länge det inte är en
            olyckshändelse, blir medlemen ersättningsskyldig. All
            tennisträning/fysträning sker på egen risk, vid eventuella
            olyckor/skador gäller hemförsäkringen. Denna information finns på
            hemsidan samt på anslagstavlan i hallen. Reglerna och informationen
            förutsätts kända av målsman/junior då tennisskoleavgiften betalas.
            Kompletterande information lämnas vid behov av kansliet. Löpande
            information anslås vid behov på juniorernas anslagstavla eller
            hemsidan. Styrelsen
          </p>
        </div>

        <div className="tennisskolan_content-desc">
          <h1>Privatträning</h1>
          <p>
            Privatträning är öppen för både nybörjare och mer vana spelare av
            varierande åldrar.
          </p>
          <p>Tränare som ger privattimmar i HTK.</p>
          <p>
            Att då och då anlita en privattränare kan göra mycket för att rätta
            till teknikfel och nöta in det där slaget som du har svårt med.
          </p>
          <p>Ta kontakt med respektive tränare för att boka en tid.</p>
          <p>
            <strong>Nenad Markovic nenad@haningetk.se 073-734 40 60</strong>
          </p>
          <p>
            <strong>
              Ludvig Ekelund ludvigekelundhtk@gmail.com 076-164 42 14
            </strong>
          </p>
          <p>
            Videoanalys Förbättra tekniken på dina slag! HTK erbjuder
            videoanalys av individuell spelare: förbättra tekniken och få en
            grundlig genomgång av dina slag som kommer hjälpa dig till att bli
            ännu bättre tennisspelare. Avgift: 1000 kr, ingår; videoutrustning,
            banhyra, bollar, redigering av video, teori, förslag till
            förbättrningar och tips att tänka på framöver. Om detta känns
            intressant v v kontakta Nenad för mer information.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tennisskolan;
