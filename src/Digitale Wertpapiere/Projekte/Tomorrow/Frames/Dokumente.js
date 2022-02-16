import "./Dokumente.css";
import DOKUMENTE_WRAPPER_BOX from "../../../Components/Dokumente_Wrapper_Box ";
function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_Wrapper">
        <a
          href="https://www.tomorrow.one/de-DE/rechtliche-dokumente/"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Anlagebroschüre"
            text="Ein Informationspapier, welches die Grundzüge des Token-Angebots und der Tomorrow GmbH darstellt und direkt durch diese ausgegeben wurde."
          />{" "}
        </a>
        <a
          href="https://www.tomorrow.one/de-DE/rechtliche-dokumente/"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Basisinformations-blatt"
            text="Durch die BaFin auf Vollständigkeit geprüfte am 17. Oktober 2020 veröffentlichtes BIB zur Ausgabe der Tomorrow Bank Token."
          />{" "}
        </a>
        <a
          href="https://www.tomorrow.one/de-DE/rechtliche-dokumente/"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Genussrechts-bedingungen"
            text="Von der Emittentin veröffentlichte Ausgabebedingungen der tokenisierten Genussrechte."
          />
        </a>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
