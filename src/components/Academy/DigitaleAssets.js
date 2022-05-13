import "./DigitaleAssets.css";
import AcademyContent from "./AcademyContent";
import ContentImg1 from "../../assets/images/Content/Content_Dig_Wp.png";
import { HashLink } from "react-router-hash-link";
import ContentImg2 from "../../assets/images/Content/Content_exchange.png";

import ContentImg3 from "../../assets/images/Content/Content_NFRIDF.png";

import Content_Immobilienindizes from "../../assets/images/Content/Content_Immobilienindizes.png";
import Content_Metaverse from "../../assets/images/Content/Content_Metaverse.png";
function DigitaleAssets(props) {
  return props.trigger ? (
    <div>
      <div id="DigitaleAssets_Wrapper">
        <HashLink to="../Academy/Was-sind-digitale-Wertpapiere#">
          <AcademyContent
            Heading="Was sind digitale Wertpapiere ?"
            Tag1="DeFi"
            Tag2="Security Token"
            bgimg={ContentImg1}
            Beschreibung="In den letzten Jahren hat die Anwendung der Blockchain-Technologie in unterschiedlichen Bereichen zugenommen und dabei unter Beweis gestellt, dass diese geeignet ist, um effizient und transparent Daten zu transferieren. Neben vielen Anwendungsmöglichkeiten hat sich insbesondere die Tokenisierung von Vermögenswerten als einer der Anwendungsfälle mit dem höchsten Disruptionspotential herausgestellt. 

      Durch die Tokenisierung entstehen sog. digitale Wertpapiere, die sowohl Vermögenswerte als auch klassische Wertpapiere in die digitale Welt bringen. Dabei entstehen durch das Verwenden der Blockchain-Technologie Vorteile für InvestorInnen und EmittentInnen.
      "
          />
        </HashLink>

        <HashLink to="../Academy/Non-Financial-Risks-in-DeFi#">
          <AcademyContent
            Heading="Non Financial Risks in DeFi"
            Länge="855 Wörter"
            Tag1="DeFi"
            Tag2="Tech"
            bgimg={ContentImg3}
            Tag3="Tokenisierung"
            Beschreibung="Einer der spannendsten Einsatzbereiche der Blockchain Technologie stellt der Bereich des Decentralised Finance (DeFi) dar. Die vergleichsweise hohen Renditen haben seit 2017 viele Anleger in diesen Bereich gelockt. Das innerhalb des DeFi Systems investierte Kapital (Total Value locked) konnte innerhalb weniger Jahre auf weltweit über 270 Milliarden USD wachsen. "
          />{" "}
        </HashLink>

        <HashLink to="../Academy/DEX#">
          <AcademyContent
            Heading="Decentralised Exchanges"
            Länge="553 Wörter"
            Tag1="DeFi"
            Tag2="Finance"
            bgimg={ContentImg2}
            Tag3="Tokenisierung"
            Beschreibung="Das Konzept der Dezentralisierung macht auch vor Börsenplätzen (eng. Exchanges) nicht Halt. Durch das große Wachstum des DeFi-Bereichs konnten dezentrale Börsen schnell wachsen und wickeln mittlerweile Transaktionsvolumen in ähnlichen Größenordnungen wie zentrale Börsenplätze im Krypto-Ökosystem ab."
          />
        </HashLink>

        <HashLink to="../Academy/Metaverse#">
          <AcademyContent
            Heading="Das Metaverse und Web 3.0 im Überblick
            "
            Länge="553 Wörter"
            Tag1="Metaverse"
            Tag2="Tokenisierung"
            bgimg={Content_Metaverse}
            Beschreibung="Die Digitalisierung verläuft rasend schnell und mit ihr die Anwendungsmöglichkeiten, welche Technologien zukünftig bieten könnten. Die digitale Identität ist schon lange ein wichtiger Bestandteil des Lebens vieler Nutzer und scheint sich schon heute immer weiter in herkömmliche Strukturen zu implementieren. Konzeptionen, wie das Metaverse, lassen Nutzer spekulieren, wie ein nahtloses Zusammenspiel zwischen der herkömmlichen und digitalen Welt Realität werden könnte ab."
          />
        </HashLink>

        <HashLink to="../Academy/Immobilienindizes-und-tokenisierte-Immobilien-im-Vergleich#">
          <AcademyContent
            Heading="Immobilienindizes und tokenisierte Immobilien im
            Vergleich"
            Länge="553 Wörter"
            Tag1="Tokenisierung"
            Tag2="Finance"
            bgimg={Content_Immobilienindizes}
            Beschreibung="Eine Investition am Immobilienmarkt ist aus vielerlei Gründen attraktiv, allerdings bieten die klassichen Investitionsvehikel wie Derivate einige Probleme. Digitale Wertpapiere und insbesondere tokenisierte Immobilien, bieten eine neue Art der Investition in den Immobiliensektor und scheinen in einigen Aspekten revolutionäre Vorteile zu bieten."
          />
        </HashLink>
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default DigitaleAssets;
