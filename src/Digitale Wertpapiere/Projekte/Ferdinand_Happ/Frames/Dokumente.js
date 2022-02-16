import "./Dokumente.css";
import DOKUMENTE_WRAPPER_BOX from "../../../Components/Dokumente_Wrapper_Box ";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_GP_Wrapper">
        <div id="Dokumente_GP_Wrapper_R1">
          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_Basisinformationsblatt+(4).pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Basisinformationsblatt "
              text="Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. Es handelt sich nicht
            um Werbematerial."
            />
          </a>

          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_Kurzexpose_Ferdinand-Happ-Strasse+(1).pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Kurzexpose "
              text="Dieses Informationsblatt fasst die wesentlichen Informationen der Immobilie sowie des Investitionsprojekts zusammen."
            />
          </a>

          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_Risiken+(1).pdf"
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
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_Schuldverschreibungsbedingungen+(3).pdf"
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
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_Verbraucherinformationen+(3).pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Verbraucher-informationen 
            "
              text="Verbraucherinformationen für den Fernabsatz der tokenisierten Schuldverschreibungen."
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
