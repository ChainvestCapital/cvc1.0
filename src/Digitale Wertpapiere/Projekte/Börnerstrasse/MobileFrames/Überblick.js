import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="           Hochwertige Bauweise
           "
          title="Highlight 1
"
        />
        <W50_h1SW Text="Weniger als 4 km zum Stadtkern" title="Highlight 2" />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="Fertigstellung 2021" title="Highlight 3" />
        <W50_h1SW
          Text="
         Ruhige Straßenlage"
          title="Highlight 4"
        />
      </div>
      <W100_hx
        Text="Die Wohneinheit befindet sich in gefragter Lage im zentral gelegenen Eilbek. In einer ruhig gelegenen Seitenstraße der Wandsbek Chaussee bietet das Projekt Börnestraße! die perfekte Mischung aus Erholung und urbanem Lebensgefühl. Die U- und S-Bahnhaltestelle Wandsbeker Chaussee ist nur wenige Fußminuten entfernt und bietet komfortablen Anschluss an das gesamte innerstädtische Netz des öffentlichen Nahverkehrs. In direkter Umgebung finden sich zudem sämtliche Einkaufsmöglichkeiten des täglichen Bedarfs, Schulen und Apotheken. Die nahegelegenen Einkaufszentren W1 Hamburg-Wandsbek und Quaree Wandsbek, beherbergen diverse Fach- und Einzelhandelsgeschäfte und laden zu ausgiebigen Shoppingtouren ein. Ein breites Angebot an Grund- und Fachschulen in unmittelbarer Nähe runden die urbane Infrastruktur ab und sorgen mit den zahlreichen Grünflächen für eine hohe Lebensqualität. "
        title="Börnestraße! Eilbek

          "
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="September 2021" title="Laufzeitbeginn " />
        <W50_h1SW
          Text="300.000
        "
          title="Anzahl Token"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
            April 2023"
          title="Nächste Ausschüttung"
        />
        <W50_h1SW Text="August 2036" title="Progn. Laufzeitende" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
