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
          <W20P
            Text="Marktwert* liegt 31,7% über dem Einkaufspreis"
            title="Highlight 1"
          />
          <W20P
            Text="Neubauvorhaben in einem der exklusivsten Stadtteile Europas"
            title="Highlight 2"
          />
          <W20P
            Text="
            Hochwertige Bauweise"
            title="Highlight 3"
          />
          <W20P
            Text="4
Sorgenfreies Community-Konzept"
            title="Highlight 4"
          />
        </div>
        <div id="margin_top_2vh"></div>
        <W100_HX
          Text="In einem der exklusivsten Stadtviertel Hamburgs entsteht in bester Lage eines der spannendsten Bauprojekte der nächsten Jahre: Das Überseequartier. 

         Das Projekt Überseeallee! Hafencity ist nicht nur aufgrund der zentralen Lage im Überseequartier mit der Nähe zur Elbe oder Elbphilharmonie (ca. 900m) attraktiv. Auch der Bau ist äußert imposant und markant: Mit all den Fenstern, Balkonen, den absteigenden, großen Terrassen und einer schmalen Silhouette erinnert es an ein Kreuzfahrtschiff. Das 25.900 qm große Quartier, das zu den umfassendsten Bauprojekten in ganz Europa zählt, bietet neben Restaurants, Kunst- & Kulturstätten sowie Grünflächen auch die Nähe zum 2023 entstehenden Überseequartier Westfield, einem Einkaufszentrum mit über 200 Shops verteilt auf 80.000 qm. Über der Gewerblichen Fläche mit 4.900 qm, thronen auf 21.000 qm Wohnfläche 306 exklusive Wohnungen, die sich in Ein-, Zwei-, Drei- und Vier-Zimmer Apartments aufgliedern."
          title="Überseeallee! HafenCity - Kosmopolitisch, offen und urban"
        />

        <div id="GP_Überblick_UntereRow">
          <W20P Text="Dez. 2021" title="Laufzeitbeginn " />
          <W20P
            Text="700.500
            "
            title="Anzahl Token"
          />
          <W20P
            Text="
            Apr. 2025"
            title="Nächste Ausschüttung"
          />
          <W20P Text="Jan. 2037" title="Progn. Laufzeitende" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
