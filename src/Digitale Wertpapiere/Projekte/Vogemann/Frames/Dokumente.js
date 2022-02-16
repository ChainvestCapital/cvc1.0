import "./Dokumente.css";
import DOKUMENTE_WRAPPER_BOX from "../../../Components/Dokumente_Wrapper_Box ";
function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_Wrapper">
        <a
          href="https://content.ive.one/investment/public/prospectus.pdf"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Wertpapierprospekt"
            text="Am 03.07.2020 veröffentlichter Wertpapierprospekt zur Ausgabe des „GST“ Token, das durch die Bundesanstalt für Finanzdienstleistungsaufsicht (Bafin) auf Vollständigkeit geprüft wurde."
          />{" "}
        </a>
        <a
          href="https://content.ive.one/investment/public/terms_token_sale.pdf"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Terms of Token Sale"
            text="Bedingungen, die für die Durchführung des Security Token Offerings der Green Ship Token durch die Emittentin veröffentlicht wurde."
          />{" "}
        </a>
        <a
          href="https://content.ive.one/investment/public/terms_token.pdf"
          target="_blank"
        >
          <DOKUMENTE_WRAPPER_BOX
            title="Token Terms"
            text="Von der Emittentin veröffentlichte Ausgabebedingungen der tokenisierten Genussrechte."
          />{" "}
        </a>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
