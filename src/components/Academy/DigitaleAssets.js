import "./DigitaleAssets.css";
import AcademyContent from "./AcademyContent";
import ContentImg1 from "../../assets/images/Content/Content_Dig_Wp.png";
import { HashLink } from "react-router-hash-link";
import ContentImg2 from "../../assets/images/Content/Content_exchange.png";

import ContentImg3 from "../../assets/images/Content/Content_NFRIDF.png";

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
            Heading="Non Financial Risks 
          in DeFi"
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
            Beschreibung="Das Konzept der Dezentralsierung macht auch vor Börsenplätzen (eng. Exchanges) nicht Halt. Durch das große Wachstum des DeFi Bereich konnten dezentrale Börsen schnell wachsen und wickeln mittlerweile Transaktionsvolumen in ähnlichen Größenordnungen wie zentrale Börsenplätze im Krypto-Ökosystem ab."
          />
        </HashLink>
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default DigitaleAssets;
