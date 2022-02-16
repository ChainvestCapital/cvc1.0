import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Zeitnahe Fertigstellung (Q2)"
          title="Highlight 1
"
        />
        <W50_h1SW
          Text="Lukrativer Einkaufspreis"
          title="Highlight 2
"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="Renommierter Projektentwickler"
          title="Highlight 3
"
        />
        <W50_h1SW
          Text="Sehr gefragte Wohngegend"
          title="Highlight 4
"
        />
      </div>
      <W100_hx
        Text="Heinersdorf bietet unzählige Bildungs-, Einkaufs- und Freizeitmöglichkeiten. In unmittelbarer Nähe befinden sich die Weißensee Kunsthochschule (850 m), das Sommerbad Pankow (2,9 km) und das Strandbad Orankesee (4,9 km). Das Stadtbild zieht viele junge Menschen an, welche neben einer ruhigen Lage insbesondere die Nähe zum Stadtkern (4,9 km zum Alexanderplatz) suchen. Durch seine ausgezeichnete Infrastruktur und Zentrumsnähe ist eine positive Entwicklung des Viertels absehbar, einhergehend mit steigenden Mieten und Kaufpreisen. Die Gegend rund um das Objekt bildet durch den hohen Anteil an Kleingartenanlagen gleichzeitig ein grünes und ruhiges Stadtbild – eine nachgefragte Seltenheit in der urbanen Metropole Berlin."
        title="Prenzlauer Promenade! Heinersdorf
         "
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="Oktober 2021" title="Laufzeitbeginn " />
        <W50_h1SW
          Text="335.000
         "
          title="Anzahl Token"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="  April 2023" title="Nächste Ausschüttung" />
        <W50_h1SW Text="September 2036" title="Progn. Laufzeitende" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
