import React from "react";
import "./Unternehmen.css";
import { Link } from "react-router-dom";
import W100_hx from "../../../MobileComponents/w100_hx";
import W50_h1 from "../../../MobileComponents/w50_h1";
import Firmen_Konstrukt_BB from "../../../../assets/images/Firmenkonstrukt_Bitbond.png";

function Mobile_Fix_Header(props) {
  return props.trigger ? (
    <div>
      <W100_hx Text={props.Geschaeftstaetigkeit} title="Geschäftstätigkeit" />
      <W100_hx
        Text="Die Summe aller Crowd-Anteile stellen zusammen mit dem im Handelsregister eingetragenen Stammkapital der Emittentin (abzüglich der Nennbeträge etwaiger von der Emittentin gehaltener eigenen Geschäftsanteile) und allen von der Emittentin ausgegebenen virtuellen Optionen,virtuellen Geschäftsanteilen oder ähnlichen Rechten, die die Emittentin unter Emissions- und Incentivierungsprogrammen ausgegeben hat, das gewinnberechtigte Kapital der Emittentin dar. Durch die Genussrechte wird keine gesellschaftsrechtliche Beteiligung an der Emittentin begründet."
        title="Anteilansprüche
"
      />
      <div id="Mobile_2_50_Row">
        <W50_h1 Text={props.FirmenName} title="Firmenname" />
        <W50_h1 Text={props.Ort} title="Ort" />
      </div>
      <div id="Mobile_2_50_Row">
        <W50_h1 Text={props.Rechtsform} title="Rechtsform" />
        <W50_h1 Text={props.Gruendung} title="Gründung" />
      </div>
      <div id="Individuell_Unt_w50">
        <img src={Firmen_Konstrukt_BB} id="Individuell_Unt_w50_Img" />
        <h3 id="Individuell_Unt_w50_h3">Firmenkosntrukt</h3>
      </div>

      <div id="Mobile_2_50_Row">
        <W50_h1 Text="50.000.000 €" title="Bewertung" />
        <W50_h1 Text="40.000+" title="Kunden" />
      </div>
      <div id="Mobile_2_50_Row">
        <W50_h1 Text="40+" title="Mitarbeiter" />
        <W50_h1 Text="70.000.000+ €" title="Kundeneinlagen" />
      </div>
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
