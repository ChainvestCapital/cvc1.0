import React from "react";
import "./TokenSale.css";
import { Link } from "react-router-dom";
import W50_h1 from "../../../MobileComponents/w50_h1";
import Mobile_4er_tablr from "../../../MobileComponents/Mobile_4er_tablr";
import W100_hx from "../../../MobileComponents/w100_hx";

function Mobile_Fix_Header(props) {
  return props.trigger ? (
    <div>
      <Mobile_4er_tablr
        Text1={props.Rechtliche_Bezeichnung}
        Title1="Rechtliche Bezeichnug"
        Text2={props.Zahlungsmoeglichkeiten}
        Title2="Zahlungen"
        Text3={props.Emissionszeitraum}
        Title3="Emissionszeitraum"
        Text4={props.Token_Ticker}
        Title4="Token Ticker"
      />
      <div id="Mobile_2_50_Row">
        <W50_h1 Text={props.Blockchain} title="Blockchain" />
        <W50_h1 Text="25.000 €" title="Max. Investition" />
      </div>
      <W100_hx
        Text="Anleger können die tokenbasierten Genussrechte unter Einhaltung einer Kündigungsfrist von 3 Monaten innerhalb der Laufzeit ab dem 30.09.2025 ordentlich kündigen."
        title="Kündigungsrechte"
      />
      <W100_hx
        title="Erweiterung des Angebots"
        Text="Die Emittentin ist berechtigt, das Emissionsvolumen von bis zu 2 Mio. Stück tokenbasierten Genussrechten um bis zu 6 Mio. Stück auf bis zu 8 Mio. Stück tokenbasierte Genussrechte im Gesamtpreis von bis zu 8 Mio. Euro zu erhöhen."
      />
      <div id="Mobile_2_50_Row">
        <W50_h1 Text="Möglich" title="Kündigung" />
        <W50_h1 Text="31.10.2021" title="Lock Up Frist" />
      </div>
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
