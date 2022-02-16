import "./mChainvestCapital.css";
import MFragenBox from "./mFragenBox";
function ChainvestCapital(props) {
  return props.trigger ? (
    <div>
      <div id="mFragen_Wrapper">
        <MFragenBox
          Frage="Was sind digitale Wertpapiere?"
          Antwort="Digitale Wertpapiere verleihen dem Inhaber Eigentumsrechte an einem Vermögenswert oder bilden Wertpapiere ab. Damit gehen bspw. Nutzungsrechte, Stimmrechte und Rechte an künftigen Cashflows an die InhaberInnen über.

Technisch gesehen handelt es sich um Datenbank-Einträge (meist auf einer Blockchain), die den Anteil eines Vermögenswertes repräsentieren und als Besitznachweis geführt werden können.
"
        />{" "}
        <MFragenBox
          Frage="Warum nutzt man digitale Wertpapiere?
          "
          Antwort="Die Verwendung von digitalen Wertpapieren bietet verschiedenen Vorteile. Dazu zählen beispielsweise die Kostenreduzierung sowie die Erhöhung von Handelbarkeit und
Abwicklungsgeschwindigkeit. Zudem ist es durch digitale Wertpapiere möglich, bereits mit kleinen Investitionssummen Zugang in bestimmte Asset-Klassen zu erhalten. Durch den Prozess der Tokenisierung erhöht sich ebenfalls die Transparenz des Projektes. Mehr dazu finden Sie hier."
        />{" "}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ChainvestCapital;
