import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Erfahrener Projektentwickler
            "
          title="Highlight 1"
        />
        <W50_h1SW
          Text="Einzigartiges Nachhaltigkeits-konzept "
          title="Highlight 2"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="KFW55-Standard"
          title="Highlight 3
"
        />
        <W50_h1SW
          Text="
          Grüner Stadtteil
          "
          title="Highlight 4
          "
        />
      </div>
      <W100_hx
        Text="Die zwei Wohneinheiten sind Teil des größten Stadtentwicklungsprojekts östlich der Alster und bestechen durch den Nachhaltigkeitsgedanken sowie die exzellente Lage innerhalb des Quartiers Jenfelder Au. Beide Wohnungen verfügen insgesamt über eine Wohnfläche von rund 167m². Wohnung 27 überzeugt mit intelligenten Schnitten und bietet die perfekte und aktuell sehr gesuchte Wohnungsgröße für Singles oder Paare. Wohnung 49 erhebt sich als Maisonette über das zweite sowie das dritte Obergeschoss und beeindruckt mit großzügiger Flächengestaltungen, welche sich Ideal für Paare und Familien eignet. Ein besonderes Highlight ist der nach Süden ausgerichtete Balkon im obersten Geschoss. 

       Jede Wohnung hat einen zugehörigen Stellplatz in der inkludierten Tiefgarage. Der angeschlossene PKW-Stellplatz ergänzt dabei die an das Quartier angrenzende Haltestellen des ÖPNV. Dadurch entsteht der perfekte Mobilitätsmix für das urbane aber ruhiggelegene Leben. 
       
       Das Projekt Lakeside! liegt in bester Lage innerhalb des Quartiers Jenfelder Au und damit in Sichtweite unseres bisher erfolgreichsten Projektes JA!, welches bis heute eine Wertentwicklung von über 30 % Wert erzielen konnte. Die gute Vergleichbarkeit bietet uns optimale Vorteile bei der zukünftigen Bewirtschaftung. Davon abgesehen begeistert Lakeside durch die phänomenale Lage und die einzigartige Aussicht über das neue Vorzeigequartier. "
        title="Lakeside! Jenfeld 
              "
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="Juni 2021" title="Laufzeitbeginn " />
        <W50_h1SW
          Text="425.710
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
        <W50_h1SW Text="Juni 2036" title="Progn. Laufzeitende" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
