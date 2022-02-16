import React from "react";
import "./Dokumente.css";
import MDOKUMENTE_WRAPPER from "../../../MobileComponents/mDokumente_Wrapper";

function Mobile_Fix_Header(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_Dokuemnte_Wrapper">
        {" "}
        <a
          href="https://www.bitbondsto.com/files/bitbond-sto-prospectus-de.pdf"
          target="_blank"
        >
          {" "}
          <MDOKUMENTE_WRAPPER
            title="Wertpapierprospekt"
            Beschreibung="Am 30.01.2019 veröffentlichter Wertpapierprospekt zur Ausgabe der BB1 Token, das durch die Bundesanstalt für Finanzdienstleitungsaufsicht (BaFin) auf Vollständigkeit geprüft wurde."
          />
        </a>
        <a
          href="https://www.bitbondsto.com/files/bitbond-sto-lightpaper.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Lightpaper"
            Beschreibung="Ein Informationspapier, welches die Grundzüge des Token-Angebots und der Bitbond GmbH darstellt und direkt durch diese ausgegeben wurde."
          />{" "}
        </a>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
