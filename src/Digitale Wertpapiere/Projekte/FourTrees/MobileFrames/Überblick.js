import "./Überblick.css";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";
import W50_h1 from "../../../MobileComponents/w50_h1";

function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="Boomende Nachfrage" title="Highlight 1" />
        <W50_h1SW Text="Erfahrener Projektentwickler " title="Highlight 2" />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="50,00 %
            "
          title="Abnahmequote"
        />
        <W50_h1SW
          Text="
100,0 %
"
          title="Vermietungsquote
"
        />
      </div>
      <W100_hx
        Text="Die Neubauwohnungen aus dem Projekt Four Trees! schaffen urbanen Lebensraum in erstklassiger Lage. Sie gehören zu einem dynamischen Neubauprojekt mitten im Prenzlauer Berg: Pandion 4Living. Inspiriert vom Selbstbewusstsein des charmanten Viertels entsteht hier Wohnraum im Flair des Prenzlauer Bergs: Jung, gradlinig und modern. Die insgesamt 273 Einheiten des Komplexes sind lichtdurchflutet, bieten großzügige Balkone oder Terrassen und setzen smarte Flächenkonzepte um, bei denen kein Quadratmeter verschenkt wird. Die Wohnungen verteilen sich im Rahmen einer Blockrandbebauung über 4 Straßen und 7 Stockwerke. Die Wohnungen des Projekts Four Trees! sind besonders für Kapitalanleger interessant. Die Größe der Wohneinheiten erstreckt sich von 37 bis 163 m² und verteilt sich auf 1 bis 4 Zimmer. Alle vier Eingänge und Lobbys des Komplexes erhalten durch individuelle Bepflanzungen einen eigenen, unverwechselbaren Charakter. Four Trees! verbindet kraftvolle Dynamik mit ästhetischer Funktionalität. "
        title="Four Trees! Prenzlauer Berg 
         "
      />
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="November 2020" title="Laufzeitbeginn " />
        <W50_h1SW
          Text="305.076
         "
          title="Anzahl Token"
        />
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
          April 2022"
          title="Nächste Ausschüttung"
        />
        <W50_h1SW Text="November 2035" title="Progn. Laufzeitende" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
