import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Marktwert* liegt 31,7% über dem Einkaufspreis"
          title="Highlight 1
"
        />
        <W50_h1SW
          Text="Sorgenfreies Community-Konzept"
          title="Highlight 2
"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Hochwertige Bauweise"
          title="Highlight 3
"
        />
        <W50_h1SW
          Text="Vorhaben in  exklusiven Stadtteil "
          title="Highlight 4
"
        />
      </div>
      <W100_hx
        Text="In einem der exklusivsten Stadtviertel Hamburgs entsteht in bester Lage eines der spannendsten Bauprojekte der nächsten Jahre: Das Überseequartier. 

 Das Projekt Überseeallee! Hafencity ist nicht nur aufgrund der zentralen Lage im Überseequartier mit der Nähe zur Elbe oder Elbphilharmonie (ca. 900m) attraktiv. Auch der Bau ist äußert imposant und markant: Mit all den Fenstern, Balkonen, den absteigenden, großen Terrassen und einer schmalen Silhouette erinnert es an ein Kreuzfahrtschiff. Das 25.900 qm große Quartier, das zu den umfassendsten Bauprojekten in ganz Europa zählt, bietet neben Restaurants, Kunst- & Kulturstätten sowie Grünflächen auch die Nähe zum 2023 entstehenden Überseequartier Westfield, einem Einkaufszentrum mit über 200 Shops verteilt auf 80.000 qm. Über der Gewerblichen Fläche mit 4.900 qm, thronen auf 21.000 qm Wohnfläche 306 exklusive Wohnungen, die sich in Ein-, Zwei-, Drei- und Vier-Zimmer Apartments aufgliedern."
        title="Überseeallee! HafenCity - Kosmopolitisch, offen und urban"
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="Dez. 2021" title="Laufzeitbeginn " />
        <W50_h1SW
          Text="700.500
         "
          title="Anzahl Token"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
           Apr. 2025"
          title="Nächste Ausschüttung"
        />
        <W50_h1SW Text="Jan. 2037" title="Progn. Laufzeitende" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
