import React from "react";
import "./Dokumente.css";
import MDOKUMENTE_WRAPPER from "../../../MobileComponents/mDokumente_Wrapper";

function Mobile_Fix_Header(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_Dokuemnte_Wrapper">
        <a
          href="https://www.tomorrow.one/de-DE/rechtliche-dokumente/"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Anlagebroschüre"
            Beschreibung="Ein Informationspapier, welches die Grundzüge des Token-Angebots und der Tomorrow GmbH darstellt und direkt durch diese ausgegeben wurde."
          />
        </a>
        <a
          href="https://www.tomorrow.one/de-DE/rechtliche-dokumente/"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Basisinformationsblatt"
            Beschreibung="Am 17. Oktober 2020 veröffentlichtes Basisinformationsblatt zur Ausgabe der Tomorrow Bank Token, das durch die BaFin auf Vollständigkeit geprüft wurde."
          />
        </a>
        <a
          href="https://www.tomorrow.one/de-DE/rechtliche-dokumente/"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Genussrechtsbedingungen"
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
