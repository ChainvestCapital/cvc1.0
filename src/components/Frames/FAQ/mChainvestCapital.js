import "./mChainvestCapital.css";
import MFragenBox from "./mFragenBox";
function ChainvestCapital(props) {
  return props.trigger ? (
    <div>
      <div id="mFragen_Wrapper">
        <MFragenBox
          Frage="Vergleicht Chainvest Capital ausschließlich Projekte von FINEXITY? 
          "
          Antwort="Wir arbeiten stetig an der Akquirierung neuer Partnerschaften und möchten zukünftig den Vergleich diverser Anbieter und Projekte verschiedener Branchen auf unserer Plattform anbieten.
"
        />{" "}
        <MFragenBox
          Frage="Warum werden nur Projekte aus der Kategorie Immobilien verglichen?"
          Antwort="Aktuell besteht der Markt für digitale Wertpapiere insbesondere aus Immobilien-Finanzierungen. Um eine sinnhafte Vergleichbarkeit zwischen den Projekten zu gewährleisten, konzentriert sich der Vergleich aktuell auf Immobilien-Projekte."
        />{" "}
        <MFragenBox
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
