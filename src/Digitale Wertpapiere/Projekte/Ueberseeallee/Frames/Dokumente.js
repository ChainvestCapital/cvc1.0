import "./Dokumente.css";
import DOKUMENTE_WRAPPER_BOX from "../../../Components/Dokumente_Wrapper_Box ";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_GP_Wrapper">
        <div id="Dokumente_GP_Wrapper_R1">
          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_BIP.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Basisinformationsblatt "
              text="Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. Es handelt sich nicht
            um Werbematerial."
            />
          </a>

          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Kurzexpose.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Kurzexpose "
              text="Dieses Informationsblatt fasst die wesentlichen Informationen der Immobilie sowie des Investitionsprojekts zusammen."
            />
          </a>

          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Risisken.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Risiken "
              text="Mit dem Wertpapier und der Emittentin und einem etwaigen Garantiegeber verbundene Risiken."
            />
          </a>
        </div>
        <div id="Dokumente_GP_Wrapper_R2">
          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Schuldverschreibung.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Schuldverschreibungs-bedingungen "
              text="Schuldverschreibungsbedingungen
            für
            tokenisierte Schuldverschreibungen
            mit qualifiziertem Rangrücktritt
            
            ."
            />
          </a>
          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Verbraucherinformationen.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Verbraucher-informationen 
            "
              text="Verbraucherinformationen für den Fernabsatz der tokenisierten Schuldverschreibungen."
            />
          </a>

          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Markteinsch%C3%A4tzung.pdf
"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Marktwerteinschätzung
            "
              text=""
            />
          </a>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
