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
        Text="Die Bitbond GmbH ist alleinige Gesellschafterin (100%) der Emittentin. Die Bitbond GmbH ist somit in der Lage, in der Gesellschafterversammlung der Emittentin sämtliche in die Zuständigkeit der Gesellschafterversammlung fallenden Beschlüsse zu fassen und der Geschäftsführung Weisungen durch Gesellschafterbeschluss zu erteilen. Die Bitbond GmbH kann damit bedeutenden Einfluss auf die Emittentin ausüben."
        title="Verbindung zur Emittentin
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
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
