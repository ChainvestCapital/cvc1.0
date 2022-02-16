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
          <W20P Text="Boomende Nachfrage" title="Highlight 1" />
          <W20P Text="Erfahrener Projektentwickler " title="Highlight 2" />
          <W20P
            Text="
            50,00 %
            "
            title="Abnahmequote"
          />
          <W20P
            Text="
            100,0 %
            "
            title="Vermietungsquote
            "
          />
        </div>
        <div id="margin_top_2vh"></div>
        <W100_HX
          Text="Die Neubauwohnungen aus dem Projekt Four Trees! schaffen urbanen Lebensraum in erstklassiger Lage. Sie gehören zu einem dynamischen Neubauprojekt mitten im Prenzlauer Berg: Pandion 4Living. Inspiriert vom Selbstbewusstsein des charmanten Viertels entsteht hier Wohnraum im Flair des Prenzlauer Bergs: Jung, gradlinig und modern. Die insgesamt 273 Einheiten des Komplexes sind lichtdurchflutet, bieten großzügige Balkone oder Terrassen und setzen smarte Flächenkonzepte um, bei denen kein Quadratmeter verschenkt wird. Die Wohnungen verteilen sich im Rahmen einer Blockrandbebauung über 4 Straßen und 7 Stockwerke. Die Wohnungen des Projekts Four Trees! sind besonders für Kapitalanleger interessant. Die Größe der Wohneinheiten erstreckt sich von 37 bis 163 m² und verteilt sich auf 1 bis 4 Zimmer. Alle vier Eingänge und Lobbys des Komplexes erhalten durch individuelle Bepflanzungen einen eigenen, unverwechselbaren Charakter. Four Trees! verbindet kraftvolle Dynamik mit ästhetischer Funktionalität. "
          title="Four Trees! Prenzlauer Berg 
       "
        />

        <div id="GP_Überblick_UntereRow">
          <W20P Text="November 2020" title="Laufzeitbeginn " />
          <W20P
            Text="305.076
            "
            title="Anzahl Token"
          />
          <W20P
            Text="
            April 2022"
            title="Nächste Ausschüttung"
          />
          <W20P Text="November 2035" title="Progn. Laufzeitende" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
