import "./Dokumente.css";
import DOKUMENTE_WRAPPER_BOX from "../../../Components/Dokumente_Wrapper_Box ";
function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_Wrapper">
        <a
          href="https://www.bitbondsto.com/files/bitbond-sto-prospectus-de.pdf"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Wertpapierprospekt"
            text="Am 30.01.2019 veröffentlichter Wertpapierprospekt zur Ausgabe der BB1 Token, das durch die BaFin auf Vollständigkeit geprüft wurde."
          />
        </a>

        <a
          href="https://www.bitbondsto.com/files/bitbond-sto-lightpaper.pdf"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Lightpaper"
            text="Ein Informationspapier, welches die Grundzüge des Token-Angebots und der Bitbond GmbH darstellt und direkt durch diese ausgegeben wurde."
          />
        </a>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
