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
        Text="Der Emissionserlös nach Abzug der emissionsbedingten Kosten in Höhe von voraussichtlich 45 Mio. USD wird von der Emittentin für die Finanzierung ihrer allgemeinen und satzungsgemäßen Geschäftstätigkeit, das heißt den Aufbau eines Portfolios in Handysize-, Supra- und Ultramax-Massengutschiffe, die nicht älter als 10 Jahre alt sein dürfen und die überdurchschnittlich niedrigen Verbrauches- und Emissionswerten aufweisen, verwendet."
        title="Mittelverwendung"
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

      <div id="Individuell_Unt_w50">
        <div id="Individuell_Unt_w50_Row">
          <h4 id="Individuell_Unt_w50_Row_h4">
            Durchschnittsalter der Schiffe
          </h4>
          <h4 id="Individuell_Unt_w50_Row_h4">8</h4>
        </div>

        <div id="Individuell_Unt_w50_Row">
          <h4 id="Individuell_Unt_w50_Row_h4">Eigene Schiffe im Einsatz</h4>
          <h4 id="Individuell_Unt_w50_Row_h4">14</h4>
        </div>

        <div id="Individuell_Unt_w50_Row">
          <h4 id="Individuell_Unt_w50_Row_h4">Handysize Bulker im Neubau</h4>
          <h4 id="Individuell_Unt_w50_Row_h4">8</h4>
        </div>
        <h3 id="Individuell_Unt_w50_h3">Flotte</h3>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
