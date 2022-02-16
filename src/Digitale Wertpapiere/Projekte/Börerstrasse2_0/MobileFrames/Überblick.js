import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="      Zeitnahe Fertigstellung
           "
          title="Highlight 1
"
        />
        <W50_h1SW Text="Erfolgreiches Vorgängerprojekt" title="Highlight 2" />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="     Hochwertige Bauweise" title="Highlight 3" />
        <W50_h1SW
          Text="
         Ruhige Straßenlage"
          title="Highlight 4"
        />
      </div>
      <W100_hx
        Text="Das Projekt besteht aus zwei weiteren Wohnungen mit jeweils 3 Zimmern und je 96,6 m2 Wohnfläche, welche sich in gefragter Lage im zentralen Eilbek befinden. In einer ruhig gelegenen Seitenstraße der Wandsbek Chaussee bietet das Projekt Börnestraße 2.0 die perfekte Mischung aus Erholung und urbanem Lebensgefühl. Die U- und S-Bahnhaltestelle Wandsbeker Chaussee ist nur wenige Fußminuten entfernt und bietet komfortablen Anschluss an das gesamte innerstädtische Netz des öffentlichen Nahverkehrs. In direkter Umgebung finden sich zudem sämtliche Einkaufsmöglichkeiten des täglichen Bedarfs, Schulen und Apotheken. Die nahegelegenen Einkaufszentren W1 Hamburg-Wandsbek und Quaree Wandsbek, beherbergen diverse Fach- und Einzelhandelsgeschäfte und laden zu ausgiebigen Shoppingtouren ein. Ein breites Angebot an Grund- und Fachschulen in unmittelbarer Nähe runden die urbane Infrastruktur ab und sorgen mit den zahlreichen Grünflächen für eine hohe Lebensqualität. "
        title="Börnestraße 2.0 - Eilbek

          "
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="Januar 2021" title="Laufzeitbeginn " />
        <W50_h1SW
          Text="580.000
          "
          title="Min. Volumen"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
            April 2023"
          title="Nächste Ausschüttung"
        />
        <W50_h1SW Text="Dezember 2036" title="Progn. Laufzeitende" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
