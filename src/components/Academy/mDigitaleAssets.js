import "./DigitaleAssets.css";
import MAcademyContent from "./MAcademyContent";
import ContentImg2 from "../../assets/images/ContentImg2.png";

import ContentImg1 from "../../assets/images/ContentImg1.png";
function DigitaleAssets(props) {
  return props.trigger ? (
    <div>
      <div id="DigitaleAssets_Wrapper">
        <MAcademyContent
          Heading="Was sind digitale Wertpapiere?"
          Länge="604"
          Tag1="Digitale Wertpapiere"
          Tag2="Security Token"
          bgimg={ContentImg2}
          Tag3="Tokenisierung"
          Beschreibung="In den letzten Jahren hat die Anwendung der Blockchain-Technologie in unterschiedlichen Bereichen zugenommen und dabei unter Beweis gestellt, dass diese geeignet ist, um effizient und transparent Daten zu transferieren. Neben vielen Anwendungsmöglichkeiten hat sich insbesondere die Tokenisierung von Vermögenswerten als einer der Anwendungsfälle mit dem höchsten Disruptionspotential herausgestellt. 

Durch die Tokenisierung entstehen sog. digitale Wertpapiere, die sowohl Vermögenswerte als auch klassische Wertpapiere in die digitale Welt bringen. Dabei entstehen durch das Verwenden der Blockchain-Technologie Vorteile für InvestorInnen und EmittentInnen.
"
        />
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default DigitaleAssets;
