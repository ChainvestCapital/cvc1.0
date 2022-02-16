import "./Überblick.css";

import W20P from "../../../Components/HighlightBox";
import W100_H1 from "../../../Components/W100_h1";
import W100_H2 from "../../../Components/W100_h2";
import W50_h1 from "../../../Components/W50_h1";
import W100_HX from "../../../Components/W100_HX";

function Überblick(props) {
  return props.trigger ? (
    <div>
      {" "}
      <div id="Überblick_FHS_Wrapper">
        <div id="GP_Überblick_FirstRow">
          <W20P Text="Fertigstellung (Ende 2021)" title="Highlight 1" />
          <W20P Text="Weniger als 4 km zum Stadtkern" title="Highlight 2" />
          <W20P
            Text="
            Hochwertige Bauweise
            "
            title="Highlight 3"
          />
          <W20P
            Text="
            Ruhige Straßenlage"
            title="Highlight 4"
          />
        </div>
        <div id="margin_top_2vh"></div>
        <W100_HX
          Text="Die Wohneinheit befindet sich in gefragter Lage im zentral gelegenen Eilbek. In einer ruhig gelegenen Seitenstraße der Wandsbek Chaussee bietet das Projekt Börnestraße! die perfekte Mischung aus Erholung und urbanem Lebensgefühl. Die U- und S-Bahnhaltestelle Wandsbeker Chaussee ist nur wenige Fußminuten entfernt und bietet komfortablen Anschluss an das gesamte innerstädtische Netz des öffentlichen Nahverkehrs. In direkter Umgebung finden sich zudem sämtliche Einkaufsmöglichkeiten des täglichen Bedarfs, Schulen und Apotheken. Die nahegelegenen Einkaufszentren W1 Hamburg-Wandsbek und Quaree Wandsbek, beherbergen diverse Fach- und Einzelhandelsgeschäfte und laden zu ausgiebigen Shoppingtouren ein. Ein breites Angebot an Grund- und Fachschulen in unmittelbarer Nähe runden die urbane Infrastruktur ab und sorgen mit den zahlreichen Grünflächen für eine hohe Lebensqualität. "
          title="Börnestraße! Eilbek

           "
        />

        <div id="GP_Überblick_UntereRow">
          <W20P Text="September 2021" title="Laufzeitbeginn " />
          <W20P
            Text="300.000
            "
            title="Anzahl Token"
          />
          <W20P
            Text="
            April 2023"
            title="Nächste Ausschüttung"
          />
          <W20P Text="August 2036" title="Progn. Laufzeitende" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
