import React from "react";
import "./Dokumente.css";
import MDOKUMENTE_WRAPPER from "../../../MobileComponents/mDokumente_Wrapper";

function Mobile_Fix_Header(props) {
  return props.trigger ? (
    <div id="Mobile_Dokuemnte_Wrapper">
      {" "}
      <div>
        {" "}
        <a
          href="https://content.ive.one/investment/public/prospectus.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Wertpapierprospekt"
            Beschreibung="Am 03.07.2020 veröffentlichter Wertpapierprospekt zur Ausgabe des „GST“ Token, das durch die Bundesanstalt für Finanzdienstleistungsaufsicht (Bafin) auf Vollständigkeit geprüft wurde."
          />{" "}
        </a>
        <a
          href="https://content.ive.one/investment/public/terms_token_sale.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Terms of Token Sale"
            Beschreibung="Bedingungen, die für die Durchführung des Security Token Offerings der Green Ship Token durch die Emittentin veröffentlicht wurde."
          />
        </a>{" "}
        <a
          href="https://content.ive.one/investment/public/terms_token.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Token Terms"
            Beschreibung="Von der Emittentin veröffentlichte Ausgabebedingungen der tokenisierten Genussrechte."
          />
        </a>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
