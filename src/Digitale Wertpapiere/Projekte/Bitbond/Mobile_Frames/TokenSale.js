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
        Text2="EUR, BTC, ETH"
        Title2="Zahlungen"
        Text3={props.Emissionszeitraum}
        Title3="Emissionszeitraum"
        Text4={props.Token_Ticker}
        Title4="Token Ticker"
      />
      <div id="Mobile_2_50_Row">
        <W50_h1 Text={props.Blockchain} title="Blockchain" />
        <W50_h1 Text={props.ITIN} title="ITIN" />
      </div>
      <W100_hx
        title="Tracking"
        Text="StellarExpert | BB1 by [Bitbond]GD5J6HLF5666X4AZLTFTXLY4 6J5SW7EXRKBLEYPJP33S33MXZGV6CWFN"
      />
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
