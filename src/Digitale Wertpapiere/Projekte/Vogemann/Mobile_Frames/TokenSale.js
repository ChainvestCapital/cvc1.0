import React from "react";
import "./TokenSale.css";
import W50_H1 from "../../../MobileComponents/w50_h1";
import MOBILE_4_TABLE from "../../../MobileComponents/Mobile_4er_tablr";
import W100_HX from "../../../MobileComponents/w100_hx";

function Mobile_Fix_Header(props) {
  return props.trigger ? (
    <div>
      <MOBILE_4_TABLE
        Text1={props.Rechtliche_Bezeichnung}
        Title1="Rechtliche Bezeichnug"
        Text2={props.Zahlungsmoeglichkeiten}
        Title2="Zahlungs-möglichkeiten"
        Text3={props.Emissionszeitraum}
        Title3="Emissionszeitraum"
        Text4={props.Token_Ticker}
        Title4="Token Ticker"
      />
      <div id="Mobile_2_50_Row">
        <W50_H1 Text={props.Blockchain} title="Blockchain" />
        <W50_H1 Text={props.ISIN} title="ISIN" />
      </div>
      <W100_HX
        title="Tracking"
        Text="StellarExpert | BB1 by [Bitbond]GD5J6HLF5666X4AZLTFTXLY4 6J5SW7EXRKBLEYPJP33S33MXZGV6CWFN"
      />
      <div id="Mobile_2_50_Row">
        <W50_H1 Text="2%" title="Agio" />
        <W50_H1 Text="USD" title="Währung" />
      </div>
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
