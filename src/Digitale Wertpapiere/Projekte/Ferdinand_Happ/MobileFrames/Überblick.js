import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Marktwert* liegt 14% über dem Einkaufspreis"
          title="Highlight 1
"
        />
        <W50_h1SW
          Text="Neubauvorhaben im attraktiven Trendviertel Ostend"
          title="Highlight 2
"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Sehr gefragte Wohnungsgröße"
          title="Highlight 3
"
        />
        <W50_h1SW
          Text="Gehobene Ausstattung"
          title="Highlight 4
"
        />
      </div>

      <W100_hx
        Text="In dem gefragten und verkehrsgünstig gelegenen Stadtteil Ostend entsteht in bevorzugter Lage ein attraktives Neubauprojekt für höchste Ansprüche. Die Emittentin erwirbt dabei für das Projekt Ferdinand-Happ-Straße! Ostend eine hochwertig ausgestattete Wohneinheit mit einer Gesamtwohnfläche von ca. 70,78 m2. Durch eine effiziente Gestaltung der Grundrisse bietet die Wohnung auf der verfügbaren Fläche drei Zimmer, was bei solch einer Wohnungsgröße oft nicht darstellbar ist und daher einer enormen Nachfrage auf dem Mietmarkt gegenübersteht. Die Mikrolage der Immobilie bietet den künftigen Bewohnern einen direkten Anschluss an das Netz des ÖPNV durch den Ostbahnhof Frankfurt, welcher in nur wenigen Minuten zu Fuß erreichbar ist. In unmittelbarer Umgebung finden sich darüber hinaus Einkaufsmöglichkeiten des täglichen Bedarfs, Ärzte und Bildungseinrichtungen sowie verschiedene Naherholungsmöglichkeiten und ein breites Angebot an Freizeitaktivitäten."
        title="Ferdinand-Happ-Straße! Ostend: modern, urban, zentral"
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Jan. 2022"
          title="Laufzeitbeginn
"
        />
        <W50_h1SW
          Text="Q2 2023"
          title="Bezugsfertig
"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
          7.813 €/m²"
          title="m² - Preis
"
        />
        <W50_h1SW
          Text="Dez. 2036
          "
          title=" Laufzeitende

"
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
