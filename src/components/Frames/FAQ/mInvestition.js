import "./mChainvestCapital.css";
import MFragenBox from "./mFragenBox";
function ChainvestCapital(props) {
  return props.trigger ? (
    <div>
      <div id="mFragen_Wrapper">
        <MFragenBox
          Frage="Wie läuft die Investition ab?
          "
          Antwort="Eine Investition in digitale Wertpapiere ist aus Benutzersicht sehr einfach geworden. Die genauen Schritte können von Anbieter zu Anbieter variieren. In den meisten Fällen, kann ein Nutzer direkt Geld (FIAT-Währungen) auf einen Account einzahlen und dieses für den Erwerb der digitalen Wertpapiere einsetzen. Die erworbenen Anteile werden i.d.R.direkt über die entsprechende Plattform verwaltet."
        />{" "}
        <MFragenBox
          Frage="Investiere ich bei Chainvest Capital direkt in die dargestellten Projekte?
          "
          Antwort="Nein, interessierte AnlegerInnen können auf den einzelnen Projektseiten direkt zu der Homepage der Projekt-Anbieter gelangen. Dort kann nach erfolgreicher Registrierung in das Projekt investiert werden. Die Anbieter sind dabei verantwortlich für das Projekt, wohingegen Chainvest Capital lediglich eine Vergleichsplattform zur Verfügung stellt."
        />{" "}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ChainvestCapital;
