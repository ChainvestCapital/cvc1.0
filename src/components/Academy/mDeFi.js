import "./DigitaleAssets.css";
import MAcademyContent from "./MAcademyContent";
import ContentImg2 from "../../assets/images/ContentImg2.png";
import { HashLink } from "react-router-hash-link";

import ContentImg1 from "../../assets/images/ContentImg1.png";
function DigitaleAssets(props) {
  return props.trigger ? (
    <div>
      <div id="DigitaleAssets_Wrapper">
        <HashLink to="../Academy/Non-Financial-Risks-in-DeFi#">
          <MAcademyContent
            Heading="Non Financial Risks 
          in DeFi"
            Länge="855 Wörter"
            Tag1="DeFi"
            Tag2="Tech"
            bgimg={ContentImg1}
            Tag3="Tokenisierung"
            Beschreibung="Einer der spannendsten Einsatzbereiche der Blockchain Technologie stellt der Bereich des Decentralised Finance (DeFi) dar. Die vergleichsweise hohen Renditen haben seit 2017 viele Anleger in diesen Bereich gelockt. Das innerhalb des DeFi Systems investierte Kapital (Total Value locked) konnte innerhalb weniger Jahre auf weltweit über 270 Milliarden USD wachsen. "
          />{" "}
        </HashLink>
        <div id="Margin-Bottom-2vh"></div>
        <div id="Margin-Bottom-2vh"></div>{" "}
        <HashLink to="../Academy/DEX">
          <MAcademyContent
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
