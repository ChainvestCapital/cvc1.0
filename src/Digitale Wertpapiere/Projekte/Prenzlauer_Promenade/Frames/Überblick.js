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
          <W20P Text="Zeitnahe Fertigstellung (Q2 2022)" title="Highlight 1" />
          <W20P Text="Lukrativer Einkaufspreis" title="Highlight 2" />
          <W20P
            Text="
            Renommierter Projektentwickler"
            title="Highlight 3"
          />
          <W20P
            Text="4
            Sehr gefragte Wohngegend"
            title="Highlight 4"
          />
        </div>
        <div id="margin_top_2vh"></div>
        <W100_HX
          Text="Heinersdorf bietet unzählige Bildungs-, Einkaufs- und Freizeitmöglichkeiten. In unmittelbarer Nähe befinden sich die Weißensee Kunsthochschule (850 m), das Sommerbad Pankow (2,9 km) und das Strandbad Orankesee (4,9 km). Das Stadtbild zieht viele junge Menschen an, welche neben einer ruhigen Lage insbesondere die Nähe zum Stadtkern (4,9 km zum Alexanderplatz) suchen. Durch seine ausgezeichnete Infrastruktur und Zentrumsnähe ist eine positive Entwicklung des Viertels absehbar, einhergehend mit steigenden Mieten und Kaufpreisen. Die Gegend rund um das Objekt bildet durch den hohen Anteil an Kleingartenanlagen gleichzeitig ein grünes und ruhiges Stadtbild – eine nachgefragte Seltenheit in der urbanen Metropole Berlin."
          title="Prenzlauer Promenade! Heinersdorf
           "
        />

        <div id="GP_Überblick_UntereRow">
          <W20P Text="Oktober 2021" title="Laufzeitbeginn " />
          <W20P
            Text="335.000
            "
            title="Anzahl Token"
          />
          <W20P
            Text="
            April 2023"
            title="Nächste Ausschüttung"
          />
          <W20P Text="September 2036" title="Progn. Laufzeitende" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
