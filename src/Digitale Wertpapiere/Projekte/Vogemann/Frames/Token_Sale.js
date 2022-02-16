import "./Token_Sale.css";
import W25_H1 from "../../../Components/w25_h1";

import W50_H1 from "../../../Components/W50_h1";

function Token_Sale(props) {
  return props.trigger ? (
    <div>
      <div id="Token_Sale_Wrapper">
        <div id="Token_Sale_Wrapper_Top">
          <div id="Token_Sale_Wrapper_Grid">
            <W25_H1
              title="Rechtliche Bezeichnung"
              Text={props.Rechtliche_Bezeichnung}
            />
            <W25_H1
              title="Zahlungsmöglichkeiten"
              Text={props.Zahlungsmoeglichkeiten}
            />
            <W25_H1 title="Emissionszeitraum" Text={props.Emissionszeitraum} />
            <W25_H1 title="Token Ticker" Text={props.Token_Ticker} />
          </div>{" "}
          <div id="Token_Sale_Wrapper_Top_Vog_right">
            <div id="Token_Sale_Wrapper_Top_Vog_right_TOP">
              <W25_H1 Text="USD" title="Auszahlungswährung" />
              <W25_H1 Text="2% auf Kaufpreis" title="Agio" />
            </div>
            <div id="Token_Sale_Wrapper_Top_Vog_right_unt">
              <W50_H1
                Text="Die tokenisierten Genussrechte werden nicht an einem geregelten Markt oder MTF gehandelt und ein Antrag auf Zulassung ist nicht geplant."
                title="Handelbarkeit"
              />
            </div>
          </div>
        </div>
        <div id="Token_Sale_Wrapper_Bottom">
          <W25_H1 Text={props.ISIN} title="ISIN" />
          <W25_H1 Text={props.Blockchain} title="Blockchain" />
          <W50_H1
            Text="StellarExpert | BB1 by [Bitbond]GD5J6HLF5666X4AZLTFTXLY4 6J5SW7EXRKBLEYPJP33S33MXZGV6CWFN"
            title="Tracking"
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Token_Sale;
