import "./Überblick.css";

import W20P from "../../../Components/HighlightBox";
import W100_H1 from "../../../Components/W100_h1";
import W100_H2 from "../../../Components/W100_h2";
import W50_h1 from "../../../Components/W50_h1";
import W100_HX from "../../../Components/W100_HX";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Überblick_FHS_Wrapper">
        <div id="GP_Überblick_FirstRow">
          <W20P
            Text="Marktwert* liegt 14% über dem Einkaufspreis"
            title="Highlight 1"
          />
          <W20P
            Text="Neubauvorhaben im attraktiven Trendviertel Ostend"
            title="Highlight 2"
          />
          <W20P
            Text="
            Sehr gefragte Wohnungsgröße"
            title="Highlight 3"
          />
          <W20P Text="Gehobene Ausstattung" title="Highlight 4" />
        </div>
        <div id="margin_top_2vh"></div>
        <W100_HX
          Text="In dem gefragten und verkehrsgünstig gelegenen Stadtteil Ostend entsteht in bevorzugter Lage ein attraktives  Neubauprojekt für höchste Ansprüche.

Die Emittentin erwirbt dabei für das Projekt Ferdinand-Happ-Straße! Ostend eine hochwertig ausgestattete Wohneinheit mit einer Gesamtwohnfläche von ca. 70,78 m2. Durch eine effiziente Gestaltung der Grundrisse bietet die Wohnung auf der verfügbaren Fläche drei Zimmer, was bei solch einer Wohnungsgröße oft nicht darstellbar ist und daher einer enormen Nachfrage auf dem Mietmarkt gegenübersteht. Die Mikrolage der Immobilie bietet den künftigen Bewohnern einen direkten Anschluss an das Netz des ÖPNV durch den Ostbahnhof Frankfurt, welcher in nur wenigen Minuten zu Fuß erreichbar ist. In unmittelbarer Umgebung finden sich darüber hinaus Einkaufsmöglichkeiten des täglichen Bedarfs, Ärzte und Bildungseinrichtungen sowie verschiedene Naherholungsmöglichkeiten und ein breites Angebot an Freizeitaktivitäten."
          title="Ferdinand-Happ-Straße! Ostend: modern, urban, zentral"
        />

        <div id="GP_Überblick_UntereRow">
          <W20P Text="Jan. 2022" title="Laufzeitbeginn " />
          <W20P
            Text="Q2 2023
            "
            title="Bezugsfertig"
          />
          <W20P
            Text="
            7.813 €/m²"
            title="Quadratmeterpreis"
          />
          <W20P Text="Dez. 2036" title="Progn. Laufzeitende" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
