import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="           Nachhaltige Bauweise nach KfW55-Standard
           "
          title="Highlight 1
"
        />
        <W50_h1SW
          Text="Neubauwohnung für höchste Ansprüchen"
          title="Highlight 2"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW Text=" Attraktive Lage im Szeneviertel" title="Highlight 3" />
        <W50_h1SW
          Text="
          Renommierter Bauträger"
          title="Highlight 4"
        />
      </div>
      <W100_hx
        Text="Die Wohneinheit befindet sich auf dem Gelände des Alten Güterbahnhofs, einer der letzten verfügbaren Konversionsflächen des Stadtteils Ehrenfeld in Köln und ist Teil des zukunftsweisenden Quartierentwicklungsprojektes Ehrenfeld. Die jeweiligen Neubauprojekte werden von einer Vielzahl verschiedener Projektentwickler realisiert und sollen künftig hunderten Menschen einen neuen Lebensmittelpunkt bieten. Das künftige Quartier wird dabei Heimat von lokalen Arbeitnehmern und freischaffenden Künstlern der regionalen Szene. Ergänzt wird das Neubauprojekt durch die herausragende Lage innerhalb des Stadtteils. So sind Ärzte, Bildungseinrichtungen sowie Einkaufsmöglichkeiten des täglichen Bedarfs in direkter Nähe gelegen. Ergänzt wir die praktische Lage durch die gute Anbindung an den öffentlichen Personennahverkehr innerhalb der Rheinmetropole Köln sowie die Nähe zu dem an den Fernverkehr angeschlossenen Kölner Hauptbahnhof. 

       Die Wohneinheit ist eine praktisch und kompakt geschnittene 2-Zimmerwohnung, die den Anforderungen einer Stadt mit 286.734 Einpersonenhaushalten absolut gerecht wird. Der Wohn- und Essbereich ist zur Sonnenseite ausgerichtet, außerdem ist der Balkon zum begrünten und familienfreundlichen Innenhof gelegen. Die Wohnungsgröße richtet sich an die Zielgruppe Singles oder Paare, welche sich innerhalb der letzten Jahre vermehrt in dem Szeneviertel Ehrenfeld niedergelassen haben. "
        title="Cologne One! Ehrenfeld
       
                  "
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="Juli 2021" title="Laufzeitbeginn " />
        <W50_h1SW
          Text="264.105
         "
          title="Anzahl Token"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
            April 2024"
          title="Nächste Ausschüttung"
        />
        <W50_h1SW Text="Juli 2036" title="Progn. Laufzeitende" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
