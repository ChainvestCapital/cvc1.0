import "./ChainvestCapital.css";
import FragenBox from "./FragenBox";
function ChainvestCapital(props) {
  return props.trigger ? (
    <div>
      <div id="Fragen_Wrapper">
        <FragenBox
          Frage="Was macht Chainvest Capital?"
          Antwort="Chainvest Capital stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über unsere Plattform erhalten AnlegerInnen einen Überblick über Projekte aus unterschiedlichen Branchen, an denen über den Erwerb digitaler Wertpapiere partizipiert werden kann."
        />{" "}
        <FragenBox
          Frage="Welche Vorteile bietet Chainvest Capital?"
          Antwort="Chainvest Capital bietet Zugang zu spannenden Finanzierungsprojekten aus verschiedenen Bereichen. Wir schaffen durch unser Angebot eine Übersicht über den intransparenten Markt der digitalen Wertpapiere und ermöglichen durch die Schaffung von Standards und einer einheitlichen Darstellung eine Vergleichbarkeit der Projekte und Anbieter. "
        />{" "}
        <FragenBox
          Frage="Spricht Chainvest Capital eine Empfehlung aus?"
          Antwort="Nein, die auf Chainvest Capital dargestellten Projekte stellen generell keine Empfehlung durch unser Unternehmen dar. Wir achten insbesondere auf die Bereitstellung der notwendigen regulatorischen Dokumente durch unseren Partner, geben allerdings keinerlei Empfehlung bzgl. des Erfolges des Projektes ab.

          "
        />{" "}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ChainvestCapital;
